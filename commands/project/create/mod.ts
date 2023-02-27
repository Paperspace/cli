import { command } from "../../../zcli.ts";
import { projects } from "../../../api/projects.ts";
import { args, z } from "../../../zcli.ts";
import { input } from "../../../prompts/input.ts";
import { invariant } from "../../../lib/invariant.ts";

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
  // We use command metadata in the `persistentPreRun` function to check if a
  // command requires an API key. If it does, we'll check to see if one is
  // set. If not, we'll throw an error.
  meta: {
    requireApiKey: true,
  },
}).run(async ({ args }) => {
  let [name] = args;

  if (!name) {
    name = await input("Project name:");
    invariant(name, "You must provide a name for the project.");
  }

  const result = await projects.create({ name });
  invariant(result.ok, result);
  console.log("Created!", result.data);
});
