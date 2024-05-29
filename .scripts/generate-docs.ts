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

// Also generate markdown for the CLI
async function renderCommand(
  path: string[],
  command: ZcliJsonCommand,
) {
  let markdown = "";
  markdown += command.description + "\n\n";
  markdown += "### Usage\n\n";
  markdown += `\`\`\`\n`;
  markdown += `${command.usage}\n`;
  markdown += "\`\`\`\n\n";
  markdown += "### Flags\n\n";
  markdown += "| Name | Aliases | Description | Required |\n";
  markdown += "| --- | --- | --- | --- |\n";
  for (const flag of command.flags) {
    markdown += `| \`${flag.name}\` | ${
      flag.aliases.join(", ")
    } | ${flag.description} | ${flag.required} |\n`;
  }
  markdown += "\n";

  const hasSubcommands = command.commands.length > 0;

  if (hasSubcommands) {
    markdown += "#### Subcommands\n\n";
    markdown += "| Subcommand | Description |\n";
    markdown += "| --- | --- |\n";
    for (const subcommand of command.commands) {
      markdown += `| \`${subcommand.name}\` | ${subcommand.description} |\n`;
    }
    markdown += "\n";
  }

  const dir = path.slice(0, path.length - (hasSubcommands ? 0 : 1));
  const writePath = [
    ...dir,
    command.name + ".md",
  ].join("/");
  await Deno.mkdir(`.assets/${dir.join("/")}`, { recursive: true });
  await Deno.writeTextFile(
    // edge case, put pspace in pspace/pspace.md
    `.assets/${writePath}`,
    markdown,
    {
      create: true,
    },
  );
  for (const subcommand of command.commands) {
    await renderCommand([...path, subcommand.name], subcommand);
  }
}

for (const command of json.commands) {
  await renderCommand([command.name], command);
}
