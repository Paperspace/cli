import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";
import {
  Command,
  CompletionsCommand,
} from "https://deno.land/x/cliffy@v0.25.6/command/mod.ts";
import { __COMMIT__, __VERSION__ } from "./version.ts";
import { success } from "./ansi.ts";
import { get } from "./deployments/get.ts";

/**
 * @see https://cliffy.io/docs@v0.25.0/command/commands
 */
export const cli = new Command()
  .name("pspace")
  .version(`${__VERSION__} (${__COMMIT__})`)
  .description(
    "The CLI for Paperspace. Check out the docs at https://docs.paperspace.com/cli",
  );

/**
 * Custom parsers
 */

cli.type("url", ({ value }) => {
  return z.string().url().parse(value);
});

/**
 * Commands
 */

cli
  .command("get <url>", "Make a GET request to a URL")
  .action(async (_opt, u) => {
    const result = await get(u);
    console.log("\n" + success(JSON.stringify(result, null, 2)));
  });

/**
 * Adds a command to generate completions for various shells
 */

cli.command("completions", new CompletionsCommand());
