import { command } from "../../zcli.ts";
import { create } from "./create/mod.ts";
import { del } from "./delete/mod.ts";
import { get } from "./get/mod.ts";
import { list } from "./list/mod.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [
  create,
  list,
  get,
  del,
];

export const model = command("model", {
  short: "Manage your Paperspace models",
  long: `
    Manage your Paperspace models.

    For more information, see ${new URL(
      "/deploying/models",
      env.get("PAPERSPACE_DOCS_URL"),
    )}.
  `,
  commands: subCommands,
}).run(function* ({ ctx }) {
  for (const line of model.help(ctx)) {
    yield line;
  }
});
