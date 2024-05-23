## pspace autoscaling-group

Manage your autoscaling groups. Autoscaling groups enable using
the Kubernetes cluster-autoscaler to automatically scale your cluster.
You can also autoscaling groups as a primitive for your own autoscaler.

### Usage

```
  autoscaling-group [command]
  autoscaling-group [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

- [create](#create)
- [delete](#delete)
- [get](#get)
- [help](#help)
- [list](#list)
- [update](#update)
## pspace autoscaling-group create

Create an autoscaling group.

### Usage

```
  autoscaling-group create [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| name | n | The name of the autoscaling group | true |
| cluster-id |  | The ID of the cluster | true |
| machine-type |  | The machine type for the autoscaling group | true |
| network-id |  | The ID of the network for the autoscaling group | true |
| template-id |  | The ID of the template for the autoscaling group | true |
| startup-script-id |  | The ID of the startup script for the autoscaling group | true |
| max |  | The maximum number of active machines in the autoscaling group | true |
| min |  | The minimum number of active machines in the autoscaling group | true |
| provisioning-timeout |  | The timeout for provisioning machines in the autoscaling group, in minutes | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

## pspace autoscaling-group delete

Delete an autoscaling group from a team.

### Usage

```
  autoscaling-group delete [arguments] [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

## pspace autoscaling-group get

Get an autoscaling group from a team.

### Usage

```
  autoscaling-group get [arguments] [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

## pspace autoscaling-group help

Show help for a autoscaling-group command

### Usage

```
  autoscaling-group help [command]
  autoscaling-group help [arguments] [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

- [commands](#commands)
## pspace autoscaling-group help commands

List autoscaling-group commands

Example:
```
$ autoscaling-group help commands commands
```

### Usage

```
  autoscaling-group help commands [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |
| all | a | Show all commands, including hidden ones | false |

#### Subcommands

## pspace autoscaling-group list

List autoscaling groups in your team.

Pick a subset of fields to display:
```
pspace autoscaling-group list -F name -F dtCreated
```

### Usage

```
  autoscaling-group list [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| limit |  | The number of items to return in the next page. | false |
| after |  | The cursor to fetch the next results from. | false |
| orderBy |  | The field to order items by. | false |
| asc |  | Whether to order items ascending. | false |
| desc |  | Whether to order items descending. | false |
| fields | F | The fields to include in the response. | false |
| cluster-id |  | Filter by cluster ID. | false |
| machine-type |  | Filter by machine type. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

## pspace autoscaling-group update

Update an autoscaling group.

### Usage

```
  autoscaling-group update [arguments] [flags]
```

### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| name | n | The name of the autoscaling group | false |
| cluster-id |  | The ID of the cluster | false |
| machine-type |  | The machine type for the autoscaling group | false |
| network-id |  | The ID of the network for the autoscaling group | false |
| template-id |  | The ID of the template for the autoscaling group | false |
| startup-script-id |  | The ID of the startup script for the autoscaling group | false |
| max |  | The maximum number of active machines in the autoscaling group | false |
| min |  | The minimum number of active machines in the autoscaling group | false |
| provisioning-timeout |  | The timeout for provisioning machines in the autoscaling group, in minutes | false |
| current |  | The desired number of active machines in the autoscaling group | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

#### Subcommands

