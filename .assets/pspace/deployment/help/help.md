Show help for a deployment command

### Usage

```
pspace deployment help [command]
pspace deployment help [arguments] [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description              |
| ---------- | ------------------------ |
| `commands` | List deployment commands |

Example:

````
$ pspace deployment help commands commands
``` |
````
