import { client } from "./client.ts";

export const privateNetworks = {
  create: client("/private-networks").post,
  get: client("/private-networks/{id}").get,
  list: client("/private-networks").get,
  delete: client("/private-networks/{id}").delete,
};
