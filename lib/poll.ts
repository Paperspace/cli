// import { Formats } from "./act.ts";
import { ms } from "../deps.ts";

/**
 * Poll a function infinitely or until a condition is met.
 */
export async function poll<Value>(
  fn: () => Promise<Value>,
  interval: string | number = 1000,
) {
  await fn();
  const pollInterval = Number(ms(interval + ""));

  return await new Promise<Exclude<Value, undefined>>((resolve) => {
    const id = setInterval(async () => {
      const value = await fn();

      if (value !== undefined) {
        clearInterval(id);
        // @ts-expect-error: it's actually ok
        resolve(value);
      }
    }, pollInterval);
  });
}
