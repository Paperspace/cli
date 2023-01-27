import {
  parse,
  stringify,
} from "https://deno.land/std@0.174.0/encoding/yaml.ts";
import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";
import * as obj from "https://esm.sh/object-path-immutable@4.1.2";
import { env } from "./env.ts";
import { logger } from "./logger.ts";
import { NestedPaths, TypeFromPath } from "./util.ts";

/**
 * Load the cache file
 */
export async function read() {
  try {
    Deno.statSync(CACHE_PATH);
  } catch (_err) {
    logger.warning(`No cache file found at "${CACHE_PATH}".`);
    return await schema.parseAsync({
      team: null,
    });
  }

  try {
    const cache = parse(await Deno.readTextFile(CACHE_PATH));
    return await schema.parseAsync(cache);
  } catch (_err) {
    logger.warning(
      `Cache file at "${CACHE_PATH}" is invalid. Using defaults.`,
    );

    const nextCache = await schema.parseAsync({
      team: null,
    });

    await write(nextCache);
    return nextCache;
  }
}

/**
 * Write the cache file
 *
 * @param cache - The cache to write to the file
 */
export async function write(cache: z.infer<typeof schema>) {
  try {
    Deno.statSync(CACHE_DIR);
  } catch (_err) {
    logger.warning(
      `No cache directory found. Creating one: "${CACHE_DIR}".`,
    );
    await Deno.mkdir(CACHE_DIR, { recursive: true });
  }

  cache = await schema.parseAsync(cache);
  logger.info(`Writing cache: "${CACHE_PATH}".`);
  await Deno.writeTextFile(
    CACHE_PATH,
    stringify(cache),
    {
      mode: 0o600,
    },
  );
}

/**
 * Get the cache value for a given path
 *
 * @param path - The path to get the value for
 */
export async function get<Path extends CachePaths>(
  path: Path,
): Promise<TypeFromPath<Cache, Path>> {
  const cache = await _internals.read();
  return obj.get(cache, path);
}

/**
 * Set the value for a given path in the cache file
 *
 * @param path - The path to set the value for
 * @param value - The value to set for the path
 */
export async function set<Path extends CachePaths>(
  path: Path,
  value: TypeFromPath<Cache, Path>,
) {
  const cache = await _internals.read();
  return await _internals.write(obj.set(cache, path, value));
}

/**
 * Remove a key from the cache file
 *
 * @param path - The path to remove
 */
export async function remove<Path extends CachePaths>(path: Path) {
  const cache = await _internals.read();
  return await _internals.write(obj.del(cache, path));
}

/**
 * Clear the cache file
 */
export async function clear() {
  return await _internals.write(
    await schema.parseAsync({
      team: null,
    }),
  );
}

export const schema = z.object({
  version: z.literal(1).default(1),
  updateAvailable: z.object({
    version: z.string().describe(
      `The version of the update that is available.`,
    ),
    assets: z.array(z.object({
      name: z.string(),
      url: z.string(),
    })).describe(`The assets that are available to download for the update.`),
    expires: z.number().describe(`The time this value expires.`),
  }).optional(),
});

export class CacheError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export const paths = getKeys(schema).filter((key) =>
  key !== "version"
) as CachePaths[];

// This is required for testing. Without it, we cannot stub the read/write.
export const _internals = { write, read };

export type Cache = z.infer<typeof schema>;
export type CachePaths = Extract<
  Exclude<
    NestedPaths<Cache>,
    "version"
  >,
  string
>;

const CACHE_DIR = `${env.get("HOME")}/.paperspace`;
export const CACHE_PATH = `${CACHE_DIR}/cache.yml`;

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
