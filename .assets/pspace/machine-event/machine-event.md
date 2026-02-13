Manage your machine events. Events are asynchronous tasks performed by our
system on your machines. Not all machine commands are asynchronous. For those
that are, a machine event will be returned which can be tracked using this
command.

For more information, see https://docs.paperspace.com/machines.

### Usage

```
pspace machine-event [command]
pspace machine-event [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description                           |
| ---------- | ------------------------------------- |
| `get`      | Get a machine event from a team.      |
| `help`     | Show help for a machine-event command |
| `list`     | List machine events in your team.     |

Pick a subset of fields to display:

````
pspace machine-event list -F name -F dtModified
``` |
````
