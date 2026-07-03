# No-Claude Public Bootstrap Signal

HERMES CITY is the public civic shell for Agentropolis. It should describe governed orchestration without binding the public stack to Claude, Spawn, or any single provider-specific agent wrapper.

## Public signal

Agent-native systems need routing, policy, authorization, receipts, and fallback lanes. A single hardcoded model provider is not a city. It is a vendor dependency.

HERMES CITY frames the safer pattern:

```text
Operator intent
  -> HERMES Dispatch
  -> Model Council signal
  -> Policy Gate
  -> MCP or tool lane
  -> Validation
  -> Audit receipt
```

## Windows development baseline

Use WSL Ubuntu for local development where Bash scripts, package installs, and Linux-like tooling are expected.

PowerShell, run as Administrator:

```powershell
wsl --install
```

Inside Ubuntu:

```bash
mkdir -p ~/wiredchaos
cd ~/wiredchaos

sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git unzip build-essential ca-certificates gnupg nodejs npm python3 python3-pip

git clone https://github.com/wiredchaos/HERMES-CITY.git
cd HERMES-CITY
python3 -m http.server 8081
```

Open:

```text
http://localhost:8081
```

## Public boundary

This repository can discuss:

- provider-agnostic routing concepts
- public model-council signals
- open schemas
- public MCP patterns
- policy gate principles
- audit receipt patterns

This repository should not include:

- private Agentropolis production implementation details
- credentials or secrets
- wallet infrastructure
- undisclosed strategy
- hardcoded private provider routes

## Principle

HERMES does not worship a model. HERMES governs the route.
