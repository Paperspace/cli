import { client } from "./client.ts";

export const apps = {
  create: client("/apps").post,
  delete: client("/apps/{id}").delete,
  get: client("/apps/{id}").get,
};
