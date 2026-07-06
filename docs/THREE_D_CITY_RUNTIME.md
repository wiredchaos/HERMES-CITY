# 3D City Runtime

## Core Lock

Hermes City is a 3D-first runtime shell.

Claw3D is the spatial agent interface lane. Dungeon Forge is the deterministic procedural layout brain for generated rooms, routes, arenas, and districts.

## Runtime Rule

No dashboard-first city.

Flat interfaces may exist only as in-world terminals, wall panels, desk screens, command consoles, HUD overlays, or fallback admin views.

## City Surfaces

Every major district should map to a navigable 3D place:

- command floors
- offices
- labs
- studios
- arenas
- vaults
- libraries
- transit spaces
- agent workrooms

## Pipeline

```txt
Dungeon Forge layout -> semantic place map -> Claw3D spatial interface -> Hermes City runtime
```

## Final Lock

Hermes City is not a flat dashboard. It is the spatial runtime for visible agents, rooms, districts, and live operations.
