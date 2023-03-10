import { args, command, fmt, z } from "../../zcli.ts";
import { cursorUp, eraseLine, open } from "../../deps.ts";
import { config } from "../../config.ts";
import { credentials } from "../../credentials.ts";
import { session } from "../../api/auth.ts";
import { asserts } from "../../lib/asserts.ts";
import { DocumentedError } from "../../errors.ts";
import { env } from "../../env.ts";
import { secret } from "../../prompts/secret.ts";
import { print } from "../../lib/print.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [];

export const login = command("login", {
  short: "Log in to the CLI.",
  long: `
    Log in to the CLI using your Paperspace API key or by opening the web console.
  `,
  commands: subCommands,
  args: args()
    .tuple([z.string().describe("An API key to log in with.")])
    .optional(),
}).run(async function* ({ args }) {
  let apiKey: string | undefined = args[0];

  if (!apiKey) {
    try {
      open(new URL("settings/apikeys", env.get("PAPERSPACE_CONSOLE_URL")) + "");
    } catch (_err) {
      // do nothing it's all good
    }

    apiKey = await secret("Enter an API key:");

    if (!apiKey) {
      print(cursorUp() + eraseLine());
      yield "No API key provided";
      return;
    }

    apiKey = apiKey.replace(/[^\w-]/g, "");
  }

  const sess = await session.get(null, { apiKey });
  asserts(sess.ok, sess);

  asserts(
    sess.ok,
    new DocumentedError({
      message: "Invalid API key",
      path: "account-management/account/security/api-keys#creating-an-api-key",
    }),
  );

  const team = sess.data?.team?.namespace;

  asserts(
    team,
    new DocumentedError({
      message: "Invalid API key",
      path: "account-management/account/security/api-keys#creating-an-api-key",
    }),
  );

  await credentials.set(`keys.${team}`, apiKey);
  await config.set("team", team ?? null);
  yield `Logged in to team "${fmt.colors.bold(team)}"`;
});
