Manage your shared drives. Shared drives are used to centralize data used by
your team. Shared drives can be mounted on any Paperspace machine in the same
private network.

For more information, see https://docs.paperspace.com/storage/shared-drives.

### Usage

```
pspace shared-drive [command]
pspace shared-drive [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description                                 |
| ---------- | ------------------------------------------- |
| `create`   | Create a shared drive.                      |
| `delete`   | Delete a shared drive from a team.          |
| `get`      | Get a shared drive from a team.             |
| `help`     | Show help for a shared-drive command        |
| `list`     | List shared drives in your team or project. |

Pick a subset of fields to display:

````
pspace shared-drive list -F name -F dtModified
``` |
````
