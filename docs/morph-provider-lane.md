# Morph Provider Lane for HERMES-CITY

Morph is available as an optional provider lane for Hermes powered AGENTROPOLIS workflows.

## Role

Morph can support Hermes agents through MCP/plugin setup and OpenAI compatible API routing.

Use it for:

- code search
- code patching
- coding agent acceleration
- low cost test calls
- preview testing after apps have deployed URLs

## Environment

Do not commit credentials.

```bash
MORPH_API_KEY=replace_with_local_secret
MORPH_BASE_URL=https://api.morphllm.com/v1
```

## Hermes routing stance

Morph should be one lane in the model mesh, not the full system.

Hermes should continue to support fallback across multiple providers and local models.

## Guardrails

- fallback required
- credentials stay local
- log provider choice
- benchmark before default routing
- no high stakes single provider decisions

## AGENTROPOLIS alignment

Provider lanes are interchangeable infrastructure. The city architecture remains independent.
