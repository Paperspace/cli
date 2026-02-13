Create an autoscaling group.

### Usage

```
pspace autoscaling-group create [flags]
```

### Flags

| Name                   | Aliases | Description                                                                | Required |
| ---------------------- | ------- | -------------------------------------------------------------------------- | -------- |
| `fields`               | F       | The fields to include in the response.                                     | false    |
| `name`                 | n       | The name of the autoscaling group                                          | true     |
| `cluster-id`           |         | The ID of the cluster                                                      | true     |
| `machine-type`         |         | The machine type for the autoscaling group                                 | true     |
| `network-id`           |         | The ID of the network for the autoscaling group                            | true     |
| `template-id`          |         | The ID of the template for the autoscaling group                           | true     |
| `startup-script-id`    |         | The ID of the startup script for the autoscaling group                     | true     |
| `max`                  |         | The maximum number of active machines in the autoscaling group             | true     |
| `min`                  |         | The minimum number of active machines in the autoscaling group             | true     |
| `provisioning-timeout` |         | The timeout for provisioning machines in the autoscaling group, in minutes | false    |
| `log-level`            | l       | Enable debug logging.                                                      | false    |
| `json`                 | j       | Output JSON                                                                | false    |
| `api-key`              |         | A Paperspace public API Key used for authenticating requests               | false    |
| `help`                 | h       | Show help for a command                                                    | false    |
