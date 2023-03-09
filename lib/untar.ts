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
  const writes: Promise<void>[] = [];
  logger.info(`Untar ${filePath}`);

  while (true) {
    const entry = await untar.extract();

    if (entry === null) {
      break;
    }

    if (entry.type === "file" && entry.fileName !== "pax_global_header") {
      if (!filter(entry)) {
        continue;
      }

      const filePath = typeof destinationPath === "function"
        ? destinationPath(entry)
        : path.join(destinationPath, entry.fileName);

      const dir = path.dirname(filePath);

      writes.push((async () => {
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
        await copy(entry, file, { bufSize: 1024 * 1024 });
        file.close();
        logger.info(`  > ${filePath}`);
      })());
    }

    await Promise.all(writes);
  }
}
