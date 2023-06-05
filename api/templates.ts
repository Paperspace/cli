import { client } from "./client.ts";

export const templates = {
  create: client("/templates").post,
  get: client("/templates/{id}").get,
  list: client("/templates").get,
  delete: client("/templates/{id}").delete,
};
