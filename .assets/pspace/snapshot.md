# pspace snapshot

Manage your snapshots. Snapshots are copies of your machine's disk at a point in time.
They can be used to restore the machine to its previous state. Using snapshots is recommended
before taking any action that could affect the usability of the machine or its network connection.

For more information, see https://docs.paperspace.com/storage/snapshots.

## Usage

```
  snapshot [command]
  snapshot [flags]
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
- [help](#help)
- [list](#list)
- [restore](#restore)
