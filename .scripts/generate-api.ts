import openapiTS from "npm:openapi-typescript";
import { path } from "../deps.ts";
import { parse } from "https://deno.land/std@0.179.0/flags/mod.ts";

const flags = parse(Deno.args);
const url = flags._[0] ?? "https://api.paperspace.com/v1/openapi.json";

const output = await openapiTS(url, {
  pathParamsAsTypes: true,
  supportArrayLength: true,
  alphabetize: true,
  immutableTypes: true,
  defaultNonNullable: true,
  transform(schemaObject) {
    if ("format" in schemaObject && schemaObject.format === "date-time") {
      return "Date";
    }
  },
});

await Deno.writeTextFile(path.join(Deno.cwd(), "api/openapi.ts"), output);
