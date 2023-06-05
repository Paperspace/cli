import { z } from "../../zcli.ts";

export const MachineAutoSnapshotFrequencySchema = z.enum([
  "hourly",
  "daily",
  "weekly",
  "monthly",
]);

export const MachineRestorePointFrequencySchema = z.enum(["shutdown"]);

export const MachinePublicIpTypeSchema = z.enum(["static", "dynamic", "none"]);
