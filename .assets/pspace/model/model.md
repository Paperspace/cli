Manage your Paperspace models.

For more information, see https://docs.paperspace.com/deploying/models.

### Usage

```
pspace model [command]
pspace model [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand   | Description                                                              |
| ------------ | ------------------------------------------------------------------------ |
| `create`     | Create a new model. This command will prompt you for a name if you don't |
| provide one. |                                                                          |
| `delete`     | Delete a model from a team.                                              |
| `get`        | Get a model from a team.                                                 |
| `help`       | Show help for a model command                                            |
| `list`       | List models in your team.                                                |

Pick a subset of fields to display:

````
pspace model list -F name -F dtModified
``` |
````
