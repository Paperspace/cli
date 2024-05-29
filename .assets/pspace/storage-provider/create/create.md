Create a storage provider.

### Usage

```
pspace storage-provider create [command]
pspace storage-provider create [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description                    |
| ---------- | ------------------------------ |
| `help`     | Show help for a create command |
| `s3`       | Create an S3 storage provider. |
