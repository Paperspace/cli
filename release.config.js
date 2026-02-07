module.exports = {
  branches: [
    "main",
    {
      name: "next",
      prerelease: true,
    },
    {
      name: "alpha",
      prerelease: true,
    },
    {
      name: "canary",
      prerelease: true,
    },
  ],
  tagFormat: "${version}",
  plugins: [
    /**
     * Verify that the commit messages follow commit message conventions
     */
    "@semantic-release/commit-analyzer",
    /**
     * Generate release notes based on the commit messages
     */
    "@semantic-release/release-notes-generator",
    /**
     * Replace the version in the source code with the new version
     */
    [
      "@google/semantic-release-replace-plugin",
      {
        replacements: [
          {
            files: ["version.ts"],
            from: 'const VERSION = ".*";',
            to: 'const VERSION = "${nextRelease.version}";',
            results: [
              {
                file: "version.ts",
                hasChanged: true,
                numMatches: 1,
                numReplacements: 1,
              },
            ],
            countMatches: true,
          },
          {
            files: ["version.ts"],
            from: 'const COMMIT = ".*";',
            to: 'const COMMIT = "${nextRelease.gitHead}";',
            results: [
              {
                file: "version.ts",
                hasChanged: true,
                numMatches: 1,
                numReplacements: 1,
              },
            ],
            countMatches: true,
          },
        ],
      },
    ],
    /**
     * Compile the binaries for the release
     */
    [
      "@semantic-release/exec",
      {
        execCwd: ".",
        prepareCmd: [
    /**
     * For creating the release assets, we need to create the output directories first.
     */
          `mkdir -p bin/macos bin/macos-arm bin/linux bin/windows`,
          `deno task compile`,
          `cd bin/linux`,
          `zip -9 pspace-linux.zip pspace`,
          `cd ../macos`,
          `zip -9 pspace-macos.zip pspace`,
          `cd ../macos-arm`,
          `zip -9 pspace-macos-arm.zip pspace`,
          `cd ../windows`,
          `zip -9 pspace-windows.zip pspace.exe`,
        ].join(" &&\\\n"),
      },
    ],
    /**
     * Create a new release on GitHub, publish release notes, and upload binaries
     */
    [
      "@semantic-release/github",
      {
        // DO NOT CHANGE THIS unless you know what you're doing. Things like
        // the `upgrade` command depend on these names and paths.
        assets: [
          {
            path: "bin/linux/pspace-linux.zip",
            name: "pspace-linux.zip",
            label: "Download Paperspace for Linux",
          },
          {
            path: "bin/macos/pspace-macos.zip",
            name: "pspace-macos.zip",
            label: "Download Paperspace for macOS x64 (Intel)",
          },
          {
            path: "bin/macos-arm/pspace-macos-arm.zip",
            name: "pspace-macos-arm.zip",
            label:
              "Download Paperspace for macOS ARM (Apple silicon, e.g. M1/M2)",
          },
          {
            path: "bin/windows/pspace-windows.zip",
            name: "pspace-windows.zip",
            label: "Download Paperspace for Windows",
          },
        ],
      },
    ],
  ],
};
