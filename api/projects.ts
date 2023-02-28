import { client } from "./client.ts";

export const projects = {
  list: client("/projects").get,
  create: client("/projects").post,
  get: client("/projects/{handle}").get,
  update: client("/projects/{handle}").put,
  // delete: client("/projects/{handle}").delete,
};
