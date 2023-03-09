import { cursorBack, eraseEndLine, Keypress, readKeypress } from "../deps.ts";
import { print } from "../lib/print.ts";

/**
 * Prompts the user for a value.
 *
 * @param message - The message to display to the user.
 * @param config - The options to use.
 */
export async function input<ReturnValue = string>(
  message: string,
  config: InputConfig<ReturnValue> = {},
): Promise<ReturnValue | undefined> {
  const {
    filter,
    transform = (value) => value,
    print: write = print,
    onBreak = async () => {
      await print("\n");
      Deno.exit(0);
    },
  } = config;

  await write(message + " ");
  let input = "";

  for await (const keypress of readKeypress(Deno.stdin)) {
    if (keypress.ctrlKey) {
      switch (keypress.key) {
        case "c":
          await onBreak();
          return;
      }
    }

    switch (keypress.key) {
      case "up":
      case "down":
      case "left":
      case "right":
        break;

      case "escape":
        await onBreak();
        return;

      case "backspace":
        if (input.length) {
          if (await write(cursorBack(input.at(-1)!.length) + eraseEndLine())) {
            input = input.slice(0, -1);
          }
        }
        break;

      case "return":
        await print("\n");
        // @ts-expect-error: it'll be ok
        return transform(input);

      default:
        if (filter === undefined || filter(keypress)) {
          if (await write(keypress.sequence)) {
            input += keypress.sequence;
          }
        }
    }
  }
}

export type InputConfig<ReturnValue> = {
  /**
   * A function that transforms the value entered by the user before it is returned.
   * @param value - The value entered by the user.
   */
  transform?: (value: string) => ReturnValue;
  /**
   * A function that filters keypresses before they are processed.
   * @param keypress - The keypress to filter.
   */
  filter?: (keypress: Keypress) => boolean;
  /**
   * A function that prints the value to the console.
   * @param message - The message to display to the user.
   */
  print?: (message: string) => void | Promise<number>;
  /**
   * A function that is called when the user presses `Ctrl+c`.
   */
  onBreak?: () => void | Promise<void>;
};
