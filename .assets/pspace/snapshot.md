## pspace snapshot

Manage your snapshots. Snapshots are copies of your machine's disk at a point in
time. They can be used to restore the machine to its previous state. Using
snapshots is recommended before taking any action that could affect the
usability of the machine or its network connection.

For more information, see https://docs.paperspace.com/storage/snapshots.

### Usage

```
pspace snapshot [command]
pspace snapshot [flags]
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
- [help](#help)
- [list](#list)
- [restore](#restore)

## pspace snapshot create

Create a snapshot from a machine.

### Usage

```
pspace snapshot create [flags]
```

### Flags

| Name       | Aliases | Description                                                  | Required |
| ---------- | ------- | ------------------------------------------------------------ | -------- |
| fields     | F       | The fields to include in the response.                       | false    |
| name       | n       | The name of the snapshot                                     | true     |
| machine-id | m       | The ID of the machine to create a snapshot from              | true     |
| log-level  | l       | Enable debug logging.                                        | false    |
| json       | j       | Output JSON                                                  | false    |
| api-key    |         | A Paperspace public API Key used for authenticating requests | false    |
| help       | h       | Show help for a command                                      | false    |

#### Subcommands

## pspace snapshot delete

Delete a snapshot from a team.

### Usage

```
pspace snapshot delete [arguments] [flags]
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

## pspace snapshot help

Show help for a snapshot command

### Usage

```
pspace snapshot help [command]
pspace snapshot help [arguments] [flags]
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

## pspace snapshot list

List snapshots in your team.

Pick a subset of fields to display:

```
pspace snapshot list -F name -F dtModified
```

### Usage

```
pspace snapshot list [flags]
```

### Flags

| Name              | Aliases | Description                                                          | Required |
| ----------------- | ------- | -------------------------------------------------------------------- | -------- |
| limit             |         | The number of items to return in the next page.                      | false    |
| after             |         | The cursor to fetch the next results from.                           | false    |
| orderBy           |         | The field to order items by.                                         | false    |
| asc               |         | Whether to order items ascending.                                    | false    |
| desc              |         | Whether to order items descending.                                   | false    |
| fields            | F       | The fields to include in the response.                               | false    |
| machine-id        | m       | The ID of the machine the event is for. If not specified, all events |          |
| will be returned. | false   |                                                                      |          |
| log-level         | l       | Enable debug logging.                                                | false    |
| json              | j       | Output JSON                                                          | false    |
| api-key           |         | A Paperspace public API Key used for authenticating requests         | false    |
| help              | h       | Show help for a command                                              | false    |

#### Subcommands

## pspace snapshot restore

Restore a machine to a snapshot.

### Usage

```
pspace snapshot restore [arguments] [flags]
```

### Flags

| Name            | Aliases | Description                                                  | Required |
| --------------- | ------- | ------------------------------------------------------------ | -------- |
| fields          | F       | The fields to include in the response.                       | false    |
| create-snapshot |         | Create an additional snapshot before restore                 | false    |
| log-level       | l       | Enable debug logging.                                        | false    |
| json            | j       | Output JSON                                                  | false    |
| api-key         |         | A Paperspace public API Key used for authenticating requests | false    |
| help            | h       | Show help for a command                                      | false    |

#### Subcommands
