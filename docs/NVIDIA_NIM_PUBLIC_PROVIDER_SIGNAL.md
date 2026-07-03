# NVIDIA NIM Public Provider Signal

## Signal score

**4 - Build**

NVIDIA NIM is a relevant provider-agnostic inference signal for HERMES CITY because it exposes multiple model families behind one OpenAI-compatible API surface.

This is a public signal only. It does not expose private Agentropolis routing code, credentials, wallet logic, or internal orchestration details.

## Public thesis

Agent systems should not be locked to a single model vendor.

The safer architecture is:

```text
Operator intent
  -> HERMES Dispatch
  -> Model Council / Model Exchange
  -> provider-aware route
  -> policy gate
  -> tool or MCP lane
  -> validation
  -> receipt
```

NVIDIA NIM fits the public pattern as another provider lane candidate.

## Observed provider pattern

```text
base_url: https://integrate.api.nvidia.com/v1
auth: NVAPI key
interface: OpenAI-compatible
provider role: model inventory and inference lane
```

No secrets belong in this repository.

## Candidate public model lanes

| Model | Public lane | Notes |
| --- | --- | --- |
| `minimaxai/minimax-m3` | Coding assistant lane | Useful for builder workflows and code drafts |
| `qwen/qwen3.5-397b-a17b` | Reasoning lane | Useful for complex reasoning and planning |
| `moonshotai/kimi-k2.6` | Agent workflow lane | Useful for multi-step workflows and long chains |
| `zhipuai/glm-5.1` | Everyday model lane | Useful for general assistant tasks |
| `deepseek/deepseek-v4-flash` | Fast worker lane | Useful for low-risk high-throughput jobs |

## Public safety framing

- Free access is not governance.
- OpenAI compatibility is not automatic trust.
- Rate limits are not business continuity.
- New model lanes should start as advisory or sandbox routes.
- Wallet-capable, legal, tax, client-data, and financial execution tasks require stricter approval lanes.

## HERMES CITY interpretation

NVIDIA NIM is not the brain of the city.

It is a provider signal that strengthens the case for model councils, fallback chains, provider registries, and public-safe routing documentation.
