import { asserts } from "../../../lib/asserts.ts";
import { loading } from "../../../lib/loading.ts";
import { args, command, flags, z } from "../../../zcli.ts";
import { dataTable } from "../../../lib/data-table.ts";
import { fields } from "../../../flags.ts";
import { pickJson } from "../../../lib/pick-json.ts";
import { models } from "../../../api/models.ts";
import { select } from "../../../prompts/select.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [];

export const get = command("get", {
  short: "Get a model",
  long: `
    Get a model from a team.
  `,
  commands: subCommands,
  args: args().tuple([
    z.string().describe("The ID of the model to get"),
  ]).optional(),
  flags: flags({
    fields,
  }),
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
      const existingModels = await loading(models.list({ limit: 50 }));
      asserts(existingModels.ok, existingModels);

      const selected = await select(
        "Select a model:",
        existingModels.data.items,
        {
          filter(input, option) {
            return option.name.toLowerCase().startsWith(input);
          },
          renderOption(option, isSelected) {
            return `${
              isSelected ? ">" : " "
            } ${option.name} [ID: ${option.id}]`;
          },
        },
      );

      asserts(selected, "No model selected.");
      id = selected.id;
    }

    const response = await loading(
      models.get({ id }),
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
