# UNBROKER Privacy Ops Signal

UNBROKER is tracked by HERMES CITY as a public privacy-operations signal for autonomous data-broker removal workflows.

The core idea is simple:

```text
find exposure -> file removal -> verify proof -> re-scan -> delete again if relisted
```

## Why It Matters

Personal data is spread across hundreds of broker surfaces. Names, aliases, past addresses, phone numbers, emails, birthdays, and relatives can be indexed under old identities or stale addresses.

Privacy laws such as CCPA, CPRA, GDPR, and similar state frameworks create deletion rights, but the process is fragmented. Each broker can require a different form, email flow, verification link, portal, or manual step.

UNBROKER turns that fragmented process into a local-first agent workflow.

## HERMES CITY Interpretation

UNBROKER is not just a consumer privacy app. It maps to a civic infrastructure primitive:

```text
Operator consent
  -> exposure scan
  -> broker fan-out
  -> jurisdiction-aware deletion request
  -> verification handling
  -> audit ledger
  -> scheduled re-scan
```

## Public Architecture Pattern

UNBROKER demonstrates several HERMES CITY patterns:

- Consent as the gate before any personal-data workflow.
- Parallel broker scanning through bounded subagents.
- Local-first dossier handling with optional encryption at rest.
- Opaque identifiers in logs and filenames.
- Jurisdiction-aware deletion templates.
- Human digest for CAPTCHA, identity proof, or broker-specific manual steps.
- Ledger state for every disclosure and removal attempt.
- Cron re-scans because brokers can relist data later.

## State Machine

```text
NEW
  -> FOUND
  -> SUBMITTED
  -> VERIFICATION_PENDING
  -> AWAITING_PROCESSING
  -> CONFIRMED_REMOVED
  -> RE_SCAN_PENDING
```

Failures should be explicit states, not silent drops:

```text
NEEDS_HUMAN
BROKER_BLOCKED
CAPTCHA_REQUIRED
LEGAL_ID_REQUIRED
EMAIL_VERIFICATION_FAILED
RELISTED
```

## Agentropolis Alignment

In Agentropolis terms, UNBROKER belongs in the privacy and civil-defense lane of the Intelligence Grid.

It should sit behind:

- Policy Gate
- HERMES Dispatch
- MCP Registry
- human consent checks
- audit receipts
- data minimization rules
- manual review gates

## Public / Private Boundary

HERMES CITY may publish public-safe architecture notes, state machines, workflow maps, and policy concepts.

Do not commit real dossiers, private personal data, broker account credentials, email tokens, identity documents, verification links, or production removal logs to this repository.
