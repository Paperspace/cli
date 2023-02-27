import {
  cursorBack,
  cursorForward,
  cursorHide,
  cursorShow,
  cursorUp,
  eraseDown,
  readKeypress,
} from "../deps.ts";
import { print, printLn } from "../lib/print.ts";
import { fmt } from "../zcli.ts";

/**
 * A function that returns a list of options for a select prompt. To let the
 * user search the list of options, provide a `filter` function.
 *
 * @param message - The message to display to the user.
 * @param options - The options to display to the user.
 * @returns The selected option.
 */
export async function select<Option>(
  message: string,
  options: Option[] | ReadonlyArray<Option>,
  config: SelectConfig<Option> = {},
): Promise<Option | undefined> {
  const {
    onBreak = () => {
      print("\n");
      Deno.exit(0);
    },
    maxOptions = 8,
    renderOption = defaultRenderOption,
  } = config;

  await printLn(message + cursorHide());

  let selectedIndex = 0;
  let input = "";
  const filter = config.filter;
  const shouldShowSearch = !!filter && options.length > maxOptions;

  const filterOptions = () =>
    !input || !shouldShowSearch ? options : options.filter((option) => {
      return filter(input, option);
    });

  const searchString = () =>
    shouldShowSearch ? `${fmt.colors.dim("Search:")} ${input}${CURSOR}` : "";

  // Prints the options, instructions, and the search string.
  async function printOptions(options = filterOptions()) {
    const end = Math.min(selectedIndex + maxOptions, options.length);
    const start = Math.max(end - maxOptions, 0);

    // Let the user know there are more options and they can scroll
    // to see them.
    const instructions = fmt.colors.dim(
      `\nUse ▲ ▼ keys to scroll. Press Enter to select.`,
    );

    const optionsString = options.slice(start, end).map((option) => {
      return renderOption(option, options.indexOf(option) === selectedIndex);
    }).join("\n");

    const search = searchString();

    await Promise.all([
      printLn(
        (options.length ? optionsString : fmt.colors.dim("  No results")) +
          instructions,
      ),
      shouldShowSearch &&
      print(
        (search ? `${search}\n` : "") + cursorUp() +
          cursorForward(search.length),
      ),
    ]);
  }

  // Clears the options, instructions, and the search string.
  async function clearOptions(options = filterOptions()) {
    // It is important that these prints are done in sequence. If their content
    // is printed at the same time, terminal will flicker.
    await Promise.all([
      print(
        cursorBack(searchString().length) +
          cursorUp(
            Math.min(options.length || 1, maxOptions) + 1,
          ),
      ),
      print(eraseDown()),
    ]);
  }

  await printOptions();

  for await (const keypress of readKeypress(Deno.stdin)) {
    if (keypress.ctrlKey) {
      if (keypress.key === "c") {
        await print(cursorShow());
        await onBreak();
      } else {
        continue;
      }
    }

    const filteredOptions = filterOptions();

    switch (keypress.key) {
      case "escape":
        await print(cursorShow());
        await onBreak();
        return;

      case "left":
      case "right":
        break;

      case "up":
        selectedIndex = Math.max(selectedIndex - 1, 0);
        await clearOptions(filteredOptions);
        await printOptions(filteredOptions);
        break;

      case "down":
        selectedIndex = Math.min(selectedIndex + 1, filteredOptions.length - 1);
        await clearOptions(filteredOptions);
        await printOptions(filteredOptions);
        break;

      case "return":
        await Promise.all([
          clearOptions(filteredOptions),
          // Resets the cursor position and shows it again
          printLn(cursorUp() + cursorShow()),
          printLn(renderOption(filteredOptions[selectedIndex], true)),
        ]);

        return filteredOptions[selectedIndex];

      case "backspace":
        await clearOptions(filteredOptions);
        selectedIndex = 0;
        input = input.slice(0, -1);
        await printOptions();
        break;

      default:
        if (shouldShowSearch) {
          await clearOptions(filteredOptions);
          selectedIndex = 0;
          input += keypress.sequence;
          await printOptions();
        }
    }
  }
}

const CURSOR = "⎹";

export function defaultRenderOption<Option>(
  option: Option,
  isSelected: boolean,
) {
  return ` ${isSelected ? "›" : " "} ${option}`;
}

export type SelectConfig<Option> = {
  /**
   * The maximum number of options to display at once.
   */
  maxOptions?: number;
  /**
   * A function that filters the options given a search input.
   *
   * @param input - The input to filter by.
   * @param option - The option to filter.
   * @returns `true` if the option should be displayed.
   */
  filter?: (input: string, option: Option) => boolean;
  /**
   * @param option - The option to render.
   * @param isSelected - Whether the option is selected.
   */
  renderOption?: (option: Option, isSelected: boolean) => string;
  /**
   * A function that is called when the user presses `Ctrl+C`.
   */
  onBreak?: () => void | Promise<void>;
};
