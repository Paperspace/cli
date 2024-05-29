Manage your snapshots. Snapshots are copies of your machine's disk at a point in
time. They can be used to restore the machine to its previous state. Using
snapshots is recommended before taking any action that could affect the
usability of the machine or its network connection.

For more information, see https://docs.paperspace.com/storage/snapshots.

### Usage

```
pspace snapshot [command]
pspace snapshot [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description                       |
| ---------- | --------------------------------- |
| `create`   | Create a snapshot from a machine. |
| `delete`   | Delete a snapshot from a team.    |
| `help`     | Show help for a snapshot command  |
| `list`     | List snapshots in your team.      |

Pick a subset of fields to display:

````
pspace snapshot list -F name -F dtModified
``` |
| `restore` | Restore a machine to a snapshot. |
````
