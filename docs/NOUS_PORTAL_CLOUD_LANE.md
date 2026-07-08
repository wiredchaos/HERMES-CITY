# Nous Portal Cloud Lane

Public-safe architecture note for connecting HERMES CITY to Nous Portal and Hermes Cloud.

Source: https://portal.nousresearch.com/cloud

---

## Purpose

Nous Portal is tracked as an optional cloud execution and model access lane for HERMES CITY.

It is not the city OS.
It is not the district registry.
It is not a wallet authority.
It is not a place to store secrets in repo.

Its role is to give HERMES CITY a public-safe path for cloud-hosted model access, Hermes sessions, tool-enabled workflows, and operator-controlled experimentation.

---

## Placement in the Grid

```text
Operator intent
  -> HERMES Dispatch
  -> Model Council routing
  -> Policy Gate
  -> Nous Portal / Hermes Cloud lane if approved
  -> model, browser, voice, image, search, or workflow tool
  -> validation
  -> receipt log
```

Nous Portal sits beneath HERMES Dispatch as infrastructure.

HERMES decides when a cloud lane is appropriate.
Nous Portal provides the execution surface.
Agentropolis remains the private city OS.

---

## Canonical Role

**Name:** Nous Portal Cloud Lane  
**Layer:** Infrastructure  
**Scope:** Public-safe cloud model and Hermes session access  
**Owner:** HERMES Dispatch  
**Security posture:** No credentials, keys, wallets, client data, or private prompts committed to repo

---

## Supported Use Cases

- Cloud model access for district agents
- Hermes Cloud sessions for long-running public-safe workflows
- Model Council fallback routing when local lanes are unavailable
- Browser/search/image/voice capability routing when enabled by operator policy
- Recruitment swarm support for public GitHub, X, tool, and creator discovery
- Public demos that need a cloud AI backend without exposing Agentropolis internals

---

## District Mapping

| District | Nous Portal Use | Guardrail |
|---|---|---|
| Broadcast | public summaries, show notes, clips, reply drafts | no private strategy leaks |
| Creator | prompt packs, content drafts, asset planning | no proprietary client data |
| MCP | tool discovery and compatibility notes | verify tool permissions before use |
| Commerce | product copy, vendor intake, public funnel drafts | no payment credentials |
| Vault | credential workflow descriptions only | never store secrets here |
| Governance | policy reviews, audit summaries | keep receipts and sources |
| Operations | workflow planning, task routing | no private runtime configs |
| Entertainment | character, lore, and scene drafting | avoid bleeding Akashic-only canon into business surfaces |

---

## Environment Contract

Expected runtime variables should be documented in deployment environments only, not committed with real values.

```text
NOUS_PORTAL_ENABLED=false
NOUS_API_KEY=managed_outside_repo
HERMES_CLOUD_ENABLED=false
HERMES_SESSION_MODE=operator_approved
HERMES_RECEIPT_LOG=required
```

Rules:

1. Use placeholders only in documentation.
2. Keep API keys in secret managers or Hermes Vault-style credential lanes.
3. Never commit `.env` files with real values.
4. Treat empty secrets as invalid.
5. Require receipt logs for any tool-enabled cloud action.

---

## Activation Prompt

```text
Route this public-safe workflow through the Nous Portal Cloud Lane if local execution is unavailable or cloud model access is required. Keep credentials out of repo, enforce policy gates, validate output, and log a receipt.
```

---

## Implementation Checklist

- [ ] Add deployment-level secrets outside GitHub-tracked files
- [ ] Define which district agents may use the lane
- [ ] Add Model Council routing rule for Nous/Hermes Cloud
- [ ] Add policy gate for browser, search, voice, image, and tool access
- [ ] Add receipt log schema for cloud actions
- [ ] Confirm fallback behavior when Nous Portal is unavailable
- [ ] Add operator-facing setup notes after credentials are configured

---

## Public-Safe Boundary

This repo may document the architecture.

This repo must not include:

- real API keys
- wallet keys
- OAuth tokens
- private Agentropolis prompts
- private client data
- undisclosed routing logic
- Akashic-only canon in business-only lanes

The cloud lane expands reach.
It does not weaken the gates.
