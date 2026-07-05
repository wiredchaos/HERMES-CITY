# LongCat 2.0 Orchestration Fit

## Status

LongCat 2.0 is approved as an optional model backend for Hermes City orchestration.

It is not a separate district. It is a model engine that Hermes can route work toward when the task needs long context, coding execution, tool use, or repository-level edits.

## Source

Upstream repository: https://github.com/meituan-longcat/LongCat-2.0

Key upstream notes to keep source-gated:

- MIT licensed repository.
- Large scale MoE model.
- 1.6T total parameters with about 48B active per token.
- 1M context training emphasis.
- Coding, repository-level edits, automated task execution, and agent workflows are primary fit areas.
- Upstream mentions integration with Claude Code, OpenClaw, and Hermes.
- GPU and NPU deployment notes are upstream, including SGLang guidance.

## Hermes Placement

Hermes City should treat LongCat 2.0 as a routeable expert backend:

```text
HERMES-CITY
  orchestration/
    model-router
      longcat-2.0:
        role: coding-agent expert
        lane: repo-edit + tool-use + long-context
        fallback: required
```

## Routing Doctrine

Route to LongCat 2.0 for:

1. Codebase scans.
2. Multi-file implementation planning.
3. Agentic coding tasks.
4. MCP tool execution planning.
5. Long context repository memory.
6. Self-check loops for engineering work.

Do not route casual conversation, lore writing, broadcast scripts, or lightweight creative requests to LongCat by default.

## MOPD Pattern Translation

The LongCat diagram gives Agentropolis a useful routing pattern:

- Agent experts map to tool use, API parsing, and self-checking.
- Reasoning experts map to multi-hop reasoning, STEM reasoning, and adaptive compute.
- Interaction experts map to instruction following, alignment, and answer quality.

Hermes City can mirror this as orchestration:

```text
request
  -> classify intent
  -> pick expert lane
  -> run model backend
  -> validate result
  -> return or hand off
```

## Guardrail

Treat upstream benchmark claims as upstream-reported until independently verified. Agentropolis should document capability fit, not overclaim performance.

## Doctrine Lock

Hermes routes the work. LongCat can power a lane. LongCat does not replace Hermes.
