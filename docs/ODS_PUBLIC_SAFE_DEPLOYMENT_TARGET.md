# ODS Public-Safe Deployment Target

**Status:** Public-safe infrastructure reference  
**External reference:** https://github.com/Osmantic/ODS  
**Agentropolis role:** Optional local AI server deployment target

ODS, the Osmantic Deployment System, is tracked in HERMES CITY as a public-safe deployment target for local AI infrastructure.

HERMES CITY can explain where ODS fits, but it does not expose private runtime details, credentials, wallet controls, client data, or proprietary orchestration.

## Public Position

ODS helps an operator turn a Windows, macOS, or Linux machine into a private AI server.

Agentropolis can reference ODS as a local-first stack for:

- local inference
- Open WebUI chat
- dashboard and service health
- voice support
- agents and workflow automation
- RAG and search
- ComfyUI image generation
- privacy and operations tooling
- optional cloud or hybrid API fallback

## What HERMES CITY May Say

```text
ODS is an optional local AI server lane for Agentropolis operators.
It is infrastructure, not a district.
It can help bootstrap local models, RAG, workflows, agents, and creator tools before dedicated hardware is required.
```

## What HERMES CITY Must Not Say

Do not claim:

- ODS is an official Agentropolis dependency
- ODS replaces HERMES Dispatch
- ODS has wallet authority
- ODS can operate without policy gates
- ODS is production-safe without validation receipts
- ODS removes the need for human review

## Civic Routing Model

```text
Operator intent
  -> HERMES Dispatch
  -> MCP registry
  -> policy gate
  -> ODS local AI server lane if approved
  -> local model, workflow, RAG, or media tool
  -> validation
  -> receipt
```

## Public-Safe Explainer

ODS belongs in the same category as Docker, Ollama, Open WebUI, n8n, ComfyUI, and homelab infrastructure.

It is a stack host.

Agentropolis remains the city OS. HERMES remains the dispatch layer. MCP remains the guarded tool membrane.

## Recommended User Guidance

When someone asks whether they need to buy server hardware immediately, HERMES CITY can answer:

```text
No. Start workstation-first.
Use an optional local stack like ODS to test private AI workflows on existing hardware.
Move to dedicated hardware only after the workflows, data boundaries, and service demands are proven.
```

## Validation Checklist

Before ODS is recommended for serious use, require:

- pinned release or audited commit
- install receipt
- service health receipt
- port map review
- secret handling review
- model selection review
- rollback path
- human approval for any external action

## Anti-Moloch Rule

Self-hosted does not mean self-governed.

The public doctrine is clear: ODS can reduce centralized dependency, but Agentropolis still requires bounded authority, policy gates, and receipts.
