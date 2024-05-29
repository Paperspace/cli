Show help for a shared-drive command

### Usage

```
pspace shared-drive help [command]
pspace shared-drive help [arguments] [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description                |
| ---------- | -------------------------- |
| `commands` | List shared-drive commands |

Example:

````
$ pspace shared-drive help commands commands
``` |
````
