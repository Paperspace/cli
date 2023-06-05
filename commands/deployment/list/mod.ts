import { deployments } from "../../../api/deployments.ts";
import { loading } from "../../../lib/loading.ts";
import { command } from "../../../zcli.ts";
import * as psFlags from "../../../flags.ts";
import { asserts } from "../../../lib/asserts.ts";
import { dataTable } from "../../../lib/data-table.ts";
import { pickJson } from "../../../lib/pick-json.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [];

export const list = command("list", {
  short: "List deployments.",
  long: ({ root }) => `
    List deployments in your team.

    Pick a subset of fields to display:
    \`\`\`
    ${root.name} deployment list -F id -F name
    \`\`\`
  `,
  commands: subCommands,
  flags: psFlags.paginator,
  // We use command metadata in the `persistentPreRun` function to check if a
  // command requires an API key. If it does, we'll check to see if one is
  // set. If not, we'll throw an error.
  meta: {
    requireApiKey: true,
  },
}).run(async function* ({ flags }) {
  const result = await loading(
    deployments.list({
      ...flags,
      order: flags.asc ? "asc" : undefined,
    }),
    { enabled: !flags.json },
  );

  asserts(result.ok, result);

  if (!flags.json) {
    for await (const line of dataTable(result.data.items, flags.fields)) {
      yield line;
    }
  } else {
    yield pickJson(result.data, flags.fields);
  }
});