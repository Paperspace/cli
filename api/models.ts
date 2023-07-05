import { client } from "./client.ts";

export const models = {
  list: client("/models").get,
  create: client("/models").post,
  get: client("/models/{id}").get,
  delete: client("/models/{id}").delete,
};
