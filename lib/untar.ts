import {
  copy,
  path,
  readerFromStreamReader,
  TarEntry,
  Untar,
} from "../deps.ts";
import { logger } from "../logger.ts";

/**
 * Untar a tar file
 *
 * @param filePath - Path to the tar file
 * @param destinationPath - Path to the destination folder
 */
export async function untar(
  filePath: string,
  destinationPath: string | ((tarEntry: TarEntry) => string) = Deno.cwd(),
  options: {
    filter?: (tarEntry: TarEntry) => boolean;
  } = {},
) {
  const { filter = () => true } = options;
  const streamReader = (await Deno.open(filePath))
    .readable
    .pipeThrough(new DecompressionStream("gzip"))
    .getReader();
  // Untar the file
  const reader = readerFromStreamReader(streamReader);
  const untar = new Untar(reader);
  let entry: TarEntry | null;
  logger.info(`Untar ${filePath}`);

  // deno-lint-ignore no-cond-assign
  while (entry = await untar.extract()) {
    if (entry.type === "file" && entry.fileName !== "pax_global_header") {
      if (!filter(entry)) {
        continue;
      }

      const filePath = typeof destinationPath === "function"
        ? destinationPath(entry)
        : path.join(destinationPath, entry.fileName);

      const dir = path.dirname(filePath);

      try {
        Deno.statSync(dir);
      } catch (err) {
        if (err instanceof Deno.errors.NotFound) {
          await Deno.mkdir(dir, { recursive: true });
        } else {
          throw err;
        }
      }

      const file = await Deno.open(filePath, { create: true, write: true });
      // Write the file in entry to file
      await copy(entry, file);
      logger.info(`  > ${filePath}`);
    }
  }
}
