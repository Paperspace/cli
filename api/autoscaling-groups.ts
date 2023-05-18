import { client } from "./client.ts";

export const autoscalingGroups = {
  create: client("/autoscaling-groups").post,
  get: client("/autoscaling-groups/{id}").get,
  list: client("/autoscaling-groups").get,
  update: client("/autoscaling-groups/{id}").put,
  delete: client("/autoscaling-groups/{id}").delete,
};
