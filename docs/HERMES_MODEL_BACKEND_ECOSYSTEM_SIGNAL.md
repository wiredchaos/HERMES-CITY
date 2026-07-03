# Hermes Model and Backend Ecosystem Signal

HERMES CITY tracks model rankings and backend provider maps as ecosystem signals, not as permanent truth.

The important pattern is not which model is ranked first this week.

The important pattern is that agent systems need routing infrastructure because:

- models change quickly
- usage rankings move
- free tiers rotate
- search and extraction providers have different strengths
- local-first execution matters for sensitive workflows
- skills outlive individual model trends

## Public Signal

```text
Operator intent
  -> HERMES Dispatch
  -> Model Council
  -> provider selection
  -> backend capability lane
  -> skill execution
  -> validation
  -> receipt
```

## Model Council Interpretation

Model leaderboards are useful as signals, but they should not become blind authority.

A governed model council should evaluate:

- task type
- cost
- latency
- context needs
- coding strength
- reasoning strength
- multimodal capability
- safety profile
- fallback availability
- local or cloud execution requirements

## Backend Capability Map

Backend providers should be abstracted by capability:

```text
SEARCH
  Brave Search
  SearXNG
  DDGS
  Tavily
  Exa
  xAI / Grok when approved

EXTRACT
  Firecrawl
  Tavily
  Exa
  Parallel

LOCAL / SELF-HOSTED
  SearXNG
  local model lanes
  local browser execution
```

## Skill Layer

Skills are the durable unit of repeatable work.

Example:

```bash
hermes update
hermes skills install official/security/unbroker
```

UNBROKER demonstrates the pattern: a specialized privacy workflow can run through whichever approved model, browser, search, email, or human-review lane the policy permits.

## HERMES CITY Position

Models are interchangeable.

Backends are replaceable.

Skills are reusable.

Governance, routing, receipts, and human approval gates are the durable civic infrastructure.

## Public / Private Boundary

Do not publish API keys, provider secrets, private routing policy, account limits, personal data, private broker findings, production logs, or private Agentropolis implementation details in this repository.
