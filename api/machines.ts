import { client } from "./client.ts";

export const machines = {
  create: client("/machines").post,
  get: client("/machines/{id}").get,
  list: client("/machines").get,
  update: client("/machines/{id}").put,
  start: client("/machines/{id}/start").patch,
  stop: client("/machines/{id}/stop").patch,
  restart: client("/machines/{id}/restart").patch,
  delete: client("/machines/{id}").delete,
};
