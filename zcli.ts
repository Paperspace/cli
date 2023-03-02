import {
  flag,
  flags,
  inferContext,
  init,
  intl,
} from "https://deno.land/x/zcli@1.3.2/mod.ts";

import { COMMIT, VERSION } from "./version.ts";

export const context = {
  meta: {
    version: VERSION,
    commit: COMMIT,
    date: new Date().toISOString(),
  },
};

export const logLevels = [
  "debug",
  "info",
  "warning",
  "error",
  "critical",
] as const;

export const app = init({
  ctx: context,

  globalFlags: flags({
    "log-level": flag({
      short: "Enable debug logging",
      long: `Enable debug logging.`,
      aliases: ["l"],
    })
      .enum(logLevels).optional(),

    json: flag({
      short: "Output JSON",
      aliases: ["j"],
    }).oboolean(),

    "api-key": flag({
      short: "A Paperspace public API Key used for authenticating requests",
    }).ostring(),

    "api-url": flag({
      short: `A URL for the Paperspace API.`,
      hidden: true,
    }).ostring(),
  }),
});

export type Context = inferContext<typeof app>;
export const { command } = app;
export * from "https://deno.land/x/zcli@1.3.2/mod.ts";
export type {
  Join,
  NestedKeys,
  NestedValue,
} from "https://deno.land/x/zcli@1.3.2/lib/types.ts";
export { textEncoder } from "https://deno.land/x/zcli@1.3.2/lib/text-encoder.ts";
export { table } from "https://deno.land/x/zcli@1.3.2/lib/simple-table.ts";
