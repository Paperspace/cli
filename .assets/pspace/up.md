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

#### Subcommands

