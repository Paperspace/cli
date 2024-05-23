## pspace config

This command manages your Paperspace configuration. You can use it to set, get, and 
delete configuration values. Running this command without any subcommands will print 
your current configuration.

Your configuration is stored in a TOML file at `~/.paperspace/config.toml`. 

For example, to set the current team, run: 
```
pspace config set team "my-team"
```

### Usage

```
  config [command]
  config [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

- [delete](#delete)
- [get](#get)
- [help](#help)
- [set](#set)
## pspace config delete

Delete a configuration value.

### Usage

```
  config delete <arguments> [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

## pspace config get

This command gets a configuration value. You can pass a key to get a specific
value, or you can pass no arguments to get all configuration values.

For example, to get the current team run:
```
pspace config get team
```

### Usage

```
  config get [arguments] [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

## pspace config help

Show help for a config command

### Usage

```
  config help [command]
  config help [arguments] [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

- [commands](#commands)
## pspace config help commands

List config commands

Example:
```
$ config help commands commands
```

### Usage

```
  config help commands [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |
| all | a | Show all commands, including hidden ones | false |

#### Subcommands

## pspace config set

Set a configuration value.

### Usage

```
  config set [arguments] [arguments...] [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

