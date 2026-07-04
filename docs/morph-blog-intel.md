# Morph Blog Intelligence for HERMES-CITY

Source: https://www.morphllm.com/blog

## Hermes relevance

Morph's blog points toward long-running coding agents, context control, cost control, and MCP-based workflows. This maps directly to Hermes profiles, agent sessions, and delegated coding tasks.

## Priority concepts

- WarpGrep for broad semantic codebase exploration
- Fast Apply for partial code edits
- Compact for context compaction in long-running sessions
- Model Router for task-based model choice
- Reflex for trace-level failure classification

## Priority reads

- Claude Code cost: keep your AI bill flat while usage grows
- Claude Code MCP: Fix the 2 Things That Kill Your Flow
- Lessons from 40+ Coding Agent Harnesses: Context Is the Entire Game
- Flash Compact: 33,000 tok/sec Context Compaction
- WarpGrep: Fast, Parallel Code Retrieval with RL
- Fast Apply Makes Faster Agents
- The Long-Running Agent Era: Why Code Search and PR Review Are All That Matter
- The Case for Multi-Agent Systems

## Hermes operating stance

Morph is an optional execution lane.

Hermes should use Morph for coding-agent acceleration while preserving fallback across other providers and local models.

## Secret handling

Never commit real Morph API keys.

Use local environment variables only:

```bash
export MORPH_API_KEY=replace_with_local_secret
```
