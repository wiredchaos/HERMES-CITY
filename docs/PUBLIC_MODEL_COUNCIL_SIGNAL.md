# Public Model Council Signal

HERMES CITY tracks model-provider capability as public infrastructure signal for safe agent-native coordination.

This document is intentionally public-safe. It describes concepts, roles, and routing principles without exposing private Agentropolis implementation details.

## Public Signal

Modern agent systems should not depend on one universal model. They should route tasks across specialized model lanes with clear authority boundaries.

| Public Lane | Example Provider Families | Public Meaning |
| --- | --- | --- |
| Fast Worker | DeepSeek Flash-style models | low-latency routine agent work |
| Planner | Ornith-style planning models | agent coordination and workflow decomposition |
| Research | GLM / Qwen / Kimi-style research models | synthesis, document analysis, long-context reasoning |
| Builder | Kimi Code / Qwen Coder-style models | code, automation, scaffolding, developer workflows |
| Council Review | Nemotron-style frontier reasoning models | hard decisions, high-context synthesis, review gates |
| Lightweight Fallback | Gemma / Llama / OSS models | cost-aware fallback and edge-compatible execution |

## Why HERMES CITY Tracks This

Agent-native commerce requires:

- model selection by task type
- tool authority controls
- credential lease awareness
- audit receipts
- fallback lanes
- public/private boundaries
- no permanent ambient access

## Public Routing Principle

```text
agent intent
  -> classify task
  -> choose model lane
  -> check authority
  -> execute bounded action
  -> log receipt
```

## Boundary

HERMES CITY may publish public routing concepts and ecosystem signals.

Private production routing logic, credentials, wallet flows, internal prompts, customer data, and undisclosed Agentropolis implementation details stay out of this repository.
