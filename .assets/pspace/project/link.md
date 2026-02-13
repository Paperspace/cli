This will link a remote project to a local directory. Commands that depend on a
project ID will use the project ID of the linked project when communicating with
the Paperspace API.

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
pspace project link [arguments] [flags]
```

### Flags

| Name        | Aliases | Description                                                              | Required |
| ----------- | ------- | ------------------------------------------------------------------------ | -------- |
| `cwd`       |         | The directory to link the project to. Defaults to the current directory. | false    |
| `log-level` | l       | Enable debug logging.                                                    | false    |
| `json`      | j       | Output JSON                                                              | false    |
| `api-key`   |         | A Paperspace public API Key used for authenticating requests             | false    |
| `help`      | h       | Show help for a command                                                  | false    |
