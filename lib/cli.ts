import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";
import {
  Command,
  EnumType,
  CompletionsCommand,
  ValidationError,
  ArgumentValue,
} from "https://deno.land/x/cliffy@v0.25.6/command/mod.ts";
import { open } from "https://deno.land/x/open@v0.0.5/index.ts";
import { __COMMIT__, __VERSION__ } from "./version.ts";
import { success } from "./ansi.ts";
import { get } from "./deployments/get.ts";

export const cli = new Command()
  .name("pspace")
  .usage(`<command> [options] `)
  .version(`${__VERSION__} (${__COMMIT__})`)
  .description(
    `
    A CLI for using the Paperspace API. Read the full documentation at "https://docs.paperspace.com/cli".
    `
  )
  .type("url", zodType(z.string().url()))
  .type("format", new EnumType(["json", "human"] as const))
  .globalOption(
    "--api-key <apiKey:string>",
    "The Paperspace API key to use for authenticating requests."
  )
  .globalOption(
    "--api-url <apiUrl:url>",
    `The URL for the Paperspace API. Defaults to "https://api.paperspace.com/graphql".`
  )
  .globalOption(
    "-f, --format <format:format>",
    `Display the output in a specific format. Defaults to "human".`
  )
  .globalOption("--no-color", `Disable colors in the output.".`)
  .globalOption("--debug", `Enable debug logging.`);

const DOCS_ENDPOINT = "https://docs.paperspace.com/";

/**
 * Custom types
 */
const urlType = zodType(z.string().url());

function zodType(schema: z.ZodSchema) {
  return ({ name, value }: ArgumentValue) => {
    try {
      return schema.parse(value);
    } catch (err) {
      if (err instanceof z.ZodError) {
        throw new ValidationError(
          `Argument "${name}" is invalid: ${err.issues[0].message}`,
          {
            exitCode: 1,
          }
        );
      }

      throw err;
    }
  };
}

/**
 * Commands
 * @see https://cliffy.io/docs@v0.25.6/command/commands
 */

cli
  .command(
    "docs",
    `
      Open Paperspace documention in your default browser.
    `
  )
  .type("docsPage", new EnumType(["deploys", "nbs", "vms"] as const))
  .arguments("[page:docsPage]")
  .action((_opt, page) => {
    const url = new URL(DOCS_ENDPOINT);

    if (page) {
      url.pathname =
        {
          deploys: "/gradient/deployments/",
          nbs: "/gradient/notebooks/",
          vms: "/core/compute/",
        }[page] ?? "/";
    }

    open(url + "");
  });

cli
  .command(
    "deploys",
    `
      Effortlessly deploy and manage ML apps.
    `
  )

  .type("url", urlType)
  .arguments("<url:url>")
  .action(async (_opt, u) => {
    const result = await get(u);
    console.log("\n" + success(JSON.stringify(result, null, 2)));
  });

/**
 * Adds a command to generate completions for various shells
 */
cli.command("completions", new CompletionsCommand());
