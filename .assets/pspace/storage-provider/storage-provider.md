Manage your storage providers.

For more information, see https://docs.paperspace.com/storage/storageProviders.

### Usage

```
pspace storage-provider [command]
pspace storage-provider [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description                                     |
| ---------- | ----------------------------------------------- |
| `create`   | Create a storage provider.                      |
| `delete`   | Delete a storage provider from a team.          |
| `get`      | Get a storage provider from a team.             |
| `help`     | Show help for a storage-provider command        |
| `list`     | List storage providers in your team or project. |

Pick a subset of fields to display:

````
pspace storage provider list -F name -F dtModified
``` |
| `update` | Update a storage provider. |
````
