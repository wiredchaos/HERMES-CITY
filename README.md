# HERMES CITY

Public coordination layer for the Agentropolis ecosystem.

HERMES CITY is the public-facing, Apache-2.0 licensed civic shell for agent-native commerce, settlement awareness, and ecosystem intelligence. It is designed to expose the safe, shareable architecture without disclosing private Agentropolis implementation details.

## Purpose

HERMES CITY provides a public map of how autonomous agents, wallets, stablecoin rails, banking rails, credit unions, retirement capital, and commerce platforms may coordinate over time.

This repository is intentionally limited to public documentation, open schemas, examples, and non-sensitive interface patterns.

## Public Modules

### RAILWATCH

Trust & Treasury OSINT layer for tracking the advancement of programmable money rails.

RAILWATCH monitors:

- Stablecoin infrastructure such as Open USD, USDC, RLUSD, PYUSD, CASH, and USDT
- FDIC-insured banking signals, custody updates, bank enforcement actions, and tokenized deposits
- Credit union innovation, CUNA policy movement, CUSO models, and member-owned finance rails
- Retirement and pension exposure including 401(k), IRA, public pensions, BlackRock, Fidelity, Vanguard, and tokenized treasury adoption
- Agent commerce infrastructure including MetaMask Agent Wallet, x402, Coinbase Developer Platform, Stripe stablecoin rails, World.xyz, DFlow, and wallet-native payments

### HERMES VAULT SIGNAL

Public credential-governance watch layer for local-first agent security infrastructure.

Hermes Vault v0.17.0 introduced Lease Assurance: a time-bound credential access model that makes leases observable, maintainable, and auditable without adding new dependencies.

HERMES CITY tracks Hermes Vault as public agent-infrastructure signal because credential leases are a core primitive for safe agent-native commerce:

- Agents should not hold permanent authority by default.
- Credential access should expire, renew from current time, and revoke cleanly.
- Operator surfaces should expose lease health, active counts, policy gaps, backup drift, and failed-close revoke behavior.
- MCP denial responses should remain structured and machine-readable.

Public reference: [`docs/HERMES_VAULT_LEASE_ASSURANCE.md`](docs/HERMES_VAULT_LEASE_ASSURANCE.md)

### MODEL COUNCIL SIGNAL

Public model-provider capability signal for safe agent-native routing.

HERMES CITY tracks the model-council pattern because agent systems need specialized inference lanes for planning, research, building, fast worker tasks, council review, and fallback execution.

Public reference: [`docs/PUBLIC_MODEL_COUNCIL_SIGNAL.md`](docs/PUBLIC_MODEL_COUNCIL_SIGNAL.md)

## Signal Scoring

| Score | Label | Meaning | Action |
| --- | --- | --- | --- |
| 1 | Noise | Weak or unverifiable signal | Archive |
| 2 | Watch | Worth monitoring | Add to watch board |
| 3 | Research | Relevant ecosystem development | Produce a short brief |
| 4 | Build | Strategic opportunity | Create an implementation task |
| 5 | Integrate | Critical ecosystem signal | Prioritize integration planning |

## Public / Private Boundary

HERMES CITY is public.
Agentropolis is private.

Public materials may describe concepts, schemas, operating principles, and non-sensitive research workflows.

Do not commit private keys, secrets, internal production code, private Agentropolis implementation details, client information, credentials, proprietary prompts, internal agent orchestration logic, wallet infrastructure, financial workflows, or undisclosed strategy documents to this repository.

## License

Apache License 2.0.

See `LICENSE` for details.
