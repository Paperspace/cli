import { client } from "./client.ts";

export const publicIps = {
  claim: client("/public-ips").post,
  list: client("/public-ips").get,
  assign: client("/public-ips/{ip}").put,
  release: client("/public-ips/{ip}").delete,
};
