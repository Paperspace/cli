Manage your Paperspace machines.

For more information, see https://docs.paperspace.com/machines.

### Usage

```
pspace machine [command]
pspace machine [flags]
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
| `create`   | Create a machine.               |
| `delete`   | Delete a machine from a team.   |
| `get`      | Get a machine from a team.      |
| `help`     | Show help for a machine command |
| `list`     | List machines in your team.     |

Pick a subset of fields to display:

````
pspace machine list -F name -F dtModified
``` |
| `restart` | Restart a machine from a team. |
| `start` | Start a machine from a team. |
| `stop` | Stop a machine from a team. |
| `update` | Update a machine's settings. |
````
