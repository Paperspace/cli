import { client } from "./client.ts";

export const snapshots = {
  create: client("/snapshots").post,
  list: client("/snapshots").get,
  restore: client("/snapshots/{id}/restore").post,
  delete: client("/snapshots/{id}").delete,
};
