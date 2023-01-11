import {
  Select,
  SelectOptions,
} from "https://deno.land/x/cliffy@v0.25.7/prompt/mod.ts";

export async function select<T extends string>(
  { message, search, searchLabel, ...other }: SelectConfig<T>,
): Promise<T> {
  const value = await Select.prompt({
    message,
    search,
    searchLabel,
    prefix: "",
    ...other,
  });
  // @ts-expect-error: it is a string just not the kind Select.prompt wants
  return value;
}

export type SelectConfig<T extends string> = Omit<SelectOptions, "options"> & {
  options: T[] | {
    value: T;
    name?: string;
    disabled?: boolean;
  }[];
};
