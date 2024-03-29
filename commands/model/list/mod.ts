import { models } from "../../../api/models.ts";
import { config } from "../../../config.ts";
import * as psFlags from "../../../flags.ts";
import { asserts } from "../../../lib/asserts.ts";
import { dataTable } from "../../../lib/data-table.ts";
import { loading } from "../../../lib/loading.ts";
import { pickJson } from "../../../lib/pick-json.ts";
import { command } from "../../../zcli.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [];

export const list = command("list", {
  short: "List models.",
  long: ({ root }) => `
    List models in your team.

    Pick a subset of fields to display:
    \`\`\`
    ${root.name} model list -F name -F dtModified
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
}).run(
  async function* ({ flags }) {
    const team = await config.get("team");
    asserts(team, "You must be in a team to list models.");
    const result = await loading(
      models.list({
        limit: flags.limit,
        after: flags.after,
        orderBy: "dtCreated",
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
  },
);
