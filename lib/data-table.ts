// deno-lint-ignore-file
import { config } from "../config.ts";
import { fmt, table } from "../zcli.ts";
import { isValidDate } from "./is-valid-date.ts";
import { pick } from "./pick.ts";

export async function* dataTable(
  json: Record<string, unknown>[] | ReadonlyArray<Record<string, unknown>>,
  pickFields?: string[],
): AsyncGenerator<string> {
  const locale = await config.get("locale");

  const rows: string[][] = json.length
    ? [
      Object.keys(pickFields ? pick(json[0], pickFields) : json[0]).map((key) =>
        key.toUpperCase()
      ),
    ]
    : [];

  for (const obj of json) {
    rows.push(
      Object.values(pickFields ? pick(obj, pickFields) : obj).map((value) => {
        return value instanceof Date || isValidDate(value as any)
          ? new Intl.DateTimeFormat(locale, {
            timeStyle: "short",
            dateStyle: "short",
          }).format(Date.parse(value as any))
          : value + "";
      }) as any[],
    );
  }

  if (rows.length) {
    let first = true;

    for (const line of table(rows, { indent: 0, cellPadding: 2 })) {
      if (first) {
        yield `${fmt.colors.bold(line)}`;
      } else {
        yield line;
      }

      first = false;
    }
  }
}
