# Hermes Chief of Staff Operating Model

Status: architecture note
Scope: HERMES CITY and AGENTROPOLIS OS

## Core lock

Hermes is the operator layer for AGENTROPOLIS.

In this repo, Hermes City should be treated as the visible command environment where NEURO supervises agents, reviews workstreams, and approves outcomes.

## City role

Hermes City is not only a dashboard.

Hermes City is the civic command center for:

- active workstreams
- district agents
- GitHub task routing
- memory lookups
- approval queues
- status reports
- remote supervision

## Operating doctrine

1. Hermes coordinates.
2. Specialist agents execute.
3. GitHub records the work.
4. Memory records the decision.
5. NEURO approves high impact actions.

## AGENTROPOLIS mapping

| System concept | Hermes City role |
| --- | --- |
| Hermes | Mayor and chief of staff |
| District agents | Specialists assigned by lane |
| GitHub | Execution spine |
| Memory docs | Institutional brain |
| Dashboard | City command surface |
| Mobile access | Remote supervision layer |

## Districts supported

### Builder District

Code, products, pull requests, tests, docs, and implementation notes.

### Media District

BWB, WIRED CHAOS, 33.3FM, GMN, scripts, posts, carousels, and approval queues.

### Knowledge District

Canon locks, decision logs, repo maps, and anti drift rules.

### Finance District

NEURA, NuraTax, Trust Suite, pricing, and education.

Hard rule: finance related outputs stay draft first and require approval.

### Arena District

BoardForge, DDChess, gameplay systems, and world mechanics.

Hard rule: blockchain is a plug in, not the foundation.

## Closed loop workstream

Every Hermes City workstream should expose:

1. Goal
2. Current owner
3. Repo or source
4. Next action
5. Blocker
6. Approval needed
7. Output link
8. Memory update

## Approval queue

Hermes City should make these actions visible before they happen:

- public publishing
- outbound email
- spending
- repo deletion
- destructive file operations
- legal, tax, or finance changes
- production deploys

## Remote control note

Hermes City should support remote supervision across desktop, backend, and phone.

The goal is not blind autonomy.

The goal is always reachable supervision.

## Anti drift note

Hermes is the operator.

Hermes City is the command center.

AGENTROPOLIS is the city.

NEURO remains the final approval layer.