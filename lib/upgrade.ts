import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";
import {
  Command,
  EnumType,
} from "https://deno.land/x/cliffy@v0.25.6/command/mod.ts";
import { __COMMIT__ } from "./version.ts";

type Provider = "scoop" | "choco" | "brew" | "curl";

export interface UpgradeCommandOptions<
  TProvider extends Provider = Provider,
  TProviders extends TProvider | Array<TProvider> =
    | TProvider
    | Array<TProvider>,
> {
  provider: TProviders;
}

export class UpgradeCommand extends Command {
  private readonly providers: ReadonlyArray<Provider>;

  constructor({ provider }: UpgradeCommandOptions) {
    super();
    this.providers = Array.isArray(provider) ? provider : [provider];

    if (!this.providers.length) {
      throw new Error(`No upgrade provider defined!`);
    }

    this.description(
      () =>
        `Upgrade ${this.getMainCommand().getName()} executable to latest or given version.`,
    )
      .noGlobals()
      .type("provider", new EnumType(this.providers))
      // .option("-l, --list-versions", "Show available versions.", {
      //   action: async ({ registry }) => {
      //     await registry.listVersions(
      //       this.getMainCommand().getName(),
      //       this.getVersion()
      //     );
      //     Deno.exit(0);
      //   },
      // })
      // .option(
      //   "--version <version:string:version>",
      //   "The version to upgrade to.",
      //   { default: "latest" }
      // )
      // .option(
      //   "-f, --force",
      //   "Replace current installation even if not out-of-date."
      // )
      // .complete("version", () => this.getAllVersions())
      .action((/*{ registry, version: targetVersion, force }*/) => {
        // const name: string = this.getMainCommand().getName();
        // const currentVersion: string | undefined = this.getVersion();
      });
  }

  async getLatestVersion(): Promise<string> {
    //if (__COMMIT__ !== "development") {
    const response = await fetch(
      "https://api.github.com/repos/paperspace/cli/releases/latest",
    );

    if (!response.ok) {
      return "fish";
    }

    const json = z
      .object({ tag_name: z.string() })
      .parse(await response.json());

    return json.tag_name;
    //}
  }
}
