import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";
import {
  ArgumentValue,
  Command,
  CompletionsCommand,
  EnumType,
  ValidationError,
} from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
import { Input } from "https://deno.land/x/cliffy@v0.25.7/prompt/mod.ts";
import { open } from "https://deno.land/x/open@v0.0.5/index.ts";
import { Table } from "https://deno.land/x/cliffy@v0.25.7/table/mod.ts";
import * as obj from "https://esm.sh/object-path-immutable@4.1.2";
import openEditor from "https://esm.sh/open-editor@4.0.0";

import { formattedVersion } from "./version.ts";
import * as credentials from "./credentials.ts";
import * as config from "./config.ts";
import { bold, info } from "./ansi.ts";
import { act } from "./act.ts";
import { select } from "./select.ts";

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
  .globalOption(
    "--api-key <api-key:string>",
    `The Paperspace API key to use for authenticating requests.`,
  )
  .globalOption(
    "--api-url <api-url:url>",
    `The URL for the Paperspace API. Defaults to "https://api.paperspace.com/graphql".`,
  )
  .globalOption("--debug", `Enable debug logging.`)
  .globalOption("--json", `Display the output as JSON.`)
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
  )
  .globalEnv("DEBUG=<value:boolean>", `Enable debug logging.`, {
    required: false,
    hidden: true,
  })
  .globalEnv("NO_COLOR=<value:boolean>", `Disable colors in the output.`)
  .action(() => {
    cli.showHelp();
  });

/**
 * Custom types
 */

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
 * @see https://cliffy.io/docs@v0.25.7/command/commands
 */

/**
 * Deployments
 */
cli
  .command(
    "deployment, deploy",
    new Command()
      .command("init")
      .action(() => {
        console.log("init");
      })
      .command("create")
      .action(() => {
        console.log("create");
      })
      .command("update")
      .action(() => {
        console.log("update");
      })
      .command("delete")
      .action(() => {
        console.log("delete");
      })
      .command("list")
      .action(() => {
        console.log("list");
      })
      .command("get")
      .action(() => {
        console.log("list");
      }),
  )
  .action(function () {
    this.showHelp();
  });

/**
 * Notebooks
 */
cli
  .command(
    "notebook, nb",
    new Command()
      .command("init")
      .action(() => {
        console.log("init");
      })
      .command("create")
      .action(() => {
        console.log("create");
      })
      .command("update")
      .action(() => {
        console.log("update");
      })
      .command("delete")
      .action(() => {
        console.log("delete");
      })
      .command("list")
      .action(() => {
        console.log("list");
      })
      .command("get")
      .action(() => {
        console.log("get");
      }),
  )
  .action(function () {
    this.showHelp();
  });

/**
 * Machines
 */
cli
  .command(
    "machine, vm",
    new Command()
      .command("init")
      .action(() => {
        console.log("init");
      })
      .command("create")
      .action(() => {
        console.log("create");
      })
      .command("update")
      .action(() => {
        console.log("update");
      })
      .command("delete")
      .action(() => {
        console.log("delete");
      })
      .command("list")
      .action(() => {
        console.log("list");
      })
      .command("get")
      .action(() => {
        console.log("list");
      }),
  )
  .action(function () {
    this.showHelp();
  });

/**
 * Login
 */
cli
  .command(
    "login",
    `
    Log in to the CLI using your Paperspace API key or by opening the web console.
    `,
  )
  .arguments("[api-key:string]")
  .action(async (_opt, apiKey) => {
    if (!apiKey) {
      open(`https://console.paperspace.com/account/api`);

      const token = await Input.prompt({
        message: "Enter the token:",
      });

      console.log("token", token);
    } else {
      credentials.set("google-saml-prod", apiKey);
    }
  });

/**
 * Logout
 */
cli
  .command(
    "logout",
    `
    Log out of the CLI for the current team, a specific team, or all teams.
    `,
  )
  .arguments("[team:string]")
  .option("--all", "Log out of all teams.")
  .action(async (_opt, team) => {
    if (_opt.all) {
      return await credentials.clear();
    }

    if (team) {
      return await credentials.remove(team);
    }

    const currentTeam = await config.get("team");

    if (currentTeam) {
      return await credentials.remove(currentTeam);
    }
  });

/**
 * Sign up
 */
cli
  .command(
    "signup",
    `
  Sign up for a Paperspace account.
  `,
  )
  .action(() => {
    open(`https://console.paperspace.com/signup`);
  });

/**
 * Config
 */
cli
  .command(
    "config",
    new Command()
      .command("set")
      .description(
        `
        Set a configuration value at a given path.
        `,
      )
      .example(`Set the team to "my-team"`, "pspace config set team my-team")
      .type("key", new EnumType(config.paths))
      .arguments("<key:key> <value:string>")
      .action(
        act(async (_opt, key, value) => {
          await config.set(key, value);
          const parsedValue = await config.get(key);
          return { value: parsedValue };
        }),
      )
      .command("get")
      .description(
        `
        Get a configuration value at a given path.
        `,
      )
      .example(`Get the current team`, "pspace config get team")
      .type("key", new EnumType(config.paths))
      .arguments("[key:key]")
      .action(
        act(async (_opt, key) => {
          if (!key) {
            key = await select({
              label: "Select a key to get the value for:",
              options: config.paths,
            });
          }
          const value = await config.get(key);
          return { value };
        }),
      )
      .command("delete")
      .description(
        `
        Delete a configuration value at a given path.
        `,
      )
      .example(`Delete the current team`, "pspace config delete team")
      .type("key", new EnumType(config.paths))
      .arguments("<key:key>")
      .action(async (_opt, key) => {
        await config.remove(key);
      })
      .command("list")
      .description(
        `
        List all configuration values with their paths.
        `,
      )
      .action(
        act(async () => {
          const cfg = await config.read();

          const table = new Table().header([bold("Key"), bold("Value")]).body(
            config.paths.reduce((acc, key) => {
              acc.push([info(key), obj.get(cfg, key)]);
              return acc;
            }, [] as [string, string][]),
          );

          return { human: table.padding(4).toString(), json: cfg };
        }),
      )
      .command("open")
      .description(
        `
        Open the configuration file in a "nano" editor.
        `,
      )
      .action(() => {
        openEditor([config.CONFIG_PATH], { editor: "nano" });
      }),
  )
  .description(
    `
    Manage global configuration values stored in: "${config.CONFIG_PATH}".
    `,
  )
  .action(function () {
    this.showHelp();
  });

/**
 * Adds a command to generate completions for various shells
 */
cli.command("completions", new CompletionsCommand());

/**
 * Console
 */
cli
  .command(
    "console",
    `
    Open the Paperspace web console.
    `,
  )
  .action(() => {
    open(`https://console.paperspace.com/`);
  });

/**
 * Docs
 */
cli
  .command(
    "docs",
    `
    Open Paperspace documention in your default browser.
    `,
  )
  .type(
    "docsPage",
    new EnumType(
      [
        "deploy",
        "nb",
        "vm",
        "deployment",
        "notebook",
        "machine",
      ] as const,
    ),
  )
  .arguments("[page:docsPage]")
  .action((_opt, page) => {
    const url = new URL(DOCS_ENDPOINT);

    if (page) {
      url.pathname = {
        deploy: "/gradient/deployments/",
        deployment: "/gradient/deployments/",
        nb: "/gradient/notebooks/",
        notebook: "/gradient/notebooks/",
        vm: "/core/compute/",
        machine: "/core/compute/",
      }[page] ?? "/";
    }

    open(url + "");
  });

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
