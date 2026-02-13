Effortlessly deploy ML apps to Paperspace.

### Usage

```
pspace deployment [command]
pspace deployment [flags]
```

### Flags

| Name        | Aliases | Description                                                  | Required |
| ----------- | ------- | ------------------------------------------------------------ | -------- |
| `log-level` | l       | Enable debug logging.                                        | false    |
| `json`      | j       | Output JSON                                                  | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`      | h       | Show help for a command                                      | false    |

#### Subcommands

| Subcommand                                                      | Description                                                                  |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `delete`                                                        | Delete a deployment by its ID. If you don't provide an ID, this command will |
| prompt you for one based on the deployments you have access to. |                                                                              |

````
pspace deployment delete 123e4567-e89b-12d3-a456-426614174000
``` |
| `get` | Get a deployment by its ID. If you don't provide an ID, this command will
prompt you for one based on the deployments you have access to.
````

pspace deployment get 123e4567-e89b-12d3-a456-426614174000

```
Pick a subset of fields to display:
```

pspace deployment get 123e4567-e89b-12d3-a456-426614174000 -F name

```|
| `help` | Show help for a deployment command |
| `list` | List deployments in your team.

Pick a subset of fields to display:
```

pspace deployment list -F id -F name

```|
| `up` | This will create a new deployment for your app or update it if it already exists. 
You can optionally specify a path to a config file. If no config file is specified, 
the default config file paths will be tried.

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

```|
```
