Manage your Paperspace projects.

### Usage

```
pspace project [command]
pspace project [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand                                                           | Description                                                                |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `create`                                                             | Create a new project. This command will prompt you for a name if you don't |
| provide one.                                                         |                                                                            |
| `delete`                                                             | Delete a project by its ID. If you don't provide an ID, this command will  |
| prompt you for one based on the projects you have access to.         |                                                                            |
| `get`                                                                | Get a project by its ID. If you don't provide an ID, this command will     |
| prompt you for one based on the projects you have access to.         |                                                                            |
| `help`                                                               | Show help for a project command                                            |
| `link`                                                               | This will link a remote project to a local directory. Commands that        |
| depend on a project ID will use the project ID of the linked project |                                                                            |
| when communicating with the Paperspace API.                          |                                                                            |

Link a project to the current directory.

```
$ pspace link
```

Link a project to a different directory.

```
$ pspace link --cwd ../my-app
```

Link a project and specify a project ID.

````
$ pspace link pzwf2g05ubegj
``` |
| `list` | List projects in your team.

Pick a subset of fields to display:
````

pspace project list -F id -F name -F dtCreated

```|
| `update` | Update an existing project.

Example:
```

pspace project update psukfyemho7 --name my-cool-project

```|
```
