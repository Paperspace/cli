import { GraphQLClient } from "https://esm.sh/graphql-request@5.1.0";
import { TypedDocumentNode } from "https://esm.sh/v102/@graphql-typed-document-node/core@3.1.1";

const gqlClient = new GraphQLClient("https://api.paperspace.com/graphql", {
  headers: {
    authorization: "Bearer MY_TOKEN",
  },
});

export function gqlFetch<TData = unknown, TVariables = Record<string, unknown>>(
  operation: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
): Promise<TData> {
  return gqlClient.request(operation, variables);
}
