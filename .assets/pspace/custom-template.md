## pspace custom-template

Manage your custom templates. Custom templates are a backup of your machine's
disk. They can be used to create additional machines. You can use them to
prepopulate a machine with your desired software stack.

For more information, see https://docs.paperspace.com/compute/custom-templates.

### Usage

```
pspace custom-template [command]
pspace custom-template [flags]
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

## pspace custom-template create

Create a custom template from a machine.

### Usage

```
pspace custom-template create [flags]
```

### Flags

| Name       | Aliases | Description                                                  | Required |
| ---------- | ------- | ------------------------------------------------------------ | -------- |
| fields     | F       | The fields to include in the response.                       | false    |
| name       | n       | The name of the custom template                              | true     |
| machine-id | m       | The ID of the machine to create a custom template from       | true     |
| log-level  | l       | Enable debug logging.                                        | false    |
| json       | j       | Output JSON                                                  | false    |
| api-key    |         | A Paperspace public API Key used for authenticating requests | false    |
| help       | h       | Show help for a command                                      | false    |

#### Subcommands

## pspace custom-template delete

Delete a custom template from a team.

### Usage

```
pspace custom-template delete [arguments] [flags]
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

## pspace custom-template get

Get a custom template from a team.

### Usage

```
pspace custom-template get [arguments] [flags]
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

## pspace custom-template help

Show help for a custom-template command

### Usage

```
pspace custom-template help [command]
pspace custom-template help [arguments] [flags]
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

## pspace custom-template list

List custom templates in your team.

Pick a subset of fields to display:

```
pspace custom-template list -F name -F dtModified
```

### Usage

```
pspace custom-template list [flags]
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
| name              | n       | Filter by name.                                                      | false    |
| log-level         | l       | Enable debug logging.                                                | false    |
| json              | j       | Output JSON                                                          | false    |
| api-key           |         | A Paperspace public API Key used for authenticating requests         | false    |
| help              | h       | Show help for a command                                              | false    |

#### Subcommands
