import { readKeypress } from "../deps.ts";
import { print, printLn } from "../lib/print.ts";

/**
 * A confirmation prompt
 */
export async function confirm(
  message: string,
  options: ConfirmConfig = {},
): Promise<boolean | undefined> {
  const {
    defaultValue = false,
    onBreak = () => {
      print("\n");
      Deno.exit(0);
    },
  } = options;

  await print(
    message + ` [${defaultValue ? "Y" : "y"}/${!defaultValue ? "N" : "n"}] `,
  );

  for await (const keypress of readKeypress(Deno.stdin)) {
    if (keypress.ctrlKey) {
      switch (keypress.key) {
        case "c":
          await onBreak();
          return;
      }
    }

    switch (keypress.key) {
      case "escape":
        await onBreak();
        return;

      case "y":
        await printLn("y");
        return true;

      case "n":
        await printLn("n");
        return false;

      case "return":
        await printLn(defaultValue ? "y" : "n");
        return defaultValue;
    }
  }
}

export type ConfirmConfig = {
  defaultValue?: boolean;
  onBreak?: () => void | Promise<void>;
};
