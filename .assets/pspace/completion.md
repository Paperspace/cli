## pspace completion

Generate an autocompletion script for pspace in the specified shell. See each
sub-command's help for details on how to use the generated script.

### Usage

```
completion [command]
completion [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands

- [bash](#bash)
- [fish](#fish)
- [help](#help)
- [zsh](#zsh)

## pspace completion bash

Generate the autocompletion script for the bash shell.

This script depends on the `bash-completion` package. If it is not installed
already, you can install it via your OS's package manager.

To load completions in your current shell session:

```
$ source <(completion bash bash)
```

To load completions for every new session, execute once:

Linux:

```
$ completion bash bash > /etc/bash_completion.d/pspace
```

macOS:

```
$ completion bash bash > /usr/local/etc/bash_completion.d/pspace
```

You will need to start a new shell for this setup to take effect.

### Usage

```
completion bash [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands

## pspace completion fish

Generate the autocompletion script for the fish shell.

To load completions in your current shell session:

```
$ completion fish fish | source
```

To load completions for every new session, execute once:

```
$ completion fish fish > ~/.config/fish/completions/pspace.fish
```

You will need to start a new shell for this setup to take effect.

### Usage

```
completion fish [flags]
```

### Flags

| Name            | Aliases | Description                                                  | Required |
| --------------- | ------- | ------------------------------------------------------------ | -------- |
| no-descriptions |         | Disable completion descriptions                              | false    |
| log-level       | l       | Enable debug logging.                                        | false    |
| json            | j       | Output JSON                                                  | false    |
| api-key         |         | A Paperspace public API Key used for authenticating requests | false    |
| help            | h       | Show help for a command                                      | false    |

#### Subcommands

## pspace completion help

Show help for a completion command

### Usage

```
completion help [command]
completion help [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands

- [commands](#commands)

## pspace completion help commands

List completion commands

Example:

```
$ completion help commands commands
```

### Usage

```
completion help commands [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |
| all       | a       | Show all commands, including hidden ones                     | false    |

#### Subcommands

## pspace completion zsh

Generate the autocompletion script for the zsh shell.

If shell completion is not already enabled in your environment you will need to
enable it. You can execute the following once:

```
$ echo "autoload -U compinit; compinit" >> ~/.zshrc
```

To load completions for every new session, execute once:

Linux:

```
$ completion zsh zsh > "${fpath[1]}/_pspace"
```

macOS:

```
$ completion zsh zsh > /usr/local/share/zsh/site-functions/_pspace
```

Oh My Zsh:

```
$ completion zsh zsh > ~/.oh-my-zsh/completions/_pspace
```

You will need to start a new shell for this setup to take effect.

### Usage

```
completion zsh [flags]
```

### Flags

| Name            | Aliases | Description                                                  | Required |
| --------------- | ------- | ------------------------------------------------------------ | -------- |
| no-descriptions |         | Disable completion descriptions                              | false    |
| log-level       | l       | Enable debug logging.                                        | false    |
| json            | j       | Output JSON                                                  | false    |
| api-key         |         | A Paperspace public API Key used for authenticating requests | false    |
| help            | h       | Show help for a command                                      | false    |

#### Subcommands
