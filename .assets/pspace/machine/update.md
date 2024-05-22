# pspace machine update

Update a machine's settings.

## Usage

```
  machine update [arguments] [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| name | n | The name of the machine | true |
| machine-type |  | The machine type to update to | true |
| network-id |  | The ID of the network to create the machine in | false |
| disk-size |  | The size of the machine's disk | true |
| public-ip-type |  | The public IP type. | false |
| auto-snapshot-enabled |  | Whether to enable auto snapshots. | false |
| auto-snapshot-frequency |  | The auto snapshot frequency. | false |
| auto-snapshot-save-count |  | The number of auto snapshots to save. | false |
| auto-shutdown-enabled |  | Whether to enable auto shutdown. | false |
| auto-shutdown-timeout |  | The auto shutdown timeout in hours. | false |
| auto-shutdown-force |  | Whether to force shutdown the machine. | false |
| restore-point-enabled |  | Whether to enable a restore point. | false |
| restore-point-frequency |  | The restore point frequency. | false |
| restore-point-snapshot-id |  | The ID of the snapshot to use as a restore point. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

