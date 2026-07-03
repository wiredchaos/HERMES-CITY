# ARCANUM GROWTH INTEL

**System:** HERMES CITY / Agentropolis  
**District:** CIVITAS GROWTH  
**Type:** Hermes Skill Pack  
**Tagline:** Spy. Score. Spin. Audit. Deploy.

## Canon Lock

ARCANUM GROWTH INTEL is not a Claude Code plugin. It is a Hermes City skill pack for paid media intelligence, creative generation, scoring, and live account auditing.

The goal is to bring the full Meta ads workflow into Hermes as coordinated skills, not as isolated commands.

## Skill Pack Structure

```txt
skills/
  arcanum-growth-intel/
    README.md
    registry.json
    skills/
      meta-ad-spy/SKILL.md
      category-map/SKILL.md
      creative-swarm/SKILL.md
      creative-score/SKILL.md
      account-audit/SKILL.md
```

## Hermes Skill Chain

```txt
Brand / Offer / Competitors
-> meta-ad-spy
-> category-map
-> creative-swarm
-> creative-score
-> account-audit
-> launch recommendation
-> city ledger
```

## Skills

### meta-ad-spy
Pull active competitor Meta ads and rank them by longevity. Output hook patterns, offer patterns, CTAs, formats, and creative durability signals.

### category-map
Compare 3 to 5 competitors and identify category white space, overused claims, underused messages, offer gaps, and open attack lanes.

### creative-swarm
Generate 20 on-brand ad variations from a winning angle, including hooks, primary text, headlines, descriptions, CTA options, and compliance notes.

### creative-score
Score ads 0 to 100 across hook strength, offer clarity, audience fit, differentiation, conversion intent, and compliance risk.

### account-audit
Audit a connected Meta ad account through official Meta MCP/API access and return an account health score with a prioritized fix-this-week list.

## Required Inputs

```txt
brand_name
brand_voice
offer
landing_page_url
competitor_names_or_urls
meta_ad_account_connection_optional
budget_range_optional
target_audience_optional
region_optional
```

## Required Outputs

```txt
competitor_intelligence_report
category_white_space_map
ad_copy_variants
creative_scorecard
account_audit_report
prioritized_launch_recommendation
audit_log_event
```

## Governance Rules

- No automatic ad spend.
- No automatic campaign launch.
- No stored Meta credentials in plaintext.
- No client-side access tokens.
- Use official Meta MCP/API or OAuth only.
- Human review required before launch.
- Every recommendation must be logged.
- Live account data must be treated as sensitive client data.

## Secret Handling

All sensitive credentials must route through the Hermes secret layer.

Never store:

- Meta access tokens in browser storage
- Ad account credentials
- Client secrets
- Pixel secrets
- Payment details
- Raw client exports in public logs

## HERMES CITY Fit

HERMES CITY should treat this as a growth district skill pack. The value is the coordinated chain:

```txt
Intelligence -> Creative -> Scoring -> Audit -> Decision -> Ledger
```

This lets Hermes become a COO-level growth operator for merchants, creators, DTC brands, agencies, and Agentropolis commerce agents.

## MVP Implementation

1. Manual competitor input.
2. Public ad library research workflow stub.
3. Category matrix generator.
4. 20-ad copy generator.
5. Static scorecard algorithm.
6. Account audit placeholder until Meta MCP/API auth is connected.
7. Human approval gate before any campaign action.
8. Ledger log for every generated report.

## Canonical Name

**ARCANUM GROWTH INTEL**  
**District:** CIVITAS GROWTH  
**Tagline:** Spy. Score. Spin. Audit. Deploy.
