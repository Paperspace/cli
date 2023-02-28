import { pick } from "./pick.ts";

export function pickJson<
  Json extends Record<string, unknown> | Record<string, unknown>[] | {
    items: Record<string, unknown>[];
    hasMore: boolean;
    nextPage: string | null;
  },
>(
  obj: Json,
  fields?: string[],
): string {
  if (!fields) {
    return JSON.stringify(obj, null, 2);
  }

  if (
    "items" in obj && Array.isArray(obj.items) && "hasMore" in obj &&
    "nextPage" in obj
  ) {
    return JSON.stringify(
      {
        items: obj.items.map((o) => pick(o, fields)),
        hasMore: obj.hasMore,
        nextPage: obj.nextPage,
      },
      null,
      2,
    );
  }

  if (Array.isArray(obj)) {
    return JSON.stringify(obj.map((o) => pickJson(o, fields)), null, 2);
  }

  return JSON.stringify(pick(obj, fields), null, 2);
}
