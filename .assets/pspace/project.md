# pspace project

Manage your Paperspace projects.

## Usage

```
  project [command]
  project [flags]
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
- [link](#link)
- [list](#list)
- [update](#update)
# pspace project create

Create a new project. This command will prompt you for a name if you don't
provide one.

## Usage

```
  project create [arguments] [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

# pspace project delete

Delete a project by its ID. If you don't provide an ID, this command will
prompt you for one based on the projects you have access to.

## Usage

```
  project delete [arguments] [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

# pspace project get

Get a project by its ID. If you don't provide an ID, this command will
prompt you for one based on the projects you have access to.

## Usage

```
  project get [arguments] [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

# pspace project help

Show help for a project command

## Usage

```
  project help [command]
  project help [arguments] [flags]
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
# pspace project help commands

List project commands

Example:
```
$ project help commands commands
```

## Usage

```
  project help commands [flags]
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

# pspace project link

This will link a remote project to a local directory. Commands that
depend on a project ID will use the project ID of the linked project
when communicating with the Paperspace API.

Link a project to the current directory.
```
$ pspace link
```

Link a project to a different directory.
```
$ pspace link --cwd ../my-app
```

Link a project and specify a project ID.
```
$ pspace link pzwf2g05ubegj
```

## Usage

```
  project link [arguments] [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| cwd |  | The directory to link the project to. Defaults to the current directory. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

# pspace project list

List projects in your team.

Pick a subset of fields to display:
```
pspace project list -F id -F name -F dtCreated
```

## Usage

```
  project list [flags]
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
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

# pspace project update

Update an existing project.

Example:
```
pspace project update psukfyemho7 --name my-cool-project
```

## Usage

```
  pspace project update <project-id> [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| name |  | The new name for the project. | false |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

