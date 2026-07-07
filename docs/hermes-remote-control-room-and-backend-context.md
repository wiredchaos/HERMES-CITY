# Hermes Remote Control Room + Backend Context Engineering

## Doctrine Lock

Topology over dashboards. Contracts over screenshots. Structured state over agent guesswork. Local reasoning before frontier escalation. Run the agent where the work lives. Use Desktop as the command bridge.

## Remote Control Room

Hermes Agent Desktop should act as the operator interface for a persistent remote Hermes Agent.

```text
User Laptop
  -> Hermes Desktop
  -> Tailscale Private Network
  -> Remote Gateway
  -> Hermes Agent VPS
  -> Persistent Sessions / Memory / Skills / MCP Servers
```

Rules:

- Agent does not live on the laptop by default.
- Laptop is a controller, not the source of truth.
- Sessions persist after the laptop closes.
- Memory, skills, files, MCP servers, and long-running jobs stay on the remote agent host.
- Remote gateway must not be exposed to the open internet.
- Tailscale or equivalent private mesh networking is required.
- OAuth authentication through Nous Portal is required for remote access when available.
- Same-Wi-Fi mode may support local username/password access for home-lab operation.

## Desktop Control Room Capabilities

- Persistent sessions
- Isolated session contexts for cost control
- Concurrent sessions
- Profiles for environment/personality/tool presets
- Sub-agents for delegated work
- File browser and live preview
- Built-in terminal
- Voice dictation and conversations
- Model switching from status bar
- MCP server management
- Remote gateway management
- VPS health status
- Token/cost visibility
- Session memory controls
- Skill activation controls

Useful commands:

```bash
hermes prompt-size
hermes sessions optimize
hermes desktop --skip-build
```

## Backend Context Engineering

Never make agents browse dashboards when topology can be provided.

Every client backend needs an Agent Context Snapshot:

```json
{
  "system_name": "",
  "system_type": "",
  "environment": "",
  "auth": {},
  "database": {},
  "storage": {},
  "queues": {},
  "workers": {},
  "edge_functions": {},
  "deployment": {},
  "observability": {},
  "permissions": {},
  "model_gateway": {},
  "integrations": {},
  "micro_vms": {},
  "known_constraints": {},
  "common_errors": {},
  "recommended_next_actions": {}
}
```

All CLI and backend operations return structured JSON, meaningful exit codes, exact failure reason, likely cause, and safe next action.

## Cost-Cut Pattern

| Problem | Fix |
|---|---|
| Agent queries too many APIs | One topology snapshot |
| APIs over-return data | Narrow agent-specific schema |
| Errors are vague | Structured JSON and exit codes |
| Agent guesses | Backend returns diagnosis hints |
| Same client context repeats | Client SLM stores it |
| Skills overload context | Activate skills only by task |

## Escalation Ladder

Tier 0: static topology snapshot.
Tier 1: client SLM.
Tier 2: specialized domain agent.
Tier 3: frontier model only for novel architecture, complex reasoning, uncertainty, or high-risk decisions.

## Security

Never expose Hermes gateway to the open internet. Require private network access, OAuth or strong credentials, scoped session permissions, audit logs, approval gates for destructive actions, emergency shutdown, session revoke, and MCP server allowlists.
