Create a secret in a project or team.

### Usage

```
pspace secret create [arguments] [arguments] [flags]
```

### Flags

| Name                                                                   | Aliases | Description                                                   | Required |
| ---------------------------------------------------------------------- | ------- | ------------------------------------------------------------- | -------- |
| `project-id`                                                           | p       | The ID of the project the secret is in. If not specified, the |          |
| secret will be created in the project linked to your current working   |         |                                                               |          |
| directory. If you are not in a project directory, you will be prompted |         |                                                               |          |
| to select a project.                                                   | false   |                                                               |          |
| `global`                                                               | g       | Manage a secret that is available to the entire team you are  |          |
| currently logged into. By default, secrets are only available to       |         |                                                               |          |
| a project.                                                             | false   |                                                               |          |
| `cwd`                                                                  |         | The directory to create the secret in                         | false    |
| `log-level`                                                            | l       | Enable debug logging.                                         | false    |
| `json`                                                                 | j       | Output JSON                                                   | false    |
| `api-key`                                                              |         | A Paperspace public API Key used for authenticating requests  | false    |
| `help`                                                                 | h       | Show help for a command                                       | false    |
