Manage your dataset versions.

For more information, see https://docs.paperspace.com/storage/datasetVersions.

### Usage

```
pspace dataset versions [command]
pspace dataset versions [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand                | Description                                                                   |
| ------------------------- | ----------------------------------------------------------------------------- |
| `create`                  | Create a dataset version. This command will prompt you for an ID if you don't |
| provide one.              |                                                                               |
| `delete`                  | Delete a dataset version from a team. This command will prompt you for an ID  |
| if you don't provide one. |                                                                               |
| `get`                     | Get a dataset version from a team. This command will prompt you for an ID     |
| if you don't provide one. |                                                                               |
| `help`                    | Show help for a versions command                                              |
| `list`                    | List dataset versions in your team or project.                                |

Pick a subset of fields to display:

````
pspace dataset versions list <dataset-id> -F name -F dtModified
``` |
| `update` | Update a dataset version in a project or team. |
````
