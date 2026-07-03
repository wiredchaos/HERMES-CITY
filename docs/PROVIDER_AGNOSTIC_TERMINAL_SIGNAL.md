# Provider-Agnostic Terminal Signal

HERMES CITY tracks provider-agnostic terminal execution as a public infrastructure signal for safe agent operations.

The public Agentropolis stack should not depend on Claude, Claude Code, Spawn, or any single provider-specific shell.

## Signal

Terminal coding agents are useful when they operate as controlled execution lanes instead of sovereign decision makers.

```text
Operator intent
  -> HERMES Dispatch
  -> Model Council / Model Exchange
  -> Policy Gate
  -> MCP Registry
  -> Terminal Execution Lane
  -> Validation
  -> Receipt Log
```

## Acceptable Provider Lanes

A terminal shell should be able to route through replaceable model lanes:

- OpenAI-compatible endpoints
- OpenRouter-compatible endpoints
- Gemini-compatible endpoints
- Groq-compatible endpoints
- DeepSeek-compatible endpoints
- Ollama / local model endpoints
- GitLawb Opengateway-compatible endpoints

The name of the shell must not become the architecture.

## Public Boundary

Public docs may describe routing, policy patterns, and non-sensitive interface rules.

Do not publish secrets, credentials, wallet infrastructure, private production code, client data, or undisclosed strategy.

## Why This Matters

Agent systems need terminal surfaces for coding, testing, scaffolding, local analysis, repo cleanup, and package generation.

They also need guardrails:

- model routing by task and risk
- tool permission checks
- validation before adoption
- receipt logs
- rollback paths
- manual approval for elevated actions

## Integration Score

Signal score: **5 - Integrate**

Reason: Provider-agnostic terminal lanes reduce vendor lock-in and fit the HERMES CITY public architecture without exposing private Agentropolis internals.