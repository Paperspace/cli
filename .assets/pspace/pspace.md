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

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand                                                                           | Description                                                                         |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| `autoscaling-group`                                                                  | Manage your autoscaling groups. Autoscaling groups enable using                     |
| the Kubernetes cluster-autoscaler to automatically scale your cluster.               |                                                                                     |
| You can also autoscaling groups as a primitive for your own autoscaler.              |                                                                                     |
| `completion`                                                                         | Generate an autocompletion script for pspace in the specified shell.                |
| See each sub-command's help for details on how to use the generated script.          |                                                                                     |
| `config`                                                                             | This command manages your Paperspace configuration. You can use it to set, get, and |
| delete configuration values. Running this command without any subcommands will print |                                                                                     |
| your current configuration.                                                          |                                                                                     |

Your configuration is stored in a TOML file at `~/.paperspace/config.toml`.

For example, to set the current team, run:

````
pspace config set team "my-team"
``` |
| `console` | This command opens the Paperspace web console in your browser. |
| `custom-template` | Manage your custom templates. Custom templates are a backup of your
machine's disk. They can be used to create additional machines. You
can use them to prepopulate a machine with your desired software stack.

For more information, see https://docs.paperspace.com/compute/custom-templates. |
| `dataset` | Manage your datasets.

For more information, see https://docs.paperspace.com/storage/datasets. |
| `deployment` | Effortlessly deploy ML apps to Paperspace. |
| `docs` | This command opens the Paperspace documentation in your browser.
You can optionally pass an argument that will take you to a specific 
docs page.

Valid pages are:
  - `d`, `deployment` |
| `help` | Show help for a pspace command |
| `init` | Create a new Paperspace app. This will create a new directory with a
default app structure. You can optionally specify a name for the app
and a template to use. If no template is specified, the default
template will be used.

Create a new app in the current directory.
````

$ pspace init

```
Create a new app named "my-app" relative to the current directory.
```

$ pspace init my-app

```
Create a new app named "my-app" relative to the current directory using
a template from the Paperspace GitHub organization.
```

$ pspace init my-app -t Paperspace/gradio-demo

```|
| `login` | Log in to the CLI using your Paperspace API key or by opening the web console. |
| `logout` | Log out of the CLI for the current team, a specific team, or all teams. |
| `machine` | Manage your Paperspace machines.

For more information, see  https://docs.paperspace.com/machines. |
| `machine-event` | Manage your machine events. Events are asynchronous tasks performed by our system on your machines.
Not all machine commands are asynchronous. For those that are, a machine event will be returned
which can be tracked using this command.

For more information, see https://docs.paperspace.com/machines. |
| `model` | Manage your Paperspace models.

For more information, see https://docs.paperspace.com/deploying/models. |
| `os-template` | List OS templates. OS templates are pre-configured virtual machines that
you can use to create a new machine.

For more information, see https://docs.paperspace.com/compute/os-templates. |
| `private-network` | Manage your private networks. Private networks are logically isolated networks
for your machines and shared drives. They can also be used for site-to-site VPNs
and direct connections to your on-premise network.

For more information, see https://docs.paperspace.com/networking/private-networks. |
| `project` | Manage your Paperspace projects. |
| `public-ip` | Manage your public IPs. Public IP addresses allow your compute machines to be reachable over the internet.

For more information, see https://docs.paperspace.com/networking/public-ips. |
| `secret` | Manage your Paperspace secrets. Secrets are used to store sensitive
information such as API keys, passwords, and other credentials. Secrets 
can be safely injected into workloads as environment variables. An environment 
variable that uses a Secret will not reveal the contents of the secret itself.

Secrets can be created at the following levels:

- Project (default): these secrets are applied to all resources in a project
- Global: these secrets can be applied to all resources on your current team

For more information, see https://docs.paperspace.com/secrets. |
| `shared-drive` | Manage your shared drives. Shared drives are used to centralize data
used by your team. Shared drives can be mounted on any Paperspace machine
in the same private network.

For more information, see https://docs.paperspace.com/storage/shared-drives. |
| `signup` | This command opens the Paperspace signup page in your browser. |
| `snapshot` | Manage your snapshots. Snapshots are copies of your machine's disk at a point in time.
They can be used to restore the machine to its previous state. Using snapshots is recommended
before taking any action that could affect the usability of the machine or its network connection.

For more information, see https://docs.paperspace.com/storage/snapshots. |
| `startup-script` | Manage your startup scripts. Startup scripts allow you to configure a machine
on first boot or on every boot. |
| `storage-provider` | Manage your storage providers.

For more information, see https://docs.paperspace.com/storage/storageProviders. |
| `up` | This will upsert an app config and deploy your app to Paperspace. You can optionally 
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

```|
| `upgrade` | This command upgrades [1mpspace[22m to the latest version.

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

```|
| `version` | Shows version information command, including version number and build date. |
```
