import { Sentry } from "./deps.ts";
import { COMMIT } from "./version.ts";
import { ApiClientError, AppError } from "./errors.ts";
import { root } from "./commands/mod.ts";
import { fmt } from "./zcli.ts";
import { cursorShow } from "./deps.ts";
import { print } from "./lib/print.ts";

if (import.meta.main) {
  // Initialize Sentry
  Sentry.init({
    dsn:
      "https://fc31a63f01194bd2a70b0432557b4b88@o64342.ingest.sentry.io/4504454143475712",
    release: COMMIT,
    tracesSampleRate: 0,
  });

  try {
    await root.execute();
  } catch (err) {
    // Clean up the cursor before exiting in case we removed it somewhere.
    print(cursorShow());

    // Catch known errors and exit with the appropriate code.
    if (err instanceof ApiClientError) {
      console.error(`${fmt.colors.bold("Network Error")}\n%s`, err.message);
      Deno.exit(err.exitCode);
    } else if (err instanceof AppError) {
      console.error(err.message);
      Deno.exit(err.exitCode);
    }

    Sentry.captureException(err);
    await Sentry.flush();
    console.error(err);
    console.error(`${fmt.colors.bold("Runtime Error")}\n%s`, err.message);
    console.error(
      `\n${
        fmt.colors.yellow(
          "Please file a bug report including the above message:",
        )
      }\n → https://github.com/Paperspace/cli/issues/new`,
    );
    Deno.exit(1);
  }
}
