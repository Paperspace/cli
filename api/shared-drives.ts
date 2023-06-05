import { client } from "./client.ts";

export const sharedDrives = {
  create: client("/shared-drives").post,
  get: client("/shared-drives/{id}").get,
  list: client("/shared-drives").get,
  delete: client("/shared-drives/{id}").delete,
};
