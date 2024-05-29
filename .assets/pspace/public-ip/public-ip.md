Manage your public IPs. Public IP addresses allow your compute machines to be
reachable over the internet.

For more information, see https://docs.paperspace.com/networking/public-ips.

### Usage

```
pspace public-ip [command]
pspace public-ip [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description                              |
| ---------- | ---------------------------------------- |
| `assign`   | Assign a public IP to a machine.         |
| `claim`    | Claim a public IP for a team.            |
| `help`     | Show help for a public-ip command        |
| `list`     | List public IPs in your team or project. |

Pick a subset of fields to display:

````
pspace public-ip list -F name -F dtModified
``` |
| `release` | Release a public IP from a team. This will unassign it from its assigned machine, if any. |
````
