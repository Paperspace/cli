## pspace deployment

Effortlessly deploy ML apps to Paperspace.

### Usage

```
  deployment [command]
  deployment [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

- [delete](#delete)
- [get](#get)
- [help](#help)
- [list](#list)
- [up](#up)
## pspace deployment delete

Delete a deployment by its ID. If you don't provide an ID, this command will
prompt you for one based on the deployments you have access to.

```
pspace deployment delete 123e4567-e89b-12d3-a456-426614174000
```

### Usage

```
  deployment delete [arguments] [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

## pspace deployment get

Get a deployment by its ID. If you don't provide an ID, this command will
prompt you for one based on the deployments you have access to.

```
pspace deployment get 123e4567-e89b-12d3-a456-426614174000
```

Pick a subset of fields to display:
```
pspace deployment get 123e4567-e89b-12d3-a456-426614174000 -F name
```

### Usage

```
  deployment get [arguments] [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

## pspace deployment help

Show help for a deployment command

### Usage

```
  deployment help [command]
  deployment help [arguments] [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

- [commands](#commands)
## pspace deployment help commands

List deployment commands

Example:
```
$ deployment help commands commands
```

### Usage

```
  deployment help commands [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |
| all | a | Show all commands, including hidden ones | false |

#### Subcommands

## pspace deployment list

List deployments in your team.

Pick a subset of fields to display:
```
pspace deployment list -F id -F name
```

### Usage

```
  deployment list [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| limit |  | The number of items to return in the next page. | false |
| after |  | The cursor to fetch the next results from. | false |
| orderBy |  | The field to order items by. | false |
| asc |  | Whether to order items ascending. | false |
| desc |  | Whether to order items descending. | false |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

## pspace deployment up

This will create a new deployment for your app or update it if it already exists. 
You can optionally specify a path to a config file. If no config file is specified, 
the default config file paths will be tried.

Create a new deployment for the app in the current directory.
```
$ pspace deployment create
```

Create a new deployment using a config file.
```
$ pspace deployment create -c paperspace.json
```

Create a new deployment for an app in a different directory.
```
$ pspace deployment create --cwd ../my-app
```

Create a new deployment for an app in a specific project.
```
$ pspace deployment create --project-id 1234
```

### Usage

```
  deployment up [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| config | c | The path to the config file. Defaults to our default config file paths.

The default config file paths are in order of precedence:

- `paperspace.yaml`
- `paperspace.yml`
- `paperspace.json`
- `paperspace.jsonc`
- `paperspace.toml`
- `.paperspace/app.yaml`
- `.paperspace/app.yml`
- `.paperspace/app.json`
- `.paperspace/app.jsonc`
- `.paperspace/app.toml` | false |
| project-id | p | The ID of the project to deploy to. | false |
| cwd |  | The directory to deploy the app from. Defaults to the current directory. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

