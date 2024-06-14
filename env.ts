import { env as baseEnv, logLevels, z } from "./zcli.ts";

export const env = baseEnv({
  /**
   * A Paperspace public API Key
   */
  PAPERSPACE_API_KEY: baseEnv.string().optional(),
  /**
   * A custom Paperspace API URL
   */
  PAPERSPACE_API_URL: baseEnv
    .string()
    .url()
    .default("https://api.paperspace.com/v1"),
  /**
   * A custom Paperspace Console URL
   */
  PAPERSPACE_CONSOLE_URL: baseEnv
    .string()
    .url()
    .default(`https://console.paperspace.com/`),
  /**
   * A custom Paperspace Console URL
   */
  PAPERSPACE_DOCS_URL: baseEnv
    .string()
    .url()
    .default(`https://docs.paperspace.com/`),
  /**
   * Run in a particular log level
   */
  LOG_LEVEL: z.enum(logLevels).optional(),
  /**
   * Disable color output
   */
  NO_COLOR: baseEnv.bool().optional(),
  /**
   * The home directory for the user
   */
  HOME: baseEnv.string().default(""),
});

export type Env = ReturnType<typeof env["toObject"]>;
