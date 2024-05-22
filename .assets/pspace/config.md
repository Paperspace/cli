# pspace config

This command manages your Paperspace configuration. You can use it to set, get, and 
delete configuration values. Running this command without any subcommands will print 
your current configuration.

Your configuration is stored in a TOML file at `~/.paperspace/config.toml`. 

For example, to set the current team, run: 
```
pspace config set team "my-team"
```

## Usage

```
  config [command]
  config [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [delete](#delete)
- [get](#get)
- [help](#help)
- [set](#set)
