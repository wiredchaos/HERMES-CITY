# Creator Reference Lock Public Signal

## Signal

AGENTROPOLIS-CREATOR now has a reference-lock workflow for generating consistent character sheets, prop sheets, environment sheets, and cinematic shot prompts before media or 3D assets are promoted downstream.

This is a public signal only.

It does not expose private Agentropolis implementation details, private prompts, production secrets, credentials, wallet logic, or internal runtime state.

## Why HERMES CITY Tracks This

HERMES CITY tracks public infrastructure patterns that matter for agent-native systems.

Reference locking matters because agent cities need visual, spatial, and behavioral continuity. Without reference locks, generated characters drift, environments mutate, props become inconsistent, and video outputs become impossible to govern.

```text
image references
  -> character sheets
  -> prop sheets
  -> environment sheets
  -> shot prompts
  -> continuity checks
  -> approved candidate package
  -> public demo or private runtime handoff
```

## Public Pattern

The reference-lock pattern separates creative generation from governed adoption.

| Layer | Public Meaning |
| --- | --- |
| Character sheet | Stable identity, costume, face, expression range, movement style |
| Prop sheet | Stable object scale, material, views, and damage states |
| Environment sheet | Stable district layout, lighting, weather, building placement |
| Shot prompt | Stable camera, staging, audio, action beats, continuity rules |
| Metadata sidecar | Provenance, model, prompt version, license, review status |
| Verification gate | Checks drift, staging violations, provenance gaps, and unsafe adoption |

## Construction District Example

The current public example is the Construction District.

It uses a comedic infrastructure-war scene as a continuity test:

- a strict Foreman / Verifier character
- a chaotic Builder / Creator character
- two locked storefront or facility zones on opposite sides of a rainy street
- throwable construction props
- raw camera footage rules
- no subtitles
- no accidental brand bleed
- no middle-street staging violation

The point is not the joke by itself.

The point is proving that a generated scene can preserve identity, environment, weather, staging, props, audio rules, and governance across multiple shots.

## Public / Private Boundary

Safe to publish:

- reference-lock concept
- non-sensitive schemas
- general verification checklist
- public examples
- public character-sheet standards
- public metadata fields

Do not publish:

- private production prompts
- private repo internals
- client data
- private wallet or financial workflow logic
- keys, credentials, tokens, secrets
- internal orchestration details
- undisclosed commercial strategy

## Signal Score

| Score | Label | Meaning | Action |
| --- | --- | --- | --- |
| 4 | Build | Strategic production pattern | Track as public infrastructure signal |

## Governance Takeaway

Generated media becomes infrastructure only when it can be checked.

Reference-lock workflows reduce hallucinated drift by forcing every character, prop, environment, and shot to inherit from a visible source of truth before the city accepts it.
