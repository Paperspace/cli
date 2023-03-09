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
  const file = await Deno.open(filePath, { read: true });
  const streamReader = file
    .readable
    .pipeThrough(new DecompressionStream("gzip"))
    .getReader();
  const reader = readerFromStreamReader(streamReader);
  const untar = new Untar(reader);
  logger.info(`Untar ${filePath}`);

  for await (const entry of untar) {
    if (entry === null) {
      break;
    }

    if (entry.type === "file" && entry.fileName !== "pax_global_header") {
      if (!filter(entry)) {
        await entry.discard();
        continue;
      }

      const filePath = typeof destinationPath === "function"
        ? destinationPath(entry)
        : path.join(destinationPath, entry.fileName);
      const dir = path.dirname(filePath);
      // Create the directory if it doesn't exist
      await Deno.mkdir(dir, { recursive: true });
      const file = await Deno.open(filePath, {
        create: true,
        truncate: true,
        write: true,
      });
      // Overwrite/write the file
      await copy(entry, file, { bufSize: 1024 * 1024 });
      file.close();
      await entry.discard();
      logger.info(`  > ${filePath}`);
    } else {
      // Skip directories
      await entry.discard();
    }
  }
}
