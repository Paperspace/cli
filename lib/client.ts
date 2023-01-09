import { GraphQLClient } from "https://deno.land/x/graphql_request@v4.1.0/mod.ts";
import { TypedDocumentNode } from "https://esm.sh/v102/@graphql-typed-document-node/core@3.1.1";
import { env } from "./env.ts";
import { formattedVersion } from "./version.ts";

const gqlClient = new GraphQLClient(env.get("PAPERSPACE_API_URL"), {
  headers: env.get("PAPERSPACE_API_KEY")
    ? {
      authorization: `Bearer ${env.get("PAPERSPACE_API_KEY")}`,
      "x-client": "paperspace-cli",
      "x-client-version": formattedVersion,
    }
    : {},
});

export function gqlFetch<TData = unknown, TVariables = Record<string, unknown>>(
  operation: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  options?: {
    headers?: Record<string, string>;
    apiUrl?: string;
    apiKey?: string;
  },
): Promise<TData> {
  const { apiUrl, apiKey, headers } = options || {};
  gqlClient.setEndpoint(apiUrl ?? env.get("PAPERSPACE_API_URL"));
  gqlClient.setHeader(
    "authorization",
    `Bearer ${apiKey ?? env.get("PAPERSPACE_API_KEY")}`,
  );

  if (headers) {
    gqlClient.setHeaders(headers);
  }

  return gqlClient.request(operation, variables);
}
