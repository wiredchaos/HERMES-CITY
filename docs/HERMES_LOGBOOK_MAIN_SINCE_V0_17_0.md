# Hermes Logbook: Main Since v0.17.0

Public signal note for HERMES CITY tracking what NousResearch has shipped to `main` after Hermes Agent v0.17.0.

This is not an implementation mirror. It is a public infrastructure brief showing why Hermes remains strategically relevant to Agentropolis as the mini-city / dispatch shell.

## Signal Summary

NousResearch is shipping the primitives that matter for agent-city infrastructure:

- parallel delegation
- durable conversation identity
- visible model council outputs
- context observability
- persistent operator terminals

In HERMES CITY terms, these are not cosmetic agent features. They are coordination infrastructure.

## PR Signal Map

| Area | Upstream PRs | Public Meaning | HERMES CITY Reading |
| --- | --- | --- | --- |
| Background fan-out | `#49734` | `delegate_task` can run subagents in parallel while the operator continues working. | District work can fan out, return consolidated, and avoid blocking the command surface. |
| Durable sessions through compaction | `#52658`, `#49739` | Compaction preserves one durable session id and soft-archives prior turns instead of deleting them. | Civic memory should compress without identity loss. Archived context remains searchable and recoverable. |
| Visible Mixture-of-Agents thinking | `#53793`, `#53855` | Each reference model renders as a labelled block before the aggregator answer. | Model council visibility moves from black-box blend to auditable advisory lanes. |
| Desktop context breakdown | `#54907` | Context usage can be inspected across system prompt, tools, skills, memory, and working conversation. | Operators can see context entropy before it silently degrades decisions. |
| Persistent desktop terminals | `#54585` | Terminal tabs restore with scrollback after relaunch. | Operations continuity survives restarts and preserves execution surfaces. |

## Agent-City Translation

```text
Operator intent
  -> HERMES Dispatch
  -> Background fan-out
  -> Specialist subagents
  -> Model council review
  -> Context visibility
  -> Consolidated answer
  -> Durable session archive
  -> Persistent terminal surface
```

## Why This Matters

Most agent systems still behave like disposable chat windows. HERMES is moving toward an operating layer where work can continue, context can be inspected, councils can be observed, and terminals can survive relaunch.

That matters because agent-native commerce cannot run on vibes. It needs durable sessions, bounded delegation, visible reasoning lanes, context accounting, and operational continuity.

## Boundary Note

HERMES CITY only tracks public signals and public architecture implications.

Private Agentropolis implementation details, internal prompts, wallet infrastructure, client workflows, production secrets, and undisclosed orchestration logic remain outside this repository.
