# Local Frontier Model Lane

## Status

Accepted as an optional HERMES-CITY public signal lane.

## Trigger

NVIDIA published an NVFP4 quantized GLM-5.2 model variant. The signal is real, but the public framing needs a level check: this is not a normal consumer laptop lane. It is for builders with serious local hardware or access to equivalent cloud GPU capacity.

## Doctrine

The local frontier model lane lets advanced operators run high-capacity open-weight models where privacy, sovereignty, long-context planning, or offline resilience matter.

This is optional power infrastructure, not a user requirement.

```text
HERMES remains the router.
Local frontier models are optional brains.
Cloud equivalents are allowed when they are open-source/open-weight compatible and BYOK.
No forced wallet. No forced provider. No hidden dependency.
```

## Hardware lane

Allowed for users who actually have the hardware.

Examples:

- high-memory workstation GPUs
- multi-GPU local rigs
- unified-memory machines that can realistically load the model
- Blackwell-class/NVFP4-ready systems
- lab or studio boxes dedicated to local inference

Policy: do not market this as casual consumer hardware. Say **hardware-qualified local lane**.

## Cloud equivalent lane

Cloud is allowed when it preserves the same sovereignty pattern.

Requirements:

- BYOK only: user supplies their own provider key
- open-source or open-weight compatible models preferred
- no mandatory hosted black box as the only path
- no credentials stored in public repos
- provider abstraction required
- model can be swapped without rewriting the city

Cloud equivalents may include GPU rental, private inference endpoints, or OpenAI-compatible gateways that can point at open-weight models.

## Candidate model class

- `nvidia/GLM-5.2-NVFP4`
- GLM-5.2 open-weight compatible endpoints
- Nemotron/NVFP4 class review models
- other OSS/Open-weight coding, research, and planning models exposed through an OpenAI-compatible API

## Routing role

Use this lane for:

- long-context planning
- private repo reasoning
- codebase synthesis
- agent council review
- sovereign/offline workflows
- document-heavy analysis

Do not use this lane for:

- default user onboarding
- lightweight chat
- public demo paths
- tasks that can be handled by cheaper fast workers

## Public wording

Use:

> Local frontier model support for hardware-qualified builders, with BYOK cloud equivalents for open-weight inference.

Avoid:

> Runs massive frontier models on any consumer laptop.

## AGENTROPOLIS lock

This belongs in HERMES-CITY as public doctrine, AGENTROPOLIS-AGENT-MCP as routing policy, and agentropolis as the private implementation map. AGENTROPOLIS-CREATOR may reference it only for creator workflows that require private long-context generation.
