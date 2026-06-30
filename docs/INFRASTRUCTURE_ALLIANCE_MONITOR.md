# Infrastructure Alliance Monitor

Public module for HERMES CITY.

## Purpose

Infrastructure Alliance Monitor tracks public signals showing how financial institutions, payment networks, stablecoin issuers, wallets, fintechs, and commerce platforms are converging around programmable money rails.

This is not a token-promotion tool. It is public OSINT for understanding financial infrastructure movement.

## Core Question

Do not ask only which stablecoin is winning.

Ask:

> Which institutions are converging on the same settlement rails?

## Watch Groups

### Payment Networks

- Mastercard
- Visa
- American Express
- Discover
- SWIFT
- FedNow
- RTP Network
- ACH modernization initiatives

### Banks and Custody

- FDIC-insured institutions
- BNY
- Citi
- JPMorgan
- Goldman Sachs
- State Street
- regional banks
- banking-as-a-service providers

### Credit Union Ecosystem

- America's Credit Unions / CUNA lineage
- CUSOs
- payment cooperatives
- member-owned finance initiatives
- instant payment adoption

### Asset Managers and Retirement Infrastructure

- BlackRock
- Fidelity
- Vanguard
- Franklin Templeton
- WisdomTree
- public pensions
- retirement plan infrastructure
- tokenized treasury products

### Stablecoin and Settlement Rails

- Open USD
- USDC
- USDT
- RLUSD
- PYUSD
- tokenized deposits
- tokenized treasuries

### Agent Commerce

- MetaMask Agent Wallet
- Coinbase Developer Platform
- Stripe payment rails
- x402
- wallet-native payments
- autonomous agent payment flows

## Convergence Score

Use a 1 to 5 score to estimate how meaningful a public signal is.

| Score | Label | Meaning |
| --- | --- | --- |
| 1 | Isolated | Single weak signal with limited verification |
| 2 | Watch | One credible institution or product update |
| 3 | Cluster | Multiple aligned participants or repeated signals |
| 4 | Strategic | Strong cross-sector alignment across payments, wallets, banks, or merchants |
| 5 | Infrastructure Shift | Broad institutional convergence with clear developer, merchant, or agent-commerce implications |

## Signal Fields

Recommended public record fields:

```json
{
  "id": "infra-alliance-0001",
  "date_observed": "YYYY-MM-DD",
  "source_url": "https://example.com/source",
  "entity": "Mastercard",
  "related_entities": ["Open Standard", "Open USD"],
  "category": "payment_network",
  "summary": "Public statement or integration signal.",
  "convergence_score": 4,
  "agent_commerce_relevance": 4,
  "confidence": "medium",
  "recommended_public_action": "watch"
}
```

## Example Public Signal

Mastercard publicly stating support for Open Standard and Open USD is a payment-network convergence signal. It should be tracked as part of programmable money infrastructure, not as a price prediction or token promotion.

## Public / Private Boundary

Public HERMES CITY may include watch categories, schemas, scoring definitions, and sanitized examples.

Do not include private Agentropolis implementation logic, paid customer workflows, proprietary scoring weights, internal prompts, API keys, wallet infrastructure, or unreleased strategy in this repository.
