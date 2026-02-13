Update a startup script.

### Usage

```
pspace startup-script update [arguments] [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `fields`    | F       | The fields to include in the response.                       | false    |
| `name`      | n       | The name of the startup script                               | false    |
| `script`    |         | The script to run                                            | false    |
| `run-once`  |         | Whether to run once or on every boot                         | false    |
| `enabled`   |         | Whether the startup script is enabled or not                 | false    |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |
