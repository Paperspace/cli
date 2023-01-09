import {
  parse,
  stringify,
} from "https://deno.land/std@0.171.0/encoding/yaml.ts";
import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";
import { env } from "./env.ts";
import { logger } from "./logger.ts";

/**
 * Load the credentials file
 */
export async function read() {
  try {
    Deno.statSync(CREDENTIALS_PATH);
  } catch (_err) {
    logger.warning(`No credentials file found at "${CREDENTIALS_PATH}".`);
    return schema.parse({});
  }

  const credentials = parse(await Deno.readTextFile(CREDENTIALS_PATH));
  return schema.parse(credentials);
}

/**
 * Write the credentials file
 *
 * @param credentials - The credentials to write to the file
 */
export async function write(credentials: z.infer<typeof schema>) {
  try {
    Deno.statSync(CREDENTIALS_DIR);
  } catch (_err) {
    logger.warning(
      `No credentials directory found. Creating one: "${CREDENTIALS_DIR}".`,
    );
    await Deno.mkdir(CREDENTIALS_DIR, { recursive: true });
  }

  credentials = schema.parse(credentials);
  logger.info(`Writing credentials: "${CREDENTIALS_PATH}".`);
  await Deno.writeTextFile(CREDENTIALS_PATH, stringify(credentials), {
    mode: 0o600,
  });
}

/**
 * Get the API key for a team from the credentials file
 *
 * @param team - The team to get the API key for
 */
export async function get(team: string) {
  const credentials = await read();
  return credentials.keys[team];
}

/**
 * Set the API key for a team in the credentials file
 *
 * @param team - The team to set the API key for
 * @param apiKey - The API key to set for the team
 */
export async function set(team: string, apiKey: string) {
  const credentials = await read();
  credentials.keys[team] = apiKey;

  return await write(credentials);
}

/**
 * Remove a team from the credentials file
 *
 * @param team - The team to remove from the credentials file
 */
export async function remove(team: string) {
  const credentials = await read();
  delete credentials.keys[team];

  return await write(credentials);
}

/**
 * Clear the credentials file
 */
export async function clear() {
  return await write({ version: 1, keys: {} });
}

/**
 * List all of the teams in the credentials file
 *
 * @param path - The path to remove
 */
export async function list() {
  const config = await read();
  return Object.keys(config.keys);
}

export const schema = z.object({
  version: z.literal(1).default(1),
  keys: z.record(z.string()).optional().default({}),
});
const CREDENTIALS_DIR = `${env.get("HOME")}/.paperspace`;
export const CREDENTIALS_PATH = `${CREDENTIALS_DIR}/credentials.yml`;
