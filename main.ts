import * as Sentry from "https://deno.land/x/sentry_deno@v0.2.2/main.ts";
import { ValidationError } from "https://deno.land/x/cliffy@v0.25.6/command/mod.ts";

import { cli } from "./lib/cli.ts";
import { __COMMIT__, __VERSION__ } from "./lib/version.ts";
import { error, info, warn } from "./lib/ansi.ts";

if (import.meta.main) {
  // Initialize Sentry
  Sentry.init({
    dsn: "https://fc31a63f01194bd2a70b0432557b4b88@o64342.ingest.sentry.io/4504454143475712",
    release: __COMMIT__,
    tracesSampleRate: 0,
  });

  // Run the CLI
  try {
    await cli.parse(Deno.args);
  } catch (err) {
    if (err instanceof ValidationError) {
      cli.showHelp();
      console.error(`${error("Runtime Error")}\n%s`, err.message);
      Deno.exit(err.exitCode);
    } else {
      Sentry.captureException(err);
      console.error(`${error("Runtime Error")}\n%s`, err);
      console.error(
        `\n${warn(
          "Please file a bug report including the above message:"
        )}\n → https://github.com/Paperspace/cli/issues/new`
      );
      Deno.exit(1);
    }
  }
}
