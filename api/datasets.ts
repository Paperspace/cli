import { client } from "./client.ts";

export const datasets = {
  list: client("/datasets").get,
  create: client("/datasets").post,
  get: client("/datasets/{id}").get,
  update: client("/datasets/{id}").patch,
  delete: client("/datasets/{id}").delete,
};
