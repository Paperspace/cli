# pspace deployment up

This will create a new deployment for your app or update it if it already exists. 
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
```

## Usage

```
  deployment up [flags]
```

## Flags

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

