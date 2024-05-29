Show help for a machine command

### Usage

```
pspace machine help [command]
pspace machine help [arguments] [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description           |
| ---------- | --------------------- |
| `commands` | List machine commands |

Example:

````
$ pspace machine help commands commands
``` |
````
