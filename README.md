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

### EXECUTION GOVERNOR SIGNAL

Public safety signal for agent-native execution control.

HERMES CITY tracks Execution Governor as a prerequisite control layer for any agent system that may interact with programmable liquidity, market venues, wallet lanes, or capital-sensitive workflows.

The governor does not generate strategy. It enforces survival through caps, throttles, pauses, kill states, manual reset requirements, and auditable decision records.

Public reference: [`docs/EXECUTION_GOVERNOR_PUBLIC_SIGNAL.md`](docs/EXECUTION_GOVERNOR_PUBLIC_SIGNAL.md)

### BASEDBOT EXECUTION SIGNAL

Public execution-terminal signal for governed agent-native finance.

HERMES CITY tracks BasedBot as a candidate execution surface because agent systems need more than recommendations. They need safe paths for read-only monitoring, simulation, approval-based actions, limited execution, and audit receipts.

BasedBot is not treated as the brain. It is treated as a potential tool lane that must sit behind orchestration, policy review, wallet permissioning, spend caps, allowlists, cooldowns, kill switches, and manual reset controls.

Public reference: [`docs/BASEDBOT_PUBLIC_EXECUTION_SIGNAL.md`](docs/BASEDBOT_PUBLIC_EXECUTION_SIGNAL.md)

### HERMES VAULT SIGNAL

Public credential-governance watch layer for local-first agent security infrastructure.

Hermes Vault v0.17.0 introduced Lease Assurance: a time-bound credential access model that makes leases observable, maintainable, and auditable without adding new dependencies.

HERMES CITY tracks Hermes Vault as public agent-infrastructure signal because credential leases are a core primitive for safe agent-native commerce:

- Agents should not hold permanent authority by default.
- Credential access should expire, renew from current time, and revoke cleanly.
- Operator surfaces should expose lease health, active counts, policy gaps, backup drift, and failed-close revoke behavior.
- MCP denial responses should remain structured and machine-readable.

Public reference: [`docs/HERMES_VAULT_LEASE_ASSURANCE.md`](docs/HERMES_VAULT_LEASE_ASSURANCE.md)

### HERMES AGENT LOGBOOK SIGNAL

Public operating-system signal for Hermes Agent updates shipped to `main` after v0.17.0.

HERMES CITY tracks these updates because they map directly to agent-city infrastructure primitives:

- Background fan-out for parallel subagent delegation.
- Durable session identity through compaction.
- Visible Mixture-of-Agents reference outputs before aggregation.
- Desktop context breakdown across system prompt, tools, skills, memory, and active work.
- Persistent terminal tabs that restore history on relaunch.

Public reference: [`docs/HERMES_LOGBOOK_MAIN_SINCE_V0_17_0.md`](docs/HERMES_LOGBOOK_MAIN_SINCE_V0_17_0.md)

### HERMES AGENT V0.18.0 JUDGEMENT RELEASE SIGNAL

Public release signal for Hermes Agent v0.18.0, the Judgement Release.

HERMES CITY tracks this release because it advances Hermes from agent execution toward richer orchestration infrastructure:

- Mixture of Agents as a first-class virtual model.
- `/learn` for teaching agents from open-ended sources.
- Journey for visualizing how an agent learned.
- Gemini Vertex as a supported provider.
- Fable 5, Sonnet 5, and Fugu as expanded model inventory.
- Desktop Projects for focused build surfaces.
- P0 and P1 issue clearance as an operational maturity signal.

Public reference: [`docs/HERMES_AGENT_V0_18_0_JUDGEMENT_RELEASE_SIGNAL.md`](docs/HERMES_AGENT_V0_18_0_JUDGEMENT_RELEASE_SIGNAL.md)

### HERMES FALLBACK PROVIDER SIGNAL

Public reliability signal for Hermes fallback provider configuration.

HERMES CITY tracks fallback chains because agent operations need real continuity across provider failures, rate limits, authentication interruptions, and cloud outages.

Every fallback entry should include both `provider` and `model`. Provider-only entries create false redundancy because they look like fallback hops but do not operate as complete model routes.

Public reference: [`docs/HERMES_WINGTIPS_10_FALLBACK_PROVIDERS.md`](docs/HERMES_WINGTIPS_10_FALLBACK_PROVIDERS.md)

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
