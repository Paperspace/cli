import { credentials } from "./credentials.ts";
import { ConfigError } from "./errors.ts";
import { logger } from "./logger.ts";
import { config as zcliConfig, didYouMean, fmt, locale, z } from "./zcli.ts";

export const CONFIG_PATH = `${Deno.env.get("HOME")}/.paperspace/config.toml`;
const configShape = {
  version: z.literal(1).default(1),
  team: z
    .string()
    .refine(async (value): Promise<string | null> => {
      const creds = await credentials.get("keys");

      if (creds[value]) {
        return value;
      }

      const teams = Object.keys(creds);

      logger.error(
        `Team "${value}" was not found in your credentials file. Retaining current team.`,
      );

      const correction = didYouMean(value, teams);

      throw new ConfigError(
        `A team named "${value}" was not found in your credentials file. ${correction}
   → Are you logged in? Try running "${
          fmt.colors.bold("pspace login")
        }" first.`,
      );
    })
    .describe("The name of the current team.")
    .nullable()
    .default(null),

  locale: z
    .string()
    .transform((value) => {
      try {
        const nextLocale = value.split(":")[0].split(".")[0].replace("_", "-");
        new Intl.DateTimeFormat(nextLocale);
        return nextLocale;
      } catch (_err) {
        return "en-US";
      }
    })
    .default(locale),
} as const;

/**
 * This is the configuration file that is used to store things like the current
 * team and locale. You can add new keys to this object and they will be added
 * to the configuration file automatically.
 */
export const config = zcliConfig(configShape, {
  defaultConfig: {
    version: 1,
    team: null,
    locale,
  },
  path: CONFIG_PATH,
});

export const configPaths = deepKeys(configShape) as [string, ...string[]];

function deepKeys(obj: Record<string | number | symbol, unknown>): string[] {
  // Use tail call optimization
  const stack = [obj];
  const keys: string[] = [];

  while (stack.length > 0) {
    const obj = stack.pop();
    for (const key in obj) {
      keys.push(key);
      const value = obj[key];

      if (value instanceof z.ZodObject) {
        stack.push(value.shape);
      }
    }
  }

  return keys;
}
