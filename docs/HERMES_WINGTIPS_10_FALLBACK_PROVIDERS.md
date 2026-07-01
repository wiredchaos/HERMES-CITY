# Hermes Wingtips #10: Fallback Providers

Public HERMES CITY signal note for Hermes fallback provider configuration.

## Core Rule

Every entry in `fallback_providers` should include both:

- `provider`
- `model`

If an entry has a provider but no model, it may appear to be part of the chain, but it does not operate as a complete fallback hop.

## Strong Pattern

```yaml
fallback_providers:
  - provider: xai-oauth
    model: grok-4.3
  - provider: anthropic
    model: claude-sonnet-4-6
  - provider: custom
    model: qwen3.5-9b
    base_url: http://localhost:8000/v1
```

## Public Infrastructure Reading

A fallback chain is not just a convenience feature. It is reliability architecture for agent operations.

A good chain should support:

- primary cloud model failure
- provider rate limits
- authentication interruption
- degraded external network conditions
- local continuity during cloud outage

The final fallback should be a local model when possible. That local floor can point to `llama.cpp`, `vLLM`, or another OpenAI-compatible local endpoint.

## HERMES CITY Translation

```text
Primary provider fails
  -> fallback provider with model declared
  -> next provider with model declared
  -> local custom endpoint
  -> turn completes instead of collapsing
```

## Agent-Native Commerce Meaning

Agent-native commerce needs fallback chains because agent operations cannot depend on a single model vendor, single endpoint, or single cloud path.

A real chain requires complete entries. Provider-only records create false redundancy.

## Boundary Note

HERMES CITY tracks the public pattern only.

Do not commit private API keys, local endpoint secrets, production credentials, paid provider tokens, client configuration, or private Agentropolis routing policy to this repository.
