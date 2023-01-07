## CRUD (create, update, delete, list, get)

- [ ] `pspace deploy create --spec path/to/spec.yml [--template]`
- [ ] `pspace deploy delete`
- [ ] `pspace deploy update [id] --spec path/to/**.yml`
- [ ] `pspace deploy list [--first] [--after] [--order-by]`
- [ ] `pspace deploy get [id] --poll [interval]`

## Project linking

Link the working directory to a project. Saves typing `--project-id` for every
command.

- [ ] `pspace project link [projectId]`
- [ ] Maybe? `pspace deploy link [deploymentId]`

## Global config

- [ ] `pspace config get team`
- [ ] `pspace config set team google-saml-prod`
  - `$HOME/.pspace/credentials.yml`
  - `$HOME/.pspace/config.yml`
  - Prompt for API key if not in creds file

## Login

- [ ] `pspace login <apiKey>`
- [ ] `pspace login`
  - Open up the web browser to a page to receive a temporary token
  - Enter token into the CLI
  - Send to public API, receive API key
  - Store API key in creds file

## Notebooks

- `pspace nb create`

## VMs

- `pspace vm create`
