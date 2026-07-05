# NaraRouter Public Provider Signal

Public HERMES CITY signal note for NaraRouter as an optional OpenAI-compatible fallback provider.

## Placement

NaraRouter is a provider lane candidate for HERMES routing.

It is not a replacement for HERMES, not a new district, and not a permanent production dependency.

```text
HERMES Dispatch
  -> Model Council routing
  -> provider adapter selection
  -> policy gate
  -> validation
  -> receipt log
```

## Operator-Reported Signal

```text
Provider: NaraRouter
Endpoint style: OpenAI-compatible
Base URL: router.bynara.id/v1
Reported daily free tier: up to roughly 7M tokens/day
Reported reset: daily
Reported model pool: 30+ models including Mistral, DeepSeek, GLM, and related backends
```

## Public Verification Boundary

The daily quota claim should be treated as volatile until verified inside the provider dashboard.

HERMES CITY may document the signal, but should not claim a fixed free quota as permanent public infrastructure.

```text
public claim
  -> dashboard check
  -> terms check
  -> model list check
  -> latency / quality eval
  -> fallback-only approval
```

## Suggested Fallback Config Pattern

```yaml
fallback_providers:
  - provider: nararouter
    model: dashboard-selected-model
    base_url: router.bynara.id/v1
    trust_tier: experimental
```

Every fallback entry still needs both provider and model.

Provider credentials belong outside the repo.

## Best Public Use

NaraRouter is best described as a high-volume experimental lane for:

- coding-agent drafts
- low-risk summaries
- public documentation scaffolds
- creator workflow testing
- model-routing experiments
- fallback-chain stress tests

## Hard Boundary

Do not use unverified free provider lanes for:

- private credentials
- client data
- wallet-capable actions
- payment authorization
- production mutation
- regulated advice or execution

## HERMES Read

Free capacity is a routing advantage only when governance stays intact.

The win is not chasing the biggest free quota.

The win is keeping agents operational without becoming dependent on one provider.