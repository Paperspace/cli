import { path } from "../deps.ts";
import { AppError } from "../errors.ts";
import { asserts } from "./asserts.ts";

/**
 * Decompress a zip file at a given path.
 *
 * @param filePath - Path to the zip file
 * @param destinationPath - Path to the destination folder
 * @param options - Configuration options
 */
export async function unzip(
  filePath: string,
  destinationPath = Deno.cwd(),
): Promise<string> {
  try {
    Deno.statSync(filePath);
  } catch (_err) {
    throw new AppError({ message: `A file "${filePath}" does not exist` });
  }

  const filename = path.basename(filePath, path.extname(filePath));
  const destination = path.join(destinationPath, filename);

  asserts(
    await decompressProcess(filePath, destination),
    new AppError({ message: `A file "${filePath}" does not exist` }),
  );

  return destination;
}

async function decompressProcess(
  source: string,
  destination: string,
): Promise<boolean> {
  // deno-lint-ignore no-deprecated-deno-api
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
