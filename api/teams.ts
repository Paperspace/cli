import { client } from "./client.ts";

export const teamSecrets = {
  list: client("/teams/{id}/secrets").get,
  create: client("/teams/{id}/secrets").post,
  get: client("/teams/{id}/secrets/{name}").get,
  update: client("/teams/{id}/secrets/{name}").patch,
  delete: client("/teams/{id}/secrets/{name}").delete,
};
