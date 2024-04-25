// deno-lint-ignore-file no-explicit-any
import { cursorHide, cursorShow, cursorUp, eraseDown } from "../deps.ts";
import { env } from "../env.ts";
import { print, printLn } from "./print.ts";
import { isCI } from "./is-ci.ts";

/**
 * A function that will spin a spinner until a promise resolves. This will
 * return a promise that resolves with the value of the promise passed in.
 *
 * @param until - A promise to wait for
 * @param config - Configuration for the spinner
 */
export async function loading<Promised extends Promise<any>>(
  until: Promised,
  config: LoadingConfig = {},
): Promise<Awaited<Promised>> {
  const { text = "Loading", enabled = true } = config;
  const frames = ["㊂", "㊀", "㊁"];
  let i = 0;
  let spinning = true;
  const hasLogLevel = !!env.get("LOG_LEVEL");
  const quiet = hasLogLevel || isCI;
  const write = quiet ? () => {} : print;
  const writeLn = quiet ? () => {} : printLn;

  if (!enabled) {
    return await until;
  }

  async function spin() {
    await write(cursorHide(), Deno.stderr);

    while (spinning) {
      await writeLn(frames[i++ % frames.length] + " " + text, Deno.stderr);
      await new Promise<void>((resolve) =>
        setTimeout(async () => {
          await write(cursorUp(1) + eraseDown(), Deno.stderr);
          resolve();
        }, 100)
      );
    }
  }

  const [value] = await Promise.all([
    until.then((value) => {
      spinning = false;
      return value;
    }).catch(async (error) => {
      await write(cursorUp(1) + eraseDown() + cursorShow(), Deno.stderr);
      throw error;
    }),
    spin(),
  ]);

  await write(cursorShow(), Deno.stderr);
  return value;
}

export type LoadingConfig = {
  /**
   * The text to display next to the spinner.
   * @default "Loading"
   */
  text?: string;
  /**
   * Whether or not to display the spinner and loading text.
   */
  enabled?: boolean;
};
