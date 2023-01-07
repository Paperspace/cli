import { GraphQLClient } from "https://esm.sh/graphql-request@5.1.0";
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
): Promise<TData> {
  gqlClient.setEndpoint(env.get("PAPERSPACE_API_URL"));
  gqlClient.setHeader(
    "authorization",
    `Bearer ${env.get("PAPERSPACE_API_KEY")}`,
  );

  return gqlClient.request(operation, variables);
}
