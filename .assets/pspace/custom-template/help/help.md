Show help for a custom-template command

### Usage

```
pspace custom-template help [command]
pspace custom-template help [arguments] [flags]
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
| `commands` | List custom-template commands |

Example:

````
$ pspace custom-template help commands commands
``` |
````
