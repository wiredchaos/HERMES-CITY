# HERMES Profile Topology

## Principle

A Hermes profile is not a theme, preference, or platform setting.

A profile is a separate agent.

Each profile has its own:

- `SOUL.md`
- memory
- sessions
- skills
- bot token
- gateway configuration

That means a profile created from scratch does not automatically know what another profile knows.

## Profile vs Gateway

Use one profile with several gateways when the goal is one agent appearing across multiple surfaces.

Example:

```text
one Hermes profile
├── Telegram gateway
├── Discord gateway
└── WhatsApp gateway
```

This creates one continuous agent identity across platforms because all gateways share the same soul, memory, and operating context.

Use separate profiles only when the goal is separate agents.

Example:

```text
coder profile     != personal profile
public profile    != private operator profile
research profile  != commerce execution profile
```

Separate profiles should be treated as separate minds unless intentionally cloned.

## Clone Rule

A new Hermes profile starts blank unless it is cloned.

To create a fresh profile from an existing one:

```bash
hermes profile create personal --clone-all --clone-from coder
```

Operational meaning:

```text
no clone  = blank agent
clone     = inherited soul, memory, skills, and working context
```

## HERMES CITY Use

HERMES CITY uses this model to explain public agent coordination without exposing private Agentropolis internals.

Public framing:

- A profile is an agent identity boundary.
- A gateway is a communication surface.
- One profile can operate across many gateways.
- Many profiles create many agents.
- Cloning is the intentional inheritance path.

## Public / Private Boundary

This document is safe for public use.

Do not add private bot tokens, wallet logic, internal production prompts, private Agentropolis orchestration details, client data, or undisclosed strategy to this file.
