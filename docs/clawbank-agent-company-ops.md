# ClawBank Agent Company Operations Note

## Status

ClawBank is relevant to HERMES-CITY as an external city-service provider for agent company operations. It should not be embedded as core infrastructure.

Sources reviewed:

- https://clawbank.co/
- Public ClawBank / 0xJustice messaging describing MCP, CLI, web UI, bank accounts, legal entities, Ricardian contracts, and on/off ramps

## HERMES-CITY fit

HERMES-CITY is the agent operations layer. ClawBank can become a financial/legal services district inside that city model.

```txt
HERMES-CITY
  -> Agent Workflows
  -> Delegation
  -> Services
      -> ClawBank District
          -> legal entities
          -> bank accounts
          -> Ricardian contracts
          -> on/off ramps
          -> audit receipts
```

## Integration model

ClawBank should be accessed through AGENTROPOLIS-AGENT-MCP or an equivalent policy-gated adapter.

```txt
Hermes agent
  -> task request
  -> MCP router
  -> policy check
  -> approval gate
  -> ClawBank provider
  -> receipt back to Hermes log
```

## What ClawBank appears to be building

Based on public messaging, ClawBank is aiming at:

- Crypto-native company operations
- Zero Human Company workflows
- MCP access for agents
- CLI access for builders
- Web UI access for humans
- Bank account and legal entity workflows
- Ricardian contracts
- Crypto on/off ramps

## HERMES guardrails

1. Hermes agents cannot self-create companies without human approval.
2. Hermes agents cannot self-move funds without policy approval.
3. Hermes agents cannot claim legal autonomy for a Zero Human Company.
4. Hermes must store every request and receipt in the task history.
5. Human-readable review screens must exist before submit actions.

## City district framing

Recommended naming inside HERMES-CITY:

```txt
Financial District: ClawBank Provider Lane
```

This keeps the provider modular and makes room for future banks, rails, payment providers, and entity systems.

## Decision

Add ClawBank to the HERMES-CITY provider watchlist as a high-signal agent company operations candidate. Build only as a modular district behind governance.
