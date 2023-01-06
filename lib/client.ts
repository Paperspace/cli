import { GraphQLClient } from "https://esm.sh/graphql-request@5.1.0";
import { TypedDocumentNode } from "https://esm.sh/v102/@graphql-typed-document-node/core@3.1.1";
import { env } from "./env.ts";

const gqlClient = new GraphQLClient(env.PAPERSPACE_API_URL, {
  headers: env.PAPERSPACE_API_KEY
    ? {
        authorization: `Bearer ${env.PAPERSPACE_API_KEY}`,
      }
    : {},
});

export function gqlFetch<TData = unknown, TVariables = Record<string, unknown>>(
  operation: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  options?: {
    apiKey?: string;
    apiUrl?: string;
  }
): Promise<TData> {
  if (options?.apiUrl) {
    gqlClient.setEndpoint(options.apiUrl);
  }

  if (options?.apiKey) {
    gqlClient.setHeader("authorization", `Bearer ${options.apiKey}`);
  }

  return gqlClient.request(operation, variables);
}
