/**
 * Logs a message to the console in the appropriate format based on the
 * CLI options.
 *
 * @param formats - Formats to print.
 * @param opt - Configuration options
 */
function print(
  formats: PrintsFormats,
  opt: {
    json: boolean;
  },
): void {
  if (opt?.json) {
    console.log(
      JSON.stringify(
        "value" in formats ? formats.value : formats.json,
        null,
        2,
      ),
    );
  } else {
    console.log("value" in formats ? formats.value : formats.human);
  }
}

/**
 * A higher order function that prints the return value of an action function.
 *
 * @param fn - An action function that returns a `PrintsFormats` object.
 */
export function prints<
  Fn extends (...args: any[]) => PrintsFormats | Promise<PrintsFormats>,
>(fn: Fn) {
  return async function action(...args: Parameters<Fn>): Promise<void> {
    const formats = await fn(...args);
    print(formats, args[0]);
  };
}

type PrintsFormats =
  | {
    /**
     * A JSON-serializable value to print.
     */
    json: unknown;
    /**
     * A human-readable string to print.
     */
    human: unknown;
  }
  | {
    /**
     * A JSON-serializable value to print.
     */
    value: unknown;
  };
