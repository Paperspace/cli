Show help for a snapshot command

### Usage

```
pspace snapshot help [command]
pspace snapshot help [arguments] [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description            |
| ---------- | ---------------------- |
| `commands` | List snapshot commands |

Example:

````
$ pspace snapshot help commands commands
``` |
````
