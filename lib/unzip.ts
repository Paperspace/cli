import { path } from "../deps.ts";
import { AppError } from "../errors.ts";
import { invariant } from "./invariant.ts";

/**
 * Decompress a zip file at a given path.
 *
 * @param filepath - Path to the zip file
 * @param destinationPath - Path to the destination folder
 * @param options - Configuration options
 */
export async function unzip(
  filepath: string,
  destinationPath = Deno.cwd(),
): Promise<string> {
  try {
    Deno.statSync(filepath);
  } catch (_err) {
    throw new AppError({ message: `A file "${filepath}" does not exist` });
  }

  const filename = path.basename(filepath, path.extname(filepath));
  const destination = path.join(destinationPath, filename);

  invariant(
    await decompressProcess(filepath, destination),
    new AppError({ message: `A file "${filepath}" does not exist` }),
  );

  return destination;
}

async function decompressProcess(
  source: string,
  destination: string,
): Promise<boolean> {
  const unzipProc = Deno.run({
    cmd: Deno.build.os === "windows"
      ? [
        "PowerShell",
        "Expand-Archive",
        "-Path",
        `"${source}"`,
        "-DestinationPath",
        `"${destination}"`,
        "-Force",
      ]
      : ["unzip", "-o", source, "-d", destination],
  });

  const processStatus = (await unzipProc.status()).success;
  Deno.close(unzipProc.rid);
  return processStatus;
}
