import { client } from "./client.ts";

export const datasets = {
  create: client("/datasets").post,
  get: client("/datasets/{id}").get,
  list: client("/datasets").get,
  delete: client("/datasets/{id}").delete,
  update: client("/datasets/{id}").put,
};

export const datasetVersions = {
  create: client("/datasets/{datasetId}/versions").post,
  get: client("/datasets/{datasetId}/versions/{version}").get,
  list: client("/datasets/{datasetId}/versions").get,
  delete: client("/datasets/{datasetId}/versions/{version}").delete,
  update: client("/datasets/{datasetId}/versions/{version}").put,
};
