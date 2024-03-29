import { projects } from "../../../api/projects.ts";
import { asserts } from "../../../lib/asserts.ts";
import { args, command, flag, flags, z } from "../../../zcli.ts";
import { select } from "../../../prompts/select.ts";
import { dataTable } from "../../../lib/data-table.ts";
import { pickJson } from "../../../lib/pick-json.ts";
import { loading } from "../../../lib/loading.ts";
import { defaultFields } from "../mod.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [];

export const get = command("get", {
  short: "Get a project.",
  long: `
    Get a project by its ID. If you don't provide an ID, this command will
    prompt you for one based on the projects you have access to.
  `,
  commands: subCommands,
  args: args().tuple([z.string().describe("The project ID to get.")])
    .optional(),
  flags: flags({
    fields: flag({
      short: "The fields to include in the response.",
      aliases: ["F"],
    }).array(z.string()).optional(),
  }),
  // We use command metadata in the `persistentPreRun` function to check if a
  // command requires an API key. If it does, we'll check to see if one is
  // set. If not, we'll throw an error.
  meta: {
    requireApiKey: true,
  },
}).run(async function* ({ args, flags }) {
  let [id] = args;

  if (!id) {
    const existingProjects = await loading(projects.list({ limit: 50 }));
    asserts(existingProjects.ok, existingProjects);

    const selected = await select(
      "Select a project:",
      existingProjects.data.items,
      {
        filter(input, option) {
          return option.name.toLowerCase().startsWith(input);
        },
        renderOption(option, isSelected) {
          return `${isSelected ? ">" : " "} ${option.name}`;
        },
      },
    );

    asserts(selected, "No project selected.");
    id = selected.id;
  }

  const result = await loading(projects.get({ id }), {
    enabled: !flags.json,
  });

  asserts(result.ok, result);

  if (!flags.json) {
    for await (
      const line of dataTable([result.data], flags.fields ?? defaultFields)
    ) {
      yield line;
    }
  } else {
    yield pickJson(result.data, flags.fields);
  }
});
