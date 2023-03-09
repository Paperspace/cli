import { command } from "../../zcli.ts";
import { get } from "./get/mod.ts";
import { list } from "./list/mod.ts";
import { create } from "./create/mod.ts";
import { update } from "./update/mod.ts";
import { link } from "./link/mod.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [get, list, create, update,
  link,
];

export const project = command("project", {
  short: "Manage your Paperspace projects.",
  commands: subCommands,
}).run(function*({ ctx }) {
  for (const line of project.help(ctx)) {
    yield line;
  }
});
