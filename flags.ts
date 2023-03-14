import { parse } from "./lib/degit.ts";
import { flag, flags, z } from "./zcli.ts";

export const fields = flag({
  short: "The fields to include in the response.",
  aliases: ["F"],
}).array(z.string()).optional();

/**
 * Flags that are used for pagination in `list` commands.
 */
export const paginator = flags({
  limit: flag({
    short: "The number of items to return in the next page.",
  }).onumber(),
  after: flag({ short: "The cursor to fetch the next results from." })
    .ostring(),
  orderBy: flag({ short: "The field to order items by." }).enum([
    "dtCreated",
  ]).optional(),
  asc: flag({ short: "Whether to order items ascending." }).oboolean(),
  desc: flag({ short: "Whether to order items descending." }).oboolean(),
  fields,
});

/**
 * Degit flags that are used for project scaffolding in `init` commands.
 */
export const degit = flags({
  template: flag({
    aliases: ["t"],
    short: "A template to use when creating the app",
    long: `
      A template to use when creating the app. This can be a URL 
      to a git repository or a shorthand template name.

      These templates are equivalent:
      \`\`\`
      user/repo
      github:user/repo
      git@github.com:user/repo
      https://github.com/user/repo
      \`\`\`

      Download from GitLab:
      \`\`\`
      gitlab:user/repo
      git@gitlab.com:user/repo
      https://gitlab.com/user/repo
      \`\`\`

      Download from Bitbucket
      \`\`\`
      bitbucket:user/repo
      git@bitbucket.org:user/repo
      https://bitbucket.org/user/repo
      \`\`\`

      Specify a tag or branch:
      \`\`\`
      user/repo#dev       # branch
      user/repo#v1.2.3    # release tag
      user/repo#1234abcd  # commit hash
      \`\`\`
    `,
  }).ostring().transform((value) => {
    if (!value) {
      return parse("Paperspace/app-template");
    }

    return parse(value);
  }).superRefine(
    (template, ctx) => {
      if (!template) {
        return true;
      }

      if (!template.owner) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Missing template owner.",
        });
        return false;
      } else if (!template.repo) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Missing template repo.",
        });
        return false;
      } else if (!template.host) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Invalid template host. Must be one of: github, bitbucket, gitlab.",
        });
        return false;
      }

      return true;
    },
  ),

  mode: flag({
    aliases: ["m"],
    short: "The mode to use when creating the app: 'git' or 'tar'.",
    long: `
      The mode to use when creating the app. This can be either "git" or
      "tar". If "git" is specified, the template will be downloaded as a
      tarball. Note that "git" clones over SSH, so you must have a valid
      SSH key configured with GitHub, Bitbucket, or GitLab.
    `,
  }).enum(["git", "tar"]).default("tar"),
});
