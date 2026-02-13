Create a startup script.

### Usage

```
pspace startup-script create [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `fields`    | F       | The fields to include in the response.                       | false    |
| `name`      | n       | The name of the startup script                               | true     |
| `script`    |         | The script to run                                            | true     |
| `run-once`  |         | Whether to run once or on every boot                         | false    |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |
