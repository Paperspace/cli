Manage your startup scripts. Startup scripts allow you to configure a machine on
first boot or on every boot.

### Usage

```
pspace startup-script [command]
pspace startup-script [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description                            |
| ---------- | -------------------------------------- |
| `assign`   | Assign a startup script to a machine.  |
| `create`   | Create a startup script.               |
| `delete`   | Delete a startup script from a team.   |
| `get`      | Get a startup script from a team.      |
| `help`     | Show help for a startup-script command |
| `list`     | List startup scripts in your team.     |

Pick a subset of fields to display:

````
pspace startup-script list -F name -F dtCreated
``` |
| `unassign` | Unassign a startup script from a machine. |
| `update` | Update a startup script. |
````
