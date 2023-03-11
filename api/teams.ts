import { client } from "./client.ts";

export const teamSecrets = {
  list: client("/teams/{handle}/secrets").get,
  create: client("/teams/{handle}/secrets").post,
  get: client("/teams/{handle}/secrets/{name}").get,
  update: client("/teams/{handle}/secrets/{name}").patch,
  delete: client("/teams/{handle}/secrets/{name}").delete,
};
