import { flag, flags } from "../../zcli.ts";

export const secretFlags = flags({
  "project-id": flag({
    aliases: ["p"],
    short: "The ID of the project the secret is in",
    long: `
      The ID of the project the secret is in. If not specified, the
      secret will be created in the project linked to your current working
      directory. If you are not in a project directory, you will be prompted
      to select a project.
    `,
  }).ostring(),
  global: flag({
    aliases: ["g"],
    short: "Manage a secret that is available to the entire team",
    long: `
      Manage a secret that is available to the entire team you are
      currently logged into. By default, secrets are only available to
      a project.
    `,
  }).oboolean(),
  cwd: flag({
    short: "The directory to create the secret in",
  }).ostring(),
});
