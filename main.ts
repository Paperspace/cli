import * as Sentry from "https://deno.land/x/sentry_deno@v0.2.2/main.ts";
import { ValidationError } from "https://deno.land/x/cliffy@v0.25.6/command/mod.ts";

import { cli } from "./lib/cli.ts";
import { __COMMIT__ } from "./lib/version.ts";

if (import.meta.main) {
  Sentry.init({
    dsn: "https://fc31a63f01194bd2a70b0432557b4b88@o64342.ingest.sentry.io/4504454143475712",
    release: __COMMIT__,
    tracesSampleRate: 0,
  });

  try {
    await cli.parse(Deno.args);
  } catch (error) {
    if (error instanceof ValidationError) {
      cli.showHelp();
      console.error("Usage error: %s", error.message);
      Deno.exit(error.exitCode);
    } else {
      Sentry.captureException(error);
      console.error("Runtime error: %s", error);
      Deno.exit(1);
    }
  }
}
