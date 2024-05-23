## pspace machine-event

Manage your machine events. Events are asynchronous tasks performed by our
system on your machines. Not all machine commands are asynchronous. For those
that are, a machine event will be returned which can be tracked using this
command.

For more information, see https://docs.paperspace.com/machines.

### Usage

```
pspace machine-event [command]
pspace machine-event [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands

- [get](#get)
- [help](#help)
- [list](#list)

## pspace machine-event get

Get a machine event from a team.

### Usage

```
pspace machine-event get [arguments] [flags]
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

## pspace machine-event help

Show help for a machine-event command

### Usage

```
pspace machine-event help [command]
pspace machine-event help [arguments] [flags]
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

## pspace machine-event list

List machine events in your team.

Pick a subset of fields to display:

```
pspace machine-event list -F name -F dtModified
```

### Usage

```
pspace machine-event list [flags]
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
