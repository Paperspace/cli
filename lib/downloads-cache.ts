import { path } from "../deps.ts";
import { env } from "../env.ts";

/**
 * Clean the Paperspace cache.
 * @returns The number of bytes cleaned.
 */
export async function clean(): Promise<number> {
  let cleanedBytes = 0;
  try {
    Deno.statSync(dir);
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      return 0;
    }

    throw err;
  }

  const deletes: Promise<void>[] = [];

  for await (const entry of Deno.readDir(dir)) {
    const filePath = path.join(dir, entry.name);
    deletes.push((async () => {
      const stat = await Deno.stat(filePath);
      cleanedBytes += stat.size;
      await Deno.remove(filePath);
    })());
  }

  await Promise.all(deletes);
  return cleanedBytes;
}

/**
 * Create the Paperspace cache directory.
 */
export async function make() {
  await Deno.mkdir(dir, { recursive: true });
}

/**
 * The Paperspace cache directory.
 */
export const dir = path.join(env.get("HOME"), ".paperspace/.cache");
