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
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
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
