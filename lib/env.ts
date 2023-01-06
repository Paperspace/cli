import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";
import { info } from "./ansi.ts";

export const envSchema = z.object({
  PAPERSPACE_API_KEY: z.string(),
  PAPERSPACE_API_URL: z
    .string()
    .url()
    .default("https://api.paperspace.com/graphql"),
});

export let safeEnv: z.infer<typeof envSchema>;

try {
  safeEnv = envSchema.parse(Deno.env.toObject());
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error(
      `Invalid environment variables:\n${
        Object.keys(
          error.formErrors.fieldErrors,
        )
          .map(
            (key) =>
              `  ${info(key)}: ${error.formErrors.fieldErrors[key].message}`,
          )
          .join("\n")
      }`,
    );
  }

  Deno.exit(1);
}

export const env = safeEnv;
