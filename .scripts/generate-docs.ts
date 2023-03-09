import { app } from "../zcli.ts";
import { root } from "../commands/mod.ts";
import { zcliJson } from "https://deno.land/x/zcli@1.3.2/zcli-json.ts";

// Read the markdown file adjacent to this script
const json = await zcliJson(app, root);

// Write the JSON to the assets directory
await Deno.writeTextFile(
  ".assets/pspace.json",
  JSON.stringify(json, null, 2),
);
