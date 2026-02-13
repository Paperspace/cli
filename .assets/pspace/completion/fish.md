Generate the autocompletion script for the fish shell.

To load completions in your current shell session:

```
$ pspace completion fish fish | source
```

To load completions for every new session, execute once:

```
$ pspace completion fish fish > ~/.config/fish/completions/pspace.fish
```

You will need to start a new shell for this setup to take effect.

### Usage

```
pspace completion fish [flags]
```

### Flags

| Name              | Aliases | Description                                                  | Required |
| ----------------- | ------- | ------------------------------------------------------------ | -------- |
| `no-descriptions` |         | Disable completion descriptions                              | false    |
| `log-level`       | l       | Enable debug logging.                                        | false    |
| `json`            | j       | Output JSON                                                  | false    |
| `api-key`         |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`            | h       | Show help for a command                                      | false    |
