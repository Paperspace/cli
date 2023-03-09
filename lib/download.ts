import { copy, readerFromStreamReader } from "../deps.ts";
import { AppError } from "../errors.ts";
import { asserts } from "./asserts.ts";

/**
 * Download a source file and write it into the destination
 */
export async function download(
  source: string,
  destination: string,
): Promise<void> {
  const response = await fetch(source);

  asserts(
    response.ok && response.body,
    new AppError({ message: `Failed to download: ${source}` }),
  );

  const stream = response.body.getReader();
  const reader = readerFromStreamReader(stream);
  const file = await Deno.open(destination, { create: true, write: true });
  await copy(reader, file);
  file.close();
}
