Update an existing project.

Example:

```
pspace project update psukfyemho7 --name my-cool-project
```

### Usage

```
pspace project update <project-id> [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `name`      |         | The new name for the project.                                | false    |
| `fields`    | F       | The fields to include in the response.                       | false    |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |
