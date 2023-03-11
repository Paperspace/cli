import { projectSecrets } from "../../../api/projects.ts";
import { teamSecrets } from "../../../api/teams.ts";
import { config } from "../../../config.ts";
import { asserts } from "../../../lib/asserts.ts";
import { findProject } from "../../../lib/find-project.ts";
import { loading } from "../../../lib/loading.ts";
import { input } from "../../../prompts/input.ts";
import { confirm } from "../../../prompts/confirm.ts";
import { secret } from "../../../prompts/secret.ts";
import { args, command, flag, flags, fmt, z } from "../../../zcli.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [];

export const create = command("create", {
  short: "",
  commands: subCommands,
  args: args().tuple([
    z.string().describe("The name of the secret"),
    z.string().describe("The value of the secret"),
  ]).optional(),
  flags: flags({
    "project-id": flag({
      aliases: ["p"],
      short: "The ID of the project to create the secret in",
      long: `
        The ID of the project to create the secret in. If not specified, the
        secret will be created in the project linked to your current working
        directory. If you are not in a project directory, you will be prompted
        to select a project.
      `,
    }).ostring(),
    global: flag({
      aliases: ["g"],
      short: "Create a secret that is available to the entire team",
      long: `
        Create a secret that is available to the entire team you are
        currently logged into. By default, secrets are only available to
        a project.
      `,
    }).oboolean(),
    cwd: flag({
      short: "The directory to create the secret in",
    }).ostring(),
  }),
  // We use command metadata in the `persistentPreRun` function to check if a
  // command requires an API key. If it does, we'll check to see if one is
  // set. If not, we'll throw an error.
  meta: {
    requireApiKey: true,
  },
}).run(
  async function* ({ args, flags }) {
    let [name, value] = args;

    if (!name) {
      name = await input("Name:", {
        filter: (v) => !!v.sequence.match(/[a-zA-Z0-9_]/),
      });
      asserts(name, "A secret name is required");
    }

    const parsedName = secretSchema.shape.name.safeParse(name);
    asserts(
      parsedName.success,
      "error" in parsedName ? parsedName.error : "",
    );

    if (!value) {
      value = await secret("Value:");
      asserts(value, "A secret value is required");
    }

    const parsedValue = secretSchema.shape.value.safeParse(name);
    asserts(
      parsedValue.success,
      "error" in parsedValue ? parsedValue.error : "",
    );

    if (flags.global) {
      const team = await config.get("team");
      asserts(
        team,
        "You must be logged into a team to create a secret.",
      );

      if (!flags.json) {
        yield fmt.colors.yellow(
          `This secret will be available to all resources in the team.`,
        );
        asserts(
          await confirm(
            `Are you sure you want to create a global secret in team "${team}"?`,
          ),
          "Aborted",
        );
      }

      const response = await loading(
        teamSecrets.create({ handle: team, name, value }),
      );

      asserts(response.ok, response);
      const result = response.data;

      if (flags.json) {
        yield JSON.stringify(result, null, 2);
      } else {
        yield `Created secret "${name}" in team "${team}"`;
      }
    } else {
      const project = await findProject({
        handle: flags["project-id"],
        cwd: flags.cwd,
        quiet: flags.json,
      });
      const response = await loading(
        projectSecrets.create({ handle: project.handle, name, value }),
      );

      asserts(response.ok, response);
      const result = response.data;

      if (flags.json) {
        yield JSON.stringify(result, null, 2);
      } else {
        yield `Created secret "${name}" in project "${project.name}"`;
      }
    }
  },
);

const secretSchema = z.object({
  name: z.string()
    .min(1, "Invalid secret name. Must be at least 1 character.")
    .max(128, "Invalid secret name. Must be less than 128 characters.")
    .regex(
      /^[a-zA-Z][a-zA-Z0-9_]*$/,
      'Invalid secret name. Must start with a letter and only contain letters, numbers, and underscores ("_").',
    )
    .describe(`The name of the secret, e.g. "DB_PASSWORD".`),
  value: z.string().min(
    1,
    "Invalid secret value. Must be at least 1 character.",
  )
    .max(8192, "Invalid secret value. Must be less than 8192 characters."),
});
