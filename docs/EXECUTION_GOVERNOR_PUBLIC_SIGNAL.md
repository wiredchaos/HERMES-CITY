# Execution Governor Public Signal

HERMES CITY tracks the Execution Governor as a public architecture signal for agent-native commerce and programmable liquidity.

This is not a trading strategy and not a promise of returns. It is a safety pattern.

## Core Idea

Any execution primitive that can place orders, route capital, or interact with market venues must be placed below an independent supervisory layer.

That supervisory layer is the Execution Governor.

It does not generate strategy. It enforces survival.

## Public Architecture Pattern

```text
Research / Regime Signal
  -> Capital Permission
  -> Execution Governor
  -> Execution Container
  -> Venue Connector
  -> Audit Receipt
```

The execution container may be open-source, custom, simulated, or sandboxed. The important rule is that the container never controls its own safety boundary.

## Minimum Governor Responsibilities

- Enforce capital caps before execution.
- Throttle execution when health degrades.
- Pause execution during venue instability.
- Kill execution when hard safety limits are crossed.
- Require manual reset after a killed state.
- Log every governor decision for later audit.

## Public Boundary

HERMES CITY may describe the governance pattern, terminology, and non-sensitive architecture.

It must not publish private keys, exchange credentials, production strategy parameters, live capital workflows, proprietary execution logic, or undisclosed Agentropolis implementation details.

## Signal Score

**Score:** 5 - Integrate

**Reason:** Execution governance is a prerequisite for safe agent-native commerce. Without a governor, execution becomes autonomous risk. With a governor, execution becomes a controlled primitive.
