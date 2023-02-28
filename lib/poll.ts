// import { Formats } from "./act.ts";
import { ms } from "../deps.ts";

/**
 * Poll a function infinitely or until a condition is met.
 */
export async function poll(
  fn: () => Promise<boolean>,
  interval: string | number = 1000,
) {
  await fn();
  const pollInterval = Number(ms(interval + ""));

  return await new Promise<void>((resolve) => {
    const id = setInterval(async () => {
      if (await fn()) {
        clearInterval(id);
        resolve();
      }
    }, pollInterval);
  });
}

/**
export async function pollCmd(fn: () => Promise<Formats>, opt: any) {
  let n = 0;
  let output = "";

  return await poll(async () => {
    const response = await fn();

    if (opt.json && "json" in response) {
      output = JSON.stringify(
        response.json,
        null,
        2,
      );
    } else {
      output = "human" in response
        ? String(response.human)
        : String(response.value);
    }

    output += `\n\nPress ${bold("Ctrl+C")} to exit.`;

    if (n > 0) {
      printLn(
        eraseLines(output.split("\n").length + 1),
        cursorUp(1),
      );
    }

    n++;
    printLn(output);
    return false;
  }, opt.poll === true ? "3s" : opt.poll);
}
*/
