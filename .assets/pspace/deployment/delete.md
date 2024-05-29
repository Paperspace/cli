Delete a deployment by its ID. If you don't provide an ID, this command will
prompt you for one based on the deployments you have access to.

```
pspace deployment delete 123e4567-e89b-12d3-a456-426614174000
```

### Usage

```
pspace deployment delete [arguments] [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |
