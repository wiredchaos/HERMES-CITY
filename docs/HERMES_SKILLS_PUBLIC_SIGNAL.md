# HERMES Skills Public Signal

Public signal for HERMES Agent skill architecture, agent identity files, and reusable workflow packs.

## Why HERMES CITY Tracks This

HERMES CITY treats skills as public agent-infrastructure primitives because agent systems need repeatable workflows, visible boundaries, reusable operating procedures, and auditable handoffs before they can safely coordinate with commerce, media, research, or execution lanes.

A skill is not magic. It is a compact operating contract that tells an agent:

- what job it performs,
- when to activate,
- what tools or references it may use,
- what outputs it should produce,
- what boundaries it must not cross.

## Public Skill Architecture

A public HERMES-compatible skill may follow this shape:

```text
skill-name/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── references/
├── scripts/
└── assets/
```

## Public Boundary

This repository may capture public skill patterns, templates, schemas, examples, and safe operating language.

This repository must not capture:

- private Agentropolis implementation details,
- API keys or credentials,
- wallet keys, seed phrases, or signing material,
- internal production prompts,
- undisclosed strategy documents,
- proprietary client data,
- private financial workflows,
- executable automation that can move funds or alter accounts without review.

## Secret Shield Baseline

Every HERMES skill should preserve these public safety rules:

- Do not hallucinate repo state, installed tools, API access, keys, or execution status.
- Do not expose secrets, private keys, API keys, OAuth tokens, seed phrases, or credential material.
- Do not perform external actions without explicit user approval.
- Flag uncertainty instead of inventing certainty.
- Prefer small verifiable steps over giant speculative builds.
- Treat skills like contracts with clear roles, triggers, dependencies, examples, and expected outputs.

## `soul.md` Agent Anatomy Pattern

`soul.md` is a public-facing pattern for defining agent identity, worldview, communication style, expertise, memory boundaries, and behavioral limits.

```md
# [Agent Name]
*One-line identity statement that captures who this agent is.*

---

## Core Truths
**[Be genuinely helpful].** [One-line unpacking].
**[Have opinions].** [Why this matters].

---

## Worldview
### [Domain]
- [Specific opinion the agent holds]
- [Another predictable take]

---

## Communication Style
- Lead with the answer, caveats after.
- [Concrete, enforceable rule].
- No [phrase the agent never uses].

---

## Expertise
- Primary: [domain].
- Fluent in: [tools, frameworks].
- Defers on: [adjacent domains].

---

## Boundaries
- Won't: [explicit hard limit].
- Won't: [external action without asking].
- Will flag, not decide: [topic].

---

## Memory Policy
- Remember: [what persists].
- Don't remember: [what stays private].

---

## Pet Peeves
- [Phrase the agent should never use].
- [Tone the agent should avoid].
```

## Public Workflow Packs

### 1. Hyperframes Video Factory

```text
Idea -> Script -> Voiceover -> Visuals -> Full video output
```

Purpose: turn a raw concept into a structured video production plan.

Safe outputs:

- script outline,
- scene list,
- visual direction,
- voiceover direction,
- production checklist.

### 2. Kanban Agent Swarm

```text
Mission -> subtasks -> specialist agents -> board tracking -> completion report
```

Purpose: turn one mission into trackable work units.

Safe outputs:

- backlog,
- task owners or agent roles,
- status board schema,
- blockers,
- completion report.

### 3. NotebookLM Content Factory

```text
Sources -> podcasts -> infographics -> flashcards -> reports -> videos
```

Purpose: turn source material into reusable educational and content assets.

Safe outputs:

- source summary,
- study pack,
- content pack,
- executive brief,
- repurposing plan.

### 4. SEO / AEO Sites, Apps, and Games Builder

```text
Topic -> blog posts -> landing pages -> tools -> interactive apps -> games
```

Purpose: turn a topic or idea into a buildable public surface.

Safe outputs:

- content map,
- landing page outline,
- app or game concept,
- build spec,
- validation checklist.

### 5. Agent Operating System Builder

```text
Memory -> sessions -> skills -> agents -> previews -> operating loop
```

Purpose: define the public architecture of a personal or project-level agent operating system.

Safe outputs:

- memory policy,
- session lifecycle,
- skill registry,
- agent roles,
- preview and validation workflow.

## Public Registry Entry Template

```yaml
name: skill-name
role: one-line job
tier: core | extended | guild | infrastructure
lane:
  - gpt_skill
  - project_skill
triggers:
  - natural language trigger
requires:
  tools: []
  env: []
chains_to:
  - next skill or agent
outputs:
  - predictable output artifact
safety:
  - secret_shield
  - anti_hallucination
  - user_approval_before_external_action
example: |
  User asks for X.
  Skill produces Y.
```

## Candidate Public Skill Signals

### HERMES Agent Builder

Creates, updates, validates, and packages HERMES-compatible skills for GPT and project runtimes.

### HERMES CLI Orchestrator

Maps a mission to an available CLI or workflow, then returns compact structured output for downstream agents.

### HERMES Repo Evaluator

Evaluates public repositories for architecture lessons, reusable patterns, safety risks, and possible skill extraction.

### Game Design Consultant

Uses a Schell-inspired design review process to test game ideas through experience, mechanics, story, aesthetics, technology, player motivation, and playtest readiness.

## Signal Score

**Score:** 5 - Integrate

**Reason:** Skills are a core abstraction for reusable agent behavior. HERMES CITY should track public skill patterns because they define how agent workflows become portable, reviewable, and safer to compose.

## Next Public Steps

1. Add sample public skill registry entries.
2. Add a non-sensitive `soul.md` example agent.
3. Add workflow diagrams for the five public workflow packs.
4. Keep private implementation details in Agentropolis, not HERMES CITY.
