# Pocket TTS Local Voice Integration

Status: candidate local/offline speech layer for HERMES-CITY.

Pocket TTS is being tracked as a possible local voice engine for city assistants, guides, NPCs, and narration. The discovery notes describe it as CPU-first, lightweight, stream-capable, and usable through Python API/CLI.

## HERMES-CITY usage

Potential use cases:

- local concierge voice
- city guide narration
- NPC dialogue
- onboarding walkthroughs
- offline demo mode
- draft voiceover for scenes and rooms
- spoken summaries from Hermes agents

## Architecture rule

HERMES-CITY should not call Pocket TTS directly from UI code.

Preferred flow:

```txt
HERMES-CITY UI -> AGENTROPOLIS voice gateway -> Pocket TTS/local provider
```

This keeps the city interface clean and lets the backend swap providers later.

## Persona slots

- `hermes-guide`: city concierge
- `npc`: generic NPC voice
- `bwb-anchor`: news/briefing voice
- `red-fang`: radio crossover voice
- `generic`: fallback narration

## Guardrails

- Treat Pocket TTS as evaluation-stage until benchmarks pass.
- Do not clone a real person's voice without explicit permission.
- Do not send sensitive local text to hosted fallback without opt-in.
- Keep voice provider selection swappable.

## Benchmark needs

Before production use:

- verify install commands
- verify license and commercial usage
- test local CPU performance
- test streaming into the city UI
- test short NPC lines and longer narration
- test Windows/macOS/Linux compatibility

## Current status

Tracked for integration planning. Not production locked.
