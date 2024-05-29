Show help for a public-ip command

### Usage

```
pspace public-ip help [command]
pspace public-ip help [arguments] [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description             |
| ---------- | ----------------------- |
| `commands` | List public-ip commands |

Example:

````
$ pspace public-ip help commands commands
``` |
````
