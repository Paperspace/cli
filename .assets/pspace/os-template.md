## pspace os-template

List OS templates. OS templates are pre-configured virtual machines that
you can use to create a new machine.

For more information, see https://docs.paperspace.com/compute/os-templates.

### Usage

```
  os-template [command]
  os-template [flags]
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
- [list](#list)
## pspace os-template help

Show help for a os-template command

### Usage

```
  os-template help [command]
  os-template help [arguments] [flags]
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
## pspace os-template help commands

List os-template commands

Example:
```
$ os-template help commands commands
```

### Usage

```
  os-template help commands [flags]
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

## pspace os-template list

List OS templates.

Pick a subset of fields to display:
```
pspace os-template list -F name
```

### Usage

```
  os-template list [flags]
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
| name | n | Filter by name. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

