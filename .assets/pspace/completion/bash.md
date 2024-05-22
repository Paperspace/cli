# pspace completion bash

Generate the autocompletion script for the bash shell.

This script depends on the `bash-completion` package.
If it is not installed already, you can install it via your OS's package manager.

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

## Usage

```
  completion bash [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

