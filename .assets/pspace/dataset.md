## pspace dataset

Manage your datasets.

For more information, see https://docs.paperspace.com/storage/datasets.

### Usage

```
  dataset [command]
  dataset [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

- [create](#create)
- [delete](#delete)
- [get](#get)
- [help](#help)
- [list](#list)
- [update](#update)
- [versions](#versions)
## pspace dataset create

Create a dataset.

### Usage

```
  dataset create [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| name | n | The name of the dataset | true |
| description |  | The description of the dataset | false |
| storage-provider-id |  | The ID of the storage provider to use for the dataset | false |
| is-public |  | Whether the dataset is public | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

## pspace dataset delete

Delete a dataset from a team.

### Usage

```
  dataset delete [arguments] [flags]
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

## pspace dataset get

Get a dataset from a team.

### Usage

```
  dataset get [arguments] [flags]
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

## pspace dataset help

Show help for a dataset command

### Usage

```
  dataset help [command]
  dataset help [arguments] [flags]
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
## pspace dataset help commands

List dataset commands

Example:
```
$ dataset help commands commands
```

### Usage

```
  dataset help commands [flags]
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

## pspace dataset list

List datasets in your team or project.

Pick a subset of fields to display:
```
pspace dataset list -F name -F dtModified
```

### Usage

```
  dataset list [flags]
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

## pspace dataset update

Update a dataset in a project or team.

### Usage

```
  dataset update [arguments] [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| name | n | The name of the dataset | true |
| description |  | The description of the dataset | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

## pspace dataset versions

Manage your dataset versions.

For more information, see https://docs.paperspace.com/storage/datasetVersions.

### Usage

```
  dataset versions [command]
  dataset versions [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

- [create](#create)
- [delete](#delete)
- [get](#get)
- [help](#help)
- [list](#list)
- [update](#update)
## pspace dataset versions create

Create a dataset version. This command will prompt you for an ID if you don't
provide one.

### Usage

```
  dataset versions create [arguments] [arguments] [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| tags |  | The tags for the version, comma-delimited | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

## pspace dataset versions delete

Delete a dataset version from a team. This command will prompt you for an ID
if you don't provide one.

### Usage

```
  dataset versions delete [arguments] [arguments] [flags]
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

## pspace dataset versions get

Get a dataset version from a team. This command will prompt you for an ID
if you don't provide one.

### Usage

```
  dataset versions get [arguments] [arguments] [flags]
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

## pspace dataset versions help

Show help for a versions command

### Usage

```
  dataset versions help [command]
  dataset versions help [arguments] [flags]
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
## pspace dataset versions help commands

List versions commands

Example:
```
$ dataset versions help commands commands
```

### Usage

```
  dataset versions help commands [flags]
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

## pspace dataset versions list

List dataset versions in your team or project.

Pick a subset of fields to display:
```
pspace dataset versions list <dataset-id> -F name -F dtModified
```

### Usage

```
  dataset versions list [arguments] [flags]
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

## pspace dataset versions update

Update a dataset version in a project or team.

### Usage

```
  dataset versions update [arguments] [arguments] [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| message | m | The description of the dataset version | true |
| tags |  | The tags for the version, comma-delimited | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

