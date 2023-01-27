import { env } from "./env.ts";
import * as log from "https://deno.land/std@0.174.0/log/mod.ts";
import * as Sentry from "https://deno.land/x/sentry_deno@v0.2.2/main.ts";

class PaperspaceLogger extends log.handlers.ConsoleHandler {
  override log(msg: string) {
    if (env.get("DEBUG")) {
      console.log(msg);
    }
  }
}

log.setup({
  handlers: {
    console: new PaperspaceLogger("DEBUG", {
      formatter(logState) {
        Sentry.addBreadcrumb({
          level: sentrySeverity[logState.levelName] ?? "info",
          message: logState.msg,
        });
        return `${logState.levelName.padEnd(8, " ")} ｜ ${logState.msg}`;
      },
    }),
  },

  loggers: {
    default: {
      level: "DEBUG",
      handlers: ["console"],
    },
  },
});

const sentrySeverity: Record<string, Sentry.SeverityLevel> = {
  debug: "debug",
  info: "info",
  warning: "warning",
  error: "error",
  critical: "fatal",
};

export const logger = log.getLogger();
