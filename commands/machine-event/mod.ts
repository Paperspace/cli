import { command } from "../../zcli.ts";
import { get } from "./get/mod.ts";
import { list } from "./list/mod.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [
  get,
  list,
];

export const machineEvent = command("machine-event", {
  short: "Manage your machine events",
  long: `
    Manage your machine events. Events are asynchronous tasks performed by our system on your machines.
    Not all machine commands are asynchronous. For those that are, a machine event will be returned
    which can be tracked using this command.

    For more information, see https://docs.paperspace.com/machines.
  `,
  commands: subCommands,
}).run(function* ({ ctx }) {
  for (const line of machineEvent.help(ctx)) {
    yield line;
  }
});