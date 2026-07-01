# Deployment Readiness — HERMES CITY

Status: **coordination layer / mini-city readiness guide**

HERMES CITY is the smaller operational version of Agentropolis. It should deploy as the compact city runtime: orchestration, agent routing, memory, district panels, and operator-facing controls.

## Role In The Ecosystem

| Repo | Role |
|---|---|
| `schoolofbase` | Public education and onboarding district |
| `HERMES-CITY` | Mini-city orchestration surface |
| `agentropolis` | Full city-scale intelligence architecture |
| `AGENTROPOLIS-AGENT-MCP` | MCP bridge for external agents, tools, and services |

## Deployment Objective

HERMES CITY should answer one question:

> Can one operator see, route, and govern the core agent system without needing the full Agentropolis city online?

## Required Capabilities Before Public Deployment

- [ ] Clear public README explaining that HERMES CITY is the mini-city runtime, not the full Agentropolis build.
- [ ] Route or interface for operator command center.
- [ ] Agent registry or district registry visible in demo mode.
- [ ] Honest telemetry labels: `SIMULATED`, `LIVE`, or `LOCAL`.
- [ ] No claim that simulated feeds are official Base infrastructure.
- [ ] Deployment instructions for local run and production build.
- [ ] Environment variable list documented.
- [ ] Health check endpoint or status panel if backend services exist.
- [ ] Link back to School of Base as the builder onboarding surface.
- [ ] Link forward to Agentropolis as the full city architecture.

## Runtime Alignment

Recommended split:

- **Rust** for future network core, protocol runtime, high-assurance services.
- **Go** for coding harness, process orchestration, CLI helpers.
- **TypeScript** for UI and app surfaces.
- **Python** only for ML/research utilities or offline analysis.

HERMES CITY should stay lightweight. Do not turn it into the full monorepo.

## Deployment Modes

### Demo Mode

Use for public preview.

- Simulated telemetry is acceptable.
- Labels must be visible.
- Wallet, trading, payment, or agent execution features should be marked as mock/demo unless live.

### Operator Mode

Use for private testing.

- Requires real environment variables.
- Requires authenticated access if live controls exist.
- Requires logs and failure states.

### Live Mode

Use only after:

- secrets are configured,
- real APIs are reachable,
- agent actions have guardrails,
- rollback path is known.

## Launch Checklist

- [ ] Confirm repo build command.
- [ ] Confirm package manager: npm, pnpm, bun, or go/rust toolchain.
- [ ] Confirm environment variables.
- [ ] Confirm hosting target.
- [ ] Confirm demo/live labeling.
- [ ] Confirm links to `schoolofbase` and `agentropolis`.
- [ ] Confirm no secrets committed.
- [ ] Confirm public pages do not expose private dashboards.

## Canonical Positioning

**HERMES CITY is the mini version. Agentropolis is the full city. School of Base trains builders. MCP connects the agents.**
