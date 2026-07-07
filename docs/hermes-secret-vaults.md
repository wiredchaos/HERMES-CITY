# Hermes Secret Vaults

Hermes now supports multi-source secret resolution for agent profiles. This moves API keys, MCP tokens, OAuth credentials, and service credentials out of plaintext `.env` sprawl and into dedicated secret managers.

For AGENTROPOLIS, this is infrastructure doctrine: one city, many agents, each profile pulling only the credentials it needs.

## Core model

Secrets resolve during process startup:

1. `.env` loads first as the baseline.
2. Enabled secret sources override `.env` values.
3. Explicit mapped sources beat bulk imported sources.
4. The first configured source to claim a variable wins.

Hermes tracks provenance for each resolved secret, so startup output can show where credentials came from without exposing the value:

```text
ANTHROPIC_API_KEY (from Bitwarden)
OPENAI_API_KEY (from 1Password)
```

## Built-in source shapes

### Bitwarden bulk source

Bitwarden is useful when one agent profile should import a project folder of credentials.

```env
BITWARDEN_ACCESS_TOKEN=...
```

```yaml
secrets:
  sources: [bitwarden]
  bitwarden:
    enabled: true
```

Use this for broad project-level credentials where the vault folder is already scoped to the agent or district.

### 1Password mapped source

1Password is useful when high-value credentials should be explicitly mapped by environment variable.

```yaml
secrets:
  sources: [onepassword]
  onepassword:
    enabled: true
    env:
      ANTHROPIC_API_KEY: "op://vault/anthropic/api-key"
      OPENAI_API_KEY: "op://vault/openai/api-key"
```

Mapped sources are stronger than bulk sources when both claim the same variable.

### Running both together

```yaml
secrets:
  sources: [onepassword, bitwarden]
  onepassword:
    enabled: true
    env:
      ANTHROPIC_API_KEY: "op://vault/anthropic/api-key"
      OPENAI_API_KEY: "op://vault/openai/api-key"
  bitwarden:
    enabled: true
```

Recommended pattern:

- 1Password handles explicitly mapped, high-value keys.
- Bitwarden fills the remaining profile credentials.
- Conflict warnings reveal accidental overlap.

## Custom vault plugins

Any secret manager, password manager, OS keychain, or internal credential broker can become a Hermes secret source.

```text
~/.hermes/plugins/my-vault/
├── plugin.yaml
└── __init__.py
```

The plugin implements one method:

```python
def fetch():
    return {
        "OPENAI_API_KEY": "...",
        "ANTHROPIC_API_KEY": "...",
    }
```

Plugin contract:

- Return `{ENV_VAR: value}`.
- Never write directly to `os.environ`.
- Never prompt for input.
- Never raise exceptions from `fetch()`.
- Return errors through the plugin result path.

Hermes handles precedence, conflict resolution, timeouts, and environment writes.

## Security guardrails

Hermes secret sources should follow these rules:

- `fetch()` never raises; errors are reported in `result.error`.
- `fetch()` never prompts; startup may run in non-interactive environments such as gateways, cron, Docker, and remote backends.
- Subprocess helpers must use `run_secret_cli()` with a minimal allowlisted environment.
- Vault bootstrap tokens are protected and cannot be overwritten by another source.
- Each source has a wall-clock timeout, defaulting to 120 seconds unless configured otherwise.
- `stdin` is closed on subprocess calls so prompt-based helpers fail fast.
- No shell execution through `shell=True`.

## AGENTROPOLIS profile strategy

Use one vault scope per agent role or district boundary.

| Profile | Credential scope |
| --- | --- |
| Neuro PM | Project coordination, GitHub, planning tools |
| Builder | Code agent providers, package registries, deployment tokens |
| Research | Web research, model providers, document tools |
| Media | Social, publishing, asset-generation services |
| Finance / NEURA | Payment, tax, accounting, and financial APIs |
| DevOps | Infra providers, Docker, remote backend credentials |
| FEN / XRPL | Chain adapters, read-only ledger services, mint tooling |
| Sandbox | Low-risk test keys only |

The baseline rule: no agent receives credentials outside its operating lane.

## Repo operating rule

Do not commit real secrets.

`.env.example` may document variable names. Real values must live in Bitwarden, 1Password, or a custom Hermes vault plugin.

## Why this matters

Eight Hermes profiles can mean eight credential surfaces:

- Anthropic
- OpenAI
- Grok
- DeepSeek
- OpenRouter
- Gmail / Calendar MCP
- Slack / Discord
- Stripe / payment services

Managing all of this through plaintext `.env` files creates unnecessary leak risk. Vault integration gives AGENTROPOLIS a cleaner control plane:

- Rotate credentials in the vault.
- Audit access in the secret manager.
- Revoke one credential without editing every repo.
- Restart the profile and pull the current key material.

Secret sprawl is Moloch. Vaulted agents are the counter-protocol.
