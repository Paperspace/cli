// deno-lint-ignore-file no-explicit-any ban-types
import { env } from "../env.ts";
import { components, paths } from "./openapi.ts";
import { VERSION } from "../version.ts";
import { deepMerge } from "../deps.ts";
import {
  API_CLIENT_ERROR_CODES,
  ApiClientError,
  ApiClientErrorCode,
} from "../errors.ts";
import { z } from "../zcli.ts";
import { isValidDate } from "../lib/is-valid-date.ts";
import { logger } from "../logger.ts";

/**
 * Create a client for a given API endpoint.
 *
 * @param path - The path to the API endpoint.
 * @returns - A proxy object with methods for each HTTP method.
 */
export function client<
  Path extends keyof paths,
  PathMethods extends Extract<keyof paths[Path], Methods>,
>(path: Path): Client<Path, PathMethods> {
  async function fetcher(
    params: Record<string, unknown>,
    { apiKey: forceApiKey, ...init }: ApiClientRequestInit,
  ) {
    const apiUrl = env.get("PAPERSPACE_API_URL");
    const apiKey = forceApiKey ?? env.get("PAPERSPACE_API_KEY");
    const [pathname, additionalParams] = makePath(path, params);
    const url = new URL(pathname, apiUrl.endsWith("/") ? apiUrl : apiUrl + "/");
    let body: BodyInit | undefined;

    if (additionalParams) {
      if (init.method === "GET") {
        for (const [key, value] of Object.entries(additionalParams)) {
          url.searchParams.append(key, value);
        }
      } else {
        body = JSON.stringify(additionalParams);
      }
    } else {
      // override for rpc method
      if (init.method === "PATCH") {
        body = "{}";
      }
    }
    logger.info(`${init.method} ${url}`);

    if (body) {
      logger.info(`Request body\n${body}`);
    }

    const response = await fetch(
      new Request(
        url,
        // @ts-expect-error: it's fine
        deepMerge<ApiClientRequestInit>(
          {
            body,
            headers: Object.assign(
              apiKey
                ? {
                  Authorization: `Bearer ${apiKey}`,
                }
                : {},
              {
                "content-type": "application/json",
                "x-client": "paperspace-cli",
                "x-client-version": VERSION,
              },
            ),
          },
          init,
          { arrays: "replace" },
        ),
      ),
    );

    const responseBody = response.body ? await response.text() : null;
    const json = responseBody &&
        response.headers.get("content-type")?.includes("application/json")
      // Parse the response body as JSON and use our custom reviver to
      // convert ISO 8601 dates to Date objects.
      ? JSON.parse(responseBody, reviver)
      : null;

    if (isErrorResponse(response, json)) {
      return {
        ok: false,
        response: response,
        error: json === null
          ? new ApiClientError({
            code: TRPC_ERROR_CODE_HTTP_STATUS[response.status] ??
              "INTERNAL_SERVER_ERROR",
            message: "An unknown error occurred.",
          })
          : new ApiClientError(errorSchema.parse(json)),
      };
    } else {
      return {
        ok: true,
        response: response,
        data: json,
      };
    }
  }

  return new Proxy(
    // @ts-expect-error: we are wiser than the types
    { get() {}, post() {}, put() {}, delete() {}, patch() {} },
    {
      get(_, method: string) {
        return (
          params: Record<string, unknown>,
          requestInit?: ApiClientRequestInit,
        ) => {
          return fetcher(params, {
            ...requestInit,
            method: method.toUpperCase(),
          });
        };
      },
    },
  );
}

const errorSchema = z
  .object({
    code: z.enum(API_CLIENT_ERROR_CODES),
    message: z.string(),
    issues: z
      .array(
        z.object({
          message: z.string(),
        }),
      )
      .optional(),
  })
  .strict();

const TRPC_ERROR_CODE_HTTP_STATUS: Record<number, ApiClientErrorCode> = {
  400: "BAD_REQUEST",
  404: "NOT_FOUND",
  500: "INTERNAL_SERVER_ERROR",
  401: "UNAUTHORIZED",
  403: "FORBIDDEN",
  408: "TIMEOUT",
  409: "CONFLICT",
  499: "CLIENT_CLOSED_REQUEST",
  412: "PRECONDITION_FAILED",
  413: "PAYLOAD_TOO_LARGE",
  405: "METHOD_NOT_SUPPORTED",
  429: "TOO_MANY_REQUESTS",
};

/**
 * A custom reviver for JSON.parse that converts ISO 8601 dates to Date objects.
 *
 * @param _key - The key of the value being parsed.
 * @param value - The value being parsed.
 */
function reviver(_key: string, value: unknown) {
  if (typeof value === "string" && isValidDate(value)) {
    return new Date(value);
  }

  return value;
}

/**
 * A client for a given API endpoint.
 */
export type Client<Path extends keyof paths, PathMethods extends Methods> = {
  [Method in PathMethods]: ClientMethod<Path, Method>;
};

/**
 * A client method for a given API endpoint and HTTP method.
 */
export type ClientMethod<
  Path extends keyof paths,
  Method extends Methods,
> = PathBody<Path, Method> extends never | Record<string, never>
  ? (PathParams<Path, Method> extends never ? (
      params: null,
      requestInit?: ApiClientRequestInit,
    ) => Promise<SuccessData<Path, Method> | ErrorData<Path, Method>>
    : (
      params: PathParams<Path, Method>,
      requestInit?: ApiClientRequestInit,
    ) => Promise<SuccessData<Path, Method> | ErrorData<Path, Method>>)
  : (PathParams<Path, Method> extends never ? (
      params: PathBody<Path, Method>,
      requestInit?: ApiClientRequestInit,
    ) => Promise<SuccessData<Path, Method> | ErrorData<Path, Method>>
    : (
      params: Prettify<PathParams<Path, Method> & PathBody<Path, Method>>,
      requestInit?: ApiClientRequestInit,
    ) => Promise<SuccessData<Path, Method> | ErrorData<Path, Method>>);

/**
 * Success response data
 */
export type SuccessData<Path extends keyof paths, Method extends Methods> = {
  ok: true;
  response: Response;
  data: PathResponse<Path, Method>;
};

/**
 * Error response data
 */
export type ErrorData<Path extends keyof paths, Method extends Methods> = {
  ok: false;
  response: Response;
  error: ApiClientError;
};

export type ApiClientRequestInit = RequestInit & {
  /**
   * An API key to use for the request.
   * If not provided, the API key will be read from the environment.
   * If no API key is provided in the environment, the request will
   * be made without an API key.
   */
  apiKey?: string;
};

/**
 * Replace path parameters in a path with their values.
 *
 * @param path - The path to replace parameters in.
 * @param payload - The payload to replace parameters with.
 */
function makePath(
  path: string,
  payload: Record<string, unknown> = {},
): [string, Record<string, string> | null] {
  const params = { ...payload };
  const pathname = path
    .replace(/\{([^}]+)\}/g, (_, key) => {
      delete params[key];

      if (payload[key]) {
        return encodeURIComponent(payload[key] + "");
      }

      return "";
    })
    .replace(/^\//, "");

  const keys = Object.keys(params);
  const hasAdditionalParams = keys.length > 0;

  return [
    pathname,
    hasAdditionalParams
      ? keys.reduce((acc, key) => {
        if (params[key] && !["asc", "desc"].includes(key)) {
          acc[key] = params[key];
        }

        return acc;
      }, {} as Record<string, any>)
      : null,
  ];
}

/**
 * Check if a response is an error response.
 *
 * @param response - The response object.
 * @param data - The response data.
 * @returns `true` if the response is an error response.
 */
function isErrorResponse(
  response: Response,
  data: Record<string, unknown>,
): data is components["responses"]["error"] {
  return (
    response.status >= 400 ||
    !response.ok ||
    (data &&
      "code" in data &&
      "message" in data &&
      Object.values(data).length <= 3)
  );
}

/**
 * Get the path parameters and query parameters for a path and method.
 */
type PathParams<
  Path extends keyof paths,
  Method extends Methods,
> = paths[Path] extends {
  [M in Method]: {
    parameters?: {
      path?: infer P;
      query?: infer Q;
    };
  };
} ? P & Q
  : never;

/**
 * Get the request body type for a path and method.
 */
type PathBody<
  Path extends keyof paths,
  Method extends Methods,
> = paths[Path] extends { [M in Method]: any } ? paths[Path][Method] extends {
    readonly requestBody: {
      readonly content: {
        readonly "application/json": infer Body;
      };
    };
  } ? Body
  : never
  : never;

/**
 * Get the response types for a path and method.
 */
type PathResponseTypes<T> = T extends {
  responses: infer R;
} ? {
    [K in keyof R]: R[K] extends {
      content: { "application/json": infer C };
    } ? C
      : K extends "default" ? R[K]
      : never;
  }
  : never;

/**
 * Get the 200 response type for a path and method.
 */
type PathResponse<
  Path extends keyof paths,
  Method extends Methods,
> = paths[Path] extends {
  [M in Method]: { responses: { 200: Record<string, unknown> } };
} ? PathResponseTypes<paths[Path][Method]>[200]
  : never;

/**
 * A union of all HTTP methods.
 */
type Methods = "get" | "post" | "put" | "delete" | "patch" | "head";

/**
 * Merge a union of types into a single type and flatten any
 * nested types. This is a DX utility that makes types easier
 * to read.
 */
export type Prettify<T> =
  & {
    [K in keyof T]: T[K];
  }
  & {};
