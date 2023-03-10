export async function open(
  target: string,
  options?: OpenOptions,
): Promise<Deno.Process> {
  const { os } = Deno.build;
  options = { url: false, ...options };

  let command;
  const cliArguments: string[] = [];

  // Encodes the target as if it were an URL. Especially useful to get
  // double-quotes through the “double-quotes on Windows caveat”, but it
  // can be used on any platform.
  if (options.url) {
    target = encodeURI(target);
  }

  if (os === "darwin") {
    command = "open";
  } else if (os === "windows") {
    command = "cmd";
    cliArguments.push("/s", "/c", "start", "", "/b");
  } else {
    const xdgOpen = import.meta.resolve("./xdg-open").replace(/^file:\/\//, "");
    let xdgOpenExists = true;

    try {
      Deno.statSync(xdgOpen);
    } catch (_err) {
      xdgOpenExists = false;
    }

    command = xdgOpenExists ? xdgOpen : "xdg-open";
  }

  cliArguments.push(target);

  /* Options for the spawned process */
  const runOptions: Deno.RunOptions = {
    cmd: [command, ...cliArguments],
    stdin: "piped",
    stderr: "piped",
    stdout: "piped",
  };

  const subprocess = Deno.run(runOptions);
  await subprocess.status();
  return subprocess;
}

export interface OpenOptions {
  /**
  Uses `encodeURI` to encode the `target` before executing it.
  The use with targets that are not URLs is not recommended.
  @default false
  */
  readonly url?: boolean;
}
