# Paperspace CLI

A CLI for using the Paperspace API.

It allows you to authenticate, launch deployments, do logging, and more.

- Deploy an ML app with the `deployment` command
- View a deployed app with the `deployment open` command
- Check the status of a deployment with the `deployment status` command

Read the full documentation at: https://docs.paperspace.com/

## pspace

A CLI for using the Paperspace API.

It allows you to authenticate, launch deployments, do logging, and more.

- Deploy an ML app with the `deployment` command
- View a deployed app with the `deployment open` command
- Check the status of a deployment with the `deployment status` command

Read the full documentation at: https://docs.paperspace.com/

### Usage

```
pspace [command]
pspace [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

- [autoscaling-group](#autoscaling-group)
- [completion](#completion)
- [config](#config)
- [console](#console)
- [custom-template](#custom-template)
- [dataset](#dataset)
- [deployment](#deployment)
- [docs](#docs)
- [help](#help)
- [init](#init)
- [login](#login)
- [logout](#logout)
- [machine](#machine)
- [machine-event](#machine-event)
- [model](#model)
- [os-template](#os-template)
- [private-network](#private-network)
- [project](#project)
- [public-ip](#public-ip)
- [secret](#secret)
- [shared-drive](#shared-drive)
- [signup](#signup)
- [snapshot](#snapshot)
- [startup-script](#startup-script)
- [storage-provider](#storage-provider)
- [up](#up)
- [upgrade](#upgrade)
- [version](#version)

## pspace autoscaling-group

Manage your autoscaling groups. Autoscaling groups enable using the Kubernetes
cluster-autoscaler to automatically scale your cluster. You can also autoscaling
groups as a primitive for your own autoscaler.

### Usage

```
autoscaling-group [command]
autoscaling-group [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

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

| Name                 | Aliases | Description                                                                | Required |
| -------------------- | ------- | -------------------------------------------------------------------------- | -------- |
| fields               | F       | The fields to include in the response.                                     | false    |
| name                 | n       | The name of the autoscaling group                                          | true     |
| cluster-id           |         | The ID of the cluster                                                      | true     |
| machine-type         |         | The machine type for the autoscaling group                                 | true     |
| network-id           |         | The ID of the network for the autoscaling group                            | true     |
| template-id          |         | The ID of the template for the autoscaling group                           | true     |
| startup-script-id    |         | The ID of the startup script for the autoscaling group                     | true     |
| max                  |         | The maximum number of active machines in the autoscaling group             | true     |
| min                  |         | The minimum number of active machines in the autoscaling group             | true     |
| provisioning-timeout |         | The timeout for provisioning machines in the autoscaling group, in minutes | false    |
| log-level            | l       | Enable debug logging.                                                      | false    |
| json                 | j       | Output JSON                                                                | false    |
| api-key              |         | A Paperspace public API Key used for authenticating requests               | false    |
| help                 | h       | Show help for a command                                                    | false    |

### Subcommands

## pspace autoscaling-group delete

Delete an autoscaling group from a team.

### Usage

```
autoscaling-group delete [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| fields    | F       | The fields to include in the response.                       | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace autoscaling-group get

Get an autoscaling group from a team.

### Usage

```
autoscaling-group get [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| fields    | F       | The fields to include in the response.                       | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace autoscaling-group help

Show help for a autoscaling-group command

### Usage

```
autoscaling-group help [command]
autoscaling-group help [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

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

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |
| all       | a       | Show all commands, including hidden ones                     | false    |

### Subcommands

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

| Name         | Aliases | Description                                                  | Required |
| ------------ | ------- | ------------------------------------------------------------ | -------- |
| limit        |         | The number of items to return in the next page.              | false    |
| after        |         | The cursor to fetch the next results from.                   | false    |
| orderBy      |         | The field to order items by.                                 | false    |
| asc          |         | Whether to order items ascending.                            | false    |
| desc         |         | Whether to order items descending.                           | false    |
| fields       | F       | The fields to include in the response.                       | false    |
| cluster-id   |         | Filter by cluster ID.                                        | false    |
| machine-type |         | Filter by machine type.                                      | false    |
| log-level    | l       | Enable debug logging.                                        | false    |
| json         | j       | Output JSON                                                  | false    |
| api-key      |         | A Paperspace public API Key used for authenticating requests | false    |
| help         | h       | Show help for a command                                      | false    |

### Subcommands

## pspace autoscaling-group update

Update an autoscaling group.

### Usage

```
autoscaling-group update [arguments] [flags]
```

### Flags

| Name                 | Aliases | Description                                                                | Required |
| -------------------- | ------- | -------------------------------------------------------------------------- | -------- |
| fields               | F       | The fields to include in the response.                                     | false    |
| name                 | n       | The name of the autoscaling group                                          | false    |
| cluster-id           |         | The ID of the cluster                                                      | false    |
| machine-type         |         | The machine type for the autoscaling group                                 | false    |
| network-id           |         | The ID of the network for the autoscaling group                            | false    |
| template-id          |         | The ID of the template for the autoscaling group                           | false    |
| startup-script-id    |         | The ID of the startup script for the autoscaling group                     | false    |
| max                  |         | The maximum number of active machines in the autoscaling group             | false    |
| min                  |         | The minimum number of active machines in the autoscaling group             | false    |
| provisioning-timeout |         | The timeout for provisioning machines in the autoscaling group, in minutes | false    |
| current              |         | The desired number of active machines in the autoscaling group             | false    |
| log-level            | l       | Enable debug logging.                                                      | false    |
| json                 | j       | Output JSON                                                                | false    |
| api-key              |         | A Paperspace public API Key used for authenticating requests               | false    |
| help                 | h       | Show help for a command                                                    | false    |

### Subcommands

## pspace completion

Generate an autocompletion script for pspace in the specified shell. See each
sub-command's help for details on how to use the generated script.

### Usage

```
completion [command]
completion [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

- [bash](#bash)
- [fish](#fish)
- [help](#help)
- [zsh](#zsh)

## pspace completion bash

Generate the autocompletion script for the bash shell.

This script depends on the `bash-completion` package. If it is not installed
already, you can install it via your OS's package manager.

To load completions in your current shell session:

```
$ source <(completion bash bash)
```

To load completions for every new session, execute once:

Linux:

```
$ completion bash bash > /etc/bash_completion.d/pspace
```

macOS:

```
$ completion bash bash > /usr/local/etc/bash_completion.d/pspace
```

You will need to start a new shell for this setup to take effect.

### Usage

```
completion bash [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace completion fish

Generate the autocompletion script for the fish shell.

To load completions in your current shell session:

```
$ completion fish fish | source
```

To load completions for every new session, execute once:

```
$ completion fish fish > ~/.config/fish/completions/pspace.fish
```

You will need to start a new shell for this setup to take effect.

### Usage

```
completion fish [flags]
```

### Flags

| Name            | Aliases | Description                                                  | Required |
| --------------- | ------- | ------------------------------------------------------------ | -------- |
| no-descriptions |         | Disable completion descriptions                              | false    |
| log-level       | l       | Enable debug logging.                                        | false    |
| json            | j       | Output JSON                                                  | false    |
| api-key         |         | A Paperspace public API Key used for authenticating requests | false    |
| help            | h       | Show help for a command                                      | false    |

### Subcommands

## pspace completion help

Show help for a completion command

### Usage

```
completion help [command]
completion help [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

- [commands](#commands)

## pspace completion help commands

List completion commands

Example:

```
$ completion help commands commands
```

### Usage

```
completion help commands [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |
| all       | a       | Show all commands, including hidden ones                     | false    |

### Subcommands

## pspace completion zsh

Generate the autocompletion script for the zsh shell.

If shell completion is not already enabled in your environment you will need to
enable it. You can execute the following once:

```
$ echo "autoload -U compinit; compinit" >> ~/.zshrc
```

To load completions for every new session, execute once:

Linux:

```
$ completion zsh zsh > "${fpath[1]}/_pspace"
```

macOS:

```
$ completion zsh zsh > /usr/local/share/zsh/site-functions/_pspace
```

Oh My Zsh:

```
$ completion zsh zsh > ~/.oh-my-zsh/completions/_pspace
```

You will need to start a new shell for this setup to take effect.

### Usage

```
completion zsh [flags]
```

### Flags

| Name            | Aliases | Description                                                  | Required |
| --------------- | ------- | ------------------------------------------------------------ | -------- |
| no-descriptions |         | Disable completion descriptions                              | false    |
| log-level       | l       | Enable debug logging.                                        | false    |
| json            | j       | Output JSON                                                  | false    |
| api-key         |         | A Paperspace public API Key used for authenticating requests | false    |
| help            | h       | Show help for a command                                      | false    |

### Subcommands

## pspace config

This command manages your Paperspace configuration. You can use it to set, get,
and delete configuration values. Running this command without any subcommands
will print your current configuration.

Your configuration is stored in a TOML file at `~/.paperspace/config.toml`.

For example, to set the current team, run:

```
pspace config set team "my-team"
```

### Usage

```
config [command]
config [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

- [delete](#delete)
- [get](#get)
- [help](#help)
- [set](#set)

## pspace config delete

Delete a configuration value.

### Usage

```
config delete <arguments> [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace config get

This command gets a configuration value. You can pass a key to get a specific
value, or you can pass no arguments to get all configuration values.

For example, to get the current team run:

```
pspace config get team
```

### Usage

```
config get [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace config help

Show help for a config command

### Usage

```
config help [command]
config help [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

- [commands](#commands)

## pspace config help commands

List config commands

Example:

```
$ config help commands commands
```

### Usage

```
config help commands [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |
| all       | a       | Show all commands, including hidden ones                     | false    |

### Subcommands

## pspace config set

Set a configuration value.

### Usage

```
config set [arguments] [arguments...] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace console

This command opens the Paperspace web console in your browser.

### Usage

```
console [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace custom-template

Manage your custom templates. Custom templates are a backup of your machine's
disk. They can be used to create additional machines. You can use them to
prepopulate a machine with your desired software stack.

For more information, see https://docs.paperspace.com/compute/custom-templates.

### Usage

```
custom-template [command]
custom-template [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

- [create](#create)
- [delete](#delete)
- [get](#get)
- [help](#help)
- [list](#list)

## pspace custom-template create

Create a custom template from a machine.

### Usage

```
custom-template create [flags]
```

### Flags

| Name       | Aliases | Description                                                  | Required |
| ---------- | ------- | ------------------------------------------------------------ | -------- |
| fields     | F       | The fields to include in the response.                       | false    |
| name       | n       | The name of the custom template                              | true     |
| machine-id | m       | The ID of the machine to create a custom template from       | true     |
| log-level  | l       | Enable debug logging.                                        | false    |
| json       | j       | Output JSON                                                  | false    |
| api-key    |         | A Paperspace public API Key used for authenticating requests | false    |
| help       | h       | Show help for a command                                      | false    |

### Subcommands

## pspace custom-template delete

Delete a custom template from a team.

### Usage

```
custom-template delete [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| fields    | F       | The fields to include in the response.                       | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace custom-template get

Get a custom template from a team.

### Usage

```
custom-template get [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| fields    | F       | The fields to include in the response.                       | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace custom-template help

Show help for a custom-template command

### Usage

```
custom-template help [command]
custom-template help [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

- [commands](#commands)

## pspace custom-template help commands

List custom-template commands

Example:

```
$ custom-template help commands commands
```

### Usage

```
custom-template help commands [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |
| all       | a       | Show all commands, including hidden ones                     | false    |

### Subcommands

## pspace custom-template list

List custom templates in your team.

Pick a subset of fields to display:

```
pspace custom-template list -F name -F dtModified
```

### Usage

```
custom-template list [flags]
```

### Flags

| Name              | Aliases | Description                                                          | Required |
| ----------------- | ------- | -------------------------------------------------------------------- | -------- |
| limit             |         | The number of items to return in the next page.                      | false    |
| after             |         | The cursor to fetch the next results from.                           | false    |
| orderBy           |         | The field to order items by.                                         | false    |
| asc               |         | Whether to order items ascending.                                    | false    |
| desc              |         | Whether to order items descending.                                   | false    |
| fields            | F       | The fields to include in the response.                               | false    |
| machine-id        | m       | The ID of the machine the event is for. If not specified, all events |          |
| will be returned. | false   |                                                                      |          |
| name              | n       | Filter by name.                                                      | false    |
| log-level         | l       | Enable debug logging.                                                | false    |
| json              | j       | Output JSON                                                          | false    |
| api-key           |         | A Paperspace public API Key used for authenticating requests         | false    |
| help              | h       | Show help for a command                                              | false    |

### Subcommands

## pspace dataset

Manage your datasets.

For more information, see https://docs.paperspace.com/storage/datasets.

### Usage

```
dataset [command]
dataset [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

- [create](#create)
- [delete](#delete)
- [get](#get)
- [help](#help)
- [list](#list)
- [update](#update)
- [versions](#versions)

## pspace dataset create

Create a dataset.

### Usage

```
dataset create [flags]
```

### Flags

| Name                | Aliases | Description                                                  | Required |
| ------------------- | ------- | ------------------------------------------------------------ | -------- |
| fields              | F       | The fields to include in the response.                       | false    |
| name                | n       | The name of the dataset                                      | true     |
| description         |         | The description of the dataset                               | false    |
| storage-provider-id |         | The ID of the storage provider to use for the dataset        | false    |
| is-public           |         | Whether the dataset is public                                | false    |
| log-level           | l       | Enable debug logging.                                        | false    |
| json                | j       | Output JSON                                                  | false    |
| api-key             |         | A Paperspace public API Key used for authenticating requests | false    |
| help                | h       | Show help for a command                                      | false    |

### Subcommands

## pspace dataset delete

Delete a dataset from a team.

### Usage

```
dataset delete [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| fields    | F       | The fields to include in the response.                       | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace dataset get

Get a dataset from a team.

### Usage

```
dataset get [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| fields    | F       | The fields to include in the response.                       | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace dataset help

Show help for a dataset command

### Usage

```
dataset help [command]
dataset help [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

- [commands](#commands)

## pspace dataset help commands

List dataset commands

Example:

```
$ dataset help commands commands
```

### Usage

```
dataset help commands [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |
| all       | a       | Show all commands, including hidden ones                     | false    |

### Subcommands

## pspace dataset list

List datasets in your team or project.

Pick a subset of fields to display:

```
pspace dataset list -F name -F dtModified
```

### Usage

```
dataset list [flags]
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
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace dataset update

Update a dataset in a project or team.

### Usage

```
dataset update [arguments] [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| fields      | F       | The fields to include in the response.                       | false    |
| name        | n       | The name of the dataset                                      | true     |
| description |         | The description of the dataset                               | false    |
| log-level   | l       | Enable debug logging.                                        | false    |
| json        | j       | Output JSON                                                  | false    |
| api-key     |         | A Paperspace public API Key used for authenticating requests | false    |
| help        | h       | Show help for a command                                      | false    |

### Subcommands

## pspace dataset versions

Manage your dataset versions.

For more information, see https://docs.paperspace.com/storage/datasetVersions.

### Usage

```
dataset versions [command]
dataset versions [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

- [create](#create)
- [delete](#delete)
- [get](#get)
- [help](#help)
- [list](#list)
- [update](#update)

## pspace dataset versions create

Create a dataset version. This command will prompt you for an ID if you don't
provide one.

### Usage

```
dataset versions create [arguments] [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| fields    | F       | The fields to include in the response.                       | false    |
| tags      |         | The tags for the version, comma-delimited                    | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace dataset versions delete

Delete a dataset version from a team. This command will prompt you for an ID if
you don't provide one.

### Usage

```
dataset versions delete [arguments] [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| fields    | F       | The fields to include in the response.                       | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace dataset versions get

Get a dataset version from a team. This command will prompt you for an ID if you
don't provide one.

### Usage

```
dataset versions get [arguments] [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| fields    | F       | The fields to include in the response.                       | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace dataset versions help

Show help for a versions command

### Usage

```
dataset versions help [command]
dataset versions help [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

- [commands](#commands)

## pspace dataset versions help commands

List versions commands

Example:

```
$ dataset versions help commands commands
```

### Usage

```
dataset versions help commands [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |
| all       | a       | Show all commands, including hidden ones                     | false    |

### Subcommands

## pspace dataset versions list

List dataset versions in your team or project.

Pick a subset of fields to display:

```
pspace dataset versions list <dataset-id> -F name -F dtModified
```

### Usage

```
dataset versions list [arguments] [flags]
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
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace dataset versions update

Update a dataset version in a project or team.

### Usage

```
dataset versions update [arguments] [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| fields    | F       | The fields to include in the response.                       | false    |
| message   | m       | The description of the dataset version                       | true     |
| tags      |         | The tags for the version, comma-delimited                    | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace deployment

Effortlessly deploy ML apps to Paperspace.

### Usage

```
deployment [command]
deployment [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

- [delete](#delete)
- [get](#get)
- [help](#help)
- [list](#list)
- [up](#up)

## pspace deployment delete

Delete a deployment by its ID. If you don't provide an ID, this command will
prompt you for one based on the deployments you have access to.

```
pspace deployment delete 123e4567-e89b-12d3-a456-426614174000
```

### Usage

```
deployment delete [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace deployment get

Get a deployment by its ID. If you don't provide an ID, this command will prompt
you for one based on the deployments you have access to.

```
pspace deployment get 123e4567-e89b-12d3-a456-426614174000
```

Pick a subset of fields to display:

```
pspace deployment get 123e4567-e89b-12d3-a456-426614174000 -F name
```

### Usage

```
deployment get [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| fields    | F       | The fields to include in the response.                       | false    |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace deployment help

Show help for a deployment command

### Usage

```
deployment help [command]
deployment help [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

- [commands](#commands)

## pspace deployment help commands

List deployment commands

Example:

```
$ deployment help commands commands
```

### Usage

```
deployment help commands [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |
| all       | a       | Show all commands, including hidden ones                     | false    |

### Subcommands

## pspace deployment list

List deployments in your team.

Pick a subset of fields to display:

```
pspace deployment list -F id -F name
```

### Usage

```
deployment list [flags]
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
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace deployment up

This will create a new deployment for your app or update it if it already
exists. You can optionally specify a path to a config file. If no config file is
specified, the default config file paths will be tried.

Create a new deployment for the app in the current directory.

```
$ pspace deployment create
```

Create a new deployment using a config file.

```
$ pspace deployment create -c paperspace.json
```

Create a new deployment for an app in a different directory.

```
$ pspace deployment create --cwd ../my-app
```

Create a new deployment for an app in a specific project.

```
$ pspace deployment create --project-id 1234
```

### Usage

```
deployment up [flags]
```

### Flags

| Name   | Aliases | Description                                                             | Required |
| ------ | ------- | ----------------------------------------------------------------------- | -------- |
| config | c       | The path to the config file. Defaults to our default config file paths. |          |

The default config file paths are in order of precedence:

- `paperspace.yaml`
- `paperspace.yml`
- `paperspace.json`
- `paperspace.jsonc`
- `paperspace.toml`
- `.paperspace/app.yaml`
- `.paperspace/app.yml`
- `.paperspace/app.json`
- `.paperspace/app.jsonc`
- `.paperspace/app.toml` | false | | project-id | p | The ID of the project to
  deploy to. | false | | cwd | | The directory to deploy the app from. Defaults
  to the current directory. | false | | log-level | l | Enable debug logging. |
  false | | json | j | Output JSON | false | | api-key | | A Paperspace public
  API Key used for authenticating requests | false | | help | h | Show help for
  a command | false |

### Subcommands

## pspace docs

This command opens the Paperspace documentation in your browser. You can
optionally pass an argument that will take you to a specific docs page.

Valid pages are:

- `d`, `deployment`

### Usage

```
docs [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

## pspace help

Show help for a pspace command

### Usage

```
help [command]
help [arguments] [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |

### Subcommands

- [commands](#commands)

## pspace help commands

List pspace commands

Example:

```
$ help commands commands
```

### Usage

```
help commands [flags]
```

### Flags

| Name      | Aliases | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | -------- |
| log-level | l       | Enable debug logging.                                        | false    |
| json      | j       | Output JSON                                                  | false    |
| api-key   |         | A Paperspace public API Key used for authenticating requests | false    |
| help      | h       | Show help for a command                                      | false    |
| all       | a       | Show all commands, including hidden ones                     | false    |

### Subcommands

## pspace init

Create a new Paperspace app. This will create a new directory with a default app
structure. You can optionally specify a name for the app and a template to use.
If no template is specified, the default template will be used.

Create a new app in the current directory.

```
$ pspace init
```

Create a new app named "my-app" relative to the current directory.

```
$ pspace init my-app
```

Create a new app named "my-app" relative to the current directory using a
template from the Paperspace GitHub organization.

```
$ pspace init my-app -t Paperspace/gradio-demo
```

### Usage

```
init [arguments] [flags]
```

### Flags

| Name                                              | Aliases | Description                                                | Required |
| ------------------------------------------------- | ------- | ---------------------------------------------------------- | -------- |
| template                                          | t       | A template to use when creating the app. This can be a URL |          |
| to a git repository or a shorthand template name. |         |                                                            |          |

These templates are equivalent:

```
user/repo
github:user/repo
git@github.com:user/repo
https://github.com/user/repo
```

Download from GitLab:

```
gitlab:user/repo
git@gitlab.com:user/repo
https://gitlab.com/user/repo
```

Download from Bitbucket

```
bitbucket:user/repo
git@bitbucket.org:user/repo
https://bitbucket.org/user/repo
```

Specify a tag or branch:

````
user/repo#dev       # branch
user/repo#v1.2.3    # release tag
user/repo#1234abcd  # commit hash
``` | true |
| mode | m | The mode to use when creating the app. This can be either "git" or
"tar". If "git" is specified, the template will be downloaded as a
tarball. Note that "git" clones over SSH, so you must have a valid
SSH key configured with GitHub, Bitbucket, or GitLab. | false |
| name | n | The name of the app. Defaults to the first argument current directory name. | false |
| clean | c | Clean the Paperspace cache. This negates other args/flags. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace login

Log in to the CLI using your Paperspace API key or by opening the web console.

### Usage
````

login [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace logout

Log out of the CLI for the current team, a specific team, or all teams.

### Usage
```

logout [arguments...] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| all | a | Log out of all teams. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace machine

Manage your Paperspace machines.

For more information, see  https://docs.paperspace.com/machines.

### Usage
```

machine [command] machine [flags]

```
### Flags

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
## pspace machine create

Create a machine.

### Usage
```

machine create [flags]

```
### Flags

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

## pspace machine delete

Delete a machine from a team.

### Usage
```

machine delete [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace machine get

Get a machine from a team.

### Usage
```

machine get [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace machine help

Show help for a machine command

### Usage
```

machine help [command] machine help [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [commands](#commands)
## pspace machine help commands

List machine commands

Example:
```

$ machine help commands commands

```
### Usage
```

machine help commands [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |
| all | a | Show all commands, including hidden ones | false |

### Subcommands

## pspace machine list

List machines in your team.

Pick a subset of fields to display:
```

pspace machine list -F name -F dtModified

```
### Usage
```

machine list [flags]

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
| agent-type | a | Filter by agent type. | false |
| machine-type | m | Filter by machine type. | false |
| name | n | Filter by name. | false |
| region | r | Filter by region. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace machine restart

Restart a machine from a team.

### Usage
```

machine restart [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace machine start

Start a machine from a team.

### Usage
```

machine start [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace machine stop

Stop a machine from a team.

### Usage
```

machine stop [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace machine update

Update a machine's settings.

### Usage
```

machine update [arguments] [flags]

```
### Flags

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

## pspace machine-event

Manage your machine events. Events are asynchronous tasks performed by our system on your machines.
Not all machine commands are asynchronous. For those that are, a machine event will be returned
which can be tracked using this command.

For more information, see https://docs.paperspace.com/machines.

### Usage
```

machine-event [command] machine-event [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [get](#get)
- [help](#help)
- [list](#list)
## pspace machine-event get

Get a machine event from a team.

### Usage
```

machine-event get [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace machine-event help

Show help for a machine-event command

### Usage
```

machine-event help [command] machine-event help [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [commands](#commands)
## pspace machine-event help commands

List machine-event commands

Example:
```

$ machine-event help commands commands

```
### Usage
```

machine-event help commands [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |
| all | a | Show all commands, including hidden ones | false |

### Subcommands

## pspace machine-event list

List machine events in your team.

Pick a subset of fields to display:
```

pspace machine-event list -F name -F dtModified

```
### Usage
```

machine-event list [flags]

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
| machine-id | m | The ID of the machine the event is for. If not specified, all events
will be returned. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace model

Manage your Paperspace models.

For more information, see https://docs.paperspace.com/deploying/models.

### Usage
```

model [command] model [flags]

```
### Flags

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
## pspace model create

Create a new model. This command will prompt you for a name if you don't
provide one.

### Usage
```

model create [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| name | n | The name of the model | false |
| description | d | The description of the model | false |
| is-public |  | Whether the model is public | false |
| storage-provider-id | s | The ID of the storage provider to use for the model | false |
| project-id | p | The ID of the project to create the model in | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace model delete

Delete a model from a team.

### Usage
```

model delete [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace model get

Get a model from a team.

### Usage
```

model get [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace model help

Show help for a model command

### Usage
```

model help [command] model help [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [commands](#commands)
## pspace model help commands

List model commands

Example:
```

$ model help commands commands

```
### Usage
```

model help commands [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |
| all | a | Show all commands, including hidden ones | false |

### Subcommands

## pspace model list

List models in your team.

Pick a subset of fields to display:
```

pspace model list -F name -F dtModified

```
### Usage
```

model list [flags]

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
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace os-template

List OS templates. OS templates are pre-configured virtual machines that
you can use to create a new machine.

For more information, see https://docs.paperspace.com/compute/os-templates.

### Usage
```

os-template [command] os-template [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [help](#help)
- [list](#list)
## pspace os-template help

Show help for a os-template command

### Usage
```

os-template help [command] os-template help [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [commands](#commands)
## pspace os-template help commands

List os-template commands

Example:
```

$ os-template help commands commands

```
### Usage
```

os-template help commands [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |
| all | a | Show all commands, including hidden ones | false |

### Subcommands

## pspace os-template list

List OS templates.

Pick a subset of fields to display:
```

pspace os-template list -F name

```
### Usage
```

os-template list [flags]

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
| name | n | Filter by name. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace private-network

Manage your private networks. Private networks are logically isolated networks
for your machines and shared drives. They can also be used for site-to-site VPNs
and direct connections to your on-premise network.

For more information, see https://docs.paperspace.com/networking/private-networks.

### Usage
```

private-network [command] private-network [flags]

```
### Flags

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
## pspace private-network create

Create a private network.

### Usage
```

private-network create [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| name | n | The name of the private network | true |
| region |  | The region to create the private network in | true |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace private-network delete

Delete a private network from a team.

### Usage
```

private-network delete [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace private-network get

Get a private network from a team.

### Usage
```

private-network get [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace private-network help

Show help for a private-network command

### Usage
```

private-network help [command] private-network help [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [commands](#commands)
## pspace private-network help commands

List private-network commands

Example:
```

$ private-network help commands commands

```
### Usage
```

private-network help commands [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |
| all | a | Show all commands, including hidden ones | false |

### Subcommands

## pspace private-network list

List private networks in your team.

Pick a subset of fields to display:
```

pspace private-network list -F name -F dtModified

```
### Usage
```

private-network list [flags]

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
| name | n | Filter by name. | false |
| region | r | Filter by region. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace project

Manage your Paperspace projects.

### Usage
```

project [command] project [flags]

```
### Flags

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
- [link](#link)
- [list](#list)
- [update](#update)
## pspace project create

Create a new project. This command will prompt you for a name if you don't
provide one.

### Usage
```

project create [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace project delete

Delete a project by its ID. If you don't provide an ID, this command will
prompt you for one based on the projects you have access to.

### Usage
```

project delete [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace project get

Get a project by its ID. If you don't provide an ID, this command will
prompt you for one based on the projects you have access to.

### Usage
```

project get [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace project help

Show help for a project command

### Usage
```

project help [command] project help [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [commands](#commands)
## pspace project help commands

List project commands

Example:
```

$ project help commands commands

```
### Usage
```

project help commands [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |
| all | a | Show all commands, including hidden ones | false |

### Subcommands

## pspace project link

This will link a remote project to a local directory. Commands that
depend on a project ID will use the project ID of the linked project
when communicating with the Paperspace API.

Link a project to the current directory.
```

$ pspace link

```
Link a project to a different directory.
```

$ pspace link --cwd ../my-app

```
Link a project and specify a project ID.
```

$ pspace link pzwf2g05ubegj

```
### Usage
```

project link [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| cwd |  | The directory to link the project to. Defaults to the current directory. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace project list

List projects in your team.

Pick a subset of fields to display:
```

pspace project list -F id -F name -F dtCreated

```
### Usage
```

project list [flags]

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
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace project update

Update an existing project.

Example:
```

pspace project update psukfyemho7 --name my-cool-project

```
### Usage
```

pspace project update <project-id> [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| name |  | The new name for the project. | false |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace public-ip

Manage your public IPs. Public IP addresses allow your compute machines to be reachable over the internet.

For more information, see https://docs.paperspace.com/networking/public-ips.

### Usage
```

public-ip [command] public-ip [flags]

```
### Flags

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
## pspace public-ip assign

Assign a public IP to a machine.

### Usage
```

public-ip assign [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| machine-id | m | The ID of the machine to assign the public IP to | true |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace public-ip claim

Claim a public IP for a team.

### Usage
```

public-ip claim [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| region | r | The region to claim the public IP in | true |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace public-ip help

Show help for a public-ip command

### Usage
```

public-ip help [command] public-ip help [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [commands](#commands)
## pspace public-ip help commands

List public-ip commands

Example:
```

$ public-ip help commands commands

```
### Usage
```

public-ip help commands [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |
| all | a | Show all commands, including hidden ones | false |

### Subcommands

## pspace public-ip list

List public IPs in your team or project.

Pick a subset of fields to display:
```

pspace public-ip list -F name -F dtModified

```
### Usage
```

public-ip list [flags]

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
| region | r | Filter by region. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace public-ip release

Release a public IP from a team. This will unassign it from its assigned machine, if any.

### Usage
```

public-ip release [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace secret

Manage your Paperspace secrets. Secrets are used to store sensitive
information such as API keys, passwords, and other credentials. Secrets 
can be safely injected into workloads as environment variables. An environment 
variable that uses a Secret will not reveal the contents of the secret itself.

Secrets can be created at the following levels:

- Project (default): these secrets are applied to all resources in a project
- Global: these secrets can be applied to all resources on your current team

For more information, see https://docs.paperspace.com/secrets.

### Usage
```

secret [command] secret [flags]

```
### Flags

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
## pspace secret create

Create a secret in a project or team.

### Usage
```

secret create [arguments] [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| project-id | p | The ID of the project the secret is in. If not specified, the
secret will be created in the project linked to your current working
directory. If you are not in a project directory, you will be prompted
to select a project. | false |
| global | g | Manage a secret that is available to the entire team you are
currently logged into. By default, secrets are only available to
a project. | false |
| cwd |  | The directory to create the secret in | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace secret delete

Delete a secret from a project or team.

### Usage
```

secret delete [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| project-id | p | The ID of the project the secret is in. If not specified, the
secret will be created in the project linked to your current working
directory. If you are not in a project directory, you will be prompted
to select a project. | false |
| global | g | Manage a secret that is available to the entire team you are
currently logged into. By default, secrets are only available to
a project. | false |
| cwd |  | The directory to create the secret in | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace secret get

Get a secret from a project or team.

### Usage
```

secret get [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| project-id | p | The ID of the project the secret is in. If not specified, the
secret will be created in the project linked to your current working
directory. If you are not in a project directory, you will be prompted
to select a project. | false |
| global | g | Manage a secret that is available to the entire team you are
currently logged into. By default, secrets are only available to
a project. | false |
| cwd |  | The directory to create the secret in | false |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace secret help

Show help for a secret command

### Usage
```

secret help [command] secret help [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [commands](#commands)
## pspace secret help commands

List secret commands

Example:
```

$ secret help commands commands

```
### Usage
```

secret help commands [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |
| all | a | Show all commands, including hidden ones | false |

### Subcommands

## pspace secret list

List secrets in your team or project.

Pick a subset of fields to display:
```

pspace secret list -F name -F dtModified

```
### Usage
```

secret list [flags]

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
| project-id | p | The ID of the project the secret is in. If not specified, the
secret will be created in the project linked to your current working
directory. If you are not in a project directory, you will be prompted
to select a project. | false |
| global | g | Manage a secret that is available to the entire team you are
currently logged into. By default, secrets are only available to
a project. | false |
| cwd |  | The directory to create the secret in | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace secret update

Update a secret in a project or team.

### Usage
```

secret update [arguments] [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| project-id | p | The ID of the project the secret is in. If not specified, the
secret will be created in the project linked to your current working
directory. If you are not in a project directory, you will be prompted
to select a project. | false |
| global | g | Manage a secret that is available to the entire team you are
currently logged into. By default, secrets are only available to
a project. | false |
| cwd |  | The directory to create the secret in | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace shared-drive

Manage your shared drives. Shared drives are used to centralize data
used by your team. Shared drives can be mounted on any Paperspace machine
in the same private network.

For more information, see https://docs.paperspace.com/storage/shared-drives.

### Usage
```

shared-drive [command] shared-drive [flags]

```
### Flags

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
## pspace shared-drive create

Create a shared drive.

### Usage
```

shared-drive create [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| name | n | The name of the shared drive | true |
| network-id |  | The ID of the network to create the shared drive in | true |
| region |  | The region to create the shared drive in | true |
| size |  | The size of the shared drive | true |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace shared-drive delete

Delete a shared drive from a team.

### Usage
```

shared-drive delete [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace shared-drive get

Get a shared drive from a team.

### Usage
```

shared-drive get [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace shared-drive help

Show help for a shared-drive command

### Usage
```

shared-drive help [command] shared-drive help [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [commands](#commands)
## pspace shared-drive help commands

List shared-drive commands

Example:
```

$ shared-drive help commands commands

```
### Usage
```

shared-drive help commands [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |
| all | a | Show all commands, including hidden ones | false |

### Subcommands

## pspace shared-drive list

List shared drives in your team or project.

Pick a subset of fields to display:
```

pspace shared-drive list -F name -F dtModified

```
### Usage
```

shared-drive list [flags]

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
| name | n | Filter by name. | false |
| region | r | Filter by region. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace signup

This command opens the Paperspace signup page in your browser.

### Usage
```

signup [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace snapshot

Manage your snapshots. Snapshots are copies of your machine's disk at a point in time.
They can be used to restore the machine to its previous state. Using snapshots is recommended
before taking any action that could affect the usability of the machine or its network connection.

For more information, see https://docs.paperspace.com/storage/snapshots.

### Usage
```

snapshot [command] snapshot [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [create](#create)
- [delete](#delete)
- [help](#help)
- [list](#list)
- [restore](#restore)
## pspace snapshot create

Create a snapshot from a machine.

### Usage
```

snapshot create [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| name | n | The name of the snapshot | true |
| machine-id | m | The ID of the machine to create a snapshot from | true |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace snapshot delete

Delete a snapshot from a team.

### Usage
```

snapshot delete [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace snapshot help

Show help for a snapshot command

### Usage
```

snapshot help [command] snapshot help [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [commands](#commands)
## pspace snapshot help commands

List snapshot commands

Example:
```

$ snapshot help commands commands

```
### Usage
```

snapshot help commands [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |
| all | a | Show all commands, including hidden ones | false |

### Subcommands

## pspace snapshot list

List snapshots in your team.

Pick a subset of fields to display:
```

pspace snapshot list -F name -F dtModified

```
### Usage
```

snapshot list [flags]

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
| machine-id | m | The ID of the machine the event is for. If not specified, all events
will be returned. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace snapshot restore

Restore a machine to a snapshot.

### Usage
```

snapshot restore [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| create-snapshot |  | Create an additional snapshot before restore | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace startup-script

Manage your startup scripts. Startup scripts allow you to configure a machine
on first boot or on every boot.

### Usage
```

startup-script [command] startup-script [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [assign](#assign)
- [create](#create)
- [delete](#delete)
- [get](#get)
- [help](#help)
- [list](#list)
- [unassign](#unassign)
- [update](#update)
## pspace startup-script assign

Assign a startup script to a machine.

### Usage
```

startup-script assign [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| machine-id |  | The ID of the machine to assign the startup script to | true |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace startup-script create

Create a startup script.

### Usage
```

startup-script create [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| name | n | The name of the startup script | true |
| script |  | The script to run | true |
| run-once |  | Whether to run once or on every boot | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace startup-script delete

Delete a startup script from a team.

### Usage
```

startup-script delete [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace startup-script get

Get a startup script from a team.

### Usage
```

startup-script get [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace startup-script help

Show help for a startup-script command

### Usage
```

startup-script help [command] startup-script help [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [commands](#commands)
## pspace startup-script help commands

List startup-script commands

Example:
```

$ startup-script help commands commands

```
### Usage
```

startup-script help commands [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |
| all | a | Show all commands, including hidden ones | false |

### Subcommands

## pspace startup-script list

List startup scripts in your team.

Pick a subset of fields to display:
```

pspace startup-script list -F name -F dtCreated

```
### Usage
```

startup-script list [flags]

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
| name | n | Filter by name. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace startup-script unassign

Unassign a startup script from a machine.

### Usage
```

startup-script unassign [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| machine-id |  | The ID of the machine to unassign the startup script from | true |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace startup-script update

Update a startup script.

### Usage
```

startup-script update [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| name | n | The name of the startup script | false |
| script |  | The script to run | false |
| run-once |  | Whether to run once or on every boot | false |
| enabled |  | Whether the startup script is enabled or not | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace storage-provider

Manage your storage providers.

For more information, see https://docs.paperspace.com/storage/storageProviders.

### Usage
```

storage-provider [command] storage-provider [flags]

```
### Flags

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
## pspace storage-provider create

Create a storage provider.

### Usage
```

storage-provider create [command] storage-provider create [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [help](#help)
- [s3](#s3)
## pspace storage-provider create help

Show help for a create command

### Usage
```

storage-provider create help [command] storage-provider create help [arguments]
[flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [commands](#commands)
## pspace storage-provider create help commands

List create commands

Example:
```

$ storage-provider create help commands commands

```
### Usage
```

storage-provider create help commands [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |
| all | a | Show all commands, including hidden ones | false |

### Subcommands

## pspace storage-provider create s3

Create an S3 storage provider.

### Usage
```

storage-provider create s3 [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| name | n | The name of the storage provider | true |
| is-team-default |  | Whether the storage provider is the team's default provider | false |
| endpoint |  | The endpoint of the storage provider | false |
| bucket |  | The bucket of the storage provider | true |
| region |  | The region of the storage provider | false |
| access-key |  | The access key of the storage provider | true |
| secret-access-key |  | The secret access key of the storage provider | true |
| signature-version |  | The signature version of the storage provider | false |
| retain-data |  | Whether to retain data in the storage provider | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace storage-provider delete

Delete a storage provider from a team.

### Usage
```

storage-provider delete [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace storage-provider get

Get a storage provider from a team.

### Usage
```

storage-provider get [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace storage-provider help

Show help for a storage-provider command

### Usage
```

storage-provider help [command] storage-provider help [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [commands](#commands)
## pspace storage-provider help commands

List storage-provider commands

Example:
```

$ storage-provider help commands commands

```
### Usage
```

storage-provider help commands [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |
| all | a | Show all commands, including hidden ones | false |

### Subcommands

## pspace storage-provider list

List storage providers in your team or project.

Pick a subset of fields to display:
```

pspace storage provider list -F name -F dtModified

```
### Usage
```

storage-provider list [flags]

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
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace storage-provider update

Update a storage provider.

### Usage
```

storage-provider update [command] storage-provider update [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [help](#help)
- [s3](#s3)
## pspace storage-provider update help

Show help for a update command

### Usage
```

storage-provider update help [command] storage-provider update help [arguments]
[flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

- [commands](#commands)
## pspace storage-provider update help commands

List update commands

Example:
```

$ storage-provider update help commands commands

```
### Usage
```

storage-provider update help commands [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |
| all | a | Show all commands, including hidden ones | false |

### Subcommands

## pspace storage-provider update s3

Update an S3 storage provider in a project or team.

### Usage
```

storage-provider update s3 [arguments] [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| fields | F | The fields to include in the response. | false |
| name | n | The name of the storage provider | true |
| is-team-default |  | Whether the storage provider is the team's default provider | true |
| endpoint |  | The endpoint of the storage provider | false |
| bucket |  | The bucket of the storage provider | true |
| region |  | The region of the storage provider | false |
| access-key |  | The access key of the storage provider | true |
| secret-access-key |  | The secret access key of the storage provider | true |
| signature-version |  | The signature version of the storage provider | false |
| retain-data |  | Whether to retain data in the storage provider | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace up

This will upsert an app config and deploy your app to Paperspace. You can optionally 
specify a path to a config file. If no config file is specified, the default
config file paths will be tried.

Deploy the app in the current directory.
```

$ pspace up

```
Deploy the app using a config file.
```

$ pspace up -c paperspace.json

```
Deploy an app in a different directory.
```

$ pspace up --cwd ../my-app

```
### Usage
```

up [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| config | c | The path to the config file. Defaults to our default config file paths.

The default config file paths are in order of precedence:

- `paperspace.yaml`
- `paperspace.yml`
- `paperspace.json`
- `paperspace.jsonc`
- `paperspace.toml`
- `.paperspace/app.yaml`
- `.paperspace/app.yml`
- `.paperspace/app.json`
- `.paperspace/app.jsonc`
- `.paperspace/app.toml` | false |
| project-id | p | The ID of the project to deploy to. | false |
| cwd |  | The directory to deploy the app from. Defaults to the current directory. | false |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace upgrade

This command upgrades [1mpspace[22m to the latest version.

If you used a package manager like `brew` to install `pspace`, 
you should use that to upgrade in order to avoid potential permissions 
issues. For example, for `brew` you can upgrade by running:
```

brew upgrade pspace

```
If you installed `pspace` using the install script, you can upgrade by
running:
```

pspace upgrade

```
### Usage
```

upgrade [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands

## pspace version

Shows version information command, including version number and build date.

### Usage
```

version [flags]

```
### Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

### Subcommands
```
