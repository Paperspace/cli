import { textEncoder } from "../zcli.ts";

/**
 * Print text to the console.
 *
 * @param text - The text to print
 * @param writer - The writer to print to. Either `Deno.stdout` or `Deno.stderr`.
 */
export function print(text: string, writer: Deno.Writer = Deno.stdout) {
  return writer.write(textEncoder.encode(text));
}

/**
 * Print text to the console and append a newline.
 *
 * @param text - The text to print
 * @param writer - The writer to print to. Either `Deno.stdout` or `Deno.stderr`.
 */
export function printLn(text: string, writer: Deno.Writer = Deno.stdout) {
  return writer.write(textEncoder.encode(text + "\n"));
}
