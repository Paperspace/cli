import { command } from "../../zcli.ts";
import { init } from "./init/mod.ts";
import { get } from "./get/mod.ts";
import { up } from "./up/mod.ts";
import { list } from "./list/mod.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [init, get, up, list];

export const deployment = command("deployment", {
  short: "Effortlessly deploy ML apps to Paperspace.",
  commands: subCommands,
}).run(({ args, flags, ctx }) => {
  console.log("Arguments:", args);
  console.log("Flags:", flags);
  console.log("Context:", ctx);
});
