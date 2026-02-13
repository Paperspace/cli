Update a storage provider.

### Usage

```
pspace storage-provider update [command]
pspace storage-provider update [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description                                         |
| ---------- | --------------------------------------------------- |
| `help`     | Show help for a update command                      |
| `s3`       | Update an S3 storage provider in a project or team. |
