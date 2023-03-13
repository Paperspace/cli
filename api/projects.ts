import { client } from "./client.ts";

export const projects = {
  list: client("/projects").get,
  create: client("/projects").post,
  get: client("/projects/{handle}").get,
  update: client("/projects/{handle}").put,
  // delete: client("/projects/{handle}").delete,
};

export const projectSecrets = {
  list: client("/projects/{handle}/secrets").get,
  create: client("/projects/{handle}/secrets").post,
  get: client("/projects/{handle}/secrets/{name}").get,
  update: client("/projects/{handle}/secrets/{name}").patch,
  delete: client("/projects/{handle}/secrets/{name}").delete,
};
