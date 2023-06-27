import { machines } from "../../../api/machines.ts";
import { fields } from "../../../flags.ts";
import { asserts } from "../../../lib/asserts.ts";
import { dataTable } from "../../../lib/data-table.ts";
import { loading } from "../../../lib/loading.ts";
import { pickJson } from "../../../lib/pick-json.ts";
import { select } from "../../../prompts/select.ts";
import { args, command, flags, z } from "../../../zcli.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [];

export const start = command("start", {
  short: "Start a machine",
  long: `
    Start a machine from a team.
  `,
  commands: subCommands,
  args: args().tuple([
    z.string().describe("The ID of the machine to start"),
  ]).optional(),
  flags: flags({
    fields,
  }),
  // We use command metadata in the `persistentPreRun` function to check if a
  // command requires an API key. If it does, we'll check to see if one is
  // set. If not, we'll throw an error.
  meta: {
    requireApiKey: true,
    requireInGoodStanding: true,
  },
}).run(
  async function* ({ args, flags }) {
    let [id] = args;

    if (!id) {
      const existingMachines = await loading(machines.list({ limit: 50 }));
      asserts(existingMachines.ok, existingMachines);

      const selected = await select(
        "Select a machine:",
        existingMachines.data.items,
        {
          filter(input, option) {
            return option.name.toLowerCase().startsWith(input);
          },
          renderOption(option, isSelected) {
            return `${isSelected ? ">" : " "} ${option.name}`;
          },
        },
      );

      asserts(selected, "No machine selected.");
      id = selected.id;
    }

    const response = await loading(
      machines.start({ id }),
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
