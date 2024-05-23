## pspace storage-provider

Manage your storage providers.

For more information, see https://docs.paperspace.com/storage/storageProviders.

### Usage

```
pspace storage-provider [command]
pspace storage-provider [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

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
pspace storage-provider create [command]
pspace storage-provider create [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands

- [help](#help)
- [s3](#s3)

## pspace storage-provider delete

Delete a storage provider from a team.

### Usage

```
pspace storage-provider delete [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| fields    | F       | The fields to include in the response.                       | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands

## pspace storage-provider get

Get a storage provider from a team.

### Usage

```
pspace storage-provider get [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| fields    | F       | The fields to include in the response.                       | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands

## pspace storage-provider help

Show help for a storage-provider command

### Usage

```
pspace storage-provider help [command]
pspace storage-provider help [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands

- [commands](#commands)

## pspace storage-provider list

List storage providers in your team or project.

Pick a subset of fields to display:

```
pspace storage provider list -F name -F dtModified
```

### Usage

```
pspace storage-provider list [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| limit     |         | The number of items to return in the next page.              | false    |
| after     |         | The cursor to fetch the next results from.                   | false    |
| orderBy   |         | The field to order items by.                                 | false    |
| asc       |         | Whether to order items ascending.                            | false    |
| desc      |         | Whether to order items descending.                           | false    |
| fields    | F       | The fields to include in the response.                       | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands

## pspace storage-provider update

Update a storage provider.

### Usage

```
pspace storage-provider update [command]
pspace storage-provider update [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands

- [help](#help)
- [s3](#s3)
