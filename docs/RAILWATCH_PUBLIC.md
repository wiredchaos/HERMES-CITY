# RAILWATCH: Trust & Treasury OSINT

RAILWATCH is the public OSINT map for tracking programmable money infrastructure and agent-native settlement rails.

## Public Scope

This document is safe for the public HERMES CITY repository. It describes watch categories, signal fields, scoring, and public research workflows only.

It does not include private Agentropolis code, proprietary routing logic, wallet internals, credentials, production APIs, private agent prompts, or undisclosed strategy.

## Watch Categories

### 1. Stablecoin Rails
Examples: Open USD, USDC, USDT, RLUSD, PYUSD, CASH.

Track:

- Issuer or consortium
- Supported chains
- Reserve model
- Mint and redemption model
- API or SDK availability
- Wallet support
- Merchant support
- Governance model
- Compliance posture
- Agent-wallet relevance

### 2. FDIC Watch
Track bank-side trust and custody signals.

Track:

- FDIC guidance
- Bank failures
- Enforcement actions
- Tokenized deposit pilots
- Bank stablecoin exposure
- Custody rules
- Banking-as-a-service risk
- Insured institution partnerships

### 3. CUNA / Credit Union Watch
Track member-owned finance movement.

Track:

- CUNA or America's Credit Unions policy updates
- Credit union digital asset guidance
- CUSO innovation
- Payment modernization
- FedNow and instant payment adoption
- Underserved banking access
- Member-owned stablecoin or tokenized deposit models

### 4. Retirement / Pension Watch
Track long-horizon institutional capital.

Track:

- 401(k) digital asset policy
- IRA custody updates
- Public pension fund exposure
- Tokenized treasury adoption
- BlackRock, Fidelity, Vanguard, State Street, and similar institutional moves
- Stablecoin reserve implications
- Fiduciary and compliance signals

### 5. Agent Commerce Watch
Track machine-to-machine payment rails.

Track:

- MetaMask Agent Wallet
- x402
- Coinbase Developer Platform
- Stripe stablecoin rails
- World.xyz and prediction-market settlement
- DFlow or solver infrastructure
- Wallet-native payments
- Agent identity and authorization standards

## Signal Schema

Recommended fields for each signal:

```json
{
  "id": "railwatch-signal-0001",
  "date_observed": "YYYY-MM-DD",
  "source_url": "https://example.com/source",
  "source_type": "official_blog | docs | github | regulator | news | filing | api | social",
  "entity": "Open USD",
  "category": "stablecoin_rails",
  "summary": "Short plain-English summary of the signal.",
  "risk_level": 1,
  "opportunity_level": 1,
  "agent_wallet_relevance": 1,
  "ecosystem_impact": 1,
  "confidence": "low | medium | high",
  "score": 1,
  "recommended_action": "archive | watch | research | build | integrate",
  "status": "new"
}
```

## Signal Score

| Score | Label | Meaning | Action |
| --- | --- | --- | --- |
| 1 | Noise | Weak, unverifiable, or low-impact signal | Archive |
| 2 | Watch | Worth monitoring but not actionable yet | Add to watch board |
| 3 | Research | Relevant development with enough substance for a brief | Produce research brief |
| 4 | Build | Strategic opportunity for ecosystem planning | Create implementation task |
| 5 | Integrate | Critical signal with direct agent-commerce impact | Prioritize integration planning |

## Example Signal: Open USD

```json
{
  "id": "railwatch-openusd-0001",
  "date_observed": "2026-06-30",
  "source_url": "https://joinopenstandard.com/blog/introducing-open-usd",
  "source_type": "official_blog",
  "entity": "Open USD",
  "category": "stablecoin_rails",
  "summary": "Open USD announced as a consortium-oriented stablecoin rail with relevance to wallets, merchants, and agent-native payments.",
  "risk_level": 3,
  "opportunity_level": 5,
  "agent_wallet_relevance": 5,
  "ecosystem_impact": 5,
  "confidence": "medium",
  "score": 4,
  "recommended_action": "build",
  "status": "watch"
}
```

## Operating Principle

Agentropolis does not chase coins. It maps the roads money will travel on.

HERMES CITY publishes the public road map.
Agentropolis keeps the private engine room private.
