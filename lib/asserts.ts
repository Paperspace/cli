// deno-lint-ignore-file no-explicit-any
import { ErrorData, SuccessData } from "../api/client.ts";
import { AppError } from "../errors.ts";

/**
 * Asserts state we assume to be true.
 *
 * @param condition - Condition to test
 * @param format - Message to display on failure.
 */
export function asserts<T>(
  condition: T,
  format: string | Error | (SuccessData<any, any> | ErrorData<any, any>),
): asserts condition {
  if (!condition) {
    if (typeof format === "object" && "error" in format && "ok" in format) {
      throw format.error;
    }

    const error = format instanceof Error
      ? format
      : new AppError({ message: typeof format === "string" ? format : "" });
    // @ts-expect-error: It's fine
    error.framesToPop = 1; // We don't care about asserts's own frame
    throw error;
  }
}
