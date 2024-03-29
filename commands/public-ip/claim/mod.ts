import { asserts } from "../../../lib/asserts.ts";
import { loading } from "../../../lib/loading.ts";
import { input } from "../../../prompts/input.ts";
import { command, flag, flags } from "../../../zcli.ts";
import { dataTable } from "../../../lib/data-table.ts";
import { fields } from "../../../flags.ts";
import { pickJson } from "../../../lib/pick-json.ts";
import { publicIps } from "../../../api/public-ips.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [];

export const claim = command("claim", {
  short: "Claim a public IP",
  long: `
    Claim a public IP for a team.
  `,
  commands: subCommands,
  flags: flags({
    fields,
  }).merge(flags({
    "region": flag({
      aliases: ["r"],
      short: "The region to claim the public IP in",
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
    let { region } = flags;

    if (!region) {
      const inputRegion = await input("Region:", {
        filter: (v) => !!v.sequence.match(/[a-zA-Z0-9]/),
      });
      asserts(inputRegion, "A region is required");
      region = inputRegion;
    }

    const response = await loading(
      publicIps.claim({ region }),
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
