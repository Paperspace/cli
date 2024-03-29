import { DegitError } from "../errors.ts";
import { asserts } from "./asserts.ts";
import { download } from "./download.ts";
import { untar } from "./untar.ts";
import { path } from "../deps.ts";
import { logger } from "../logger.ts";
import { env } from "../env.ts";
import { intl } from "../zcli.ts";

/**
 * Adapted to Deno from Rich Harris's `degit` library.
 *
 * Make a copy of a git repository. When you run degit some-user/some-repo,
 * it will find the latest commit on https://github.com/some-user/some-repo
 * and download the associated tar file to a temporary directory.
 *
 * This is much quicker than using git clone, because you're not downloading
 * the entire git history.
 *
 * @param config - The degit configuration
 */
export async function degit(
  config: DegitConfig,
) {
  const { dest = Deno.cwd(), mode = "tar" } = config;
  const source = typeof config.src === "string"
    ? parse(config.src)
    : config.src;

  if (mode === "git" || source.mode === "git") {
    const ssh = `git@${source.host}:${source.owner}/${source.repo}.git`;
    logger.info(`Using 'git' to clone template.`);
    logger.info(`  ref: ${source.ref}`);
    logger.info(`  source: ${source}`);

    const cmd = [
      "git",
      "clone",
      "--depth=1",
      source.ref ? `--branch=${source.ref}` : "",
      ssh,
      dest,
    ];

    logger.info(cmd.join(" "));
    // deno-lint-ignore no-deprecated-deno-api
    const proc = Deno.run({
      cmd,
      stdout: "null",
      stderr: "piped",
    });
    const status = await proc.status();

    asserts(
      status.success,
      new DegitError({
        message: new TextDecoder().decode(await proc.stderrOutput())
          .trimEnd()
          .split("\n").filter((line) => !line.startsWith("Cloning into"))
          .join(
            "\n",
          ),
        exitCode: status.code,
      }),
    );
    logger.info(`Cloned template.`);
    // Remove the .git directory
    await Deno.remove(path.join(dest, ".git"));
    logger.info(`Removed .git directory from template.`);
  } else {
    logger.info(`Using 'tar' to download template.`);
    logger.info(`  ref: ${source.ref}`);
    logger.info(`  host: ${source.host}`);
    logger.info(`  subdir: ${source.subdir}`);
    // Download the tarball
    await downloadTarball(source, dest, config);
  }
}

/**
 * Parse a template string into a template object.
 *
 * @param template - The template string to parse
 * @returns A parsed template object
 */
export function parse(template: string): DegitSource {
  if (template.startsWith("https://")) {
    const uri = new URL(template);
    const host = uri.host;
    const [owner, repo] = uri.pathname.split("/").slice(1);
    const ref = uri.hash.slice(1) || undefined;

    asserts(
      isValidHost(host),
      new DegitError({
        message: `Invalid host: ${host}. Must be one of ${
          intl.list(Object.values(SOURCE_TO_HOST), { type: "disjunction" })
        }.`,
        exitCode: 1,
      }),
    );

    return { host, owner, repo, ref, subdir: undefined, mode: "tar" };
  } else if (template.startsWith("git@")) {
    template = template.replace(/^git@/, "");
    const [host, ownerRepo] = template.split(":");
    const [owner, repoBranch, subdirBranch] = ownerRepo.split("/");
    let repo: string;
    let subdir: string | undefined;
    let ref: string | undefined;

    if (subdirBranch) {
      repo = repoBranch;
      [subdir, ref] = subdirBranch.split("#");
    } else {
      [repo, ref] = repoBranch.split("#");
    }

    asserts(
      isValidHost(host),
      new DegitError({
        message: `Invalid host: ${host}. Must be one of ${
          intl.list(Object.values(SOURCE_TO_HOST), { type: "disjunction" })
        }.`,
        exitCode: 1,
      }),
    );

    return {
      host,
      owner,
      repo,
      ref,
      subdir,
      mode: "git",
    };
  }

  let source: keyof typeof SOURCE_TO_HOST = "github";

  if (template.startsWith("bitbucket:")) {
    source = "bitbucket";
    template = template.replace(/^bitbucket:/, "");
  } else if (template.startsWith("gitlab:")) {
    source = "gitlab";
    template = template.replace(/^gitlab:/, "");
  } else if (!template.includes(":") || template.startsWith("github:")) {
    source = "github";
    template = template.replace(/^github:/, "");
  }

  const [owner, repoBranch, subdirBranch] = template.split("/");
  let repo: string;
  let subdir: string | undefined;
  let ref: string | undefined;

  if (subdirBranch) {
    repo = repoBranch;
    [subdir, ref] = subdirBranch.split("#");
  } else {
    [repo, ref] = repoBranch.split("#");
  }

  return {
    host: SOURCE_TO_HOST[source],
    owner,
    repo,
    ref,
    subdir,
    mode: "tar",
  };
}

function isValidHost(host: string): host is DegitSource["host"] {
  return Object.values(SOURCE_TO_HOST).includes(host as DegitSource["host"]);
}

const SOURCE_TO_HOST = {
  github: "github.com",
  bitbucket: "bitbucket.org",
  gitlab: "gitlab.com",
  "git.sr.ht": "git.sr.ht",
} as const;

/**
 * Download a template from a tarball.
 *
 * @param template - The template to download
 * @param destination - The directory to download the template to
 * @returns A promise that resolves when the template has been downloaded
 */
export async function downloadTarball(
  template: DegitSource,
  destination: string,
  options: { cache?: string },
) {
  // First make a temporary directory
  const { cache = ".degit/.cache" } = options;
  const cachePath = path.isAbsolute(cache)
    ? cache
    : path.join(env.get("HOME"), cache);

  try {
    Deno.statSync(cachePath);
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      await Deno.mkdir(cachePath, { recursive: true });
    } else {
      throw err;
    }
  }

  const ownerRepo = `${template.owner}/${template.repo}`;
  const ref = selectRef(await fetchRefs(template), template.ref);
  const tarballUrl = {
    "github.com": `https://${template.host}/${ownerRepo}/archive/${ref}.tar.gz`,
    "gitlab.com":
      `https://${template.host}/${ownerRepo}/repository/archive.tar.gz?ref=${ref}`,
    "bitbucket.org": `https://${template.host}/${ownerRepo}/get/${ref}.tar.gz`,
    "git.sr.ht": `https://${template.host}/${ownerRepo}/archive/${ref}.tar.gz`,
  }[template.host];

  const tmpFile = path.join(cachePath, path.basename(tarballUrl));

  try {
    Deno.statSync(tmpFile);
    logger.info(`Using cached template from ${tmpFile}`);
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      logger.info(`Downloading template from ${tarballUrl}...`);
      await download(tarballUrl, tmpFile);
    } else {
      throw err;
    }
  }

  await untar(
    tmpFile,
    ({ fileName }) => {
      return path.join(
        destination,
        path.relative(
          path.join(`${template.repo}-${ref}`, template.subdir || ""),
          fileName,
        ),
      );
    },
    {
      filter(entry) {
        return !template.subdir ||
          entry.fileName.startsWith(
            `${template.repo}-${ref}/${template.subdir}`,
          );
      },
    },
  );
}

/**
 * Fetch the refs for a template given the repo information
 *
 * @param template - The template to fetch refs for
 * @returns Refs for the template
 */
async function fetchRefs(template: DegitSource) {
  // deno-lint-ignore no-deprecated-deno-api
  const proc = Deno.run({
    cmd: [
      "git",
      "ls-remote",
      `https://${template.host}/${template.owner}/${template.repo}`,
    ],
    stdout: "piped",
    stderr: "piped",
  });

  const status = await proc.status();

  asserts(
    status.success,
    new DegitError({
      message: decoder.decode(await proc.stderrOutput())
        .trimEnd(),
      exitCode: status.code,
    }),
  );

  const stdout = decoder.decode(await proc.output());

  return stdout
    .split("\n")
    .filter(Boolean)
    .map((row) => {
      const [hash, ref] = row.split("\t");

      if (ref === "HEAD") {
        return {
          type: "HEAD",
          hash,
        };
      }

      const match = /refs\/(\w+)\/(.+)/.exec(ref);

      asserts(
        match,
        new DegitError({
          message: `could not parse ${ref}`,
          exitCode: 1,
        }),
      );

      return {
        type: match[1] === "heads"
          ? "branch"
          : match[1] === "refs"
          ? "ref"
          : match[1],
        name: match[2],
        hash,
      };
    });
}

/**
 * Select a ref from the result of `fetchRefs` or throw an error
 * if the ref could not be found.
 * @param refs - The result of `fetchRefs`
 * @param selector - The ref to select. Defaults to "HEAD"
 */
function selectRef(
  refs: Awaited<ReturnType<typeof fetchRefs>>,
  selector = "HEAD",
): string {
  if (selector === "HEAD") {
    const hash = refs.find((ref) => ref.type === "HEAD")?.hash;

    asserts(
      hash,
      new DegitError({ message: "could not find HEAD", exitCode: 1 }),
    );

    return hash;
  }

  for (const ref of refs) {
    if (ref.name === selector) {
      return ref.hash;
    }
  }

  if (selector.length >= 7) {
    for (const ref of refs) {
      if (ref.hash.startsWith(selector)) return ref.hash;
    }
  }

  throw new DegitError({
    message: `could not find ref ${selector}`,
    exitCode: 1,
  });
}

const decoder = new TextDecoder();

type DegitSource = {
  /**
   * The host to download the template from.
   */
  host: (typeof SOURCE_TO_HOST)[keyof typeof SOURCE_TO_HOST];
  /**
   * The owner of the repository to download the template from.
   */
  owner: string;
  /**
   * The repository to download the template from.
   */
  repo: string;
  /**
   * The git ref to use to download the template.
   */
  ref: string | undefined;
  /**
   * A subdirectory of the repository to download the template from.
   */
  subdir: string | undefined;
  /**
   * The mode to use to download the template.
   */
  mode: DegitMode;
};

export type DegitConfig = {
  /**
   * The mode to use to download the template.
   * @default "tar"
   */
  mode: DegitMode;
  /**
   * The template to create a new project from.
   */
  src: DegitSource | string;
  /**
   * The directory to download the template to.
   * @default Deno.cwd()
   */
  dest?: string;
  /**
   * The cache directory to use.
   */
  cache?: string;
};

export type DegitMode = "tar" | "git";
