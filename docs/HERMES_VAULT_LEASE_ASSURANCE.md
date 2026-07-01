# Hermes Vault Lease Assurance

Public infrastructure brief for HERMES CITY.

## Summary

Hermes Vault v0.17.0 adds Lease Assurance: a local-first credential lifecycle model for time-bound agent access.

The release turns credential access from a static checkbox into an operator-visible system. Leases can now be counted, checked, cleaned up, audited through policy surfaces, and compared against backup state for drift.

## Why HERMES CITY Tracks It

Agent-native commerce requires more than wallets and tools. It requires bounded authority.

A city of agents needs credential rules that answer:

```text
Who can act?
For how long?
Under which policy?
What happens when access expires?
Can operators see drift before it becomes failure?
```

Hermes Vault Lease Assurance is relevant because it frames access as a lifecycle instead of a permanent grant.

## Public Signal

Hermes Vault v0.17.0 reported:

- 57 new tests
- 754 total tests
- 10 operator surfaces wired
- zero new dependencies
- 226 GitHub stars at announcement time
- MIT license
- install path: `pip install hermes-vault`

## Lease Assurance Capabilities

| Capability | Public Meaning |
| --- | --- |
| Active lease counts | Operators can see how many leases are currently live. |
| `--cleanup-leases` | Expired access can be revoked through an explicit maintenance surface. |
| Policy Doctor lease checks | Policy review can detect missing or unsafe lease coverage. |
| Backup diff lease drift | Backups can reveal credential-state drift. |
| Expired leases renew from now | Renewal avoids reviving stale windows. |
| Double revokes fail closed | Revocation logic favors safety over permissive ambiguity. |
| MCP deny JSON | Agent-tool denials remain structured and machine-readable. |

## Agentropolis Alignment

In the public HERMES CITY map, Hermes Vault belongs beside identity, policy gates, MCP routing, audit, and wallet-capable action control.

```text
Agent request
  -> identity check
  -> policy gate
  -> time-bound credential lease
  -> MCP/tool access
  -> telemetry
  -> audit trail
  -> cleanup / revoke / renewal
```

## Public Boundary

This brief is intentionally conceptual. It does not include secrets, production credentials, private wallet logic, internal Agentropolis implementation details, or undisclosed orchestration code.

HERMES CITY may discuss credential-governance patterns.
Agentropolis owns private implementation decisions.
