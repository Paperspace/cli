import { zcliDoc } from "https://deno.land/x/zcli@1.3.1/zcli-doc.ts";
import { app } from "../zcli.ts";
import { root } from "../commands/mod.ts";

// Read the markdown file adjacent to this script
const description = await Deno.readTextFile(".scripts/pspace.md");

await zcliDoc(app, root, {
  output: "README.md",
  title: "",
  description,
  ignoreCommands(_cmd, path) {
    return path.length > 1 && path.includes("help");
  },
});
