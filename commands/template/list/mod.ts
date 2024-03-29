import { command, flag, flags } from "../../../zcli.ts";
import { asserts } from "../../../lib/asserts.ts";
import { dataTable } from "../../../lib/data-table.ts";
import { loading } from "../../../lib/loading.ts";
import * as psFlags from "../../../flags.ts";
import { pickJson } from "../../../lib/pick-json.ts";
import { config } from "../../../config.ts";
import { templates } from "../../../api/templates.ts";
import { defaultFields } from "../mod.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [];

export const list = command("list", {
  short: "List templates.",
  long: ({ root }) => `
    List templates in your team.

    Pick a subset of fields to display:
    \`\`\`
    ${root.name} template list -F name -F dtModified
    \`\`\`
  `,
  commands: subCommands,
  flags: psFlags.paginator.merge(flags({
    "machine-id": flag({
      aliases: ["m"],
      short: "The ID of the machine the event is for",
      long: `
      The ID of the machine the event is for. If not specified, all events
      will be returned.
    `,
    }).ostring(),
    "name": flag({
      aliases: ["n"],
      short: "Filter by name.",
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
    asserts(team, "You must be in a team to list templates.");
    const result = await loading(
      templates.list({
        limit: flags.limit,
        after: flags.after,
        orderBy: "dtCreated",
        order: flags.asc ? "asc" : undefined,
        machineId: flags["machine-id"],
        name: flags.name,
      }),
      { enabled: !flags.json },
    );

    asserts(result.ok, result);

    if (!flags.json) {
      for await (
        const line of dataTable(
          result.data.items,
          flags.fields ?? defaultFields,
        )
      ) {
        yield line;
      }
    } else {
      yield pickJson(result.data, flags.fields);
    }
  },
);
