## pspace private-network

Manage your private networks. Private networks are logically isolated networks
for your machines and shared drives. They can also be used for site-to-site VPNs
and direct connections to your on-premise network.

For more information, see
https://docs.paperspace.com/networking/private-networks.

### Usage

```
pspace private-network [command]
pspace private-network [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands

- [create](#create)
- [delete](#delete)
- [get](#get)
- [help](#help)
- [list](#list)

## pspace private-network create

Create a private network.

### Usage

```
pspace private-network create [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| fields    | F       | The fields to include in the response.                       | false    |
| name      | n       | The name of the private network                              | true     |
| region    |         | The region to create the private network in                  | true     |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands

## pspace private-network delete

Delete a private network from a team.

### Usage

```
pspace private-network delete [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| fields    | F       | The fields to include in the response.                       | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands

## pspace private-network get

Get a private network from a team.

### Usage

```
pspace private-network get [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| fields    | F       | The fields to include in the response.                       | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands

## pspace private-network help

Show help for a private-network command

### Usage

```
pspace private-network help [command]
pspace private-network help [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands

- [commands](#commands)

## pspace private-network list

List private networks in your team.

Pick a subset of fields to display:

```
pspace private-network list -F name -F dtModified
```

### Usage

```
pspace private-network list [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| limit     |         | The number of items to return in the next page.              | false    |
| after     |         | The cursor to fetch the next results from.                   | false    |
| orderBy   |         | The field to order items by.                                 | false    |
| asc       |         | Whether to order items ascending.                            | false    |
| desc      |         | Whether to order items descending.                           | false    |
| fields    | F       | The fields to include in the response.                       | false    |
| name      | n       | Filter by name.                                              | false    |
| region    | r       | Filter by region.                                            | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

#### Subcommands
