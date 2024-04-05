import { client } from "./client.ts";

export const storageProviders = {
  create: client("/storage").post,
  get: client("/storage/{id}").get,
  list: client("/storage").get,
  update: client("/storage/{id}").put,
  delete: client("/storage/{id}").delete,
};
