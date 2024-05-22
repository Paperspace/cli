# pspace autoscaling-group

Manage your autoscaling groups. Autoscaling groups enable using
the Kubernetes cluster-autoscaler to automatically scale your cluster.
You can also autoscaling groups as a primitive for your own autoscaler.

## Usage

```
  autoscaling-group [command]
  autoscaling-group [flags]
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
