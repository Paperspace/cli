## pspace upgrade

This command upgrades [1mpspace[22m to the latest version.

If you used a package manager like `brew` to install `pspace`, you should use
that to upgrade in order to avoid potential permissions issues. For example, for
`brew` you can upgrade by running:

```
brew upgrade pspace
```

If you installed `pspace` using the install script, you can upgrade by running:

```
pspace upgrade
```

### Usage

```
upgrade [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands
