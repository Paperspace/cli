import { concat, indexOfNeedle, iterateReader } from "../deps.ts";

export interface ReadlineOptions {
  separator: Uint8Array;
}

const defaultReadlineOptions = {
  separator: new Uint8Array([10]), // newline symbol
};

export async function* readline(
  reader: Deno.Reader,
  options: ReadlineOptions = defaultReadlineOptions,
): AsyncIterableIterator<Uint8Array> {
  const { separator } = options;

  let buf = new Uint8Array(0);

  for await (const chunk of iterateReader(reader)) {
    buf = concat(buf, chunk);

    let index;

    while ((index = indexOfNeedle(buf, separator)) >= 0) {
      const line = buf.slice(0, index);
      buf = buf.slice(index + separator.length);
      yield line;
    }
  }

  yield buf;
}
