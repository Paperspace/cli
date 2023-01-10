import { Formats } from "../act.ts";
import { gqlFetch } from "../client.ts";
import {
  CreateProjectDocument,
  CreateProjectInput,
  GetProjectDocument,
  GetProjectQueryVariables,
} from "../paperspace-graphql.ts";

export async function get(
  variables: GetProjectQueryVariables,
): Promise<Formats> {
  const { project } = await gqlFetch(GetProjectDocument, variables);

  if (!project) {
    return { value: null };
  }

  return {
    json: project,
    human: `ID: ${project.id}`,
  };
}

export async function create(
  input: CreateProjectInput,
): Promise<Formats> {
  const { createProject } = await gqlFetch(CreateProjectDocument, {
    input,
  });

  if (!createProject.project) {
    return { value: null };
  }

  return {
    json: createProject.project,
    human: `ID: ${createProject.project.id}`,
  };
}
