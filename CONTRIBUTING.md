# Iterating on the Paperspace CLI

> A guide for contributing to the Paperspace CLI

## Getting started

1. Install Deno

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

2. Clone the repo and open in VSCode

```sh
git clone https://github.com/Paperspace/cli
cd cli
code cli
```

3. Install the VSCode Deno extension
4. Load the Deno cache

```sh
deno task cache
```

## Development scripts

> `deno task [name]`

- `"cache"`: Load the Deno install cache
- `"check"`: Type check without executing
- `"compile"`: Compile the binaries for macOS, Linux, and Windows
- `"compile:macos"`: Compile the binary for macOS x86
- `"compile:macos-arm"`: Compile the binary for macOS M-series chips
- `"compile:linux"`: Compile the binary for Linux
- `"compile:windows"`: Compile the binary for Windows
- `"generate"`: Generate GraphQL types/documents
- `"run"`: Run the CLI in development mode e.g.
  `deno task run [command] [--options]`

## Writing GraphQL documents

GraphQL documents can be contributed in
`.graphql/[feature]/[queries, mutations].graphql`. After adding a document, be
sure to run `deno task generate` to generate the typings for it. You may then
import the document within the Deno app via

```ts
import { MyDocument } from "./paperspace-graphql.ts";
```

## Tools we use

1. [Cliffy](https://cliffy.io) - The framework for building interactive command
   line tools with Deno.
2. [GraphQL Codegen](https://the-guild.dev/graphql/codegen) - Generate code from
   your GraphQL schema and operations with a simple CLI.
3. [Zod](https://github.com/colinhacks/zod) - TypeScript-first schema validation
   with static type inference.
4. [graphql-request](https://github.com/prisma-labs/graphql-request) - Minimal
   GraphQL client supporting Node and browsers for scripts or simple apps.
