Update an autoscaling group.

### Usage

```
pspace autoscaling-group update [arguments] [flags]
```

### Flags

| Name                   | Aliases | Description                                                                | Required |
| ---------------------- | ------- | -------------------------------------------------------------------------- | -------- |
| `fields`               | F       | The fields to include in the response.                                     | false    |
| `name`                 | n       | The name of the autoscaling group                                          | false    |
| `cluster-id`           |         | The ID of the cluster                                                      | false    |
| `machine-type`         |         | The machine type for the autoscaling group                                 | false    |
| `network-id`           |         | The ID of the network for the autoscaling group                            | false    |
| `template-id`          |         | The ID of the template for the autoscaling group                           | false    |
| `startup-script-id`    |         | The ID of the startup script for the autoscaling group                     | false    |
| `max`                  |         | The maximum number of active machines in the autoscaling group             | false    |
| `min`                  |         | The minimum number of active machines in the autoscaling group             | false    |
| `provisioning-timeout` |         | The timeout for provisioning machines in the autoscaling group, in minutes | false    |
| `current`              |         | The desired number of active machines in the autoscaling group             | false    |
| `log-level`            | l       | Enable debug logging.                                                      | false    |
| `json`                 | j       | Output JSON                                                                | false    |
| `api-key`              |         | A Paperspace public API Key used for authenticating requests               | false    |
| `help`                 | h       | Show help for a command                                                    | false    |
