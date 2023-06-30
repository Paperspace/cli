import { projects } from "./../../api/projects.ts";
import { formatBytes, path } from "../../deps.ts";
import { args, command, flag, flags, fmt, z } from "../../zcli.ts";
import { degit } from "../../lib/degit.ts";
import { env } from "../../env.ts";
import * as psFlags from "../../flags.ts";
import * as downloadsCache from "../../lib/downloads-cache.ts";
import { loading } from "../../lib/loading.ts";
import { asserts } from "../../lib/asserts.ts";
import { config } from "../../config.ts";
import { paths } from "../../api/openapi.ts";
import { logger } from "../../logger.ts";
import { apps } from "../../api/apps.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [];

export const init = command("init", {
  short: "Create a new Paperspace app",
  long: ({ root }) => `
    Create a new Paperspace app. This will create a new directory with a
    default app structure. You can optionally specify a name for the app
    and a template to use. If no template is specified, the default
    template will be used.

    Create a new app in the current directory.
    \`\`\`
    $ ${root.name} init
    \`\`\`

    Create a new app named "my-app" relative to the current directory.
    \`\`\`
    $ ${root.name} init my-app
    \`\`\`

    Create a new app named "my-app" relative to the current directory using
    a template from the Paperspace GitHub organization.
    \`\`\`
    $ ${root.name} init my-app -t Paperspace/gradio-demo
    \`\`\`
  `,
  commands: subCommands,
  args: args({
    short:
      "The directory to create the app in. Defaults to the current directory.",
  }).tuple([z.string()]).optional(),
  flags: psFlags.degit.merge(
    flags({
      name: flag({
        aliases: ["n"],
        short:
          "The name of the app. Defaults to the first argument current directory name.",
      }).ostring(),

      clean: flag({
        aliases: ["c"],
        short: "Clean the Paperspace cache. This negates other args/flags.",
      }).oboolean(),
    }),
  ),
  // We use command metadata in the `persistentPreRun` function to check if a
  // command requires an API key. If it does, we'll check to see if one is
  // set. If not, we'll throw an error.
  meta: {
    requireApiKey: true,
  },
}).run(
  async function* ({ args, flags, ctx }) {
    if (flags.clean) {
      if (!flags.json) {
        yield `Cleaned cache (${formatBytes(await downloadsCache.clean())})`;
      }

      return;
    }

    const dest = path.join(Deno.cwd(), args[0] ?? "");
    const { template, mode } = flags;
    const appName = flags.name ?? path.basename(dest);
    const clone = degit({
      mode,
      src: template,
      dest,
      cache: downloadsCache.dir,
    });

    await loading(
      clone,
      {
        text: `Downloading template "${template.owner}/${template.repo}"`,
        enabled: !flags.json,
      },
    );

    const existingLinks = await config.get("projects");
    let app: paths["/apps/{id}"]["get"]["responses"]["200"]["content"][
      "application/json"
    ];
    const link = existingLinks[dest];

    if (!link) {
      logger.info(`Project doesn't exist. Creating a new one.`);
      const res = await loading(
        apps.create({
          config: {
            apiVersion: "latest",
            image: "some demo image",
            name: appName,
            resources: {
              machineType: "K80",
              ports: [],
            },
          },
        }),
        {
          text: "Creating app",
          enabled: !flags.json,
        },
      );
      asserts(res.ok, res);
      app = res.data;
    } else {
      logger.info(
        `Project already exists, skipping creation. (link: ${link.id})`,
      );
      const res = await apps.get({ id: link.id });
      asserts(res.ok, res);
      app = res.data;
    }

    const team = await config.get("team");
    await config.set("projects", {
      ...await config.get("projects"),
      [dest]: {
        path: dest,
        id: app.id,
      },
    });

    if (!flags.json) {
      yield `✨ Created app "${app.config.name}"`;
      yield "";
      yield fmt.colors.bold("Console URL");
      yield new URL(
        `/${team}/projects/${app.id}/apps`,
        env.get("PAPERSPACE_CONSOLE_URL"),
      ) + "";
      yield "";
      yield `To deploy your app`;
      yield `   ${fmt.colors.bold(`cd ${path.relative(Deno.cwd(), dest)}`)}`;
      yield `   ${fmt.colors.bold(`${ctx.root.name} up`)}`;
    } else {
      yield JSON.stringify(app, null, 2);
    }
  },
);
