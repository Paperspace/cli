import * as Sentry from "https://deno.land/x/sentry_deno@v0.2.2/main.ts";

import { cli } from "./lib/cli.ts";
import { __VERSION__ } from "./lib/version.ts";

if (import.meta.main) {
  Sentry.init({
    dsn: "https://fc31a63f01194bd2a70b0432557b4b88@o64342.ingest.sentry.io/4504454143475712",
    release: __VERSION__,
    tracesSampleRate: 0,
  });

  await cli.parse(Deno.args);
}
