/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/auth/session": {
    /**
     * Get the current session
     * @description Get the current session. If a user is not logged in, this will be null. Otherwise, it will contain the current team and user.
     */
    get: operations["query.auth.session"];
  };
  "/deployment-schemas/0.0.0": {
    /**
     * Get the schema for the 0.0.0 version of the spec.
     * @description Get the schema for the 0.0.0 version of the spec.
     */
    get: operations["query.deployments.schemas.v0alpha0"];
  };
  "/health": {
    /**
     * Health check
     * @description Check if the API is healthy.
     */
    get: operations["query.health"];
  };
  "/projects": {
    /**
     * List projects
     * @description
     *         List projects. This endpoint supports pagination and sorting.
     */
    get: operations["query.projects.list"];
    /**
     * Create a project
     * @description Create a project
     */
    post: operations["mutation.projects.create"];
  };
  "/projects/{handle}": {
    /**
     * Get a project by its ID
     * @description Get a project by its ID.
     */
    get: operations["query.projects.get"];
    /**
     * Update a project
     * @description Update a project
     */
    put: operations["mutation.projects.update"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: never;
  responses: {
    /** @description Error response */
    readonly error: {
      content: {
        readonly "application/json": {
          readonly code: string;
          readonly issues?: readonly ({
            readonly message: string;
          })[];
          readonly message: string;
        };
      };
    };
  };
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {
  "query.auth.session": {
    /**
     * Get the current session
     * @description Get the current session. If a user is not logged in, this will be null. Otherwise, it will contain the current team and user.
     */
    responses: {
      /** @description Successful response */
      200: {
        content: {
          readonly "application/json": {
            /** @description The current team in the session */
            readonly team: {
              /** @description A unique handle for the team */
              readonly handle: string;
              /** @description A numeric ID for the team */
              readonly id: number;
              /** @description The namespace for the team */
              readonly namespace: string;
            };
            /** @description The current user in the session */
            readonly user: {
              /** @description The user's email address */
              readonly email: string;
              /** @description A unique handle for the user */
              readonly handle: string;
              /** @description A numeric ID for the user */
              readonly id: number;
            };
          } | null;
        };
      };
      default: components["responses"]["error"];
    };
  };
  "query.deployments.schemas.v0alpha0": {
    /**
     * Get the schema for the 0.0.0 version of the spec.
     * @description Get the schema for the 0.0.0 version of the spec.
     */
    responses: {
      /** @description Successful response */
      200: {
        content: {
          readonly "application/json": {
            readonly bro: boolean;
            /** @enum {string} */
            readonly cool: "spec";
          };
        };
      };
      default: components["responses"]["error"];
    };
  };
  "query.health": {
    /**
     * Health check
     * @description Check if the API is healthy.
     */
    responses: {
      /** @description Successful response */
      200: {
        content: {
          readonly "application/json": "HEALTHY";
        };
      };
      default: components["responses"]["error"];
    };
  };
  "query.projects.list": {
    /**
     * List projects
     * @description
     *         List projects. This endpoint supports pagination and sorting.
     */
    parameters: {
      /** @description Order results by one of these fields. */
      /** @description The order to sort the results by. */
      readonly query: {
        after?: string;
        limit?: number;
        orderBy?: "dtCreated";
        order?: "asc" | "desc";
      };
    };
    responses: {
      /** @description Successful response */
      200: {
        content: {
          readonly "application/json": {
            /** @description Whether there are more pages of results available. */
            readonly hasMore: boolean;
            /** @description The items on this page. */
            readonly items: readonly ({
              /**
               * Format: date-time
               * @description The date the project was created
               */
              readonly dtCreated: Date;
              /**
               * Format: date-time
               * @description The date the project was deleted
               * @default null
               */
              readonly dtDeleted: Date;
              /**
               * @description The ID of the GitHub App installation if this is is a GitHub-connected project.
               * @default null
               */
              readonly githubAppInstallationId: number | null;
              /** @description The ID of the project */
              readonly handle: string;
              /** @description The name of the project */
              readonly name: string;
              /**
               * @description The name of the GitHub repository if this is is a GitHub-connected project.
               * @default null
               */
              readonly repoName: string | null;
              /**
               * @description The node ID of the GitHub repository if this is is a GitHub-connected project.
               * @default null
               */
              readonly repoNodeId: string | null;
              /**
               * @description The URL of the GitHub repository if this is is a GitHub-connected project.
               * @default null
               */
              readonly repoUrl: string | null;
            })[];
            /** @description The cursor required to fetch the next page of results. i.e. `?after=nextPage`. This is `null` when there is no next page. */
            readonly nextPage: string | null;
          };
        };
      };
      default: components["responses"]["error"];
    };
  };
  "mutation.projects.create": {
    /**
     * Create a project
     * @description Create a project
     */
    readonly requestBody: {
      readonly content: {
        readonly "application/json": {
          /** @description The name of the project */
          readonly name: string;
        };
      };
    };
    responses: {
      /** @description Successful response */
      200: {
        content: {
          readonly "application/json": {
            /**
             * Format: date-time
             * @description The date the project was created
             */
            readonly dtCreated: Date;
            /**
             * Format: date-time
             * @description The date the project was deleted
             * @default null
             */
            readonly dtDeleted: Date;
            /**
             * @description The ID of the GitHub App installation if this is is a GitHub-connected project.
             * @default null
             */
            readonly githubAppInstallationId: number | null;
            /** @description The ID of the project */
            readonly handle: string;
            /** @description The name of the project */
            readonly name: string;
            /**
             * @description The name of the GitHub repository if this is is a GitHub-connected project.
             * @default null
             */
            readonly repoName: string | null;
            /**
             * @description The node ID of the GitHub repository if this is is a GitHub-connected project.
             * @default null
             */
            readonly repoNodeId: string | null;
            /**
             * @description The URL of the GitHub repository if this is is a GitHub-connected project.
             * @default null
             */
            readonly repoUrl: string | null;
          };
        };
      };
      default: components["responses"]["error"];
    };
  };
  "query.projects.get": {
    /**
     * Get a project by its ID
     * @description Get a project by its ID.
     */
    parameters: {
      /** @description The ID of the project to get */
      readonly path: {
        handle: string;
      };
    };
    responses: {
      /** @description Successful response */
      200: {
        content: {
          readonly "application/json": {
            /**
             * Format: date-time
             * @description The date the project was created
             */
            readonly dtCreated: Date;
            /**
             * Format: date-time
             * @description The date the project was deleted
             * @default null
             */
            readonly dtDeleted: Date;
            /**
             * @description The ID of the GitHub App installation if this is is a GitHub-connected project.
             * @default null
             */
            readonly githubAppInstallationId: number | null;
            /** @description The ID of the project */
            readonly handle: string;
            /** @description The name of the project */
            readonly name: string;
            /**
             * @description The name of the GitHub repository if this is is a GitHub-connected project.
             * @default null
             */
            readonly repoName: string | null;
            /**
             * @description The node ID of the GitHub repository if this is is a GitHub-connected project.
             * @default null
             */
            readonly repoNodeId: string | null;
            /**
             * @description The URL of the GitHub repository if this is is a GitHub-connected project.
             * @default null
             */
            readonly repoUrl: string | null;
          };
        };
      };
      default: components["responses"]["error"];
    };
  };
  "mutation.projects.update": {
    /**
     * Update a project
     * @description Update a project
     */
    parameters: {
      /** @description The ID of the project to update */
      readonly path: {
        handle: string;
      };
    };
    readonly requestBody: {
      readonly content: {
        readonly "application/json": {
          /** @description The new name of the project */
          readonly name: string;
        };
      };
    };
    responses: {
      /** @description Successful response */
      200: {
        content: {
          readonly "application/json": {
            /**
             * Format: date-time
             * @description The date the project was created
             */
            readonly dtCreated: Date;
            /**
             * Format: date-time
             * @description The date the project was deleted
             * @default null
             */
            readonly dtDeleted: Date;
            /**
             * @description The ID of the GitHub App installation if this is is a GitHub-connected project.
             * @default null
             */
            readonly githubAppInstallationId: number | null;
            /** @description The ID of the project */
            readonly handle: string;
            /** @description The name of the project */
            readonly name: string;
            /**
             * @description The name of the GitHub repository if this is is a GitHub-connected project.
             * @default null
             */
            readonly repoName: string | null;
            /**
             * @description The node ID of the GitHub repository if this is is a GitHub-connected project.
             * @default null
             */
            readonly repoNodeId: string | null;
            /**
             * @description The URL of the GitHub repository if this is is a GitHub-connected project.
             * @default null
             */
            readonly repoUrl: string | null;
          };
        };
      };
      default: components["responses"]["error"];
    };
  };
}
