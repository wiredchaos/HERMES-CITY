# HERMES x GPT Plugins Integration Guide

## Purpose

This document defines how HERMES should integrate GPT Plugins / Connectors without turning the system into an uncontrolled tool soup.

HERMES is the command layer. Plugins are tools. Agents do not get unlimited access.

## Core Principle

Do not enable everything for every agent.

Treat each plugin like infrastructure with permissions, audit logs, and risk levels.

```text
User -> GPT / HERMES Core -> Policy Router -> Agent Role -> Approved Plugin -> Logged Action
```

## Recommended Core Stack

| Layer | Plugin | Role |
| --- | --- | --- |
| Code truth | GitHub | repos, issues, pull requests, releases |
| Runtime edge | Cloudflare | workers, routes, storage, deployment, AI gateway |
| Structured memory | Airtable | agent registry, plugin registry, task records |
| Work management | ClickUp | tasks, milestones, operator visibility |
| Long-term files | Box / Drive | docs, contracts, PDFs, media, evidence |
| Monitoring | Datadog | health checks, traces, error tracking |
| Analytics | BigQuery | usage, revenue, performance metrics |
| Scheduling | Calendly / Calendar | meetings, office hours, onboarding |

## HERMES Plugin Registry

Every plugin must be registered before use.

Required fields:

```json
{
  "plugin_id": "github",
  "display_name": "GitHub",
  "owner_agent": "Developer",
  "approved_roles": ["Architect", "Developer", "PM"],
  "risk_level": "medium",
  "human_approval_required": false,
  "allowed_actions": ["read_repo", "create_issue", "open_pr"],
  "blocked_actions": ["delete_repo", "force_push"],
  "audit_required": true
}
```

## Permission Tiers

### Tier 0: Read Only

Used for research, summaries, status checks, and discovery.

Examples:

- Search GitHub
- Read Airtable records
- Read Datadog status
- Read BigQuery dashboards

### Tier 1: Low-Risk Write

Allowed with automatic logging.

Examples:

- Create GitHub issue
- Add ClickUp task
- Add Airtable registry record
- Create draft documentation

### Tier 2: Operational Write

Requires review or role-specific authorization.

Examples:

- Open pull request
- Deploy preview
- Update production config
- Modify plugin permissions

### Tier 3: Critical Action

Always requires explicit human approval.

Examples:

- Production deploy
- Delete data
- Financial movement
- Domain changes
- Credential rotation

## Agent Roles

| Agent | Plugins | Notes |
| --- | --- | --- |
| HERMES Core | GitHub, Airtable, ClickUp | orchestrates, never blindly executes |
| Architect | GitHub, Airtable, BigQuery | designs systems and specs |
| Developer | GitHub, Cloudflare | builds and deploys behind approval gates |
| DevOps | Cloudflare, Datadog, GitHub | infrastructure and monitoring |
| Librarian | Airtable, Box, Drive | memory hygiene and evidence management |
| PM | ClickUp, GitHub, Calendar | milestones, status, tickets |
| Security | Datadog, GitHub, Cloudflare | risk, incident response, audit |
| Creator | Canva, GitHub, Airtable | media assets, docs, branding |
| Treasury | Finance plugins only | read-first, human approval for actions |

## Optimization Rules for GPT

1. Use one GPT for command and routing, not one giant GPT with every action.
2. Split specialized GPTs by role.
3. Keep plugin access minimal.
4. Make every write action auditable.
5. Store structured state outside chat.
6. Put irreversible actions behind confirmation.
7. Keep plugin outputs short, normalized, and role-aware.
8. Use templates for repeated workflows.
9. Prefer drafts and pull requests over direct mutation.
10. Log failures as training signals.

## App Concept: HERMES Plugin Console

The app should be a dashboard for managing GPT plugins inside Agentropolis.

### Core Screens

1. Plugin Registry
2. Agent Permissions
3. Workflow Builder
4. Audit Log
5. Risk Console
6. Prompt / Tool Templates
7. Deployment Status
8. Human Approval Queue

### Minimal Data Model

```ts
export type RiskLevel = "low" | "medium" | "high" | "critical";

export interface PluginRecord {
  id: string;
  name: string;
  provider: string;
  category: string;
  enabled: boolean;
  riskLevel: RiskLevel;
  allowedAgents: string[];
  allowedActions: string[];
  blockedActions: string[];
  requiresApproval: boolean;
}

export interface AgentRole {
  id: string;
  name: string;
  mission: string;
  plugins: string[];
  maxRisk: RiskLevel;
}

export interface AuditEvent {
  id: string;
  timestamp: string;
  agentId: string;
  pluginId: string;
  action: string;
  riskLevel: RiskLevel;
  status: "approved" | "blocked" | "executed" | "failed";
  summary: string;
}
```

## MVP Build Order

1. Static plugin registry JSON
2. Agent permission matrix
3. Manual approval queue
4. GitHub issue creation workflow
5. Airtable registry sync
6. Cloudflare deployment status
7. Datadog health panel
8. BigQuery usage dashboard

## Anti-Moloch Guardrails

- No auto-enable all plugins
- No hidden writes
- No financial actions without human approval
- No production deployment without logged review
- No agent can grant itself more permissions
- No memory writes without source and timestamp
- No destructive action without explicit confirmation

## First Workflow

```text
User request
-> HERMES classifies intent
-> HERMES selects agent role
-> Policy Router checks allowed plugins
-> Agent drafts action
-> Approval gate if needed
-> Plugin executes
-> Result is logged
-> Summary returned to user
```

## Status

Canonical integration guide for HERMES-CITY and related Agentropolis repositories.
