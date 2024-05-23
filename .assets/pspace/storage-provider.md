## pspace storage-provider

Manage your storage providers.

For more information, see https://docs.paperspace.com/storage/storageProviders.

### Usage

```
  storage-provider [command]
  storage-provider [flags]
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
## pspace storage-provider create

Create a storage provider.

### Usage

```
  storage-provider create [command]
  storage-provider create [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

- [help](#help)
- [s3](#s3)
## pspace storage-provider create help

Show help for a create command

### Usage

```
  storage-provider create help [command]
  storage-provider create help [arguments] [flags]
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
## pspace storage-provider create help commands

List create commands

Example:
```
$ storage-provider create help commands commands
```

### Usage

```
  storage-provider create help commands [flags]
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

## pspace storage-provider create s3

Create an S3 storage provider.

### Usage

```
  storage-provider create s3 [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| name | n | The name of the storage provider | true |
| is-team-default |  | Whether the storage provider is the team's default provider | false |
| endpoint |  | The endpoint of the storage provider | false |
| bucket |  | The bucket of the storage provider | true |
| region |  | The region of the storage provider | false |
| access-key |  | The access key of the storage provider | true |
| secret-access-key |  | The secret access key of the storage provider | true |
| signature-version |  | The signature version of the storage provider | false |
| retain-data |  | Whether to retain data in the storage provider | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

## pspace storage-provider delete

Delete a storage provider from a team.

### Usage

```
  storage-provider delete [arguments] [flags]
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

## pspace storage-provider get

Get a storage provider from a team.

### Usage

```
  storage-provider get [arguments] [flags]
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

## pspace storage-provider help

Show help for a storage-provider command

### Usage

```
  storage-provider help [command]
  storage-provider help [arguments] [flags]
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
## pspace storage-provider help commands

List storage-provider commands

Example:
```
$ storage-provider help commands commands
```

### Usage

```
  storage-provider help commands [flags]
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

## pspace storage-provider list

List storage providers in your team or project.

Pick a subset of fields to display:
```
pspace storage provider list -F name -F dtModified
```

### Usage

```
  storage-provider list [flags]
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

## pspace storage-provider update

Update a storage provider.

### Usage

```
  storage-provider update [command]
  storage-provider update [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

- [help](#help)
- [s3](#s3)
## pspace storage-provider update help

Show help for a update command

### Usage

```
  storage-provider update help [command]
  storage-provider update help [arguments] [flags]
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
## pspace storage-provider update help commands

List update commands

Example:
```
$ storage-provider update help commands commands
```

### Usage

```
  storage-provider update help commands [flags]
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

## pspace storage-provider update s3

Update an S3 storage provider in a project or team.

### Usage

```
  storage-provider update s3 [arguments] [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| name | n | The name of the storage provider | true |
| is-team-default |  | Whether the storage provider is the team's default provider | true |
| endpoint |  | The endpoint of the storage provider | false |
| bucket |  | The bucket of the storage provider | true |
| region |  | The region of the storage provider | false |
| access-key |  | The access key of the storage provider | true |
| secret-access-key |  | The secret access key of the storage provider | true |
| signature-version |  | The signature version of the storage provider | false |
| retain-data |  | Whether to retain data in the storage provider | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

