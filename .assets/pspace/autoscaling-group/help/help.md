Show help for a autoscaling-group command

### Usage

```
pspace autoscaling-group help [command]
pspace autoscaling-group help [arguments] [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description                     |
| ---------- | ------------------------------- |
| `commands` | List autoscaling-group commands |

Example:

````
$ pspace autoscaling-group help commands commands
``` |
````
