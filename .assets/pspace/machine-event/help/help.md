Show help for a machine-event command

### Usage

```
pspace machine-event help [command]
pspace machine-event help [arguments] [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description                 |
| ---------- | --------------------------- |
| `commands` | List machine-event commands |

Example:

````
$ pspace machine-event help commands commands
``` |
````
