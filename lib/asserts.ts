// deno-lint-ignore-file no-explicit-any
import { ErrorData, SuccessData } from "../api/client.ts";
import { AppError, ValidationError } from "../errors.ts";
import { z } from "../zcli.ts";

/**
 * Asserts state we assume to be true.
 *
 * @param condition - Condition to test
 * @param format - Message to display on failure.
 */
export function asserts<T>(
  condition: T,
  format:
    | string
    | Error
    | z.ZodError
    | (SuccessData<any, any> | ErrorData<any, any>),
): asserts condition {
  if (!condition) {
    if (typeof format === "object" && "error" in format && "ok" in format) {
      throw format.error;
    }

    if (format instanceof z.ZodError) {
      throw new ValidationError(format.issues[0].message);
    }

    const error = format instanceof Error
      ? format
      : new AppError({ message: typeof format === "string" ? format : "" });
    // @ts-expect-error: It's fine
    error.framesToPop = 1; // We don't care about asserts's own frame
    throw error;
  }
}
