import { input, InputConfig } from "./input.ts";

/**
 * Prompts the user for a secret value.
 *
 * @param message - The message to display to the user.
 * @param options - The options to use.
 */
export function secret<ReturnType = string>(
  message: string,
  config: SecretConfig<ReturnType> = {},
): Promise<string | undefined> {
  // @ts-expect-error: it'll be ok
  return input<ReturnType>(message, { print: noop, ...config });
}

function noop() {}

export type SecretConfig<ReturnType> = Pick<
  InputConfig<ReturnType>,
  "filter" | "transform" | "onBreak"
>;
