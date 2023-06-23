import { models } from "../../../api/models.ts";
import * as psFlags from "../../../flags.ts";
import { asserts } from "../../../lib/asserts.ts";
import { dataTable } from "../../../lib/data-table.ts";
import { loading } from "../../../lib/loading.ts";
import { pickJson } from "../../../lib/pick-json.ts";
import { input } from "../../../prompts/input.ts";
import { command, flag, flags } from "../../../zcli.ts";

/**
 * This variable is automatically generated by `zcli add`. Do not remove this
 * or change its name unless you're no longer using `zcli add`.
 */
const subCommands: ReturnType<typeof command>[] = [];

export const create = command("create", {
  short: "Create a new model",
  long: `
    Create a new model. This command will prompt you for a name if you don't
    provide one.
  `,
  commands: subCommands,
  flags: flags({
    fields: psFlags.fields,
  }).merge(flags({
    "name": flag({
      aliases: ["n"],
      short: "The name of the model",
    }).ostring(),
    "description": flag({
      aliases: ["d"],
      short: "The description of the model",
    }).ostring(),
    "is-public": flag({
      short: "Whether the model is public",
    }).oboolean(),
    "storage-provider-id": flag({
      aliases: ["s"],
      short: "The ID of the storage provider to use for the model",
    }).ostring(),
    "project-id": flag({
      aliases: ["p"],
      short: "The ID of the project to create the model in",
    }).ostring(),
  })),
  // We use command metadata in the `persistentPreRun` function to check if a
  // command requires an API key. If it does, we'll check to see if one is
  // set. If not, we'll throw an error.
  meta: {
    requireApiKey: true,
  },
}).run(async function* ({ flags }) {
  let name: string | undefined = flags["name"];
  let description: string | undefined = flags["description"];
  const isPublic: boolean | undefined = flags["is-public"];
  let storageProviderId: string | undefined = flags["storage-provider-id"];
  let projectId: string | undefined = flags["project-id"];

  if (!name) {
    name = await input("Name:");
    asserts(name, "You must provide a name for the model.");
  }

  if (!description) {
    description = await input("Description:");
    asserts(description, "You must provide a description for the model.");
  }

  if (!storageProviderId) {
    storageProviderId = await input("Storage provider ID:");
    asserts(
      storageProviderId,
      "You must provide a storage provider id for the model.",
    );
  }

  if (!projectId) {
    projectId = await input("Project ID (Leave blank for none):");
    if (projectId === "") {
      projectId = undefined;
    }
  }

  const result = await loading(
    models.create({
      name,
      description,
      isPublic: isPublic ?? false,
      storageProviderId,
      projectId,
    }),
    {
      enabled: !flags.json,
    },
  );
  asserts(result.ok, result);

  if (!flags.json) {
    for await (const line of dataTable([result.data], flags.fields)) {
      yield line;
    }
  } else {
    yield pickJson(result.data, flags.fields);
  }
});
