# Obsidian + gbrain Intelligence Layer

## Purpose

Hermes City uses Obsidian as the human-editable canon vault and gbrain as the machine-readable intelligence graph.

This locks the current direction for the Hermes / llm-wiki / gbrain / Obsidian stack:

```text
Obsidian Vault
  -> llm-wiki indexing
  -> gbrain structured claims
  -> Hermes agents act on attributed knowledge
```

## Layer Roles

| Layer | Role |
| --- | --- |
| Obsidian | Source-of-truth workspace for canon, doctrine, meeting notes, repo decisions, project memory, and human review. |
| llm-wiki | Searchable knowledge base over the vault and related project docs. |
| gbrain | Structured graph for attributed claims, facts, takes, bets, hunches, decisions, and relationships. |
| Hermes | Agent operator that searches, reasons, drafts, routes, and executes from the graph. |

## Take Model

A Take is not just an opinion. It is a broader attributed claim.

Supported claim kinds:

- fact
- take
- doctrine
- decision
- bet
- hunch
- relationship
- evidence
- confidence

Every claim should preserve attribution. The agent must know who or what holds the claim.

Example holders:

- `brain`
- `self`
- `world`
- `people/<slug>`
- `companies/<slug>`
- `projects/<slug>`
- `agents/<slug>`

## Anti-Moloch Rule

Agents must not collapse all claims into one fake truth.

The system should distinguish:

- what Agentropolis believes
- what a person believes
- what a company believes
- what the current public world-state says
- what is only a hunch
- what is a bet awaiting resolution
- what is canon locked
- what needs verification

## Obsidian Canon Vault Responsibilities

Use Obsidian for:

- canon locks
- project doctrine
- people and company profiles
- investor notes
- repo strategy
- decisions
- bets and predictions
- meeting notes
- source links
- why-we-decided-this context

Obsidian is the writable brain. gbrain is the structured intelligence graph. Hermes is the operator.

## Hermes City Behavior

Hermes should use the stack to:

- search the vault before drafting or executing
- preserve attribution on claims
- cite source notes when available
- avoid presenting hunches as facts
- turn meetings, emails, and repo notes into structured graph entries
- draft bespoke intros only when the relationship context and claim attribution are clear

## Operating Principle

Do not build memory as a pile of text.

Build memory as attributed knowledge that can be searched, reviewed, corrected, versioned, and acted on.
