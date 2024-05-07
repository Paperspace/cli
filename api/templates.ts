import { client } from "./client.ts";

export const customTemplates = {
  create: client("/custom-templates").post,
  get: client("/custom-templates/{id}").get,
  list: client("/custom-templates").get,
  delete: client("/custom-templates/{id}").delete,
};

export const osTemplates = {
  list: client("/os-templates").get,
};
