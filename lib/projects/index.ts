import { Table } from "https://deno.land/x/cliffy@v0.25.7/table/mod.ts";
import { Formats } from "../act.ts";
import { gqlFetch } from "../client.ts";
import {
  CreateProjectDocument,
  CreateProjectInput,
  GetProjectDocument,
  GetProjectQueryVariables,
  ListProjectsDocument,
  ListProjectsQueryVariables,
  Project,
} from "../paperspace-graphql.ts";
import { colors } from "../ansi.ts";
import * as config from "../config.ts";
import { NestedPaths, pick } from "../util.ts";

export async function get(
  { fields, ...variables }: GetProjectQueryVariables & {
    fields?: NestedPaths<Project>[];
  },
) {
  const response = await gqlFetch(GetProjectDocument, variables);

  if (!response.project) {
    return { value: null };
  }

  const project = fields
    ? pick(response.project, fields as any)
    : response.project;

  return {
    json: project,
    human: tableFromJson([project], {
      locale: await config.get("locale"),
    }).toString(),
  };
}

export async function create(
  input: CreateProjectInput,
) {
  const { createProject } = await gqlFetch(CreateProjectDocument, {
    input,
  });

  if (!createProject.project) {
    return { value: null };
  }

  return {
    json: createProject.project,
    human: tableFromJson([createProject.project], {
      locale: await config.get("locale"),
    }),
  };
}

export async function list(
  { fields, ...variables }: ListProjectsQueryVariables & {
    fields?: NestedPaths<Project>[];
  } = {},
) {
  if (!variables.first) {
    variables.first = 24;
  }

  const response = await gqlFetch(ListProjectsDocument, variables);

  const projects = fields
    ? {
      ...response.projects,
      nodes: response.projects.nodes.map((node) => pick(node, fields as any)),
    }
    : response.projects;

  return {
    json: projects,
    human: tableFromJson(projects.nodes, {
      locale: await config.get("locale"),
    }),
  };
}

function tableFromJson(
  json: Record<string, unknown>[],
  options: { locale: string },
): string {
  const table = new Table();
  table.header(Object.keys(json[0]).map((key) => colors.blue(key)));

  for (const obj of json) {
    table.push(
      Object.values(obj).map((value) => {
        let isDate = false;

        try {
          isDate = dateRe.test(value as any);
        } catch (_err) {
          // ignore
        }

        return isDate
          ? new Intl.DateTimeFormat(options.locale, {
            timeStyle: "short",
            dateStyle: "short",
          }).format(Date.parse(value as any))
          : value;
      }) as any[],
    );
  }

  return `${table.padding(3).toString()}`;
}

const dateRe = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
