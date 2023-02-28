import { flag, flags, z } from "./zcli.ts";

export const fields = flag({
  short: "The fields to include in the response.",
  aliases: ["F"],
}).array(z.string()).optional();

export const paginator = flags({
  limit: flag({
    short: "The number of projects to return in the next page.",
  }).onumber(),
  after: flag({ short: "The cursor to fetch the next results from." })
    .ostring(),
  orderBy: flag({ short: "The field to order projects by." }).enum([
    "dtCreated",
  ]).optional(),
  asc: flag({ short: "Whether to order projects ascending." }).oboolean(),
  desc: flag({ short: "Whether to order projects descending." }).oboolean(),
  fields,
});
