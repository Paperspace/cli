import { client } from "./client.ts";

export const datasets = {
  create: client("/datasets").post,
  get: client("/datasets/{id}").get,
  list: client("/datasets").get,
  delete: client("/datasets/{id}").delete,
};
