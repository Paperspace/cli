Manage your datasets.

For more information, see https://docs.paperspace.com/storage/datasets.

### Usage

```
pspace dataset [command]
pspace dataset [flags]
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
| `create`   | Create a dataset.                      |
| `delete`   | Delete a dataset from a team.          |
| `get`      | Get a dataset from a team.             |
| `help`     | Show help for a dataset command        |
| `list`     | List datasets in your team or project. |

Pick a subset of fields to display:

````
pspace dataset list -F name -F dtModified
``` |
| `update` | Update a dataset in a project or team. |
| `versions` | Manage your dataset versions.

For more information, see https://docs.paperspace.com/storage/datasetVersions. |
````
