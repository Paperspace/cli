import { app } from "../zcli.ts";
import { root } from "../commands/mod.ts";
import { zcliJson, ZcliJsonCommand } from "./zcli-json.ts";

// Read the markdown file adjacent to this script
const json = await zcliJson(app, root);

// Write the JSON to the assets directory
await Deno.writeTextFile(
  ".assets/pspace.json",
  JSON.stringify(json, null, 2),
);

let markdown = "";

// Also generate markdown for the CLI
async function renderCommand(path: string[], command: ZcliJsonCommand) {
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

  markdown += "#### Subcommands\n\n";
  for (const subcommand of command.commands) {
    markdown += `- [${subcommand.name}](#${subcommand.name})\n`;
  }

  for (const subcommand of command.commands) {
    await renderCommand([...path, subcommand.name], subcommand);
  }
}

for (const command of json.commands) {
  await Deno.mkdir(`.assets/${command.name}`, {
    recursive: true,
  });
  for (const subcommand of command.commands) {
    markdown = "";
    await renderCommand([command.name, subcommand.name], subcommand);
    await Deno.writeTextFile(
      `.assets/${command.name}/${subcommand.name}.md`,
      markdown,
      {
        create: true,
      },
    );
  }
  markdown = "";
  await renderCommand([command.name], command);
  await Deno.writeTextFile(
    // edge case, put pspace in pspace/pspace.md
    `.assets/${command.name}/${command.name}.md`,
    markdown,
    {
      create: true,
    },
  );
}
