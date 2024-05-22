# pspace

A CLI for using the Paperspace API. 

It allows you to authenticate, launch deployments, do logging, and more.

* Deploy an ML app with the `deployment` command
* View a deployed app with the `deployment open` command
* Check the status of a deployment with the `deployment status` command

Read the full documentation at: https://docs.paperspace.com/

## Usage

```
  pspace [command]
  pspace [flags]
```

## Flags

| Name | Aliases | Description | Required |
| --- | --- | --- | --- |
| log-level | l | Enable debug logging. | false |
| json | j | Output JSON | false |
| api-key |  | A Paperspace public API Key used for authenticating requests | false |
| help | h | Show help for a command | false |

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
