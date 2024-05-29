Manage your private networks. Private networks are logically isolated networks
for your machines and shared drives. They can also be used for site-to-site VPNs
and direct connections to your on-premise network.

For more information, see
https://docs.paperspace.com/networking/private-networks.

### Usage

```
pspace private-network [command]
pspace private-network [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description                             |
| ---------- | --------------------------------------- |
| `create`   | Create a private network.               |
| `delete`   | Delete a private network from a team.   |
| `get`      | Get a private network from a team.      |
| `help`     | Show help for a private-network command |
| `list`     | List private networks in your team.     |

Pick a subset of fields to display:

````
pspace private-network list -F name -F dtModified
``` |
````
