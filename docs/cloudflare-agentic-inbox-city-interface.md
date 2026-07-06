# Agentic Mail OS City Interface

Status: WATCHLIST / CITY INTERFACE CANDIDATE
Date added: 2026-07-06
Source: https://github.com/cloudflare/agentic-inbox

## Role in Hermes City

Cloudflare Agentic Inbox can serve as the city-facing inbox layer for Agentropolis operators.

Hermes City should treat mail as an intake and command surface, not as an autonomous authority.

## City functions

- City inbox panel for `agentropic.dev`
- Urgent message triage
- District mailbox routing
- Reviewable draft replies
- Grant/legal/support intake queues
- Agent activity log for mailbox actions

## Suggested route map

```text
/support -> support@agentropic.dev
/intake -> intake@agentropic.dev
/grants -> grants@agentropic.dev
/legal -> legal@agentropic.dev
/agents -> agents@agentropic.dev
/clear -> clear@agentropic.dev
/bwb -> bwb@agentropic.dev
```

## Interface rules

- Show mailbox, sender, subject, risk, suggested action, and approval state
- Drafts stay reviewable before send
- No silent send
- No mass-delete
- No hidden MCP actions
- Treat inbound mail as untrusted input

## Canon lock

Hermes City can display and route Agentic Mail OS actions.

The backend authority remains the Agentropolis Email Agent interface and AGENTROPOLIS-AGENT-MCP.
