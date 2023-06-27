import { command } from "../../../zcli.ts";
import { runUp, upFlags } from "../../up/mod.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [];

export const up = command("up", {
  short: "Create or update a deployment",
  long: ({ root }) => `
    This will create a new deployment for your app or update it if it already exists. 
    You can optionally specify a path to a config file. If no config file is specified, 
    the default config file paths will be tried.

    Create a new deployment for the app in the current directory.
    \`\`\`
    $ ${root.name} deployment create
    \`\`\`

    Create a new deployment using a config file.
    \`\`\`
    $ ${root.name} deployment create -c paperspace.json
    \`\`\`

    Create a new deployment for an app in a different directory.
    \`\`\`
    $ ${root.name} deployment create --cwd ../my-app
    \`\`\`

    Create a new deployment for an app in a specific project.
    \`\`\`
    $ ${root.name} deployment create --project-id 1234
    \`\`\`
  `,
  commands: subCommands,
  flags: upFlags,
  // We use command metadata in the `persistentPreRun` function to check if a
  // command requires an API key. If it does, we'll check to see if one is
  // set. If not, we'll throw an error.
  meta: {
    requireApiKey: true,
    requireInGoodStanding: true,
  },
}).run(async function* ({ flags, ctx }) {
  for await (const line of runUp({ flags, ctx })) {
    yield line;
  }
});
