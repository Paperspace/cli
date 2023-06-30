import { asserts } from "../../../lib/asserts.ts";
import { loading } from "../../../lib/loading.ts";
import { command, flag, flags } from "../../../zcli.ts";
import { dataTable } from "../../../lib/data-table.ts";
import { fields } from "../../../flags.ts";
import { pickJson } from "../../../lib/pick-json.ts";
import { snapshots } from "../../../api/snapshots.ts";
import { defaultFields } from "../mod.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [];

export const create = command("create", {
  short: "Create a snapshot",
  long: `
    Create a snapshot from a machine.
  `,
  commands: subCommands,
  flags: flags({
    fields,
  }).merge(flags({
    "name": flag({
      aliases: ["n"],
      short: "The name of the snapshot",
    }).string(),
    "machine-id": flag({
      aliases: ["m"],
      short: "The ID of the machine to create a snapshot from",
    }).string(),
  })),
  // We use command metadata in the `persistentPreRun` function to check if a
  // command requires an API key. If it does, we'll check to see if one is
  // set. If not, we'll throw an error.
  meta: {
    requireApiKey: true,
    requireInGoodStanding: true,
  },
}).run(
  async function* ({ flags }) {
    const response = await loading(
      snapshots.create({
        name: flags.name,
        machineId: flags["machine-id"],
      }),
    );

    asserts(response.ok, response);
    const result = response.data;

    if (flags.json) {
      yield pickJson(result, flags.fields);
    } else {
      for await (
        const line of dataTable([result], flags.fields ?? defaultFields)
      ) {
        yield line;
      }
    }
  },
);
