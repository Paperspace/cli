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
  dryRun: true,
  debug: true,
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
            files: ["lib/version.ts"],
            from: '__VERSION__ = ".*"',
            to: '__VERSION__ = "${nextRelease.gitTag}"',
            results: [
              // Verify that the replacement was successful
              {
                file: "lib/version.ts",
                hasChanged: true,
                numMatches: 1,
                numReplacements: 1,
              },
            ],
            countMatches: true,
          },
          {
            files: ["lib/version.ts"],
            from: '__COMMIT__ = ".*"',
            to: '__COMMIT__ = "${nextRelease.gitHead}"',
            results: [
              // Verify that the replacement was successful
              {
                file: "lib/version.ts",
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
        publishCmd: [
          `deno task compile`,
          `cd bin/linux`,
          `zip -9 pspace-linux.zip pspace`,
          `cd ../macos`,
          `zip -9 pspace-macos.zip pspace`,
          `cd ../macos-arm`,
          `zip -9 pspace-macos-arm.zip pspace`,
          `cd ../windows`,
          `zip -9 pspace-windows.zip pspace.exe`,
        ].join(" \\ \n"),
      },
    ],
    /**
     * Create a new release on GitHub, publish release notes, and upload binaries
     */
    [
      "@semantic-release/github",
      {
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
