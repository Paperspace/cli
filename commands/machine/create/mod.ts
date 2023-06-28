import { asserts } from "../../../lib/asserts.ts";
import { loading } from "../../../lib/loading.ts";
import { command, flag, flags, z } from "../../../zcli.ts";
import { dataTable } from "../../../lib/data-table.ts";
import { fields } from "../../../flags.ts";
import { pickJson } from "../../../lib/pick-json.ts";
import { machines } from "../../../api/machines.ts";
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

export const create = command("create", {
  short: "Create a machine",
  long: `
    Create a machine.
  `,
  commands: subCommands,
  flags: flags({
    fields,
  }).merge(flags({
    "name": flag({
      aliases: ["n"],
      short: "The name of the machine",
    }).string(),
    "machine-type": flag({
      short: "The machine type to create",
    }).string(),
    "template-id": flag({
      short: "The ID of the template to create the machine from",
    }).string(),
    "network-id": flag({
      short: "The ID of the network to create the machine in",
    }).ostring(),
    "region": flag({
      short: "The region to create the machine in",
    }).string(),
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
    "take-initial-snapshot": flag({
      short: "Whether to take an initial snapshot.",
    }).oboolean(),
    "restore-point-enabled": flag({
      short: "Whether to use initial snapshot as a restore point.",
    }).oboolean(),
    "restore-point-frequency": flag({
      short: "The restore point frequency.",
    }).ostring(),
    "startup-script-id": flag({
      short: "The startup script ID.",
    }).ostring(),
    "email-password": flag({
      short: "Whether to email the password.",
    }).oboolean(),
    "start-on-create": flag({
      short: "Whether to start the machine on creation.",
    }).oboolean(),
    "enable-nvlink": flag({
      short: "Whether to enable NVLink.",
    }).oboolean(),
    "accessor-ids": flag({
      short: "The accessors of the machine.",
    }).array(z.string()).optional(),
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
      machines.create({
        name: flags.name,
        machineType: flags["machine-type"],
        templateId: flags["template-id"],
        networkId: flags["network-id"],
        region: flags.region,
        diskSize: flags["disk-size"],
        publicIpType: parsedPublicIpType.data,
        autoSnapshotEnabled: flags["auto-snapshot-enabled"],
        autoSnapshotFrequency: parsedAutoSnapshotFrequency.data,
        autoSnapshotSaveCount: flags["auto-snapshot-save-count"],
        autoShutdownEnabled: flags["auto-shutdown-enabled"],
        autoShutdownTimeout: flags["auto-shutdown-timeout"],
        autoShutdownForce: flags["auto-shutdown-force"],
        takeInitialSnapshot: flags["take-initial-snapshot"],
        restorePointEnabled: flags["restore-point-enabled"],
        restorePointFrequency: parsedRestorePointFrequency.data,
        startupScriptId: flags["startup-script-id"],
        emailPassword: flags["email-password"],
        startOnCreate: flags["start-on-create"],
        enableNvlink: flags["enable-nvlink"],
        accessorIds: flags["accessor-ids"],
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
