import { z } from "../../zcli.ts";

export const MachineAutoSnapshotFrequencySchema = z
  .enum([
    "hourly",
    "daily",
    "weekly",
    "monthly",
  ])
  .optional();

export const MachineRestorePointFrequencySchema = z
  .enum(["shutdown"])
  .optional();

export const MachinePublicIpTypeSchema = z
  .enum(["static", "dynamic", "none"])
  .optional();
