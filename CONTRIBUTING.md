# Contribute

> A guide for contributing to the Paperspace CLI

## Getting Started

1. [Install Deno](https://deno.land/#installation): A secure runtime for
   JavaScript and TypeScript

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

2. [Install zCLI](https://github.com/jaredLunde/zcli-cli): A CLI for creating
   and managing zCLI applications

```sh
curl -fsSL https://raw.githubusercontent.com/jaredLunde/zcli-cli/main/install.sh | sh
```

3. Clone the repo and open in VSCode

```sh
git clone https://github.com/Paperspace/cli
code cli
```

4. Install the VSCode Deno extension
5. Load the Deno cache

```sh
deno task cache
```

## Development

Run the CLI in development mode:

```sh
deno task dev --help
```

Run the CLI against production environment:

```sh
deno task run --help
```

Add a command to the CLI:

```sh
zcli add [name]
```

Generate the API client types for the CLI against the development environment:

```sh
deno task generate-api
```

Generate the API client types for the CLI against the production environment:

```sh
deno task generate-api:prod
```

Compile the CLI:

```sh
deno task compile
```

Test a binary:

```sh
deno task compile
bin/macos-arm/pspace --help
```

Test the CLI:

```sh
deno task test
```

Generate documentation for the CLI:

```sh
deno task docs
```

Format the code:

```sh
deno fmt
```

Lint the code:

```sh
deno lint
```

Type-check the code:

```sh
deno check mod.ts
```

## Tools we use

1. [zCLI](https://github.com/jaredLunde/zcli) - A framework for building
   type-safe command-line tools using Zod validators in Deno
1. [zCLI CLI](https://github.com/jaredLunde/zcli-cli) - A command-line tool for
   easily creating zCLI applications and commands with Deno.
1. [openapi-typescript](https://the-guild.dev/graphql/codegen) - Convert static
   OpenAPI schemas to TypeScript types quickly using pure Node.js. Fast,
   lightweight, (almost) dependency-free, and no Java/node-gyp/running OpenAPI
   servers necessary.
1. [Zod](https://github.com/colinhacks/zod) - TypeScript-first schema validation
   with static type inference.
