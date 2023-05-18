import { client } from "./client.ts";

export const machineEvents = {
  get: client("/machine-events/{id}").get,
  list: client("/machine-events").get,
};
