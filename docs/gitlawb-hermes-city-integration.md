# GitLawB Hermes City Integration

## Purpose

GitLawB is an experimental decentralized git and MCP workflow rail for Hermes City.

Hermes City is the smaller operational command layer inside the broader Agentropolis map. It can use GitLawB as a watch/evaluate lane for agent-native source control, repo discovery, pull request workflows, issue workflows, and signed coordination records.

It does not replace GitHub, Hermes governance, Agentropolis registry rules, Verifier, or human approval.

It becomes a candidate rail for:

- decentralized skill publishing
- Hermes profile and gateway experiments
- agent-owned repositories
- DID-based agent identity
- MCP-accessible repo operations
- signed operational records
- signed candidate packets
- decentralized approval records
- Agentlink discovery sources

```text
GitHub = stable repo rail
GitLawB = experimental agent-native decentralized git rail
Hermes = orchestrator and operations router
Agentlink = discovery and install interface
Verifier = governance gate
Human approval = final production authority
```

## Fit Inside Hermes City

Hermes City should use GitLawB only where it improves coordination, provenance, and safe agent collaboration.

GitLawB should never become an unchecked publishing shortcut, secret store, wallet authority, or autonomous merge system.

**Layer:** Infrastructure / Operations Rail  
**City Role:** Hermes operations support  
**Status:** watch / evaluate  
**Risk Level:** medium by default, high when touching production canon, wallets, credentials, public publishing, or official Agentropolis imports

## Hermes Use Cases

| Use Case | Hermes City Function |
| --- | --- |
| Agent-owned repos | Give Hermes-managed agents scoped workspaces |
| MCP repo workflows | Allow agents to inspect repos, draft issues, draft PRs, and create review artifacts |
| DID identity | Test verifiable identities for agents and maintainers |
| Decentralized skill publishing | Surface candidate skills before official registry approval |
| Operational records | Store non-sensitive decision packets, task packets, and approval trails |
| Agentlink source | Let Agentlink search GitLawB as an experimental install/discovery source |
| Verifier handoff | Route GitLawB-originated artifacts through risk and provenance review |

## Relationship To Agentropolis

Hermes City is not the full city.

It is the command mini-city where orchestration, routing, and operations can be tested before promotion into Agentropolis infrastructure.

```text
Hermes City experiment
-> GitLawB candidate record
-> Hermes review
-> Verifier review
-> Agentropolis alignment check
-> human approval
-> production import only if cleared
```

## Relationship To Agentlink

Agentlink should treat GitLawB as a searchable experimental source, not a source of truth.

```text
npx agentlink search hermes
-> official Agentropolis registry
-> Hermes City local registry
-> GitHub registry
-> GitLawB decentralized candidates
-> Verifier status
```

Agentlink may surface GitLawB results only when the result includes:

- source repo
- owner or DID
- manifest
- license field
- risk level
- verifier status
- install command or import path
- last update date

## Codex Ads / OpenGateway Credits Note

GitLawB Ads may be useful as an experimental inference-credit rail for Codex usage, but it must remain optional and isolated.

Rules:

- Do not install ad scripts inside production Hermes City or Agentropolis workspaces.
- Do not run curl-to-shell installers without inspection.
- Do not allow status line tools to read prompts, files, repo contents, wallet data, credentials, or secrets.
- Use a disposable sandbox workspace first.
- Treat earned inference credits as a bonus, not infrastructure revenue.
- Verifier must classify ad integrations as external-experimental.

## Governance Rules

### Allowed During Evaluation

- inspect public GitLawB repos
- index MCP tool metadata
- mirror non-sensitive manifests
- draft issues or PRs
- create candidate packets
- test DID-based agent identity
- store non-production operational records
- store non-production diffs

### Requires Human Approval

- importing a GitLawB-hosted asset into Hermes City production
- publishing a GitLawB-originated skill as official
- granting write access to an autonomous agent
- using decentralized records as canonical governance proof
- attaching wallet execution to repo actions
- public media release based on GitLawB-originated files

### Blocked Until Proven Safe

- autonomous production merges
- unreviewed adapter installation
- unclear-license media imports
- private secret storage
- seed phrase or wallet key storage
- public publishing without Verifier and human approval
- treating DID identity alone as sufficient trust
- connecting ad tooling to wallet or credential-bearing sessions

## Risk Model

### Low Risk

- read-only repo inspection
- metadata indexing
- manifest drafting
- issue drafting
- local-only experiments

### Medium Risk

- agent-authored PRs
- MCP-driven repo changes
- decentralized candidate packet storage
- mirrored adapter manifests
- signed non-production diffs

### High Risk

- production scene mutation
- official skill publishing
- public media publishing
- wallet-connected repo actions
- autonomous merges
- identity or signature claims without independent verification

## First Implementation Path

1. Add GitLawB as an `experimental` source in the Agentlink source map.
2. Create a sample Hermes City GitLawB adapter manifest.
3. Define a `gitlawb-record.md` sidecar for Hermes task packets and candidate packets.
4. Require Verifier to mark every GitLawB-originated artifact as `external-experimental`.
5. Mirror only non-sensitive test artifacts first.
6. Test GitLawB Ads only in a disposable Codex sandbox after reading the install script.
7. Do not import into Hermes City production until provenance, license, security, district-fit, canon, and human approval all clear.

## Example Adapter Manifest

```yaml
adapter_id: gitlawb_hermes_city_source
name: GitLawB Hermes City Source
class: decentralized_git
status: watch_evaluate
risk_level: medium
mcp_available: true
source_url: https://gitlawb.com/
used_by:
  - Hermes
  - Agentlink
  - Verifier
  - CHAOS CODE
  - NEURO
allowed_actions:
  - inspect_repo
  - index_manifest
  - draft_issue
  - draft_pr
  - store_task_packet
  - store_candidate_packet
blocked_actions:
  - autonomous_merge
  - production_import_without_review
  - wallet_execution_without_policy
  - secret_storage
  - ad_tooling_in_production_workspace
requires:
  - provenance_review
  - license_review
  - security_review
  - verifier_report
  - human_approval_for_production
```

## Canon Line

> GitLawB is not Hermes command authority.  
> It is a candidate records rail for agent work.  
> Hermes routes the work.  
> Verifier guards the gate.  
> Human governance decides what becomes infrastructure.
