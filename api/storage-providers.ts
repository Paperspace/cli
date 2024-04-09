import { client } from "./client.ts";

export const storageProviders = {
  create: client("/storage-providers").post,
  get: client("/storage-providers/{id}").get,
  list: client("/storage-providers").get,
  update: client("/storage-providers/{id}").put,
  delete: client("/storage-providers/{id}").delete,
};
