import { command } from "../../zcli.ts";
import { create } from "./create/mod.ts";
import { get } from "./get/mod.ts";
import { list } from "./list/mod.ts";
import { del } from "./delete/mod.ts";
import { update } from "./update/mod.ts";
import { assign } from "./assign/mod.ts";
import { unassign } from "./unassign/mod.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [
  create,
  get,
  list,
  update,
  assign,
  unassign,
  del,
];

export const startupScript = command("startup-script", {
  short: "Manage your startup scripts",
  long: `
    Manage your startup scripts. Startup scripts allow you to configure a machine
    on first boot or on every boot.
  `,
  commands: subCommands,
}).run(function* ({ ctx }) {
  for (const line of startupScript.help(ctx)) {
    yield line;
  }
});
