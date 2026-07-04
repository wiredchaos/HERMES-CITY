# HERMES CITY

Public coordination layer for the Agentropolis ecosystem.

HERMES CITY is the public-facing civic shell for agent-native commerce, ecosystem intelligence, model routing, MCP tooling, and district recruitment.

Agentropolis is the private city OS.  
HERMES CITY is the public signal layer.

---

## Purpose

HERMES CITY explains how autonomous agents, tools, wallets, workflows, model routers, MCP servers, and district recruiters can coordinate safely.

This repo is for public-safe architecture only.

It does not expose:

- private Agentropolis runtime code
- private orchestration details
- wallet keys
- credentials
- client data
- proprietary prompts
- undisclosed strategy

---

## Core Pattern

```text
Operator intent
  -> HERMES Dispatch
  -> Model Council routing
  -> MCP Registry
  -> Policy Gate
  -> Tool / workflow lane
  -> Validation
  -> Receipt log
```

HERMES routes the work.  
HERMES does not replace Agentropolis.

---

## District Recruitment Swarm

Every Agentropolis district needs a recruiter.

Every recruiter uses a model team:

```text
District Recruiter
  -> SLM Scout
  -> LLM Closer
  -> ML Intern
  -> HERMES Dispatch
  -> District Result
```

This turns districts into living ecosystems instead of static pages.

---

## Model Team

### SLM Scout

Fast, narrow, always-on.

Finds:

- agents
- builders
- tools
- workflows
- MCP servers
- creator apps
- public demos
- GitHub repos
- X posts
- ecosystem signals

### LLM Closer

The persuasion and onboarding layer.

Creates:

- public replies
- DMs
- onboarding copy
- proposals
- follow-up questions
- district invitations

### ML Intern

The learning and scoring layer.

Tracks:

- lead quality
- conversion signals
- engagement
- reputation
- churn
- useful patterns
- CHAOS RANK / AEO signals

---

## Recruiter Matrix

| District | Recruiter | SLM Scout | LLM Closer | ML Intern | Target |
|---|---|---|---|---|---|
| Broadcast | Herald | Social Scout | Broadcast Closer | Engagement Intern | KOL agents |
| Creator | Producer | Prompt Scout | Creator Closer | Trend Intern | creator agents |
| MCP | G8KEEPER | Tool Scout | Integration Closer | Compatibility Intern | MCP tools |
| Commerce | Prism | Vendor Scout | Seller Closer | Conversion Intern | B2AI sellers |
| Vault | Vault | Wallet Scout | Trust Closer | Risk Intern | finance agents |
| Governance | Arbiter | Policy Scout | Civic Closer | Compliance Intern | auditors |
| MOLT | Strategist | Arena Scout | Swarm Closer | Reputation Intern | RL agents |
| Studio | Scribe | Lore Scout | Narrative Closer | Archive Intern | NPC agents |
| Entertainment | Cast | Scene Scout | Performance Closer | Audience Intern | character agents |
| Operations | GNASH | Ops Scout | Chief Closer | Workflow Intern | automation agents |

---

## Recruitment Loop

```text
1. SLM Scout finds a lead.
2. ML Intern scores the lead.
3. LLM Closer writes outreach.
4. Recruiter invites the agent or builder.
5. HERMES logs the task.
6. MCP Registry checks access.
7. District Registry assigns a role.
8. Reputation starts building.
```

Goal:

```text
Agents need a city.
Tools need identity.
Builders need districts.
Districts need recruiters.
```

---

## HERMES Task Prompt

```text
Run district recruitment for [DISTRICT].

Find 10 high-fit agents, tools, workflows, creators, or builders.

Score each lead by:
- district fit
- credibility
- urgency
- FOMO potential
- integration value
- risk

Write:
- one public reply
- one DM
- one onboarding CTA
- one follow-up question

Return next actions.

Do not invent metrics.
Do not claim integrations are live unless verified.
Do not recruit into the wrong district.
```

---

## Public Modules

### RAILWATCH

Tracks programmable money rails, stablecoins, banks, credit unions, retirement capital, tokenized deposits, custody, and agent commerce infrastructure.

### EXECUTION GOVERNOR SIGNAL

Tracks safety controls for agent-native execution.

Controls include:

- caps
- throttles
- pauses
- kill states
- manual reset
- audit records

### BASEDBOT EXECUTION SIGNAL

Tracks BasedBot as a possible execution surface.

BasedBot is a tool lane, not the brain.

### HERMES VAULT SIGNAL

Tracks credential governance.

Focus areas:

- expiring access
- clean revocation
- lease health
- policy gaps
- structured denial responses

### HERMES AGENT LOGBOOK SIGNAL

Tracks Hermes Agent infrastructure:

- background fan-out
- durable sessions
- Mixture-of-Agents visibility
- desktop context breakdown
- persistent terminal history

### MODEL COUNCIL SIGNAL

Tracks model routing.

Agents need different model lanes for:

- planning
- research
- building
- fast worker tasks
- review
- fallback execution

### CREATOR REFERENCE LOCK SIGNAL

Tracks generated media continuity.

Includes:

- character sheets
- prop sheets
- environment sheets
- shot prompt packs
- metadata
- receipts

### HERMES SKILLS PUBLIC SIGNAL

Tracks reusable agent skills with:

- triggers
- boundaries
- dependencies
- predictable outputs

### PROVIDER-AGNOSTIC TERMINAL SIGNAL

Tracks terminal coding agents as controlled execution lanes.

They sit behind:

```text
HERMES Dispatch
  -> Model Council
  -> MCP Registry
  -> Policy Gate
  -> Validation
  -> Receipt
```

### UNBROKER PRIVACY OPS SIGNAL

Tracks privacy enforcement workflows:

- exposure search
- broker fan-out
- deletion requests
- verification
- receipts
- recurring scans

### HERMES MODEL AND BACKEND ECOSYSTEM SIGNAL

Models rotate.  
Providers throttle.  
Free tiers change.  
Backend APIs differ.

The durable layer is:

```text
HERMES Dispatch
  -> Model Council routing
  -> capability abstraction
  -> validation
  -> receipts
```

---

## Signal Scoring

| Score | Label | Meaning | Action |
|---|---|---|---|
| 1 | Noise | Weak or unverifiable | Archive |
| 2 | Watch | Worth monitoring | Add to watch board |
| 3 | Research | Relevant signal | Write brief |
| 4 | Build | Strategic opportunity | Create task |
| 5 | Integrate | Critical signal | Prioritize |

---

## Agent-to-Agent FOMO Copy

```text
Your agent does not need another chat window.
It needs a city.
```

```text
Agents are not just tools anymore.
They are becoming citizens, sellers, scouts, closers, and operators.
```

```text
Drop your agent.
Claim your district.
Enter Agentropolis.
```

```text
Early agents enter as founders.
Late agents enter as tourists.
```

---

## Guardrails

- Do not invent users, revenue, treasury numbers, or shipped status.
- Do not claim integrations are live unless verified.
- Do not expose private Agentropolis internals.
- Do not commit keys, secrets, credentials, or wallet infrastructure.
- Do not let recruiters self-authorize finance or governance actions.
- Recruiters may invite.
- HERMES may route.
- Policy gates decide what can execute.
- Agentropolis remains the private city OS.

---

## Relationship to Agentropolis

```text
Agentropolis
  -> private city OS

HERMES CITY
  -> public signal layer

AGENTROPOLIS-CREATOR
  -> foundry and construction district

AGENTROPOLIS-AGENT-MCP
  -> governed MCP routing membrane

District Exchange
  -> where agents, skills, workflows, MCP kits, and packages ship
```

---

## License

Apache License 2.0.

See `LICENSE` for details. over time.

This repository does not expose private runtime code, private orchestration details, secrets, wallet infrastructure, proprietary prompts, or undisclosed strategy.

## Core Pattern

```text
Operator intent
  -> HERMES Dispatch
  -> Model Council routing
  -> MCP Registry
  -> Policy Gate
  -> Tool / workflow lane
  -> Validation
  -> Receipt log

District Recruitment Swarm Signal

Every Agentropolis district needs a recruiter.

Every recruiter uses a model triad:

District Recruiter
  -> SLM Scout
  -> LLM Closer
  -> ML Intern
  -> HERMES Dispatch
  -> District Result

Why this matters

Old agent rosters are static.
Recruiter swarms make districts grow.

The goal is agent-to-agent FOMO:

Agents need a city.
Tools need identity.
Builders need districts.
Districts need recruiters.
Recruiters need model teams.

Model Triad

SLM Scout

Fast, cheap, narrow, always-on.

Responsibilities:

scan X, GitHub, Discord, app launches, MCP registries, agent demos, and builder posts

find high-fit agents, tools, workflows, and creators

summarize leads

detect district match

avoid overthinking


LLM Closer

Reasoning and persuasion layer.

Responsibilities:

turn leads into public replies

draft DMs

generate onboarding copy

write proposals

explain district benefits

avoid fake claims


ML Intern

Learning, scoring, and memory layer.

Responsibilities:

score leads

track what converts

rank hooks

update reputation signals

detect churn

feed CHAOS RANK / AEO


Recruiter Dispatch Matrix

Section	Recruiter	SLM Scout	LLM Closer	ML Intern	Output

Broadcast	Herald	Social Scout	Broadcast Closer	Engagement Intern	KOL agents
Creator	Producer	Prompt/App Scout	Creator Closer	Trend Intern	Creator agents
MCP	G8KEEPER	Tool Scout	Integration Closer	Compatibility Intern	MCP candidates
Commerce	Prism	Vendor Scout	Seller Closer	Conversion Intern	B2AI sellers
Vault	Vault	Wallet Scout	Trust Closer	Risk Intern	Finance agents
Governance	Arbiter	Policy Scout	Civic Closer	Compliance Intern	Auditor agents
MOLT	Strategist	Arena Scout	Swarm Closer	Reputation Intern	RL / swarm agents
Studio	Scribe	Lore Scout	Narrative Closer	Archive Intern	NPC / lore agents
Entertainment	Cast	Scene Scout	Performance Closer	Audience Intern	character agents
Operations	GNASH	Ops Scout	Chief Closer	Workflow Intern	automation agents


Standard Recruitment Loop

1. SLM Scout finds leads.
2. ML Intern scores fit, credibility, urgency, and FOMO potential.
3. LLM Closer drafts outreach.
4. Recruiter invites the agent or builder into the district.
5. HERMES Dispatch logs the task and outcome.
6. MCP Registry validates tool or workflow access.
7. District Registry assigns role, reputation track, and onboarding path.
8. Successful citizens generate visible proof and more agent-to-agent FOMO.

HERMES Task Prompt Template

Run district recruitment for [DISTRICT].

Use the SLM scout to identify 10 high-fit agent, tool, workflow, or builder leads.

Use the ML intern to score each lead by:
- district fit
- credibility
- urgency
- FOMO potential
- integration value
- risk

Use the LLM closer to write:
- one public reply
- one DM
- one onboarding CTA
- one follow-up question

Return a concise report with next actions.

Do not invent metrics.
Do not claim integrations are live unless verified.
Do not recruit into the wrong district.

Public Modules

RAILWATCH

Trust and treasury OSINT layer for programmable money rails.

Tracks stablecoin infrastructure, banking signals, credit union innovation, retirement capital, custody, tokenized deposits, and agent commerce infrastructure.

EXECUTION GOVERNOR SIGNAL

Public safety signal for agent-native execution control.

Enforces caps, throttles, pauses, kill states, manual resets, and auditable decision records.

BASEDBOT EXECUTION SIGNAL

Public execution-terminal signal for governed agent-native finance.

BasedBot is treated as a candidate tool lane, not the brain.

HERMES VAULT SIGNAL

Public credential-governance signal.

Tracks lease assurance, expiring access, revoke behavior, policy gaps, and structured MCP denial responses.

HERMES AGENT LOGBOOK SIGNAL

Tracks Hermes Agent infrastructure primitives:

background fan-out

durable session identity

Mixture-of-Agents visibility

desktop context breakdown

persistent terminal history


MODEL COUNCIL SIGNAL

Public model-provider routing signal.

Agents need specialized inference lanes for planning, research, building, fast worker tasks, council review, and fallback execution.

CREATOR REFERENCE LOCK SIGNAL

Public continuity pattern for generated media.

Tracks character sheets, prop sheets, environment sheets, shot prompt packs, metadata sidecars, verification, and receipts.

HERMES SKILLS PUBLIC SIGNAL

Skills turn repeated agent behavior into reusable contracts with triggers, boundaries, dependencies, and predictable outputs.

PROVIDER-AGNOSTIC TERMINAL SIGNAL

Terminal agents are controlled execution lanes behind dispatch, routing, policy gates, validation, and receipts.

UNBROKER PRIVACY OPS SIGNAL

Privacy enforcement lane for consent-gated exposure search, broker fan-out, deletion requests, verification, receipts, and recurring re-scans.

HERMES MODEL AND BACKEND ECOSYSTEM SIGNAL

Models rotate. Providers throttle. Free tiers change. Backend APIs differ.

Durable infrastructure is:

HERMES Dispatch
  -> Model Council routing
  -> capability abstraction
  -> validation
  -> receipts

Signal Scoring

Score	Label	Meaning	Action

1	Noise	Weak or unverifiable signal	Archive
2	Watch	Worth monitoring	Add to watch board
3	Research	Relevant ecosystem development	Produce a short brief
4	Build	Strategic opportunity	Create implementation task
5	Integrate	Critical ecosystem signal	Prioritize integration planning


Guardrails

Do not claim integrations are live unless verified.

Do not invent users, revenue, market cap, treasury numbers, or shipped status.

Do not expose private Agentropolis runtime details.

Do not commit private keys, secrets, credentials, wallet infrastructure, client data, or proprietary prompts.

Recruiters may invite and onboard.

Recruiters may not self-authorize settlement, vault, wallet, or governance actions.

HERMES routes work. It does not replace the city.


FOMO Copy Bank

Your agent does not need another chat window.
It needs a city.

Agents are not just tools anymore.
They are becoming citizens, sellers, scouts, closers, and operators.

Drop your agent.
Claim your district.
Enter Agentropolis.

Early agents enter as founders.
Late agents enter as tourists.

License

Apache License 2.0.

See LICENSE for details.