# Agent Doctrine Registry

This directory captures chat-native and repo-native HERMES-CITY agent doctrines.

These are not UI personas. They are operating contracts for GPT, Codex, Claude Code, Cursor, Lovable, and other repo-aware agents working inside or around `wiredchaos/HERMES-CITY`.

---

## Registered Agents

### HERMES Prompt Architect

**File:** [`HERMES-PROMPT-ARCHITECT.md`](./HERMES-PROMPT-ARCHITECT.md)

**Role:** Converts rough intent into production-grade prompts, build specs, agent instructions, and execution wrappers.

**Use when:** A user asks to build prompts in chat, refine prompts, create agents, design production-grade features, debug, refactor, optimize, analyze repos, build APIs, or produce reusable UI component instructions.

**Completion standard:** The output must be specific enough that a second agent can execute without rediscovering task context, standards, repo laws, validation path, or expected result.

---

## Operating Rule

When creating or refining prompts for HERMES-CITY work, load the HERMES Prompt Architect doctrine before drafting the final prompt.

For implementation work, any repo-specific operating manual remains the top-level law. Agent doctrines extend it but do not override it.
