import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";

export const envSchema = z.object({
  PAPERSPACE_API_KEY: z.string(),
  PAPERSPACE_API_URL: z
    .string()
    .url()
    .default("https://api.paperspace.com/graphql"),
});

export const env = envSchema.parse(Deno.env.toObject());
