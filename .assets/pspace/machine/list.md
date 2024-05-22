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

