# pspace machine-event

Manage your machine events. Events are asynchronous tasks performed by our system on your machines.
Not all machine commands are asynchronous. For those that are, a machine event will be returned
which can be tracked using this command.

For more information, see https://docs.paperspace.com/machines.

## Usage

```
  machine-event [command]
  machine-event [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [get](#get)
- [help](#help)
- [list](#list)
