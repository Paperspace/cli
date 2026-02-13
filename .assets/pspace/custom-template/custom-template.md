Manage your custom templates. Custom templates are a backup of your machine's
disk. They can be used to create additional machines. You can use them to
prepopulate a machine with your desired software stack.

For more information, see https://docs.paperspace.com/compute/custom-templates.

### Usage

```
pspace custom-template [command]
pspace custom-template [flags]
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
| `create`   | Create a custom template from a machine. |
| `delete`   | Delete a custom template from a team.    |
| `get`      | Get a custom template from a team.       |
| `help`     | Show help for a custom-template command  |
| `list`     | List custom templates in your team.      |

Pick a subset of fields to display:

````
pspace custom-template list -F name -F dtModified
``` |
````
