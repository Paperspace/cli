import { logger } from "./logger.ts";
import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";
import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
import { __COMMIT__, __VERSION__ } from "./version.ts";
import * as cache from "./cache.ts";
import * as path from "https://deno.land/std@0.173.0/path/mod.ts";
import { download, unzip } from "./util.ts";
import { bold } from "./ansi.ts";

export class UpgradeCommand extends Command {
  constructor() {
    super();
    this.description(
      () =>
        `Upgrade ${this.getMainCommand().getName()} executable to latest or given version.`,
    )
      .noGlobals()
      .action(async () => {
        const currentVersion: string | undefined = __VERSION__;
        const latestVersion = await this.getLatestVersion();

        if (currentVersion === latestVersion) {
          console.log("Already up-to-date.");
          Deno.exit(0);
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
        await download(asset.url, dest);
        const binPath = await unzip(dest);

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
    if (__COMMIT__ !== "development") {
      const cached = await cache.get("updateAvailable");
      // If we've checked for an update in the last 24 hours, return the cached value
      // Otherwise, check for an update.
      if (
        !cached?.lastChecked ||
        Date.now() - cached.lastChecked > 1000 * 60 * 60 * 24
      ) {
        logger.info("Checking for the latest version...");
        const response = await fetch(
          "https://api.github.com/repos/paperspace/cli/releases/latest",
        );

        if (!response.ok) {
          logger.error("Failed to fetch the latest version.");
          return __VERSION__;
        }

        const json = githubReleaseSchema.parse(await response.json());

        await cache.set("updateAvailable", {
          version: json.tag_name,
          lastChecked: Date.now(),
          assets: json.assets.map((asset) => ({
            name: asset.name,
            url: asset.browser_download_url,
          })),
        });

        logger.info(`Found the latest version: ${json.tag_name}`);
        return json.tag_name;
      }

      if (cached?.version) {
        logger.info(
          `Returning the latest version from cache: ${cached.version}`,
        );

        return cached.version;
      }

      logger.info("Falling back to the current version of the CLI.");
      return __VERSION__;
    }

    logger.info(
      "In development mode. Falling back to the current version of the CLI.",
    );
    return __VERSION__;
  }

  async getLatestVersionAssets(): Promise<
    Array<{ name: string; url: string }>
  > {
    if (__COMMIT__ !== "development") {
      const cached = await cache.get("updateAvailable");
      // If we've checked for an update in the last 24 hours, return the cached value
      // Otherwise, check for an update.
      if (
        !cached?.lastChecked ||
        Date.now() - cached.lastChecked > 1000 * 60 * 60 * 24
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
          lastChecked: Date.now(),
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

      if (cached?.version) {
        logger.info(
          `Returning the latest version from cache: ${cached.version}`,
        );

        return cached.assets;
      }

      logger.info("Falling back to the current version of the CLI.");
      return [];
    }

    logger.info(
      "In development mode. Falling back to the current version of the CLI.",
    );
    return [];
  }
}

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
