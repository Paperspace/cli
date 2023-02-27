import { config, z } from "./zcli.ts";

export const CREDENTIALS_PATH = `${
  Deno.env.get(
    "HOME",
  )
}/.paperspace/credentials.toml`;

/**
 * This stores the credentials for each team. The keys are the team names, and the
 * values are the API keys for each team.
 */
export const credentials = config(
  {
    version: z.literal(1).default(1),
    keys: z.record(z.string()).default({}),
  },
  {
    defaultConfig: {
      version: 1,
      keys: {},
    },
    path: CREDENTIALS_PATH,
  },
);
