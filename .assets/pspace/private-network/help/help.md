Show help for a private-network command

### Usage

```
pspace private-network help [command]
pspace private-network help [arguments] [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description                   |
| ---------- | ----------------------------- |
| `commands` | List private-network commands |

Example:

````
$ pspace private-network help commands commands
``` |
````
