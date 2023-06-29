import { command } from "../../../zcli.ts";
import { projects } from "../../../api/projects.ts";
import { args, flags, z } from "../../../zcli.ts";
import { input } from "../../../prompts/input.ts";
import { asserts } from "../../../lib/asserts.ts";
import { loading } from "../../../lib/loading.ts";
import { dataTable } from "../../../lib/data-table.ts";
import { pickJson } from "../../../lib/pick-json.ts";
import * as psFlags from "../../../flags.ts";
import { defaultFields } from "../mod.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [];

export const create = command("create", {
  short: "Create a new project",
  long: `
    Create a new project. This command will prompt you for a name if you don't
    provide one.
  `,
  commands: subCommands,

  args: args({ short: "Create a project with these properties." }).tuple([
    z.string().min(1).max(120),
  ]).optional(),

  flags: flags({
    fields: psFlags.fields,
  }),

  // We use command metadata in the `persistentPreRun` function to check if a
  // command requires an API key. If it does, we'll check to see if one is
  // set. If not, we'll throw an error.
  meta: {
    requireApiKey: true,
  },
}).run(async function* ({ args, flags }) {
  let name: string | undefined = args[0];

  if (!name) {
    name = await input("Project name:");
    asserts(name, "You must provide a name for the project.");
  }

  const result = await loading(projects.create({ name }), {
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
