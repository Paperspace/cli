# pspace custom-template list

List custom templates in your team.

Pick a subset of fields to display:
```
pspace custom-template list -F name -F dtModified
```

## Usage

```
  custom-template list [flags]
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
| machine-id | m | The ID of the machine the event is for. If not specified, all events
will be returned. | false |
| name | n | Filter by name. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

