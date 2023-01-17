import * as Sentry from "https://deno.land/x/sentry_deno@v0.2.2/main.ts";
import { ValidationError } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
import { ClientError } from "https://deno.land/x/graphql_request@v4.1.0/mod.ts";

import { cli } from "./lib/cli.ts";
import { __COMMIT__, __VERSION__ } from "./lib/version.ts";
import { error, warn } from "./lib/ansi.ts";
import { ConfigError } from "./lib/config.ts";
import { Table } from "https://deno.land/x/cliffy@v0.25.7/table/mod.ts";

if (import.meta.main) {
  // Initialize Sentry
  Sentry.init({
    dsn:
      "https://fc31a63f01194bd2a70b0432557b4b88@o64342.ingest.sentry.io/4504454143475712",
    release: __COMMIT__,
    tracesSampleRate: 0,
  });

  // Run the CLI
  try {
    await cli.parse(Deno.args);
  } catch (err) {
    if (err instanceof ValidationError) {
      console.error(`${error("Validation Error")}\n%s`, err.message);
      Deno.exit(err.exitCode);
    } else if (err instanceof ConfigError) {
      console.error(`${error("Configuration Error")}\n%s`, err.message);
      Deno.exit(1);
    } else if (err instanceof ClientError && err.response.errors) {
      // Handle GraphQL response errors
      const responseError = err.response.errors[0];
      const extension = responseError.extensions;

      const table = new Table();
      table.fromJson(
        extension && "code" in extension
          ? [{
            Code: extension?.code,
            "Argument": extension?.argumentName,
            Message: responseError.message,
          }]
          : [
            {
              Message: responseError.message,
            },
          ],
      );

      console.error(
        `${error("Network Error")} \n%s`,
        table.border(true).toString(),
      );

      Deno.exit(1);
    } else {
      Sentry.captureException(err);
      console.error(`${error("Runtime Error")}\n%s`, err.message);
      console.error(
        `\n${
          warn(
            "Please file a bug report including the above message:",
          )
        }\n → https://github.com/Paperspace/cli/issues/new`,
      );
      Deno.exit(1);
    }
  }
}
