import cliSelect from "https://esm.sh/cli-select@1.1.2";
import { cursorPrevLine, eraseLines, info } from "./ansi.ts";

export async function select<T>(
  { label, prefix, options, renderValue, ...other }: SelectConfig<T>,
) {
  if (label) {
    console.log(...[prefix && info(prefix), label].filter(Boolean));
  }

  const value = await cliSelect({
    values: options,
    indentation: 2,
    selected: info("◉"),
    unselected: "◯",
    valueRenderer(value, selected) {
      if (selected) {
        return info(
          renderValue ? renderValue(value, selected) : String(value),
        );
      }

      return renderValue ? renderValue(value, selected) : String(value);
    },
    ...other,
  });

  if (label) {
    const lines = 1 + label.split("\n").length;
    console.log(eraseLines(lines));
    console.log(cursorPrevLine(lines));
  }

  return value.value;
}

export type SelectConfig<T> =
  & {
    prefix?: string;
    label?: string;
    options: ValuesObject<T> | ValuesArray<T>;
    defaultValue?: Index;
    cleanup?: boolean;
  }
  & (T extends { [s: string | number | symbol]: any } ? {
      renderValue: RenderValue<T>;
    }
    : { renderValue?: RenderValue<T> });

type ValuesObject<T> = {
  [s: string]: T;
};

// deno-lint-ignore no-empty-interface
interface ValuesArray<T> extends Array<T> {}

type RenderValue<T> = {
  (value: T, selected: boolean): string;
};

type Index = number | string;
