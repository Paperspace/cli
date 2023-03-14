import { app, completion, fmt, version } from "../zcli.ts";
import { semver } from "../deps.ts";
import { VERSION } from "../version.ts";
import { AppError } from "../errors.ts";
import { logger } from "../logger.ts";
import { env } from "../env.ts";
import { config as appConfig } from "../config.ts";
import { credentials } from "../credentials.ts";
import { getLatestVersion } from "./upgrade/mod.ts";
import { project } from "./project/mod.ts";
import { deployment } from "./deployment/mod.ts";
import { config } from "./config/mod.ts";
import { upgrade } from "./upgrade/mod.ts";
import { signup } from "./signup/mod.ts";
import { console } from "./console/mod.ts";
import { docs } from "./docs/mod.ts";
import { logout } from "./logout/mod.ts";
import { login } from "./login/mod.ts";
import { init } from "./init/mod.ts";
import { up } from "./up/mod.ts";
import { secret } from "./secret/mod.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
export const commands = [
  project,
  deployment,
  upgrade,
  config,
  signup,
  console,
  docs,
  logout,
  login,
  init,
  up,
  secret,
];

export const root = app
  .command("pspace", {
    short: "A CLI for using the Paperspace API.",
    long: `
      A CLI for using the Paperspace API. 

      It allows you to authenticate, launch deployments, do logging, and more.

      * Deploy an ML app with the \`deployment\` command
      * View a deployed app with the \`deployment open\` command
      * Check the status of a deployment with the \`deployment status\` command
      
      Read the full documentation at: ${new URL(
      "/",
      env.get("PAPERSPACE_DOCS_URL"),
    )}
    `,
    commands: [...commands, version(app), completion(app)],
  })
  // This function runs before every command.
  .persistentPreRun(async function ({ flags, ctx }) {
    // We use both environment variables and flags to set certain parameters
    // within the CLI. Flags take precedence over environment variables. So
    // if a flag is set, we'll use that.
    if (flags["log-level"]) {
      env.set("LOG_LEVEL", String(flags["log-level"]));
    }

    if (flags["api-url"]) {
      env.set("PAPERSPACE_API_URL", flags["api-url"]);
    }

    if (flags["api-key"]) {
      env.set("PAPERSPACE_API_KEY", flags["api-key"]);
    }

    // Set a default API key if one is not set. Check to see if a team
    // is set. If it is, we'll use the API key for that team.
    if (!env.get("PAPERSPACE_API_KEY")) {
      const team = await appConfig.get("team");

      if (team) {
        const apiKey = await credentials.get(`keys.${team}`);

        if (apiKey) {
          env.set("PAPERSPACE_API_KEY", apiKey);
        }
      }
    }

    // Check to see if this command requires an API key. If it does, we'll
    // check to see if one is set. If not, we'll throw an error.
    if (ctx.cmd.meta.requireApiKey && !env.get("PAPERSPACE_API_KEY")) {
      const availableTeams = Object.keys(await credentials.get("keys"));
      const hasTeams = availableTeams.length > 0;
      const loginHelper = !hasTeams
        ? `Run "${fmt.colors.bold(`${ctx.root.name} login`)}" to log in.`
        : `Run "${
          fmt.colors.bold(
            `${ctx.root.name} config set team <team name>`,
          )
        }" to choose a team. \n\nAvailable teams: \n › ${
          availableTeams.join(
            "\n › ",
          )
        }`;

      const selectMessage = `You must ${
        hasTeams ? "select a team" : "be logged in"
      } to run this command.`;

      throw new AppError({ message: `${selectMessage}\n${loginHelper}` });
    }
  })
  // This function runs after every command.
  .persistentPostRun(async function* ({ flags, ctx }) {
    // Check for a new version of the CLI after every command and print a
    // message if there is a new version.

    // Bail out if we're in JSON mode because we don't want to print anything
    // in that case.
    if (flags.json || ctx.cmd.name === "upgrade") {
      return;
    }

    const latestVersion = await getLatestVersion(ctx);
    const currentVersion = VERSION;

    if (semver.gte(currentVersion, latestVersion)) {
      return;
    }

    yield `\nNew version available: ${fmt.colors.bold(latestVersion)}`;
    yield fmt.colors.blue(
      `Run "${
        fmt.colors.bold(ctx.root.name + " upgrade")
      }" to upgrade to the latest version.`,
    );
  })
  .run(async function* ({ ctx }) {
    logger.debug("No command provided. Showing help.");

    for (const line of root.help(ctx)) {
      yield line;
    }
  });
