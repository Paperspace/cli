## pspace dataset

Manage your datasets.

For more information, see https://docs.paperspace.com/storage/datasets.

### Usage

```
pspace dataset [command]
pspace dataset [flags]
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
- [versions](#versions)

## pspace dataset create

Create a dataset.

### Usage

```
pspace dataset create [flags]
```

### Flags

| Name                | Aliases | Description                                                  | Required |
| ------------------- | ------- | ------------------------------------------------------------ | -------- |
| fields              | F       | The fields to include in the response.                       | false    |
| name                | n       | The name of the dataset                                      | true     |
| description         |         | The description of the dataset                               | false    |
| storage-provider-id |         | The ID of the storage provider to use for the dataset        | false    |
| is-public           |         | Whether the dataset is public                                | false    |
| log-level           | l       | Enable debug logging.                                        | false    |
| json                | j       | Output JSON                                                  | false    |
| api-key             |         | A Paperspace public API Key used for authenticating requests | false    |
| help                | h       | Show help for a command                                      | false    |

#### Subcommands

## pspace dataset delete

Delete a dataset from a team.

### Usage

```
pspace dataset delete [arguments] [flags]
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

## pspace dataset get

Get a dataset from a team.

### Usage

```
pspace dataset get [arguments] [flags]
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

## pspace dataset help

Show help for a dataset command

### Usage

```
pspace dataset help [command]
pspace dataset help [arguments] [flags]
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

## pspace dataset list

List datasets in your team or project.

Pick a subset of fields to display:

```
pspace dataset list -F name -F dtModified
```

### Usage

```
pspace dataset list [flags]
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

## pspace dataset update

Update a dataset in a project or team.

### Usage

```
pspace dataset update [arguments] [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| fields      | F       | The fields to include in the response.                       | false    |
| name        | n       | The name of the dataset                                      | true     |
| description |         | The description of the dataset                               | false    |
| log-level   | l       | Enable debug logging.                                        | false    |
| json        | j       | Output JSON                                                  | false    |
| api-key     |         | A Paperspace public API Key used for authenticating requests | false    |
| help        | h       | Show help for a command                                      | false    |

#### Subcommands

## pspace dataset versions

Manage your dataset versions.

For more information, see https://docs.paperspace.com/storage/datasetVersions.

### Usage

```
pspace dataset versions [command]
pspace dataset versions [flags]
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
