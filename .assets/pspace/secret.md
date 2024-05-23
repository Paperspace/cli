# pspace secret

Manage your Paperspace secrets. Secrets are used to store sensitive
information such as API keys, passwords, and other credentials. Secrets 
can be safely injected into workloads as environment variables. An environment 
variable that uses a Secret will not reveal the contents of the secret itself.

Secrets can be created at the following levels:

- Project (default): these secrets are applied to all resources in a project
- Global: these secrets can be applied to all resources on your current team

For more information, see https://docs.paperspace.com/secrets.

## Usage

```
  secret [command]
  secret [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [create](#create)
- [delete](#delete)
- [get](#get)
- [help](#help)
- [list](#list)
- [update](#update)
# pspace secret create

Create a secret in a project or team.

## Usage

```
  secret create [arguments] [arguments] [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| project-id | p | The ID of the project the secret is in. If not specified, the
secret will be created in the project linked to your current working
directory. If you are not in a project directory, you will be prompted
to select a project. | false |
| global | g | Manage a secret that is available to the entire team you are
currently logged into. By default, secrets are only available to
a project. | false |
| cwd |  | The directory to create the secret in | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

# pspace secret delete

Delete a secret from a project or team.

## Usage

```
  secret delete [arguments] [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| project-id | p | The ID of the project the secret is in. If not specified, the
secret will be created in the project linked to your current working
directory. If you are not in a project directory, you will be prompted
to select a project. | false |
| global | g | Manage a secret that is available to the entire team you are
currently logged into. By default, secrets are only available to
a project. | false |
| cwd |  | The directory to create the secret in | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

# pspace secret get

Get a secret from a project or team.

## Usage

```
  secret get [arguments] [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| project-id | p | The ID of the project the secret is in. If not specified, the
secret will be created in the project linked to your current working
directory. If you are not in a project directory, you will be prompted
to select a project. | false |
| global | g | Manage a secret that is available to the entire team you are
currently logged into. By default, secrets are only available to
a project. | false |
| cwd |  | The directory to create the secret in | false |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

# pspace secret help

Show help for a secret command

## Usage

```
  secret help [command]
  secret help [arguments] [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [commands](#commands)
# pspace secret help commands

List secret commands

Example:
```
$ secret help commands commands
```

## Usage

```
  secret help commands [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |
| all | a | Show all commands, including hidden ones | false |

### Subcommands

# pspace secret list

List secrets in your team or project.

Pick a subset of fields to display:
```
pspace secret list -F name -F dtModified
```

## Usage

```
  secret list [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| limit |  | The number of items to return in the next page. | false |
| after |  | The cursor to fetch the next results from. | false |
| orderBy |  | The field to order items by. | false |
| asc |  | Whether to order items ascending. | false |
| desc |  | Whether to order items descending. | false |
| fields | F | The fields to include in the response. | false |
| project-id | p | The ID of the project the secret is in. If not specified, the
secret will be created in the project linked to your current working
directory. If you are not in a project directory, you will be prompted
to select a project. | false |
| global | g | Manage a secret that is available to the entire team you are
currently logged into. By default, secrets are only available to
a project. | false |
| cwd |  | The directory to create the secret in | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

# pspace secret update

Update a secret in a project or team.

## Usage

```
  secret update [arguments] [arguments] [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| project-id | p | The ID of the project the secret is in. If not specified, the
secret will be created in the project linked to your current working
directory. If you are not in a project directory, you will be prompted
to select a project. | false |
| global | g | Manage a secret that is available to the entire team you are
currently logged into. By default, secrets are only available to
a project. | false |
| cwd |  | The directory to create the secret in | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

