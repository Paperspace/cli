Generate an autocompletion script for pspace in the specified shell. See each
sub-command's help for details on how to use the generated script.

### Usage

```
pspace completion [command]
pspace completion [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand | Description                                            |
| ---------- | ------------------------------------------------------ |
| `bash`     | Generate the autocompletion script for the bash shell. |

This script depends on the `bash-completion` package. If it is not installed
already, you can install it via your OS's package manager.

To load completions in your current shell session:

```
$ source <(pspace completion bash bash)
```

To load completions for every new session, execute once:

Linux:

```
$ pspace completion bash bash > /etc/bash_completion.d/pspace
```

macOS:

```
$ pspace completion bash bash > /usr/local/etc/bash_completion.d/pspace
```

You will need to start a new shell for this setup to take effect. | | `fish` |
Generate the autocompletion script for the fish shell.

To load completions in your current shell session:

```
$ pspace completion fish fish | source
```

To load completions for every new session, execute once:

```
$ pspace completion fish fish > ~/.config/fish/completions/pspace.fish
```

You will need to start a new shell for this setup to take effect. | | `help` |
Show help for a completion command | | `zsh` | Generate the autocompletion
script for the zsh shell.

If shell completion is not already enabled in your environment you will need to
enable it. You can execute the following once:

```
$ echo "autoload -U compinit; compinit" >> ~/.zshrc
```

To load completions for every new session, execute once:

Linux:

```
$ pspace completion zsh zsh > "${fpath[1]}/_pspace"
```

macOS:

```
$ pspace completion zsh zsh > /usr/local/share/zsh/site-functions/_pspace
```

Oh My Zsh:

```
$ pspace completion zsh zsh > ~/.oh-my-zsh/completions/_pspace
```

You will need to start a new shell for this setup to take effect. |
