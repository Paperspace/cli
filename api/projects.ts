import { client } from "./client.ts";

export const projects = {
  list: client("/projects").get,
  create: client("/projects").post,
  get: client("/projects/{id}").get,
  update: client("/projects/{id}").put,
  delete: client("/projects/{id}").delete,
};

export const projectSecrets = {
  list: client("/projects/{id}/secrets").get,
  create: client("/projects/{id}/secrets").post,
  get: client("/projects/{id}/secrets/{name}").get,
  update: client("/projects/{id}/secrets/{name}").patch,
  delete: client("/projects/{id}/secrets/{name}").delete,
};

export const projectTags = {
  list: client("/projects/{id}/tags").get,
  create: client("/projects/{id}/tags").post,
  delete: client("/projects/{id}/tags").delete,
};
