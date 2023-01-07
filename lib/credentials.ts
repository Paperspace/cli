import {
  parse,
  stringify,
} from "https://deno.land/std@0.171.0/encoding/yaml.ts";
import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";
import { env } from "./env.ts";

/**
 * Load the credentials file
 */
export async function read() {
  try {
    Deno.statSync(CREDENTIALS_PATH);
  } catch (_err) {
    return credentialsSchema.parse({});
  }

  const credentials = parse(await Deno.readTextFile(CREDENTIALS_PATH));
  return credentialsSchema.parse(credentials);
}

/**
 * Write the credentials file
 *
 * @param credentials - The credentials to write to the file
 */
export async function write(credentials: z.infer<typeof credentialsSchema>) {
  try {
    Deno.statSync(CREDENTIALS_DIR);
  } catch (_err) {
    await Deno.mkdir(CREDENTIALS_DIR, { recursive: true });
  }

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
  return credentials[team];
}

/**
 * Set the API key for a team in the credentials file
 *
 * @param team - The team to set the API key for
 * @param apiKey - The API key to set for the team
 */
export async function set(team: string, apiKey: string) {
  const credentials = await read();
  credentials[team] = apiKey;

  return await write(credentials);
}

/**
 * Remove a team from the credentials file
 *
 * @param team - The team to remove from the credentials file
 */
export async function remove(team: string) {
  const credentials = await read();
  delete credentials[team];

  return await write(credentials);
}

/**
 * Clear the credentials file
 */
export async function clear() {
  return await write({});
}

const credentialsSchema = z.record(z.string());
const CREDENTIALS_DIR = `${env.get("HOME")}/.paperspace`;
const CREDENTIALS_PATH = `${CREDENTIALS_DIR}/credentials.yml`;
