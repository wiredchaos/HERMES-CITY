# CROWLARR + TEMPEST54 Dashboard Doctrine

## Status

HERMES-CITY is the command surface for the CROWLARR + TEMPEST54 pattern.

CROWLARR is the registry. TEMPEST54 is the authorized security lab swarm. HERMES-CITY is where operators see the city map, deployment state, health checks, evidence, and configuration.

## Doctrine lock

> CROWLARR indexes the tools. TEMPEST54 deploys the operatives. Evidence Vault preserves the receipts.

## HERMES-CITY role

HERMES-CITY should render this pattern as a safe command dashboard, not as an unrestricted offensive interface.

It owns the UI for:

- registry browsing
- service health
- MCP server status
- agent roster
- workflow presets
- evidence receipts
- config library
- benchmark status
- authorized lab ranges
- human approval gates

## Dashboard sections

Suggested navigation:

1. War Room
2. Operatives
3. Evidence Vault
4. Config Library
5. Arsenal
6. Benchmarks
7. Authorized Ranges
8. MCP Registry
9. Policy Gates
10. Settings

## CROWLARR panels

CROWLARR panels should show:

- registered MCP servers
- tool categories
- model profiles
- prompt packs
- repo adapters
- API integrations
- health status
- sync destinations
- last check time
- failure notes

Core UX principle:

> Configure once. Route everywhere.

## TEMPEST54 panels

TEMPEST54 panels should show only authorized workflows:

- CTF Range
- OWASP Lab
- Internal Repo Audit
- Smart Contract Test Lab
- Defensive Validation
- Compliance Report
- Benchmark Arena

Each workflow must require:

- target name
- proof of ownership or written permission
- allowed scope
- rate limits
- allowed tools
- evidence destination
- human approval when risk is elevated

## UI safety labels

Recommended labels:

- `AUTHORIZED ONLY`
- `LAB MODE`
- `CTF RANGE`
- `OWNED ASSET`
- `HUMAN APPROVAL REQUIRED`
- `EVIDENCE LOGGING ON`
- `NO THIRD-PARTY TARGETS`

## Operative classes

Use specialist cards for internal and lab work only:

- Recon Analyst
- Vulnerability Reviewer
- Code Audit Specialist
- Web App Tester
- Smart Contract Reviewer
- Report Writer
- Mission Coordinator
- Evidence Curator

Avoid public language that implies unauthorized access, stealth, exfiltration, persistence, or third-party exploitation.

## Evidence Vault contract

Every TEMPEST54 action visible in HERMES-CITY should emit:

- workflow id
- operator id
- target scope
- timestamp
- tool invoked
- command summary
- result summary
- risk class
- approval state
- artifact link

## Next build steps

1. Add a CROWLARR Registry page.
2. Add a TEMPEST54 Authorized Lab page.
3. Add Evidence Vault event cards.
4. Add Config Library bindings for prompts and policies.
5. Add hard UI gates before any security workflow runs.
