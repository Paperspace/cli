import { z } from "../../zcli.ts";

export const secretSchema = z.object({
  name: z.string()
    .min(1, "Invalid secret name. Must be at least 1 character.")
    .max(128, "Invalid secret name. Must be less than 128 characters.")
    .regex(
      /^[a-zA-Z][a-zA-Z0-9_]*$/,
      'Invalid secret name. Must start with a letter and only contain letters, numbers, and underscores ("_").',
    )
    .describe(`The name of the secret, e.g. "DB_PASSWORD".`),
  value: z.string().min(
    1,
    "Invalid secret value. Must be at least 1 character.",
  )
    .max(8192, "Invalid secret value. Must be less than 8192 characters."),
});
