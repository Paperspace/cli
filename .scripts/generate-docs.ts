import { app } from "../zcli.ts";
import { root } from "../commands/mod.ts";
import {
  zcliJson,
  ZcliJsonCommand,
} from "https://deno.land/x/zcli@1.3.3/zcli-json.ts";

// Read the markdown file adjacent to this script
const json = await zcliJson(app, root);

// Write the JSON to the assets directory
await Deno.writeTextFile(
  ".assets/pspace.json",
  JSON.stringify(json, null, 2),
);

// Also generate markdown for the CLI
let markdown = "";
markdown += "# Paperspace CLI\n\n";
markdown += json.info.description + "\n\n";

function renderCommand(path: string[], command: ZcliJsonCommand) {
  markdown += `## ${path.join(" ")}\n\n`;
  markdown += command.description + "\n\n";
  markdown += "### Usage\n\n";
  markdown += `\`\`\`\n`;
  markdown += `${command.usage}\n`;
  markdown += "\`\`\`\n\n";
  markdown += "### Flags\n\n";
  markdown += "| Name | Aliases | Description | Required |\n";
  markdown += "| --- | --- | --- | --- |\n";
  for (const flag of command.flags) {
    markdown += `| ${flag.name} | ${
      flag.aliases.join(", ")
    } | ${flag.description} | ${flag.required} |\n`;
  }
  markdown += "\n";

  markdown += "### Subcommands\n\n";
  for (const subcommand of command.commands) {
    markdown += `- [${subcommand.name}](#${subcommand.name})\n`;
  }
  for (const subcommand of command.commands) {
    renderCommand([...path, subcommand.name], subcommand);
  }
}

for (const command of json.commands) {
  renderCommand([command.name], command);
}

await Deno.writeTextFile(".assets/pspace.md", markdown);
