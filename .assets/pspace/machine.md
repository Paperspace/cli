# pspace machine

Manage your Paperspace machines.

For more information, see  https://docs.paperspace.com/machines.

## Usage

```
  machine [command]
  machine [flags]
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
- [restart](#restart)
- [start](#start)
- [stop](#stop)
- [update](#update)
# pspace machine create

Create a machine.

## Usage

```
  machine create [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| name | n | The name of the machine | true |
| machine-type |  | The machine type to create | true |
| template-id |  | The ID of the template to create the machine from | true |
| network-id |  | The ID of the network to create the machine in | false |
| region |  | The region to create the machine in | true |
| disk-size |  | The size of the machine's disk | true |
| public-ip-type |  | The public IP type. | false |
| auto-snapshot-enabled |  | Whether to enable auto snapshots. | false |
| auto-snapshot-frequency |  | The auto snapshot frequency. | false |
| auto-snapshot-save-count |  | The number of auto snapshots to save. | false |
| auto-shutdown-enabled |  | Whether to enable auto shutdown. | false |
| auto-shutdown-timeout |  | The auto shutdown timeout in hours. | false |
| auto-shutdown-force |  | Whether to force shutdown the machine. | false |
| take-initial-snapshot |  | Whether to take an initial snapshot. | false |
| restore-point-enabled |  | Whether to use initial snapshot as a restore point. | false |
| restore-point-frequency |  | The restore point frequency. | false |
| startup-script-id |  | The startup script ID. | false |
| email-password |  | Whether to email the password. | false |
| start-on-create |  | Whether to start the machine on creation. | false |
| enable-nvlink |  | Whether to enable NVLink. | false |
| accessor-ids |  | The accessors of the machine. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

# pspace machine delete

Delete a machine from a team.

## Usage

```
  machine delete [arguments] [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

# pspace machine get

Get a machine from a team.

## Usage

```
  machine get [arguments] [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

# pspace machine help

Show help for a machine command

## Usage

```
  machine help [command]
  machine help [arguments] [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [commands](#commands)
# pspace machine help commands

List machine commands

Example:
```
$ machine help commands commands
```

## Usage

```
  machine help commands [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |
| all | a | Show all commands, including hidden ones | false |

### Subcommands

# pspace machine list

List machines in your team.

Pick a subset of fields to display:
```
pspace machine list -F name -F dtModified
```

## Usage

```
  machine list [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| limit |  | The number of items to return in the next page. | false |
| after |  | The cursor to fetch the next results from. | false |
| orderBy |  | The field to order items by. | false |
| asc |  | Whether to order items ascending. | false |
| desc |  | Whether to order items descending. | false |
| fields | F | The fields to include in the response. | false |
| agent-type | a | Filter by agent type. | false |
| machine-type | m | Filter by machine type. | false |
| name | n | Filter by name. | false |
| region | r | Filter by region. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

# pspace machine restart

Restart a machine from a team.

## Usage

```
  machine restart [arguments] [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

# pspace machine start

Start a machine from a team.

## Usage

```
  machine start [arguments] [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

# pspace machine stop

Stop a machine from a team.

## Usage

```
  machine stop [arguments] [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

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

