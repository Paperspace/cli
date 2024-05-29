Create a snapshot from a machine.

### Usage

```
pspace snapshot create [flags]
```

### Flags

| Name         | Aliases | Description                                                  | Required |
| ------------ | ------- | ------------------------------------------------------------ | -------- |
| `fields`     | F       | The fields to include in the response.                       | false    |
| `name`       | n       | The name of the snapshot                                     | true     |
| `machine-id` | m       | The ID of the machine to create a snapshot from              | true     |
| `log-level`  | l       | Enable debug logging.                                        | false    |
| `json`       | j       | Output JSON                                                  | false    |
| `api-key`    |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`       | h       | Show help for a command                                      | false    |
