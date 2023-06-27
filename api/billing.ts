import { client } from "./client.ts";

export const billingAccountStanding = {
  get: client("/billing/account-standing").get,
};
