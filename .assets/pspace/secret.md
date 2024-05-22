# pspace secret

Manage your Paperspace secrets. Secrets are used to store sensitive
information such as API keys, passwords, and other credentials. Secrets 
can be safely injected into workloads as environment variables. An environment 
variable that uses a Secret will not reveal the contents of the secret itself.

Secrets can be created at the following levels:

- Project (default): these secrets are applied to all resources in a project
- Global: these secrets can be applied to all resources on your current team

For more information, see https://docs.paperspace.com/secrets.

## Usage

```
  secret [command]
  secret [flags]
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
- [update](#update)
