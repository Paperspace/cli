# pspace public-ip

Manage your public IPs. Public IP addresses allow your compute machines to be reachable over the internet.

For more information, see https://docs.paperspace.com/networking/public-ips.

## Usage

```
  public-ip [command]
  public-ip [flags]
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
- [claim](#claim)
- [help](#help)
- [list](#list)
- [release](#release)
