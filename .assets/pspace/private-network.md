# pspace private-network

Manage your private networks. Private networks are logically isolated networks
for your machines and shared drives. They can also be used for site-to-site VPNs
and direct connections to your on-premise network.

For more information, see https://docs.paperspace.com/networking/private-networks.

## Usage

```
  private-network [command]
  private-network [flags]
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
