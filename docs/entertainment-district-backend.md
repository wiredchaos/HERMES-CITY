# Entertainment District Backend Bridge

## Status

**Online target:** `agenticstudio-pbx`  
**District:** Entertainment District  
**Backend entrypoint:** `server/index.js` in `wiredchaos/agenticstudio-pbx`  
**Default local port:** `8787`

## Role inside HERMES-CITY

HERMES-CITY is the city runtime. The Entertainment District backend should be treated as a district application service that HERMES-CITY can route into, display, or expose through city navigation.

This is not a separate canon lane. It is the media and studio district surface for Agentropolis.

## Canonical bridge routes

```txt
GET /api/health
GET /api/district
GET /api/district/services
GET /api/ecosystem/repos
```

## Expected district identity

```txt
District: Entertainment District
Codename: ENTERTAINMENT_DISTRICT
Layer role: district/application bridge
Domain: media, studios, shows, creator workflows, narrative assets, distribution ops
Application repo: wiredchaos/agenticstudio-pbx
```

## HERMES-CITY integration rule

HERMES-CITY should consume the Entertainment District as a registered city destination, not as a loose external app.

Recommended city placement:

```txt
City Runtime
  -> Districts
    -> Entertainment District
      -> Agentic Studio PBX
```

## Repo relationships

| Repo | Role |
|---|---|
| `wiredchaos/HERMES-CITY` | City runtime and district shell |
| `wiredchaos/AGENTROPOLIS-AGENT-MCP` | Agent/tool bridge and MCP handoff layer |
| `wiredchaos/AGENTROPOLIS-CREATOR` | Creator workflow and media production layer |
| `wiredchaos/agenticstudio-pbx` | Entertainment District backend/application surface |

## Next city-runtime work

- Add Entertainment District to the HERMES-CITY district registry.
- Add route card copy for Agentic Studio PBX.
- Add health check support for `/api/health`.
- Add district metadata fetch support for `/api/district`.

## Canon lock

Entertainment District owns studio/media workflows. HERMES-CITY owns navigation, runtime framing, and city-level visibility.
