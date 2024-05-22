# pspace startup-script

Manage your startup scripts. Startup scripts allow you to configure a machine
on first boot or on every boot.

## Usage

```
  startup-script [command]
  startup-script [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [assign](#assign)
- [create](#create)
- [delete](#delete)
- [get](#get)
- [help](#help)
- [list](#list)
- [unassign](#unassign)
- [update](#update)
