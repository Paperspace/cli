import { paths } from "../api/openapi.ts";
import { path, TOML, YAML } from "../deps.ts";
import { AppError, DocumentedError } from "../errors.ts";
import { logger } from "../logger.ts";

export async function find(cwd: string, file?: string) {
  if (file) {
    logger.info(`Using config file: ${file}`);
    const filePath = path.isAbsolute(file) ? file : path.join(cwd, file);

    try {
      const config = await Deno.readTextFile(filePath);
      return parse(filePath, config);
    } catch (err) {
      if (err instanceof Deno.errors.NotFound) {
        throw new AppError({
          message: "No config file found at: " + filePath,
          exitCode: 1,
        });
      }

      throw err;
    }
  }

  logger.info(`No config file specified, searching for defaults.`);
  const configPaths = [
    "paperspace.yaml",
    "paperspace.yml",
    "paperspace.json",
    "paperspace.toml",
    ".paperspace/app.yaml",
    ".paperspace/app.yml",
    ".paperspace/app.json",
    ".paperspace/app.toml",
  ];

  for (const fileName of configPaths) {
    try {
      const cfg = path.join(cwd, fileName);
      logger.info(`  Attempting ${cfg}`);
      const config = await Deno.readTextFile(cfg);
      logger.info(`Found config file: ${cfg}`);
      return parse(cfg, config);
    } catch (err) {
      if (err instanceof Deno.errors.NotFound) {
        continue;
      }

      throw err;
    }
  }

  throw new DocumentedError({
    message: "No Paperspace config file found.",
    path: "/deployments/config",
  });
}

export function parse(
  fileName: string,
  contents: string,
): paths["/deployments"]["post"]["requestBody"]["content"]["application/json"][
  "config"
] {
  const extname = path.extname(fileName);
  // @ts-expect-error: it's fine
  const parser = parsers[extname] ?? parsers[".yaml"];
  const result = parser(contents);
  delete result["$schema"];
  return result;
}

const parsers = {
  ".json": JSON.parse,
  ".yaml": YAML.parse,
  ".yml": YAML.parse,
  ".toml": TOML.parse,
};
