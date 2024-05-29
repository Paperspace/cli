List OS templates. OS templates are pre-configured virtual machines that you can
use to create a new machine.

For more information, see https://docs.paperspace.com/compute/os-templates.

### Usage

```
pspace os-template [command]
pspace os-template [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description                         |
| ---------- | ----------------------------------- |
| `help`     | Show help for a os-template command |
| `list`     | List OS templates.                  |

Pick a subset of fields to display:

````
pspace os-template list -F name
``` |
````
