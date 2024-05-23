## pspace os-template

List OS templates. OS templates are pre-configured virtual machines that you can
use to create a new machine.

For more information, see https://docs.paperspace.com/compute/os-templates.

### Usage

```
pspace os-template [command]
pspace os-template [flags]
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
- [list](#list)

## pspace os-template help

Show help for a os-template command

### Usage

```
pspace os-template help [command]
pspace os-template help [arguments] [flags]
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

## pspace os-template list

List OS templates.

Pick a subset of fields to display:

```
pspace os-template list -F name
```

### Usage

```
pspace os-template list [flags]
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
