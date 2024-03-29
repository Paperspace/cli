import { command } from "../../zcli.ts";
import { create } from "./create/mod.ts";
import { get } from "./get/mod.ts";
import { env } from "../../env.ts";
import { list } from "./list/mod.ts";
import { del } from "./delete/mod.ts";

export const defaultFields = [
  "id",
  "name",
  "region",
  "networkId",
  "size",
  "mountPoint",
];

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [
  create,
  get,
  list,
  del,
];

export const sharedDrive = command("shared-drive", {
  short: "Manage your shared drives",
  long: `
    Manage your shared drives. Shared drives are used to centralize data
    used by your team. Shared drives can be mounted on any Paperspace machine
    in the same private network.

    For more information, see ${new URL(
    "/storage/shared-drives",
    env.get("PAPERSPACE_DOCS_URL"),
  )}.
  `,
  commands: subCommands,
}).run(function* ({ ctx }) {
  for (const line of sharedDrive.help(ctx)) {
    yield line;
  }
});
