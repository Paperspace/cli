import { env } from "./env.ts";
import { LogRecord } from "https://deno.land/std@0.178.0/log/logger.ts";
import { HandlerOptions } from "https://deno.land/std@0.178.0/log/handlers.ts";
import { getLevelByName, log, Sentry } from "./deps.ts";

class PaperspaceLogger extends log.handlers.ConsoleHandler {
  constructor(options: HandlerOptions) {
    super("NOTSET", options);
  }

  override handle(logRecord: LogRecord) {
    if (
      !env.get("LOG_LEVEL") ||
      // @ts-expect-error: it's fine, we are professionals
      getLevelByName(env.get("LOG_LEVEL").toUpperCase()) > logRecord.level
    ) {
      return;
    }

    const msg = this.format(logRecord);
    return this.log(msg);
  }
}

log.setup({
  handlers: {
    console: new PaperspaceLogger({
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

/**
 * We use a `default` logger so that we can always have the most up-to-date
 * log level. This is important because the log level can by flags.
 */
export const logger = log.getLogger("default");
