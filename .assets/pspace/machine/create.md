Create a machine.

### Usage

```
pspace machine create [flags]
```

### Flags

| Name                       | Aliases | Description                                                  | Required |
| -------------------------- | ------- | ------------------------------------------------------------ | -------- |
| `fields`                   | F       | The fields to include in the response.                       | false    |
| `name`                     | n       | The name of the machine                                      | true     |
| `machine-type`             |         | The machine type to create                                   | true     |
| `template-id`              |         | The ID of the template to create the machine from            | true     |
| `network-id`               |         | The ID of the network to create the machine in               | false    |
| `region`                   |         | The region to create the machine in                          | true     |
| `disk-size`                |         | The size of the machine's disk                               | true     |
| `public-ip-type`           |         | The public IP type.                                          | false    |
| `auto-snapshot-enabled`    |         | Whether to enable auto snapshots.                            | false    |
| `auto-snapshot-frequency`  |         | The auto snapshot frequency.                                 | false    |
| `auto-snapshot-save-count` |         | The number of auto snapshots to save.                        | false    |
| `auto-shutdown-enabled`    |         | Whether to enable auto shutdown.                             | false    |
| `auto-shutdown-timeout`    |         | The auto shutdown timeout in hours.                          | false    |
| `auto-shutdown-force`      |         | Whether to force shutdown the machine.                       | false    |
| `take-initial-snapshot`    |         | Whether to take an initial snapshot.                         | false    |
| `restore-point-enabled`    |         | Whether to use initial snapshot as a restore point.          | false    |
| `restore-point-frequency`  |         | The restore point frequency.                                 | false    |
| `startup-script-id`        |         | The startup script ID.                                       | false    |
| `email-password`           |         | Whether to email the password.                               | false    |
| `start-on-create`          |         | Whether to start the machine on creation.                    | false    |
| `enable-nvlink`            |         | Whether to enable NVLink.                                    | false    |
| `accessor-ids`             |         | The accessors of the machine.                                | false    |
| `log-level`                | l       | Enable debug logging.                                        | false    |
| `json`                     | j       | Output JSON                                                  | false    |
| `api-key`                  |         | A Paperspace public API Key used for authenticating requests | false    |
| `help`                     | h       | Show help for a command                                      | false    |
