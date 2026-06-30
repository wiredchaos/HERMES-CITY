# HERMES CITY Public Sync Worker

Cloudflare is the always-on execution layer for the Agentropolis → HERMES CITY public sync loop.

Hermes remains the judgment layer.
Cloudflare handles scheduling, webhooks, GitHub calls, and receipts.

## Duty Split

```text
Cloudflare Worker = watcher, scheduler, webhook receiver, GitHub runner
Hermes Profile    = public/private classifier, rewrite engine, civic translator
GitHub            = source repo and public output repo
```

## Source and Output

```text
source repo: wiredchaos/agentropolis
public repo: wiredchaos/HERMES-CITY
```

## Flow

```text
Agentropolis commit or scheduled check
        ↓
Cloudflare Worker receives event
        ↓
Worker fetches changed file list
        ↓
Worker blocks dangerous paths immediately
        ↓
Worker sends safe summaries to Hermes profile
        ↓
Hermes returns classification + public rewrite
        ↓
Worker commits public-safe docs to HERMES-CITY
        ↓
Worker writes sync receipt
```

## Required Secrets

Store these in Cloudflare, never in the repo:

```text
GITHUB_TOKEN
GITHUB_WEBHOOK_SECRET
HERMES_ENDPOINT
HERMES_API_KEY
```

Optional:

```text
SYNC_BRANCH
PUBLIC_REPO
SOURCE_REPO
```

## Safety Boundary

The Worker must never publish:

- `.env` files
- secrets
- tokens
- wallet logic
- client data
- private prompts
- internal orchestration
- production code copied from Agentropolis
- files marked `PRIVATE`, `INTERNAL`, `DO_NOT_PUBLISH`, or `AGENTROPOLIS_ONLY`

When uncertain, the Worker writes a blocked receipt instead of publishing.

## Deployment Model

Recommended:

- GitHub webhook triggers worker on push or merged PR
- Cron trigger runs periodic reconciliation
- Worker writes only to a dedicated branch or public docs path
- Human review can be required before merge

## Status

This directory is a public-safe scaffold. It does not contain secrets or private implementation details.
