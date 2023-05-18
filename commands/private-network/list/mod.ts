import { privateNetworks } from "../../../api/private-networks.ts";
import { command, flag, flags } from "../../../zcli.ts";
import { asserts } from "../../../lib/asserts.ts";
import { dataTable } from "../../../lib/data-table.ts";
import { loading } from "../../../lib/loading.ts";
import * as psFlags from "../../../flags.ts";
import { pickJson } from "../../../lib/pick-json.ts";
import { config } from "../../../config.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [];

export const list = command("list", {
  short: "List private networks.",
  long: ({ root }) => `
    List private networks in your team.

    Pick a subset of fields to display:
    \`\`\`
    ${root.name} private-network list -F name -F dtModified
    \`\`\`
  `,
  commands: subCommands,
  flags: psFlags.paginator.merge(flags({
    "name": flag({
      aliases: ["n"],
      short: "Filter by name.",
    }).ostring(),
    "region": flag({
      aliases: ["r"],
      short: "Filter by region.",
    }).ostring(),
  })),
  // We use command metadata in the `persistentPreRun` function to check if a
  // command requires an API key. If it does, we'll check to see if one is
  // set. If not, we'll throw an error.
  meta: {
    requireApiKey: true,
  },
}).run(
  async function* ({ flags }) {
    const team = await config.get("team");
    asserts(team, "You must be in a team to list private networks.");
    const result = await loading(
      privateNetworks.list({
        limit: flags.limit,
        after: flags.after,
        orderBy: "dtCreated",
        order: flags.asc ? "asc" : undefined,
        name: flags.name,
        region: flags.region,
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
