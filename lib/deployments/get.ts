import { info } from "../ansi.ts";

export async function get(url: string) {
  console.log(info("[GET]"), url);
  const result = await fetch(url);
  console.log(info("[Status]"), `${result.status} ${result.statusText}`);
  return await result.json();
}
