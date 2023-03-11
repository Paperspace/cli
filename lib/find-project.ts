import { select } from "../prompts/select.ts";
import { asserts } from "./asserts.ts";
import { config } from "../config.ts";
import { loading } from "./loading.ts";
import { projects } from "../api/projects.ts";
import { fmt } from "../zcli.ts";
import { path } from "../deps.ts";
import { paths } from "../api/openapi.ts";
import { printLn } from "./print.ts";

export async function findProject(
  { handle, cwd, quiet }: { cwd?: string; quiet?: boolean; handle?: string },
) {
  const projectPath = cwd
    ? path.isAbsolute(cwd) ? cwd : path.join(Deno.cwd(), cwd)
    : Deno.cwd();
  const localProjects = await config.get("projects");
  handle = handle ?? localProjects[projectPath]?.handle;
  let project:
    paths["/projects/{handle}"]["get"]["responses"]["200"]["content"][
      "application/json"
    ];

  if (!handle) {
    const existingProjects = await loading(projects.list({ limit: 50 }), {
      enabled: !quiet,
    });

    asserts(existingProjects.ok, existingProjects);
    printLn(fmt.colors.yellow(
      `Couldn't find a linked project for ${projectPath}.`,
    ));
    printLn(
      `Run "${
        fmt.colors.bold(`pspace project link`)
      }" in this directory to skip this step in the future.`,
    );

    const selected = await select(
      "Select a project:",
      existingProjects.data.items,
      {
        filter(input, option) {
          return option.name.toLowerCase().startsWith(input);
        },
        renderOption(option, isSelected) {
          return `${isSelected ? ">" : " "} ${option.name}`;
        },
      },
    );

    asserts(selected, "No project selected.");
    project = selected;
  } else {
    const response = await loading(projects.get({ handle }), {
      enabled: !quiet,
    });
    asserts(response.ok, response);
    project = response.data;
  }

  return project;
}
