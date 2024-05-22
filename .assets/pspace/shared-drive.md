# pspace shared-drive

Manage your shared drives. Shared drives are used to centralize data
used by your team. Shared drives can be mounted on any Paperspace machine
in the same private network.

For more information, see https://docs.paperspace.com/storage/shared-drives.

## Usage

```
  shared-drive [command]
  shared-drive [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [create](#create)
- [delete](#delete)
- [get](#get)
- [help](#help)
- [list](#list)
