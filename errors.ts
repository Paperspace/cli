import { components } from "./api/openapi.ts";
import { env } from "./env.ts";

/**
 * A generic application error.
 */
export class AppError extends Error {
  name = "AppError";
  readonly exitCode: number = 1;

  constructor({ message, exitCode }: { message: string; exitCode?: number }) {
    super(message);
    this.exitCode = exitCode ?? 1;
  }
}

/**
 * An error that is caused by a misconfiguration.
 */
export class ConfigError extends AppError {
  readonly name = "ConfigError";

  constructor(message: string) {
    super({ message });
  }
}

/**
 * An error that is documented in the CLI docs.
 */
export class DocumentedError extends AppError {
  readonly name = "DocumentedError";

  constructor({ message, path }: { message: string; path: string }) {
    super({
      message: message +
        `\n → Learn more at: ${new URL(path, env.get("PAPERSPACE_DOCS_URL"))}`,
    });
  }
}

/**
 * An error that is caused by an invalid user input.
 */
export class ValidationError extends AppError {
  readonly name = "ValidationError";

  constructor(message: string) {
    super({ message: `⛔ ${message}` });
  }
}

/**
 * An error that is thrown by the API client.
 */
export class ApiClientError extends AppError {
  readonly name = "ApiClientError";
  readonly code: ApiClientErrorCode;
  readonly issues:
    components["responses"]["error"]["content"]["application/json"]["issues"];

  constructor({
    message,
    code,
    issues,
  }:
    & Omit<
      components["responses"]["error"]["content"]["application/json"],
      "code"
    >
    & {
      code: ApiClientErrorCode;
    }) {
    super({ message, exitCode: 1 });
    this.code = code;
    this.issues = issues;
  }
}

/**
 * Error codes thrown by the API client.
 */
export const API_CLIENT_ERROR_CODES = [
  "PARSE_ERROR",
  "BAD_REQUEST",
  "INTERNAL_SERVER_ERROR",
  "UNAUTHORIZED",
  "FORBIDDEN",
  "NOT_FOUND",
  "METHOD_NOT_SUPPORTED",
  "TIMEOUT",
  "CONFLICT",
  "PRECONDITION_FAILED",
  "PAYLOAD_TOO_LARGE",
  "TOO_MANY_REQUESTS",
  "CLIENT_CLOSED_REQUEST",
] as const;

export type ApiClientErrorCode = typeof API_CLIENT_ERROR_CODES[number];
