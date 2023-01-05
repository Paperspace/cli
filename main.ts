import { colors } from "https://deno.land/x/cliffy@v0.25.6/ansi/mod.ts";
import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";
import {
  Command,
  CompletionsCommand,
} from "https://deno.land/x/cliffy@v0.25.6/command/mod.ts";

const error = colors.bold.red;
const warn = colors.bold.yellow;
const info = colors.bold.cyan;
const success = colors.bold.green;

const __VERSION__ = "0.0.1";

if (import.meta.main) {
  const url = z.string().url();
  /**
   * @see https://cliffy.io/docs@v0.25.0/command/commands
   */
  const cli = new Command()
    .name("pspace")
    .version(__VERSION__)
    .description(
      "The CLI for Paperspace. Check out the docs at https://docs.paperspace.com/cli"
    );

  // Custom parsers
  cli.type("url", ({ value }) => {
    return url.parse(value);
  });

  // Make a request to a URL
  cli
    .command("get <url>", "Make a GET request to a URL")
    .action(async (_opt, u) => {
      const result = await get(u);
      console.log("\n" + success(JSON.stringify(result, null, 2)));
    });

  // Adds a command to generate completions for various shells
  cli.command("completions", new CompletionsCommand());

  await cli.parse(Deno.args);
}

export async function get(url: string) {
  console.log("GET", info(url));
  const result = await fetch(url);
  console.log("Status", info(`${result.status} ${result.statusText}`));
  return await result.json();
}
