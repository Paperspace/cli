import { asserts } from "../../../lib/asserts.ts";
import { loading } from "../../../lib/loading.ts";
import { args, command, flag, flags, z } from "../../../zcli.ts";
import { dataTable } from "../../../lib/data-table.ts";
import { fields } from "../../../flags.ts";
import { pickJson } from "../../../lib/pick-json.ts";
import { startupScripts } from "../../../api/startup-scripts.ts";
import { input } from "../../../prompts/input.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [];

export const assign = command("assign", {
  short: "Assign a startup script",
  long: `
    Assign a startup script to a machine.
  `,
  commands: subCommands,
  args: args().tuple([
    z.string().describe("The ID of the startup script to assign"),
  ]).optional(),
  flags: flags({
    fields,
  }).merge(flags({
    "machine-id": flag({
      short: "The ID of the machine to assign the startup script to",
    }).string(),
  })),
  // We use command metadata in the `persistentPreRun` function to check if a
  // command requires an API key. If it does, we'll check to see if one is
  // set. If not, we'll throw an error.
  meta: {
    requireApiKey: true,
  },
}).run(
  async function* ({ args, flags }) {
    let [id] = args;

    if (!id) {
      id = await input("ID:", {
        filter: (v) => !!v.sequence.match(/[a-zA-Z0-9_-]/),
      });
      asserts(id, "A startup script ID is required");
    }

    const response = await loading(
      startupScripts.assign({
        id,
        machineId: flags["machine-id"],
      }),
    );

    asserts(response.ok, response);
    const result = response.data;

    if (flags.json) {
      yield pickJson(result, flags.fields);
    } else {
      for await (const line of dataTable([result], flags.fields)) {
        yield line;
      }
    }
  },
);