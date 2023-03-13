import { command, Context, fmt, z } from "../../zcli.ts";
import { download } from "../../lib/download.ts";
import { unzip } from "../../lib/unzip.ts";
import { logger } from "../../logger.ts";
import { path } from "../../deps.ts";
import { cache } from "../../cache.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [];

export const upgrade = command("upgrade", {
  short({ root }) {
    return `Upgrade ${fmt.colors.bold(root.name)} to the latest version.`;
  },
  long({ root }) {
    return `
      This command upgrades ${fmt.colors.bold(root.name)} to the latest version.

      If you used a package manager like \`brew\` to install \`${root.name}\`, 
      you should use that to upgrade in order to avoid potential permissions 
      issues. For example, for \`brew\` you can upgrade by running:
      \`\`\`
      brew upgrade ${root.name}
      \`\`\`

      If you installed \`${root.name}\` using the install script, you can upgrade by
      running:
      \`\`\`
      ${root.name} upgrade
      \`\`\`
    `;
  },
  commands: subCommands,
}).run(async function* ({ ctx }) {
  const currentVersion = ctx.meta.version;
  const latestVersion = await _internals.getLatestVersion(ctx);

  if (currentVersion === latestVersion) {
    yield "Already up-to-date.";
    return Deno.exit(0);
  }

  yield `Upgrading from ${currentVersion} to ${latestVersion}...`;
  const execPath = Deno.execPath();
  const execPathDir = path.dirname(execPath);
  logger.info(`Executable path: ${execPath}`);
  logger.info(`Executable path directory: ${execPathDir}`);

  const assets = await _internals.getLatestVersionAssets(ctx);
  let arch: "linux" | "macos" | "macos-arm" | "windows" = "linux";

  if (Deno.build.os === "windows") {
    arch = "windows";
  } else if (Deno.build.os === "darwin") {
    // Mac executable
    const isArm = Deno.build.arch === "aarch64";
    arch = isArm ? "macos-arm" : "macos";
  }

  const asset = assets.find((asset) => {
    return asset.name === `${ctx.root.name}-${arch}.zip`;
  });

  if (!asset) {
    logger.critical(`No asset found for architecture: ${arch}`);
    throw new Error(`No version assets found for architecture: ${arch}`);
  }

  logger.info(`Downloading asset: ${asset.name}`);
  const tmpDir = await Deno.makeTempDir({ prefix: `.${ctx.root.name}-` });
  const dest = path.join(tmpDir, asset.name);
  await _internals.download(asset.url, dest);
  const binDir = await _internals.unzip(dest, tmpDir);

  for await (const bin of Deno.readDir(binDir)) {
    if (bin.isFile) {
      const binPath = path.join(binDir, bin.name);
      logger.info(`Moving ${binPath} to ${execPath}`);
      await Deno.rename(binPath, execPath);
      break;
    }
  }

  logger.info(`Removing ${tmpDir}`);
  await Deno.remove(tmpDir, { recursive: true });

  yield `Successfully upgraded to ${latestVersion}.`;
  yield ` → Run ${fmt.colors.bold(`${ctx.root.name} version`)} to verify.`;
});

export async function getLatestVersion(ctx: Context) {
  if (ctx.meta.commit !== "development") {
    const cached = await cache.get("updateAvailable");
    // If we've checked for an update in the last 24 hours, return the cached value
    // Otherwise, check for an update.
    if (!cached) {
      logger.info("Checking for the latest version...");

      const response = await fetch(
        "https://api.github.com/repos/paperspace/cli/releases/latest",
      );

      if (!response.ok) {
        logger.error("Failed to fetch the latest version.");
        return ctx.meta.version;
      }

      const json = githubReleaseSchema.parse(await response.json());

      await cache.set(
        "updateAvailable",
        {
          version: json.tag_name,
          assets: json.assets.map((asset) => ({
            name: asset.name,
            url: asset.browser_download_url,
          })),
        },
        60 * 60 * 4, // 4 hours
      );

      logger.info(`Found the latest version: ${json.tag_name}`);
      return json.tag_name;
    }

    logger.info(`Returning the latest version from cache: ${cached.version}`);
    return cached.version;
  }

  logger.info(
    "In development mode. Falling back to the current version of the CLI.",
  );

  return ctx.meta.version;
}

export async function getLatestVersionAssets(
  ctx: Context,
): Promise<Array<{ name: string; url: string }>> {
  if (ctx.meta.commit !== "development") {
    const cached = await cache.get("updateAvailable");
    // If we've checked for an update in the last 24 hours, return the cached value
    // Otherwise, check for an update.
    if (!cached) {
      logger.info("Checking for the latest version...");

      const response = await fetch(
        "https://api.github.com/repos/paperspace/cli/releases/latest",
      );

      if (!response.ok) {
        logger.error("Failed to fetch the latest version.");
        return [];
      }

      const json = githubReleaseSchema.parse(await response.json());

      await cache.set(
        "updateAvailable",
        {
          version: json.tag_name,
          assets: json.assets.map((asset) => ({
            name: asset.name,
            url: asset.browser_download_url,
          })),
        },
        60 * 60 * 4, // 4 hours
      );

      logger.info(`Found the latest version: ${json.tag_name}`);

      return json.assets.map((asset) => ({
        name: asset.name,
        url: asset.browser_download_url,
      }));
    }

    logger.info(`Returning the latest version from cache: ${cached.version}`);

    return cached.assets;
  }

  logger.info(
    "In development mode. Falling back to the current version of the CLI.",
  );
  return [];
}

export const _internals = {
  download,
  unzip,
  getLatestVersion,
  getLatestVersionAssets,
};

const githubReleaseSchema = z.object({
  tag_name: z.string(),
  assets: z.array(
    z.object({
      name: z.string(),
      browser_download_url: z.string(),
    }),
  ),
});
