Manage your autoscaling groups. Autoscaling groups enable using the Kubernetes
cluster-autoscaler to automatically scale your cluster. You can also autoscaling
groups as a primitive for your own autoscaler.

### Usage

```
pspace autoscaling-group [command]
pspace autoscaling-group [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description                               |
| ---------- | ----------------------------------------- |
| `create`   | Create an autoscaling group.              |
| `delete`   | Delete an autoscaling group from a team.  |
| `get`      | Get an autoscaling group from a team.     |
| `help`     | Show help for a autoscaling-group command |
| `list`     | List autoscaling groups in your team.     |

Pick a subset of fields to display:

````
pspace autoscaling-group list -F name -F dtCreated
``` |
| `update` | Update an autoscaling group. |
````
