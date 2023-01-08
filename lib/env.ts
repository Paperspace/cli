import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";
import { info } from "./ansi.ts";

const bool = z
  .string()
  .transform((value) => {
    return value === "true" || value === "1";
  });

export const envSchema = z.object({
  PAPERSPACE_API_KEY: z.string().optional(),
  PAPERSPACE_API_URL: z
    .string()
    .url()
    .default("https://api.paperspace.com/graphql"),
  HOME: z.string(),
  DEBUG: bool.optional(),
  NO_COLOR: bool.optional(),
});

export const env = {
  get<Name extends keyof Env>(name: Name): Env[Name] {
    let value: Env[Name];

    try {
      value = envSchema.shape[name].parse(Deno.env.get(name)) as Env[Name];
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error(
          `Invalid environment variables:\n${
            Object.keys(
              error.formErrors.fieldErrors,
            )
              .map(
                (key) =>
                  `  ${info(key)}: ${
                    error.formErrors.fieldErrors[key].message
                  }`,
              )
              .join("\n")
          }`,
        );
      }

      Deno.exit(1);
    }

    return value;
  },

  set<Name extends keyof Env>(name: Name, value: Env[Name]): void {
    if (value === undefined) {
      return Deno.env.delete(name);
    }

    Deno.env.set(name, value.toString());
  },
};

export type Env = z.infer<typeof envSchema>;
