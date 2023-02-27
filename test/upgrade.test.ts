// deno-lint-ignore-file no-explicit-any
import { root } from "../commands/mod.ts";
import {
  asserts,
  assertSpyCall,
  assertSpyCalls,
  describe,
  it,
  returnsNext,
  spy,
  stub,
} from "./deps.ts";

import {
  _internals as upgradeInternals,
  getLatestVersion,
  getLatestVersionAssets,
} from "../commands/upgrade/mod.ts";
import { cache } from "../cache.ts";
import { Command, Context, context, fmt, textEncoder } from "../zcli.ts";
import { deepMerge } from "../deps.ts";

describe("getLatestVersion()", () => {
  it("should retrieve the latest version from remote if the cache is empty", async () => {
    const ctx = mergeContext({
      meta: {
        commit: "e6b0e2c7d48e0f27e0d7e5b2e3d3f0e6b0e2c7d4",
      },
    });

    const version = "1.0.0";
    // TODO: in the future we should remove this mock and use a the real GitHub API
    const fetchStub = stub(
      window,
      "fetch",
      returnsNext([mockReleaseApi({ version })]),
    );
    const cacheWrite = stub(
      cache,
      "set",
      returnsNext([Promise.resolve(undefined)]),
    );
    const cacheValue = Promise.resolve(undefined);
    const cacheRead = stub(
      cache,
      "get",
      // @ts-expect-error: it's fine
      returnsNext([cacheValue]),
    );

    asserts.assertEquals(await getLatestVersion(ctx), version);
    assertSpyCalls(cacheRead, 1);
    assertSpyCalls(cacheWrite, 1);
    assertSpyCalls(fetchStub, 1);

    cacheRead.restore();
    cacheWrite.restore();
    fetchStub.restore();
  });

  it("should retrieve the latest version from the cache", async () => {
    const ctx = mergeContext({
      meta: {
        commit: "e6b0e2c7d48e0f27e0d7e5b2e3d3f0e6b0e2c7d4",
      },
    });

    const version = "1.0.0";
    // TODO: in the future we should remove this mock and use a the real GitHub API
    const fetchStub = stub(
      window,
      "fetch",
      returnsNext([mockReleaseApi({ version })]),
    );
    const cacheWrite = stub(
      cache,
      "set",
      returnsNext([Promise.resolve(undefined)]),
    );
    const cacheVersion = "2.0.0";
    const cacheValue = Promise.resolve({
      version: cacheVersion,
      assets: [],
    });
    const cacheRead = stub(
      cache,
      "get",
      // @ts-expect-error: it's fine
      returnsNext([cacheValue]),
    );

    asserts.assertEquals(await getLatestVersion(ctx), cacheVersion);
    assertSpyCalls(cacheRead, 1);
    assertSpyCalls(cacheWrite, 0);
    assertSpyCalls(fetchStub, 0);

    cacheRead.restore();
    cacheWrite.restore();
    fetchStub.restore();
  });

  it("should return the current version if the fetch fails", async () => {
    const currentVersion = "0.1.0";
    const ctx = mergeContext({
      meta: {
        commit: "e6b0e2c7d48e0f27e0d7e5b2e3d3f0e6b0e2c7d4",
        version: currentVersion,
      },
    });

    // TODO: in the future we should remove this mock and use a the real GitHub API
    const fetchStub = stub(
      window,
      "fetch",
      returnsNext([Promise.resolve(new Response(undefined, { status: 500 }))]),
    );
    const cacheWrite = stub(
      cache,
      "set",
      returnsNext([Promise.resolve(undefined)]),
    );
    const cacheRead = stub(
      cache,
      "get",
      // @ts-expect-error: it's fine
      returnsNext([Promise.resolve(undefined)]),
    );

    asserts.assertEquals(await getLatestVersion(ctx), currentVersion);
    assertSpyCalls(cacheRead, 1);
    assertSpyCalls(cacheWrite, 0);
    assertSpyCalls(fetchStub, 1);

    cacheRead.restore();
    cacheWrite.restore();
    fetchStub.restore();
  });
});

describe("getLatestVersionAssets()", () => {
  it("should return empty array if current commit is 'development'", async () => {
    const context = mergeContext({ meta: { commit: "development" } });
    const assets = await getLatestVersionAssets(context);
    asserts.assertEquals(assets.length, 0);
  });

  it("should retrieve the latest version assets from remote if the cache is empty", async () => {
    const context = mergeContext({
      meta: { commit: "e6b0e2c7d48e0f27e0d7e5b2e3d3f0e6b0e2c7d4" },
    });
    const version = "1.0.0";
    // TODO: in the future we should remove this mock and use a the real GitHub API
    const fetchStub = stub(
      window,
      "fetch",
      returnsNext([mockReleaseApi({ version })]),
    );
    const cacheWrite = stub(
      cache,
      "set",
      returnsNext([Promise.resolve(undefined)]),
    );
    const cacheValue = Promise.resolve(undefined);
    const cacheRead = stub(
      cache,
      "get",
      // @ts-expect-error: it's fine
      returnsNext([cacheValue, cacheValue]),
    );

    const assets = await getLatestVersionAssets(context);
    asserts.assertEquals(assets.length, 4);
    assertSpyCalls(cacheRead, 1);
    assertSpyCalls(cacheWrite, 1);
    assertSpyCalls(fetchStub, 1);

    cacheRead.restore();
    cacheWrite.restore();
    fetchStub.restore();
  });

  it("should retrieve the latest version assets from the cache", async () => {
    const context = mergeContext({
      meta: { commit: "e6b0e2c7d48e0f27e0d7e5b2e3d3f0e6b0e2c7d4" },
    });
    const version = "1.0.0";
    // TODO: in the future we should remove this mock and use a the real GitHub API
    const fetchStub = stub(
      window,
      "fetch",
      returnsNext([mockReleaseApi({ version })]),
    );
    const cacheWrite = stub(
      cache,
      "set",
      returnsNext([Promise.resolve(undefined)]),
    );
    const cacheVersion = "v0.0.1";
    const cacheAssets = [
      {
        name: "pspace-linux.zip",
        url:
          `https://raw.github.com/paperspace/cli/${version}/pspace-linux.zip`,
      },
      {
        name: "pspace-macos.zip",
        url:
          `https://raw.github.com/paperspace/cli/${version}/pspace-macos.zip`,
      },
      {
        name: "pspace-macos-arm.zip",
        url:
          `https://raw.github.com/paperspace/cli/${version}/pspace-macos-arm.zip`,
      },
      {
        name: "pspace-windows.zip",
        url:
          `https://raw.github.com/paperspace/cli/${version}/pspace-windows.zip`,
      },
    ];
    const cacheValue = Promise.resolve({
      version: cacheVersion,
      assets: cacheAssets,
    });
    // @ts-expect-error: it's fine
    const cacheRead = stub(cache, "get", returnsNext([cacheValue]));

    asserts.assertEquals(await getLatestVersionAssets(context), cacheAssets);
    assertSpyCalls(cacheRead, 1);
    assertSpyCalls(cacheWrite, 0);
    assertSpyCalls(fetchStub, 0);

    cacheRead.restore();
    cacheWrite.restore();
    fetchStub.restore();
  });

  it("should return empty array if the fetch fails", async () => {
    const context = mergeContext({
      meta: { commit: "e6b0e2c7d48e0f27e0d7e5b2e3d3f0e6b0e2c7d4" },
    });

    // TODO: in the future we should remove this mock and use a the real GitHub API
    const fetchStub = stub(
      window,
      "fetch",
      returnsNext([Promise.resolve(new Response(undefined, { status: 500 }))]),
    );
    const cacheWrite = stub(
      cache,
      "set",
      returnsNext([Promise.resolve(undefined)]),
    );
    const cacheValue = Promise.resolve(undefined);
    // @ts-expect-error: it's fine
    const cacheRead = stub(cache, "get", returnsNext([cacheValue]));

    const assets = await getLatestVersionAssets(context);
    asserts.assertEquals(assets.length, 0);
    assertSpyCalls(cacheRead, 1);
    assertSpyCalls(cacheWrite, 0);
    assertSpyCalls(fetchStub, 1);

    cacheRead.restore();
    cacheWrite.restore();
    fetchStub.restore();
  });
});

describe("pspace upgrade", () => {
  it("should exit 0 if tests are already up-to-date", async () => {
    const version = "1.0.0";
    const context = mergeContext({
      meta: {
        version,
      },
    });

    const latestVersionStub = stub(
      upgradeInternals,
      "getLatestVersion",
      returnsNext([Promise.resolve(version)]),
    );
    const stdoutSpy = spy(Deno.stdout, "write");
    // @ts-expect-error: we do what we want in tests
    const exitStub = stub(Deno, "exit", returnsNext([undefined]));

    await root.execute(["upgrade"], context);
    assertSpyCall(stdoutSpy, 0, {
      args: [textEncoder.encode("Already up-to-date.\n")],
    });
    assertSpyCalls(exitStub, 1);

    latestVersionStub.restore();
    stdoutSpy.restore();
    exitStub.restore();
  });

  it("should replace the current version binary with the latest version binary", async () => {
    const version = "1.0.0";
    const context = mergeContext({
      meta: {
        version,
      },
    });

    const originalBuild = Deno.build;
    const builds = [
      { os: "linux", arch: "", file: "linux" },
      { os: "windows", arch: "", file: "windows" },
      { os: "darwin", arch: "aarch64", file: "macos-arm" },
      { os: "darwin", arch: "x64", file: "macos" },
    ];

    for (let i = 0; i < builds.length; i++) {
      const stdoutSpy = spy(Deno.stdout, "write");
      const getLatestVersionStub = stub(
        upgradeInternals,
        "getLatestVersion",
        returnsNext([Promise.resolve("1.1.0")]),
      );
      const getLatestVersionAssetsStub = stub(
        upgradeInternals,
        "getLatestVersionAssets",
        returnsNext([
          Promise.resolve([
            {
              name: "pspace-linux.zip",
              url:
                `https://raw.github.com/paperspace/cli/1.1.0/pspace-linux.zip`,
            },
            {
              name: "pspace-macos.zip",
              url:
                `https://raw.github.com/paperspace/cli/1.1.0/pspace-macos.zip`,
            },
            {
              name: "pspace-macos-arm.zip",
              url:
                `https://raw.github.com/paperspace/cli/1.1.0/pspace-macos-arm.zip`,
            },
            {
              name: "pspace-windows.zip",
              url:
                `https://raw.github.com/paperspace/cli/1.1.0/pspace-windows.zip`,
            },
          ]),
        ]),
      );
      // @ts-expect-error: we do what we want in tests
      const exitStub = stub(Deno, "exit", returnsNext([undefined]));
      const execPathStub = stub(
        Deno,
        "execPath",
        returnsNext(["/.paperspace/bin/pspace"]),
      );
      const makeTempDirStub = stub(
        Deno,
        "makeTempDir",
        returnsNext([Promise.resolve("/tmp")]),
      );
      const downloadStub = stub(
        upgradeInternals,
        "download",
        returnsNext([Promise.resolve(undefined)]),
      );
      const unzipStub = stub(
        upgradeInternals,
        "unzip",
        returnsNext([Promise.resolve("/tmp/pspace")]),
      );
      // @ts-expect-error: we do what we want in tests
      const renameStub = stub(Deno, "rename", returnsNext([undefined]));
      // @ts-expect-error: we do what we want in tests
      const removeStub = stub(Deno, "remove", returnsNext([undefined]));
      const build = builds[i];
      // @ts-expect-error: we do what we want in tests
      Deno.build = {
        ...originalBuild,
        ...build,
      };

      await root.execute(["upgrade"], context);

      assertSpyCall(downloadStub, 0, {
        args: [
          `https://raw.github.com/paperspace/cli/1.1.0/pspace-${build.file}.zip`,
          `/tmp/pspace-${build.file}.zip`,
        ],
      });
      assertSpyCall(unzipStub, 0, {
        args: [`/tmp/pspace-${build.file}.zip`],
      });
      assertSpyCall(renameStub, 0, {
        args: ["/tmp/pspace", "/.paperspace/bin/pspace"],
      });
      assertSpyCall(removeStub, 0, {
        args: ["/tmp", { recursive: true }],
      });
      assertSpyCall(stdoutSpy, 0, {
        args: [textEncoder.encode("Upgrading from 1.0.0 to 1.1.0...\n")],
      });
      assertSpyCall(stdoutSpy, 1, {
        args: [textEncoder.encode("Successfully upgraded to 1.1.0.\n")],
      });
      assertSpyCall(stdoutSpy, 2, {
        args: [
          textEncoder.encode(
            ` → Run ${fmt.colors.bold(`${root.name} version`)} to verify.\n`,
          ),
        ],
      });

      getLatestVersionStub.restore();
      getLatestVersionAssetsStub.restore();
      execPathStub.restore();
      makeTempDirStub.restore();
      downloadStub.restore();
      unzipStub.restore();
      renameStub.restore();
      removeStub.restore();
      exitStub.restore();
      // @ts-expect-error: we do what we want in tests
      Deno.build = originalBuild;
      stdoutSpy.restore();
    }
  });
});

function mockReleaseApi(config: { version?: string } = {}) {
  const { version = "v1.0.0" } = config;

  return jsonOk({
    tag_name: version,
    assets: [
      {
        name: "pspace-linux.zip",
        browser_download_url:
          `https://raw.github.com/paperspace/cli/${version}/pspace-linux.zip`,
      },
      {
        name: "pspace-macos.zip",
        browser_download_url:
          `https://raw.github.com/paperspace/cli/${version}/pspace-macos.zip`,
      },
      {
        name: "pspace-macos-arm.zip",
        browser_download_url:
          `https://raw.github.com/paperspace/cli/${version}/pspace-macos-arm.zip`,
      },
      {
        name: "pspace-windows.zip",
        browser_download_url:
          `https://raw.github.com/paperspace/cli/${version}/pspace-windows.zip`,
      },
    ],
  });
}

function mergeContext(
  ctx: DeepPartial<Context>,
): Context & { root: Command<any, any, any>; path: string[] } {
  // @ts-expect-error: it's fine
  return deepMerge(
    {
      path: [root.name, "upgrade"],
      root,
      ...context,
    },
    ctx,
  );
}

function jsonOk(body: any) {
  const mockResponse = new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "Content-type": "application/json",
    },
  });

  return Promise.resolve(mockResponse);
}

type DeepPartial<T> = T extends Record<string, unknown> ? {
    [P in keyof T]?: DeepPartial<T[P]>;
  }
  : T;
