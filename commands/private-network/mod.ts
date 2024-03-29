import { command } from "../../zcli.ts";
import { create } from "./create/mod.ts";
import { get } from "./get/mod.ts";
import { list } from "./list/mod.ts";
import { del } from "./delete/mod.ts";
import { env } from "../../env.ts";

export const defaultFields = [
  "id",
  "name",
  "region",
  "network",
  "netmask",
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

export const privateNetwork = command("private-network", {
  short: "Manage your private networks",
  long: `
    Manage your private networks. Private networks are logically isolated networks
    for your machines and shared drives. They can also be used for site-to-site VPNs
    and direct connections to your on-premise network.

    For more information, see ${new URL(
    "/networking/private-networks",
    env.get("PAPERSPACE_DOCS_URL"),
  )}.
  `,
  commands: subCommands,
}).run(function* ({ ctx }) {
  for (const line of privateNetwork.help(ctx)) {
    yield line;
  }
});
