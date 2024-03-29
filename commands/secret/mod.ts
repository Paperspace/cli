import { command } from "../../zcli.ts";
import { create } from "./create/mod.ts";
import { get } from "./get/mod.ts";
import { list } from "./list/mod.ts";
import { delete_ } from "./delete/mod.ts";
import { update } from "./update/mod.ts";
import { env } from "../../env.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [
  create,
  get,
  list,
  delete_,
  update,
];

export const secret = command("secret", {
  short: "Manage your Paperspace secrets",
  long: `
    Manage your Paperspace secrets. Secrets are used to store sensitive
    information such as API keys, passwords, and other credentials. Secrets 
    can be safely injected into workloads as environment variables. An environment 
    variable that uses a Secret will not reveal the contents of the secret itself.

    Secrets can be created at the following levels:
    
    - Project (default): these secrets are applied to all resources in a project
    - Global: these secrets can be applied to all resources on your current team

    For more information, see ${new URL(
    "/secrets",
    env.get("PAPERSPACE_DOCS_URL"),
  )}.
  `,
  commands: subCommands,
}).run(function* ({ ctx }) {
  for (const line of secret.help(ctx)) {
    yield line;
  }
});
