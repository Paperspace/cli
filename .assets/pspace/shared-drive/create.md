Create a shared drive.

### Usage

```
pspace shared-drive create [flags]
```

### Flags

| Name         | Aliases | Description                                                  | Required |
| ------------ | ------- | ------------------------------------------------------------ | -------- |
| `fields`     | F       | The fields to include in the response.                       | false    |
| `name`       | n       | The name of the shared drive                                 | true     |
| `network-id` |         | The ID of the network to create the shared drive in          | true     |
| `region`     |         | The region to create the shared drive in                     | true     |
| `size`       |         | The size of the shared drive                                 | true     |
| `log-level`  | l       | Enable debug logging.                                        | false    |
| `json`       | j       | Output JSON                                                  | false    |
| `api-key`    |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`       | h       | Show help for a command                                      | false    |
