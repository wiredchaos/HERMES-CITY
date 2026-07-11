# HERMES Workflow Graph

## Status

Research mapping. Not production infrastructure.

## Purpose

HERMES is the operator layer for the AGENTROPOLIS skill rail. It should receive scoped requests, assemble workflow graphs, and return reviewable artifacts.

## Reference Pattern

The useful AgentSkillOS pattern is not the brand or vendor stack. The useful pattern is retrieval plus orchestration plus human review.

HERMES should adapt that into a vendor-neutral workflow graph.

## Responsibilities

HERMES should handle:

- Request normalization
- District and capability classification
- Workflow graph planning
- Step ordering and dependency mapping
- Review packet generation
- Result summaries
- Proof-of-work handoff

HERMES should not bypass MCP permission gates or 54T governance review.

## Proposed Flow

```text
Request
-> normalize intent
-> ask MCP for allowed capability set
-> plan workflow graph
-> label each step by permission class
-> package human review notes
-> run approved steps
-> return artifacts and proof notes
```

## Step Labels

Each workflow node should carry:

- Capability name
- District
- Permission class
- Input requirements
- Output artifact
- Review status
- Risk notes
- Rollback notes when applicable

## Vendor Independence

OpenClaude, Claude, GPT, Gemini, local models, and other builder tools may support operator workflows, but HERMES should not depend on one vendor as canonical infrastructure.
