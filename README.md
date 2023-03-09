<img src=".assets/Paperspace.svg" width=128>

# Paperspace CLI

## Installation

Using Shell (macOS, Linux, and Windows using WSL):

```sh
curl -fsSL https://console.paperspace.com/install.sh | sh
```

Using Scoop (Windows):

> **Note** Coming soon
>
> ```sh
> scoop bucket add pspace https://github.com/Paperspace/scoop-bucket.git
> scoop install pspace
> ```

Using Homebrew (macOS and Linux):

> **Note** Coming soon
>
> ```sh
> brew tap paperspace/tap
> brew install pspace
> ```

## Usage

Run `pspace --help` in your terminal.

```sh
pspace [command] [flags]
```

## Available Commands

| Command                                                  | Description                                               |
| -------------------------------------------------------- | --------------------------------------------------------- |
| [**`pspace`**](#-pspace)                                 | A CLI for using the Paperspace API.                       |
| [**`pspace completion`**](#-pspace-completion)           | Generate an autocompletion script for the specified shell |
| [**`pspace completion bash`**](#-pspace-completion-bash) | Generate an autocompletion script for the bash shell      |
| [**`pspace completion fish`**](#-pspace-completion-fish) | Generate an autocompletion script for the fish shell      |
| [**`pspace completion zsh`**](#-pspace-completion-zsh)   | Generate an autocompletion script for the zsh shell       |
| [**`pspace config`**](#-pspace-config)                   | Manage your local Paperspace configuration.               |
| [**`pspace config delete`**](#-pspace-config-delete)     | Delete a configuration value.                             |
| [**`pspace config get`**](#-pspace-config-get)           | Get a configuration value.                                |
| [**`pspace config set`**](#-pspace-config-set)           | Set a configuration value.                                |
| [**`pspace console`**](#-pspace-console)                 | Open the Paperspace web console.                          |
| [**`pspace deployment`**](#-pspace-deployment)           | Effortlessly deploy ML apps to Paperspace.                |
| [**`pspace deployment get`**](#-pspace-deployment-get)   |                                                           |
| [**`pspace deployment list`**](#-pspace-deployment-list) |                                                           |
| [**`pspace docs`**](#-pspace-docs)                       | Open Paperspace documention in your default browser.      |
| [**`pspace help`**](#-pspace-help)                       | Show help for a pspace command                            |
| [**`pspace help commands`**](#-pspace-help-commands)     | List pspace commands                                      |
| [**`pspace init`**](#-pspace-init)                       | Create a new Paperspace app                               |
| [**`pspace login`**](#-pspace-login)                     | Log in to the CLI.                                        |
| [**`pspace logout`**](#-pspace-logout)                   | Log out of the CLI.                                       |
| [**`pspace project`**](#-pspace-project)                 | Manage your Paperspace projects.                          |
| [**`pspace project create`**](#-pspace-project-create)   | Create a new project                                      |
| [**`pspace project get`**](#-pspace-project-get)         | Get a project.                                            |
| [**`pspace project link`**](#-pspace-project-link)       | Link a remote project to                                  |
| [**`pspace project list`**](#-pspace-project-list)       | List projects.                                            |
| [**`pspace project update`**](#-pspace-project-update)   | Update an existing project.                               |
| [**`pspace signup`**](#-pspace-signup)                   | Sign up for a Paperspace account.                         |
| [**`pspace up`**](#-pspace-up)                           | Deploy your app to Paperspace                             |
| [**`pspace upgrade`**](#-pspace-upgrade)                 | Upgrade pspace to the latest version.                     |
| [**`pspace version`**](#-pspace-version)                 | Show version information                                  |

---

## `$ pspace`

A CLI for using the Paperspace API.

It allows you to authenticate, launch deployments, do logging, and more.

- Deploy an ML app with the `deployment` command
- View a deployed app with the `deployment open` command
- Check the status of a deployment with the `deployment status` command

Read the full documentation at: https://docs.paperspace.com/

### Global Flags

These flags are available on all commands.

| Name            | Type                                                      | Required? | Default | Description                                                  |
| --------------- | --------------------------------------------------------- | --------- | ------- | ------------------------------------------------------------ |
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)

---

## `$ pspace completion`

Generate an autocompletion script for pspace in the specified shell.
See each sub-command's help for details on how to use the generated script.

### Global Flags

These flags are available on all commands.

| Name            | Type                                                      | Required? | Default | Description                                                  |
| --------------- | --------------------------------------------------------- | --------- | ------- | ------------------------------------------------------------ |
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)

---

## `$ pspace completion bash`

Generate the autocompletion script for the bash shell.

This script depends on the `bash-completion` package.
If it is not installed already, you can install it via your OS's package manager.

To load completions in your current shell session:

```
$ source <(pspace completion bash)
```

To load completions for every new session, execute once:

Linux:

```
$ pspace completion bash > /etc/bash_completion.d/pspace
```

MacOS:

```
$ pspace completion bash > /usr/local/etc/bash_completion.d/pspace
```

You will need to start a new shell for this setup to take effect.

### Global Flags

These flags are available on all commands.

| Name            | Type                                                      | Required? | Default | Description                                                  |
| --------------- | --------------------------------------------------------- | --------- | ------- | ------------------------------------------------------------ |
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)

---

## `$ pspace completion fish`

Generate the autocompletion script for the fish shell.

To load completions in your current shell session:

```
$ pspace completion fish | source
```

To load completions for every new session, execute once:

```
$ pspace completion fish > ~/.config/fish/completions/pspace.fish
```

You will need to start a new shell for this setup to take effect.

### Flags

| Name              | Type      | Required? | Default | Description                     |
| ----------------- | --------- | --------- | ------- | ------------------------------- |
| --no-descriptions | `boolean` | No        |         | Disable completion descriptions |

### Global Flags

These flags are available on all commands.

| Name            | Type                                                      | Required? | Default | Description                                                  |
| --------------- | --------------------------------------------------------- | --------- | ------- | ------------------------------------------------------------ |
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)

---

## `$ pspace completion zsh`

Generate the autocompletion script for the zsh shell.

If shell completion is not already enabled in your environment you will need
to enable it. You can execute the following once:

```
$ echo "autoload -U compinit; compinit" >> ~/.zshrc
```

To load completions for every new session, execute once:

Linux:

```
$ pspace completion zsh > "${fpath[1]}/_pspace"
```

macOS:

```
$ pspace completion zsh > /usr/local/share/zsh/site-functions/_pspace
```

Oh My Zsh:

```
$ pspace completion zsh > ~/.oh-my-zsh/completions/_pspace
```

You will need to start a new shell for this setup to take effect.

### Flags

| Name              | Type      | Required? | Default | Description                     |
| ----------------- | --------- | --------- | ------- | ------------------------------- |
| --no-descriptions | `boolean` | No        |         | Disable completion descriptions |

### Global Flags

These flags are available on all commands.

| Name            | Type                                                      | Required? | Default | Description                                                  |
| --------------- | --------------------------------------------------------- | --------- | ------- | ------------------------------------------------------------ |
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)

---

## `$ pspace config`

This command manages your Paperspace configuration. You can use it to set, get, and
delete configuration values. Running this command without any subcommands will print
your current configuration.

Your configuration is stored in a TOML file at `~/.paperspace/config.toml`.

For example, to set the current team, run:

```
pspace config set team "my-team"
```

### Global Flags

These flags are available on all commands.

| Name            | Type                                                      | Required? | Default | Description                                                  |
| --------------- | --------------------------------------------------------- | --------- | ------- | ------------------------------------------------------------ |
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)

---

## `$ pspace config delete`

Delete a configuration value.

### Arguments

The key to delete.

| Type                               | Variadic? | Description            |
| ---------------------------------- | --------- | ---------------------- |
| `"team" \| "projects" \| "locale"` | No        | The configuration key. |

### Global Flags

These flags are available on all commands.

| Name            | Type                                                      | Required? | Default | Description                                                  |
| --------------- | --------------------------------------------------------- | --------- | ------- | ------------------------------------------------------------ |
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)

---

## `$ pspace config get`

This command gets a configuration value. You can pass a key to get a specific
value, or you can pass no arguments to get all configuration values.

For example, to get the current team run:

```
pspace config get team
```

### Arguments

The key to get.

| Type                               | Variadic? | Description            |
| ---------------------------------- | --------- | ---------------------- |
| `"team" \| "projects" \| "locale"` | No        | The configuration key. |

### Global Flags

These flags are available on all commands.

| Name            | Type                                                      | Required? | Default | Description                                                  |
| --------------- | --------------------------------------------------------- | --------- | ------- | ------------------------------------------------------------ |
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)

---

## `$ pspace config set`

Set a configuration value.

### Arguments

The key/value pair to set.

| Type                               | Variadic? | Description                  |
| ---------------------------------- | --------- | ---------------------------- |
| `"team" \| "projects" \| "locale"` | No        | The configuration key.       |
| `string`                           | Yes       | The new configuration value. |

### Global Flags

These flags are available on all commands.

| Name            | Type                                                      | Required? | Default | Description                                                  |
| --------------- | --------------------------------------------------------- | --------- | ------- | ------------------------------------------------------------ |
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)

---

## `$ pspace console`

This command opens the Paperspace web console in your browser.

### Global Flags

These flags are available on all commands.

| Name            | Type                                                      | Required? | Default | Description                                                  |
| --------------- | --------------------------------------------------------- | --------- | ------- | ------------------------------------------------------------ |
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)

---

## `$ pspace deployment`

Effortlessly deploy ML apps to Paperspace.

### Global Flags

These flags are available on all commands.

| Name            | Type                                                      | Required? | Default | Description                                                  |
| --------------- | --------------------------------------------------------- | --------- | ------- | ------------------------------------------------------------ |
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)

---

## `$ pspace deployment get`

### Global Flags

These flags are available on all commands.

| Name            | Type                                                      | Required? | Default | Description                                                  |
| --------------- | --------------------------------------------------------- | --------- | ------- | ------------------------------------------------------------ |
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)

---

## `$ pspace deployment list`

### Global Flags

These flags are available on all commands.

| Name            | Type                                                      | Required? | Default | Description                                                  |
| --------------- | --------------------------------------------------------- | --------- | ------- | ------------------------------------------------------------ |
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)

---

## `$ pspace docs`

This command opens the Paperspace documentation in your browser.
You can optionally pass an argument that will take you to a specific
docs page.

Valid pages are:

- `d`, `deployment`

### Arguments

| Type                  | Variadic? | Description      |
| --------------------- | --------- | ---------------- |
| `"d" \| "deployment"` | No        | The page to open |

### Global Flags

These flags are available on all commands.

| Name            | Type                                                      | Required? | Default | Description                                                  |
| --------------- | --------------------------------------------------------- | --------- | ------- | ------------------------------------------------------------ |
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)

---

## `$ pspace help`

Show help for a pspace command

### Arguments

| Type                                                                                                                                                                    | Variadic? | Description                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------------------------- |
| `"project" \| "deployment" \| "upgrade" \| "config" \| "signup" \| "console" \| "docs" \| "logout" \| "login" \| "init" \| "up" \| "version" \| "completion" \| "help"` | No        | The command to show help for. |

### Global Flags

These flags are available on all commands.

| Name            | Type                                                      | Required? | Default | Description                                                  |
| --------------- | --------------------------------------------------------- | --------- | ------- | ------------------------------------------------------------ |
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)

---

## `$ pspace help commands`

List pspace commands

### Flags

| Name      | Type      | Required? | Default | Description                              |
| --------- | --------- | --------- | ------- | ---------------------------------------- |
| --all, -a | `boolean` | No        |         | Show all commands, including hidden ones |

### Global Flags

These flags are available on all commands.

| Name            | Type                                                      | Required? | Default | Description                                                  |
| --------------- | --------------------------------------------------------- | --------- | ------- | ------------------------------------------------------------ |
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)

---

## `$ pspace init`

Create a new Paperspace app. This will create a new directory with a
default app structure. You can optionally specify a name for the app
and a template to use. If no template is specified, the default
template will be used.

Create a new app in the current directory.

```
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
```

### Arguments

The directory to create the app in. Defaults to the current directory.

| Type     | Variadic? | Description |
| -------- | --------- | ----------- |
| `string` | No        |             |

### Flags

| Name           | Type        | Required? | Default | Description                                                                                                  |
| -------------- | ----------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| --template, -t | `undefined` | Yes       |         | A template to use when creating the app. This can be a URL to a git repository or a shorthand template name. |

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

Download from BitBucket

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
``` |
| --mode, -m | `"git" \| "tar"` | No | `"tar"` | The mode to use when creating the app. This can be either "git" or "tar". If "git" is specified, the template will be downloaded as a
tarball. Note that "git" clones over SSH, so you must have a valid
SSH key configured with GitHub, Bitbucket, or GitLab. |
| --name, -n | `string` | No |  | The name of the app. Defaults to the first argument current directory name. |
| --clean, -c | `boolean` | No |  | Clean the Paperspace cache. This negates other args/flags. |


### Global Flags

These flags are available on all commands.

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)




---

## `$ pspace login`

Log in to the CLI using your Paperspace API key or by opening the web console.


### Arguments



| Type     | Variadic? | Description                |
| -------- | --------- | -------------------------- |
| `string` | No        | An API key to log in with. |



### Global Flags

These flags are available on all commands.

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)




---

## `$ pspace logout`

Log out of the CLI for the current team, a specific team, or all teams.


### Arguments

The teams to logout of.

| Type     | Variadic? | Description            |
| -------- | --------- | ---------------------- |
| `string` | Yes       | The team to logout of. |


### Flags

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --all, -a | `boolean` | No        |         | Log out of all teams. |


### Global Flags

These flags are available on all commands.

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)




---

## `$ pspace project`

Manage your Paperspace projects.




### Global Flags

These flags are available on all commands.

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)


---

## `$ pspace project create`

Create a new project. This command will prompt you for a name if you don't
provide one.


### Arguments

Create a project with these properties.

| Type     | Variadic? | Description |
| -------- | --------- | ----------- |
| `string` | No        |             |


### Flags

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --fields, -F | `string` | No        |         | The fields to include in the response. |


### Global Flags

These flags are available on all commands.

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)




---

## `$ pspace project get`

Get a project by its ID. If you don't provide an ID, this command will
prompt you for one based on the projects you have access to.


### Arguments



| Type     | Variadic? | Description            |
| -------- | --------- | ---------------------- |
| `string` | No        | The project ID to get. |


### Flags

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --fields, -F | `string` | No        |         | The fields to include in the response. |


### Global Flags

These flags are available on all commands.

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)




---

## `$ pspace project link`

This will link a remote project to a local directory. Commands that
depend on a project ID will use the project ID of the linked project
when communicating with the Paperspace API.

Link a project to the current directory.
````

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


### Arguments

A project ID. If not provided, you will be prompted to select one.

| Type     | Variadic? | Description   |
| -------- | --------- | ------------- |
| `string` | No        | A project ID. |


### Flags

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --cwd | `string` | No        |         | The directory to link the project to. Defaults to the current directory. |


### Global Flags

These flags are available on all commands.

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)




---

## `$ pspace project list`

List projects in your team.

Examples:

Pick a subset of fields to display:
```

pspace project list -F handle -F name -F dtCreated

```



### Flags

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --limit      | `number`      | No        |         | The number of projects to return in the next page. |
| --after      | `string`      | No        |         | The cursor to fetch the next results from.         |
| --orderBy    | `"dtCreated"` | No        |         | The field to order projects by.                    |
| --asc        | `boolean`     | No        |         | Whether to order projects ascending.               |
| --desc       | `boolean`     | No        |         | Whether to order projects descending.              |
| --fields, -F | `string`      | No        |         | The fields to include in the response.             |


### Global Flags

These flags are available on all commands.

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)




---

## `$ pspace project update`

Update an existing project.

Example:
```

pspace project update psukfyemho7 --name my-cool-project

```


### Arguments



| Type     | Variadic? | Description               |
| -------- | --------- | ------------------------- |
| `string` | No        | The project ID to update. |


### Flags

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --name       | `string` | No        |         | The new name for the project.          |
| --fields, -F | `string` | No        |         | The fields to include in the response. |


### Global Flags

These flags are available on all commands.

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)






---

## `$ pspace signup`

This command opens the Paperspace signup page in your browser.




### Global Flags

These flags are available on all commands.

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)




---

## `$ pspace up`

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



### Flags

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --config, -c | `string` | No        |         | The path to the config file. Defaults to our default config file paths. |
The default config file paths are in order of precedence:

- `paperspace.yaml`
- `paperspace.yml`
- `paperspace.json`
- `paperspace.toml`
- `.paperspace/app.yaml`
- `.paperspace/app.yml`
- `.paperspace/app.json`
- `.paperspace/app.toml` |
| --cwd | `string` | No |  | The directory to deploy the app from. Defaults to the current directory. |


### Global Flags

These flags are available on all commands.

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)




---

## `$ pspace upgrade`

This command upgrades pspace to the latest version.

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




### Global Flags

These flags are available on all commands.

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)




---

## `$ pspace version`

Shows version information command, including version number and build date.




### Global Flags

These flags are available on all commands.

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- ||
| --log-level, -l | `"debug" \| "info" \| "warning" \| "error" \| "critical"` | No        |         | Enable debug logging.                                        |
| --json, -j      | `boolean`                                                 | No        |         | Output JSON                                                  |
| --api-key       | `string`                                                  | No        |         | A Paperspace public API Key used for authenticating requests |
| --help, -h      | `boolean`                                                 | No        |         | Show help for a command                                      |

[**⇗ Back to top**](#available-commands)
```
