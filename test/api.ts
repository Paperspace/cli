import { SuccessData } from "../api/client.ts";
import { paths } from "../api/openapi.ts";
import { AppError } from "../errors.ts";
import { asserts } from "./deps.ts";
import { resolvesNext } from "./deps.ts";

type Methods = "get" | "post" | "put" | "delete" | "patch" | "head";

export function resolvesResponse<
  Path extends keyof paths,
  Method extends Methods,
>(
  data: SuccessData<Path, Method>["data"],
) {
  return resolvesNext<SuccessData<Path, Method>>([{
    ok: true,
    response: new Response(),
    data,
  }]);
}

export async function assertLogin(
  fn: () => Promise<unknown>,
) {
  await asserts.assertRejects(
    fn,
    AppError,
    "You must be logged in to run this command.",
  );
}
