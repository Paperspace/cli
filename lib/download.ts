import { AppError } from "../errors.ts";
import { invariant } from "./invariant.ts";

/**
 * Download a source file and write it into the destination
 */
export async function download(
  source: string,
  destination: string,
): Promise<void> {
  // We use browser fetch API
  const response = await fetch(source);

  invariant(
    response.ok,
    new AppError({ message: `Failed to download: ${source}` }),
  );

  const blob = await response.blob();

  // We convert the blob into a typed array
  // so we can use it to write the data into the file
  const buf = await blob.arrayBuffer();
  const data = new Uint8Array(buf);

  // We then create a new file and write into it
  await Deno.writeFile(destination, data);
}
