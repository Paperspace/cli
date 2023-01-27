import { logger } from "./logger.ts";
import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";
import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
import * as cache from "./cache.ts";
import * as path from "https://deno.land/std@0.174.0/path/mod.ts";
import { download, unzip } from "./util.ts";
import { bold } from "./ansi.ts";
import { __VERSION__ } from "./version.ts";

export class UpgradeCommand extends Command {
  constructor() {
    super();
    this.description(
      () =>
        `Upgrade ${
          bold(this.getMainCommand().getName())
        } executable to the latest version.`,
    )
      .noGlobals()
      .action(async () => {
        const currentVersion: string | undefined = this.getVersion();
        const latestVersion = await this.getLatestVersion();

        if (currentVersion === latestVersion) {
          console.log("Already up-to-date.");
          return Deno.exit(0);
        }

        console.log(`Upgrading from ${currentVersion} to ${latestVersion}...`);
        const execPath = Deno.execPath();
        const execPathDir = path.dirname(execPath);
        logger.info(`Executable path: ${execPath}`);
        logger.info(`Executable path directory: ${execPathDir}`);

        const assets = await this.getLatestVersionAssets();
        let arch: "linux" | "macos" | "macos-arm" | "windows" = "linux";

        if (Deno.build.os === "windows") {
          arch = "windows";
        } else if (Deno.build.os === "darwin") {
          // Mac executable
          const isArm = Deno.build.arch === "aarch64";
          arch = isArm ? "macos-arm" : "macos";
        }

        const asset = assets.find((asset) => {
          return asset.name === `pspace-${arch}.zip`;
        });

        if (!asset) {
          logger.critical(`No asset found for architecture: ${arch}`);
          throw new Error(`No version assets found for architecture: ${arch}`);
        }

        logger.info(`Downloading asset: ${asset.name}`);
        const tmpDir = await Deno.makeTempDir({ prefix: ".pspace-" });
        const dest = path.join(tmpDir, asset.name);
        await _internals.download(asset.url, dest);
        const binPath = await _internals.unzip(dest);

        logger.info(`Moving ${binPath} to ${execPath}`);
        await Deno.rename(binPath, execPath);

        logger.info(`Removing ${tmpDir}`);
        await Deno.remove(tmpDir, { recursive: true });

        console.log(`Successfully upgraded to ${latestVersion}.`);
        console.log(
          `  Run ${
            bold(`${this.getMainCommand().getName()} --version`)
          } to verify.`,
        );
      });
  }

  async getLatestVersion(): Promise<string> {
    if (this.getCommit() !== "development") {
      const cached = await cache.get("updateAvailable");
      // If we've checked for an update in the last 24 hours, return the cached value
      // Otherwise, check for an update.
      if (
        !cached?.expires ||
        (Date.now() > cached.expires)
      ) {
        logger.info("Checking for the latest version...");
        const response = await fetch(
          "https://api.github.com/repos/paperspace/cli/releases/latest",
        );

        if (!response.ok) {
          logger.error("Failed to fetch the latest version.");
          return this.getVersion() ?? __VERSION__;
        }

        const json = githubReleaseSchema.parse(await response.json());

        await cache.set("updateAvailable", {
          version: json.tag_name,
          expires: Date.now() + 1000 * 60 * 60 * 24,
          assets: json.assets.map((asset) => ({
            name: asset.name,
            url: asset.browser_download_url,
          })),
        });

        logger.info(`Found the latest version: ${json.tag_name}`);
        return json.tag_name;
      }

      logger.info(
        `Returning the latest version from cache: ${cached.version}`,
      );

      return cached.version;
    }

    logger.info(
      "In development mode. Falling back to the current version of the CLI.",
    );
    return this.getVersion() ?? __VERSION__;
  }

  async getLatestVersionAssets(): Promise<
    Array<{ name: string; url: string }>
  > {
    if (this.getCommit() !== "development") {
      const cached = await cache.get("updateAvailable");
      // If we've checked for an update in the last 24 hours, return the cached value
      // Otherwise, check for an update.
      if (
        !cached?.expires ||
        (Date.now() > cached.expires)
      ) {
        logger.info("Checking for the latest version...");
        const response = await fetch(
          "https://api.github.com/repos/paperspace/cli/releases/latest",
        );

        if (!response.ok) {
          logger.error("Failed to fetch the latest version.");
          return [];
        }

        const json = githubReleaseSchema.parse(await response.json());

        await cache.set("updateAvailable", {
          version: json.tag_name,
          expires: Date.now() + 1000 * 60 * 60 * 24,
          assets: json.assets.map((asset) => ({
            name: asset.name,
            url: asset.browser_download_url,
          })),
        });

        logger.info(`Found the latest version: ${json.tag_name}`);
        return json.assets.map((asset) => ({
          name: asset.name,
          url: asset.browser_download_url,
        }));
      }

      logger.info(
        `Returning the latest version from cache: ${cached.version}`,
      );

      return cached.assets;
    }

    logger.info(
      "In development mode. Falling back to the current version of the CLI.",
    );
    return [];
  }

  getCommit() {
    return this.getMeta("Commit");
  }
}

export const _internals = { download, unzip };

const githubReleaseSchema = z
  .object({
    tag_name: z.string(),
    assets: z.array(
      z.object({
        name: z.string(),
        browser_download_url: z.string(),
      }),
    ),
  });
