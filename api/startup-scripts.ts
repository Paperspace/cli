import { client } from "./client.ts";

export const startupScripts = {
  create: client("/startup-scripts").post,
  get: client("/startup-scripts/{id}").get,
  list: client("/startup-scripts").get,
  update: client("/startup-scripts/{id}").put,
  assign: client("/startup-scripts/{id}/assign").post,
  unassign: client("/startup-scripts/{id}/unassign").post,
  delete: client("/startup-scripts/{id}").delete,
};
