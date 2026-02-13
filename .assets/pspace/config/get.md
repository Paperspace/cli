This command gets a configuration value. You can pass a key to get a specific
value, or you can pass no arguments to get all configuration values.

For example, to get the current team run:

```
pspace config get team
```

### Usage

```
pspace config get [arguments] [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |
