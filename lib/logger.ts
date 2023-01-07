import { env } from "./env.ts";
import * as log from "https://deno.land/std@0.171.0/log/mod.ts";

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
      formatter: "{levelName} – {msg}",
    }),
  },

  loggers: {
    default: {
      level: "DEBUG",
      handlers: ["console"],
    },
  },
});

export const logger = log.getLogger();
