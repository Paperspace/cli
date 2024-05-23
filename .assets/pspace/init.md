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

#### Subcommands
````
