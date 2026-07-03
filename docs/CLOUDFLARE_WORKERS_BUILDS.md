# Cloudflare Workers Builds Git Integration

## Role in HERMES CITY

HERMES CITY is the public coordination layer for Agentropolis. Cloudflare Workers Builds should treat this repository as a public deployment lane for safe, shareable agent infrastructure documentation, interface patterns, and civic shell updates.

```text
wiredchaos/HERMES-CITY
  -> GitHub public source
  -> Cloudflare Workers Builds
  -> Public Worker / Pages deployment
  -> HERMES CITY civic shell
```

## Deployment Rule

Use GitHub as the source of truth. Cloudflare should deploy from Git pushes so public updates stay traceable through commits, checks, and deployment receipts.

## Recommended Branch Map

| Branch | Cloudflare Target | Purpose |
| --- | --- | --- |
| `main` | Public production | Stable public shell |
| `develop` | Staging | Integration review before publication |
| `feature/*` | Preview | Pull request previews |

## Git Integration Setup

1. Open Cloudflare Dashboard.
2. Go to **Workers & Pages**.
3. Select the HERMES CITY Worker or Pages project.
4. Open **Settings** > **Builds**.
5. Under **Git Repository**, select **Manage**.
6. Connect GitHub and authorize access to `wiredchaos/HERMES-CITY`.
7. Set production branch to `main`.
8. Enable pull request previews when available.

## Public Safety Boundary

HERMES CITY is public. Do not publish private Agentropolis implementation details, private credentials, wallet secrets, unpublished operator workflows, or internal governance keys.

## Build Status Expectations

Cloudflare should report deployment state into GitHub through checks, comments, or commit statuses. Public-facing changes should merge only after the preview build passes.

## Execution Pattern

```text
public doc or shell change
  -> pull request
  -> Cloudflare preview
  -> safety review
  -> merge to main
  -> public deployment
```

## Canon Line

HERMES CITY exposes the safe civic shell. It does not redefine Agentropolis city law.