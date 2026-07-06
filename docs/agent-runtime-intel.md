# Hermes Runtime Integration Intel

Source signal: Hermes Browser 0.1.9, OpenClaude v0.22.0, CubeSandbox, Happier, local GGUF model lanes, and open model discovery screenshots.

## Core lock

HERMES-CITY owns the browser, context, diagnostics, and runtime event lane. It should bridge context safely into Agentropolis agents without taking over the user's browser, Git workflow, or machine.

Doctrine: Hermes sees what it is allowed to see, signs what it saw, redacts what should not leave, and hands a clean receipt to the agent layer.

## Placement map

| Component | Hermes-City role | Priority |
| --- | --- | --- |
| Hermes Browser 0.1.9 | Native browser context protocol, diagnostics copying, compatibility matrix, runtime event trail, companion plugin bridge | Tier 1 |
| OpenClaude v0.22.0 | Coding agent that can consume Hermes diagnostics and produce markdown task reports | Tier 1 |
| CubeSandbox | Secure execution target for browser-driven agent tasks | Tier 1 |
| Happier | Cross-device client for continuing agent sessions from mobile, desktop, and browser | Tier 1 |
| Local GGUF models | Optional local reasoning lane for privacy-sensitive context summaries | Tier 2 |
| Hugging Bay style discovery | Optional open model discovery source, never a default trust source | Tier 3 |

## Hermes protocol responsibilities

1. Context receipts
   - Record page URL, active tab scope, timestamp, captured fields, and digest.
   - Prefer signed receipts over raw scraping dumps.

2. Diagnostics copy
   - Copy only what the user authorizes.
   - Detect sensitive patterns.
   - Apply redactions before handoff.

3. Runtime events
   - Tool call started.
   - Context captured.
   - Diagnostics copied.
   - Redactions applied.
   - Agent handoff complete.

4. Companion plugin boundary
   - Bridge only.
   - No broad control.
   - No silent takeover of user sessions.

5. Compatibility matrix
   - Chrome, Edge, Firefox, Brave as full support targets.
   - Safari as limited unless feature parity is verified.

## Integration architecture

```text
Hermes Browser
  -> context receipt
  -> redaction pass
  -> diagnostics report
  -> AGENTROPOLIS-AGENT-MCP
    -> CubeSandbox
    -> coding agent
    -> task report
```

## Agentopolis fit

Hermes-City becomes the browser intelligence district for Agentropolis:

- captures context cleanly
- redacts sensitive data
- produces receipts agents can trust
- hands diagnostics to coding agents
- supports browser automation without pretending the agent owns the browser

## Next build tasks

- Add `ContextReceipt` schema.
- Add `CopyDiagnosticsReport` schema.
- Add `RuntimeEvent` schema.
- Add companion plugin boundary rules.
- Add browser compatibility matrix document.
- Add handoff contract for AGENTROPOLIS-AGENT-MCP.
