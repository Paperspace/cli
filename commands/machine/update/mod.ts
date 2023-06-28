import { machines } from "../../../api/machines.ts";
import { fields } from "../../../flags.ts";
import { asserts } from "../../../lib/asserts.ts";
import { dataTable } from "../../../lib/data-table.ts";
import { loading } from "../../../lib/loading.ts";
import { pickJson } from "../../../lib/pick-json.ts";
import { select } from "../../../prompts/select.ts";
import { args, command, flag, flags, z } from "../../../zcli.ts";
import {
  MachineAutoSnapshotFrequencySchema,
  MachinePublicIpTypeSchema,
  MachineRestorePointFrequencySchema,
} from "../schemas.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [];

export const update = command("update", {
  short: "Update a machine",
  long: `
    Update a machine's settings.
  `,
  commands: subCommands,
  args: args().tuple([
    z.string().describe("The ID of the machine to update"),
  ]).optional(),
  flags: flags({
    fields,
  }).merge(flags({
    "name": flag({
      aliases: ["n"],
      short: "The name of the machine",
    }).string(),
    "machine-type": flag({
      short: "The machine type to update to",
    }).string(),
    "network-id": flag({
      short: "The ID of the network to create the machine in",
    }).ostring(),
    "disk-size": flag({
      short: "The size of the machine's disk",
    }).number(),
    "public-ip-type": flag({
      short: "The public IP type.",
    }).ostring(),
    "auto-snapshot-enabled": flag({
      short: "Whether to enable auto snapshots.",
    }).oboolean(),
    "auto-snapshot-frequency": flag({
      short: "The auto snapshot frequency.",
    }).ostring(),
    "auto-snapshot-save-count": flag({
      short: "The number of auto snapshots to save.",
    }).onumber(),
    "auto-shutdown-enabled": flag({
      short: "Whether to enable auto shutdown.",
    }).oboolean(),
    "auto-shutdown-timeout": flag({
      short: "The auto shutdown timeout in hours.",
    }).onumber(),
    "auto-shutdown-force": flag({
      short: "Whether to force shutdown the machine.",
    }).oboolean(),
    "restore-point-enabled": flag({
      short: "Whether to enable a restore point.",
    }).oboolean(),
    "restore-point-frequency": flag({
      short: "The restore point frequency.",
    }).ostring(),
    "restore-point-snapshot-id": flag({
      short: "The ID of the snapshot to use as a restore point.",
    }).ostring(),
  })),
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
    const parsedPublicIpType = MachinePublicIpTypeSchema.safeParse(
      flags["public-ip-type"],
    );
    asserts(
      parsedPublicIpType.success,
      "error" in parsedPublicIpType ? parsedPublicIpType.error : "",
    );
    const parsedAutoSnapshotFrequency = MachineAutoSnapshotFrequencySchema
      .safeParse(
        flags["auto-snapshot-frequency"],
      );
    asserts(
      parsedAutoSnapshotFrequency.success,
      "error" in parsedAutoSnapshotFrequency
        ? parsedAutoSnapshotFrequency.error
        : "",
    );
    const parsedRestorePointFrequency = MachineRestorePointFrequencySchema
      .safeParse(
        flags["restore-point-frequency"],
      );
    asserts(
      parsedRestorePointFrequency.success,
      "error" in parsedRestorePointFrequency
        ? parsedRestorePointFrequency.error
        : "",
    );
    const response = await loading(
      machines.update({
        id,
        name: flags.name,
        machineType: flags["machine-type"],
        networkId: flags["network-id"],
        diskSize: flags["disk-size"],
        publicIpType: parsedPublicIpType.data,
        autoSnapshotEnabled: flags["auto-snapshot-enabled"],
        autoSnapshotFrequency: parsedAutoSnapshotFrequency.data,
        autoSnapshotSaveCount: flags["auto-snapshot-save-count"],
        autoShutdownEnabled: flags["auto-shutdown-enabled"],
        autoShutdownTimeout: flags["auto-shutdown-timeout"],
        autoShutdownForce: flags["auto-shutdown-force"],
        restorePointEnabled: flags["restore-point-enabled"],
        restorePointFrequency: parsedRestorePointFrequency.data,
        restorePointSnapshotId: flags["restore-point-snapshot-id"],
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
