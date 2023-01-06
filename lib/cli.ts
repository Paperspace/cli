import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";
import {
  ArgumentValue,
  Command,
  CompletionsCommand,
  EnumType,
  ValidationError,
} from "https://deno.land/x/cliffy@v0.25.6/command/mod.ts";
import { open } from "https://deno.land/x/open@v0.0.5/index.ts";
import { formattedVersion } from "./version.ts";
import { success } from "./ansi.ts";
import { get } from "./deployments/get.ts";

const DOCS_ENDPOINT = "https://docs.paperspace.com";

export const cli = new Command()
  .name("pspace")
  .usage(`<command> [options] `)
  .version(formattedVersion)
  .description(
    `
    A CLI for using the Paperspace API. Read the full documentation at "${DOCS_ENDPOINT}/cli".
    `,
  )
  .type("url", zodType(z.string().url()))
  .type("format", new EnumType(["json", "human"] as const))
  .globalOption(
    "--api-key <apiKey:string>",
    `The Paperspace API key to use for authenticating requests.`,
  )
  .globalOption(
    "--api-url <apiUrl:url>",
    `The URL for the Paperspace API. Defaults to "https://api.paperspace.com/graphql".`,
  )
  .globalOption(
    "-f, --format <format:format>",
    `Display the output in a specific format. Defaults to "human".`,
  )
  .globalOption("--no-color", `Disable colors in the output.".`)
  .globalOption("--debug", `Enable debug logging.`)
  .globalEnv(
    "PAPERSPACE_API_KEY=<value:string>",
    `The Paperspace API key to use for authenticating requests.`,
  )
  .globalEnv(
    "PAPERSPACE_API_URL=<value:string>",
    `The URL for the Paperspace API. Defaults to "https://api.paperspace.com/graphql"."`,
    {
      hidden: true,
    },
  );

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
          },
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
    `,
  )
  .type("docsPage", new EnumType(["deploy", "nb", "vm"] as const))
  .arguments("[page:docsPage]")
  .action((_opt, page) => {
    const url = new URL(DOCS_ENDPOINT);

    if (page) {
      url.pathname = {
        deploy: "/gradient/deployments/",
        nb: "/gradient/notebooks/",
        vm: "/core/compute/",
      }[page] ?? "/";
    }

    open(url + "");
  });

cli
  .command(
    "deploy",
    `
      Effortlessly deploy and manage ML apps.
    `,
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

/**
 * Adds a command to upgrade the CLI

cli.command(
  "upgrade",
  new UpgradeCommand({ provider: ["choco", "brew", "curl", "scoop"] })
);

async function checkVersion() {
  const mainCommand = cli.getMainCommand();
  const upgradeCommand = mainCommand.getCommand("upgrade");
  const latestVersion = await upgradeCommand.getLatestVersion();
  const currentVersion = mainCommand.getVersion();

  if (currentVersion === latestVersion) {
    return;
  }

  const versionHelpText = `(New version available: ${latestVersion}. Run '${mainCommand.getName()} upgrade' to upgrade to the latest version!)`;
  console.log(warn(versionHelpText));
}
 */
