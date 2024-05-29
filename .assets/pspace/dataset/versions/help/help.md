Show help for a versions command

### Usage

```
pspace dataset versions help [command]
pspace dataset versions help [arguments] [flags]
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
| `commands` | List versions commands |

Example:

````
$ pspace dataset versions help commands commands
``` |
````
