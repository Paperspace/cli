# pspace completion zsh

Generate the autocompletion script for the zsh shell.

If shell completion is not already enabled in your environment you will need
to enable it.  You can execute the following once:

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

## Usage

```
  completion zsh [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| no-descriptions |  | Disable completion descriptions | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

