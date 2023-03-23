import { client } from "./client.ts";

export const vms = {
  list: client("/vms").get,
  create: client("/vms").post,
  get: client("/vms/{name}").get,
  update: client("/vms/{name}").put,
  delete: client("/vms/{name}").delete,
};
