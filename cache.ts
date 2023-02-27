import { kv, z } from "./zcli.ts";

export const CACHE_PATH = `${Deno.env.get("HOME")}/.paperspace/cache.toml`;

/**
 * This is a local key-value cache that is used to store things like the latest
 * version of the CLI. You can add TTLs to the keys if you want to expire them
 * after a certain amount of time.
 */
export const cache = kv(
  {
    updateAvailable: z
      .object({
        version: z
          .string()
          .describe(`The version of the update that is available.`),
        assets: z
          .array(
            z.object({
              name: z.string(),
              url: z.string(),
            }),
          )
          .describe(
            `The assets that are available to download for the update.`,
          ),
      })
      .strict()
      .optional(),
  },
  {
    path: CACHE_PATH,
  },
);
