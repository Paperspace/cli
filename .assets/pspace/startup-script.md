## pspace startup-script

Manage your startup scripts. Startup scripts allow you to configure a machine on
first boot or on every boot.

### Usage

```
pspace startup-script [command]
pspace startup-script [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands

- [assign](#assign)
- [create](#create)
- [delete](#delete)
- [get](#get)
- [help](#help)
- [list](#list)
- [unassign](#unassign)
- [update](#update)

## pspace startup-script assign

Assign a startup script to a machine.

### Usage

```
pspace startup-script assign [arguments] [flags]
```

### Flags

| Name       | Aliases | Description                                                  | Required |
| ---------- | ------- | ------------------------------------------------------------ | -------- |
| fields     | F       | The fields to include in the response.                       | false    |
| machine-id |         | The ID of the machine to assign the startup script to        | true     |
| log-level  | l       | Enable debug logging.                                        | false    |
| json       | j       | Output JSON                                                  | false    |
| api-key    |         | A Paperspace public API Key used for authenticating requests | false    |
| help       | h       | Show help for a command                                      | false    |

#### Subcommands

## pspace startup-script create

Create a startup script.

### Usage

```
pspace startup-script create [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| fields    | F       | The fields to include in the response.                       | false    |
| name      | n       | The name of the startup script                               | true     |
| script    |         | The script to run                                            | true     |
| run-once  |         | Whether to run once or on every boot                         | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands

## pspace startup-script delete

Delete a startup script from a team.

### Usage

```
pspace startup-script delete [arguments] [flags]
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

## pspace startup-script get

Get a startup script from a team.

### Usage

```
pspace startup-script get [arguments] [flags]
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

## pspace startup-script help

Show help for a startup-script command

### Usage

```
pspace startup-script help [command]
pspace startup-script help [arguments] [flags]
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

## pspace startup-script list

List startup scripts in your team.

Pick a subset of fields to display:

```
pspace startup-script list -F name -F dtCreated
```

### Usage

```
pspace startup-script list [flags]
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
| name      | n       | Filter by name.                                              | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands

## pspace startup-script unassign

Unassign a startup script from a machine.

### Usage

```
pspace startup-script unassign [arguments] [flags]
```

### Flags

| Name       | Aliases | Description                                                  | Required |
| ---------- | ------- | ------------------------------------------------------------ | -------- |
| fields     | F       | The fields to include in the response.                       | false    |
| machine-id |         | The ID of the machine to unassign the startup script from    | true     |
| log-level  | l       | Enable debug logging.                                        | false    |
| json       | j       | Output JSON                                                  | false    |
| api-key    |         | A Paperspace public API Key used for authenticating requests | false    |
| help       | h       | Show help for a command                                      | false    |

#### Subcommands

## pspace startup-script update

Update a startup script.

### Usage

```
pspace startup-script update [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| fields    | F       | The fields to include in the response.                       | false    |
| name      | n       | The name of the startup script                               | false    |
| script    |         | The script to run                                            | false    |
| run-once  |         | Whether to run once or on every boot                         | false    |
| enabled   |         | Whether the startup script is enabled or not                 | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands
