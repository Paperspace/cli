# pspace custom-template

Manage your custom templates. Custom templates are a backup of your
machine's disk. They can be used to create additional machines. You
can use them to prepopulate a machine with your desired software stack.

For more information, see https://docs.paperspace.com/compute/custom-templates.

## Usage

```
  custom-template [command]
  custom-template [flags]
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
