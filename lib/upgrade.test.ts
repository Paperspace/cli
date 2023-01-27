import { __VERSION__ } from "./version.ts";
import {
  assertSpyCall,
  assertSpyCalls,
  returnsNext,
  spy,
  stub,
} from "https://deno.land/std@0.174.0/testing/mock.ts";

import * as asserts from "https://deno.land/std@0.174.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/std@0.174.0/testing/bdd.ts";
import { _internals as upgradeInternals, UpgradeCommand } from "./upgrade.ts";
import { _internals as cacheInternals } from "./cache.ts";
import { bold } from "./ansi.ts";

describe("upgrade.getLatestVersion()", () => {
  it("should return the current version if current commit is 'development'", async () => {
    const upgradeCommand = new UpgradeCommand();
    const version = "v0.0.1";

    stub(
      upgradeCommand,
      "getCommit",
      returnsNext(["development"]),
    );

    stub(upgradeCommand, "getVersion", returnsNext([version]));

    asserts.assertEquals(
      await upgradeCommand.getLatestVersion(),
      version,
    );
  });

  it("should retrieve the latest version from remote if the cache is empty", async () => {
    const upgradeCommand = new UpgradeCommand();
    stub(
      upgradeCommand,
      "getCommit",
      returnsNext("e6b0e2c7d48e0f27e0d7e5b2e3d3f0e6b0e2c7d4"),
    );
    const version = "v1.0.0";
    // TODO: in the future we should remove this mock and use a the real GitHub API
    const fetchStub = stub(
      window,
      "fetch",
      returnsNext([mockReleaseApi({ version })]),
    );
    const cacheWrite = stub(
      cacheInternals,
      "write",
      returnsNext([Promise.resolve(undefined)]),
    );
    const cacheValue = Promise.resolve({ version: 1 as const });
    const cacheRead = stub(
      cacheInternals,
      "read",
      returnsNext([cacheValue, cacheValue]),
    );

    asserts.assertEquals(await upgradeCommand.getLatestVersion(), version);
    assertSpyCalls(cacheRead, 2);
    assertSpyCalls(cacheWrite, 1);
    assertSpyCalls(fetchStub, 1);

    cacheRead.restore();
    cacheWrite.restore();
    fetchStub.restore();
  });

  it("should retrieve the latest version from remote if the cache is expired", async () => {
    const upgradeCommand = new UpgradeCommand();
    stub(
      upgradeCommand,
      "getCommit",
      returnsNext("e6b0e2c7d48e0f27e0d7e5b2e3d3f0e6b0e2c7d4"),
    );
    const version = "v1.0.0";
    // TODO: in the future we should remove this mock and use a the real GitHub API
    const fetchStub = stub(
      window,
      "fetch",
      returnsNext([mockReleaseApi({ version })]),
    );
    const cacheWrite = stub(
      cacheInternals,
      "write",
      returnsNext([Promise.resolve(undefined)]),
    );
    const cacheValue = Promise.resolve({
      version: 1 as const,
      updateAvailable: {
        version: "v0.0.1",
        assets: [],
        expires: Date.now() - 1000,
      },
    });
    const cacheRead = stub(
      cacheInternals,
      "read",
      returnsNext([cacheValue, cacheValue]),
    );

    asserts.assertEquals(await upgradeCommand.getLatestVersion(), version);
    assertSpyCalls(cacheRead, 2);
    assertSpyCalls(cacheWrite, 1);
    assertSpyCalls(fetchStub, 1);

    cacheRead.restore();
    cacheWrite.restore();
    fetchStub.restore();
  });

  it("should retrieve the latest version from the cache", async () => {
    const upgradeCommand = new UpgradeCommand();
    stub(
      upgradeCommand,
      "getCommit",
      returnsNext("e6b0e2c7d48e0f27e0d7e5b2e3d3f0e6b0e2c7d4"),
    );
    const version = "v1.0.0";
    // TODO: in the future we should remove this mock and use a the real GitHub API
    const fetchStub = stub(
      window,
      "fetch",
      returnsNext([mockReleaseApi({ version })]),
    );
    const cacheWrite = stub(
      cacheInternals,
      "write",
      returnsNext([Promise.resolve(undefined)]),
    );
    const cacheVersion = "v0.0.1";
    const cacheValue = Promise.resolve({
      version: 1 as const,
      updateAvailable: {
        version: cacheVersion,
        assets: [],
        expires: Date.now() + 86400,
      },
    });
    const cacheRead = stub(
      cacheInternals,
      "read",
      returnsNext([cacheValue]),
    );

    asserts.assertEquals(await upgradeCommand.getLatestVersion(), cacheVersion);
    assertSpyCalls(cacheRead, 1);
    assertSpyCalls(cacheWrite, 0);
    assertSpyCalls(fetchStub, 0);

    cacheRead.restore();
    cacheWrite.restore();
    fetchStub.restore();
  });

  it("should return the current version if the fetch fails", async () => {
    const upgradeCommand = new UpgradeCommand();
    stub(
      upgradeCommand,
      "getCommit",
      returnsNext("e6b0e2c7d48e0f27e0d7e5b2e3d3f0e6b0e2c7d4"),
    );
    const currentVersion = "v0.1.0";
    stub(
      upgradeCommand,
      "getVersion",
      returnsNext([currentVersion]),
    );
    // TODO: in the future we should remove this mock and use a the real GitHub API
    const fetchStub = stub(
      window,
      "fetch",
      returnsNext([Promise.resolve(new Response(undefined, { status: 500 }))]),
    );
    const cacheWrite = stub(
      cacheInternals,
      "write",
      returnsNext([Promise.resolve(undefined)]),
    );
    const cacheValue = Promise.resolve({
      version: 1 as const,
      updateAvailable: {
        version: "v0.0.1",
        assets: [],
        expires: Date.now() - 1000,
      },
    });
    const cacheRead = stub(
      cacheInternals,
      "read",
      returnsNext([cacheValue]),
    );

    asserts.assertEquals(
      await upgradeCommand.getLatestVersion(),
      currentVersion,
    );
    assertSpyCalls(cacheRead, 1);
    assertSpyCalls(cacheWrite, 0);
    assertSpyCalls(fetchStub, 1);

    cacheRead.restore();
    cacheWrite.restore();
    fetchStub.restore();
  });
});

describe("upgrade.getLatestVersionAssets()", () => {
  it("should return empty array if current commit is 'development'", async () => {
    const upgradeCommand = new UpgradeCommand();
    const version = "v0.0.1";

    stub(
      upgradeCommand,
      "getCommit",
      returnsNext(["development"]),
    );

    stub(upgradeCommand, "getVersion", returnsNext([version]));
    const assets = await upgradeCommand.getLatestVersionAssets();
    asserts.assertEquals(assets.length, 0);
  });

  it("should retrieve the latest version assets from remote if the cache is empty", async () => {
    const upgradeCommand = new UpgradeCommand();
    stub(
      upgradeCommand,
      "getCommit",
      returnsNext("e6b0e2c7d48e0f27e0d7e5b2e3d3f0e6b0e2c7d4"),
    );
    const version = "v1.0.0";
    // TODO: in the future we should remove this mock and use a the real GitHub API
    const fetchStub = stub(
      window,
      "fetch",
      returnsNext([mockReleaseApi({ version })]),
    );
    const cacheWrite = stub(
      cacheInternals,
      "write",
      returnsNext([Promise.resolve(undefined)]),
    );
    const cacheValue = Promise.resolve({ version: 1 as const });
    const cacheRead = stub(
      cacheInternals,
      "read",
      returnsNext([cacheValue, cacheValue]),
    );

    const assets = await upgradeCommand.getLatestVersionAssets();
    asserts.assertEquals(assets.length, 4);
    assertSpyCalls(cacheRead, 2);
    assertSpyCalls(cacheWrite, 1);
    assertSpyCalls(fetchStub, 1);

    cacheRead.restore();
    cacheWrite.restore();
    fetchStub.restore();
  });

  it("should retrieve the latest version assets from remote if the cache is expired", async () => {
    const upgradeCommand = new UpgradeCommand();
    stub(
      upgradeCommand,
      "getCommit",
      returnsNext("e6b0e2c7d48e0f27e0d7e5b2e3d3f0e6b0e2c7d4"),
    );
    const version = "v1.0.0";
    // TODO: in the future we should remove this mock and use a the real GitHub API
    const fetchStub = stub(
      window,
      "fetch",
      returnsNext([mockReleaseApi({ version })]),
    );
    const cacheWrite = stub(
      cacheInternals,
      "write",
      returnsNext([Promise.resolve(undefined)]),
    );
    const cacheValue = Promise.resolve({
      version: 1 as const,
      updateAvailable: {
        version: "v0.0.1",
        assets: [],
        expires: Date.now() - 1000,
      },
    });
    const cacheRead = stub(
      cacheInternals,
      "read",
      returnsNext([cacheValue, cacheValue]),
    );

    const assets = await upgradeCommand.getLatestVersionAssets();
    asserts.assertEquals(assets.length, 4);
    assertSpyCalls(cacheRead, 2);
    assertSpyCalls(cacheWrite, 1);
    assertSpyCalls(fetchStub, 1);

    cacheRead.restore();
    cacheWrite.restore();
    fetchStub.restore();
  });

  it("should retrieve the latest version assets from the cache", async () => {
    const upgradeCommand = new UpgradeCommand();
    stub(
      upgradeCommand,
      "getCommit",
      returnsNext("e6b0e2c7d48e0f27e0d7e5b2e3d3f0e6b0e2c7d4"),
    );
    const version = "v1.0.0";
    // TODO: in the future we should remove this mock and use a the real GitHub API
    const fetchStub = stub(
      window,
      "fetch",
      returnsNext([mockReleaseApi({ version })]),
    );
    const cacheWrite = stub(
      cacheInternals,
      "write",
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
      version: 1 as const,
      updateAvailable: {
        version: cacheVersion,
        assets: cacheAssets,
        expires: Date.now() + 86400,
      },
    });
    const cacheRead = stub(
      cacheInternals,
      "read",
      returnsNext([cacheValue]),
    );

    asserts.assertEquals(
      await upgradeCommand.getLatestVersionAssets(),
      cacheAssets,
    );
    assertSpyCalls(cacheRead, 1);
    assertSpyCalls(cacheWrite, 0);
    assertSpyCalls(fetchStub, 0);

    cacheRead.restore();
    cacheWrite.restore();
    fetchStub.restore();
  });

  it("should return empty array if the fetch fails", async () => {
    const upgradeCommand = new UpgradeCommand();
    stub(
      upgradeCommand,
      "getCommit",
      returnsNext("e6b0e2c7d48e0f27e0d7e5b2e3d3f0e6b0e2c7d4"),
    );
    const currentVersion = "v0.1.0";
    stub(
      upgradeCommand,
      "getVersion",
      returnsNext([currentVersion]),
    );
    // TODO: in the future we should remove this mock and use a the real GitHub API
    const fetchStub = stub(
      window,
      "fetch",
      returnsNext([Promise.resolve(new Response(undefined, { status: 500 }))]),
    );
    const cacheWrite = stub(
      cacheInternals,
      "write",
      returnsNext([Promise.resolve(undefined)]),
    );
    const cacheValue = Promise.resolve({
      version: 1 as const,
      updateAvailable: {
        version: "v0.0.1",
        assets: [],
        expires: Date.now() - 1000,
      },
    });
    const cacheRead = stub(
      cacheInternals,
      "read",
      returnsNext([cacheValue]),
    );

    const assets = await upgradeCommand.getLatestVersionAssets();
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
    const upgradeCommand = new UpgradeCommand();
    const version = "v1.0.0";

    stub(upgradeCommand, "getVersion", returnsNext([version]));
    stub(
      upgradeCommand,
      "getLatestVersion",
      returnsNext([Promise.resolve(version)]),
    );
    const consoleSpy = spy(console, "log");
    // @ts-expect-error: we do what we want in tests
    const exitStub = stub(Deno, "exit", returnsNext([undefined]));

    // @ts-expect-error: we do what we want in tests
    await upgradeCommand.execute({});

    assertSpyCall(consoleSpy, 0, {
      args: ["Already up-to-date."],
    });
    assertSpyCalls(exitStub, 1);

    consoleSpy.restore();
    exitStub.restore();
  });

  it("should replace the current version binary with the latest version binary", async () => {
    const upgradeCommand = new UpgradeCommand();
    const version = "v1.0.0";
    const originalBuild = Deno.build;
    const builds = [
      { os: "linux", arch: "", file: "linux" },
      { os: "windows", arch: "", file: "windows" },
      { os: "darwin", arch: "aarch64", file: "macos-arm" },
      { os: "darwin", arch: "x64", file: "macos" },
    ];

    for (let i = 0; i < builds.length; i++) {
      const consoleSpy = spy(console, "log");
      const getVersionStub = stub(
        upgradeCommand,
        "getVersion",
        returnsNext([version]),
      );
      const getLatestVersionStub = stub(
        upgradeCommand,
        "getLatestVersion",
        returnsNext([Promise.resolve("v1.1.0")]),
      );
      const getLatestVersionAssetsStub = stub(
        upgradeCommand,
        "getLatestVersionAssets",
        returnsNext([Promise.resolve([
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
        ])]),
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

      // @ts-expect-error: we do what we want in tests
      await upgradeCommand.execute({});

      assertSpyCall(downloadStub, 0, {
        args: [
          `https://raw.github.com/paperspace/cli/v1.0.0/pspace-${build.file}.zip`,
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
      assertSpyCall(consoleSpy, 0, {
        args: ["Upgrading from v1.0.0 to v1.1.0..."],
      });
      assertSpyCall(consoleSpy, 1, {
        args: ["Successfully upgraded to v1.1.0."],
      });
      assertSpyCall(consoleSpy, 2, {
        args: [`  Run ${bold("COMMAND --version")} to verify.`],
      });

      getVersionStub.restore();
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
      consoleSpy.restore();
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

function jsonOk(body: any) {
  const mockResponse = new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "Content-type": "application/json",
    },
  });

  return Promise.resolve(mockResponse);
}
