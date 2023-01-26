import {
  parse,
  stringify,
} from "https://deno.land/std@0.173.0/encoding/yaml.ts";
import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";
import * as obj from "https://esm.sh/object-path-immutable@4.1.2";
import { env } from "./env.ts";
import * as credentials from "./credentials.ts";
import { logger } from "./logger.ts";
import { bold } from "./ansi.ts";
import { closest, NestedPaths, TypeFromPath } from "./util.ts";

/**
 * Load the config file
 */
export async function read() {
  try {
    Deno.statSync(CONFIG_PATH);
  } catch (_err) {
    logger.warning(`No config file found at "${CONFIG_PATH}".`);
    return await schema.parseAsync({
      team: null,
    });
  }

  try {
    const config = parse(await Deno.readTextFile(CONFIG_PATH));
    return await schema.parseAsync(config);
  } catch (_err) {
    logger.warning(
      `Config file at "${CONFIG_PATH}" is invalid. Using defaults.`,
    );

    const nextConfig = await schema.parseAsync({
      team: null,
    });

    await write(nextConfig);
    return nextConfig;
  }
}

/**
 * Write the config file
 *
 * @param config - The config to write to the file
 */
export async function write(config: z.infer<typeof schema>) {
  try {
    Deno.statSync(CONFIG_DIR);
  } catch (_err) {
    logger.warning(
      `No config directory found. Creating one: "${CONFIG_DIR}".`,
    );
    await Deno.mkdir(CONFIG_DIR, { recursive: true });
  }

  config = await schema.parseAsync(config);
  logger.info(`Writing config: "${CONFIG_PATH}".`);
  await Deno.writeTextFile(
    CONFIG_PATH,
    stringify(config),
    {
      mode: 0o600,
    },
  );
}

/**
 * Get the config value for a given path
 *
 * @param path - The path to get the value for
 */
export async function get<Path extends ConfigPaths>(
  path: Path,
): Promise<TypeFromPath<Config, Path>> {
  const config = await read();
  return obj.get(config, path);
}

/**
 * Set the value for a given path in the config file
 *
 * @param path - The path to set the value for
 * @param value - The value to set for the path
 */
export async function set<Path extends ConfigPaths>(
  path: Path,
  value: TypeFromPath<Config, Path>,
) {
  const config = await read();
  return await write(obj.set(config, path, value));
}

/**
 * Remove a key from the config file
 *
 * @param path - The path to remove
 */
export async function remove<Path extends ConfigPaths>(path: Path) {
  const config = await read();
  return await write(obj.del(config, path));
}

/**
 * Clear the config file
 */
export async function clear() {
  return await write(
    await schema.parseAsync({
      team: null,
    }),
  );
}

export const schema = z.object({
  version: z.literal(1).default(1),
  team: z
    .string()
    .transform(async (value): Promise<string | null> => {
      if (await credentials.get(value)) {
        return value;
      }

      const teams = await credentials.list();

      logger.error(
        `Team "${value}" was not found in your credentials file. Retaining current team.`,
      );

      const didYouMeanValue = closest(teams, value);
      const didYouMean = didYouMeanValue
        ? `\n\nDid you mean ${bold(didYouMeanValue)}?`
        : "";

      throw new ConfigError(
        `A team named "${value}" was not found in your credentials file. ${didYouMean}
Are you logged in? Try running "${bold("pspace login")}" first.`,
      );
    })
    .describe("The name of the current team.")
    .nullable()
    .default(null),
  locale: z.string()
    .transform((value) => {
      try {
        const locale = value.split(":")[0].split(".")[0].replace("_", "-");
        new Intl.DateTimeFormat(locale);
        return locale;
      } catch (_err) {
        return "en-US";
      }
    })
    .default(
      Deno.env.get("LANGUAGE") || Deno.env.get("LANG") ||
        Deno.env.get("LC_ALL") || "en-US",
    ),
});

export class ConfigError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export const paths = getKeys(schema).filter((key) =>
  key !== "version"
) as ConfigPaths[];

export type Config = z.infer<typeof schema>;
export type ConfigPaths = Extract<
  Exclude<
    NestedPaths<Config>,
    "version"
  >,
  string
>;

const CONFIG_DIR = `${env.get("HOME")}/.paperspace`;
export const CONFIG_PATH = `${CONFIG_DIR}/config.yml`;

// deno-lint-ignore no-explicit-any
function getKeys(obj: z.ZodObject<any>): string[] {
  return Object.keys(obj.shape)
    .map((key) => {
      const nestedObj = obj.shape[key]?.isOptional()
        ? obj.shape[key]._def.innerType
        : obj.shape[key];

      if ("shape" in nestedObj) {
        return getKeys(nestedObj).map((subKey: string) => `${key}.${subKey}`);
      }

      return key;
    })
    .flat();
}
