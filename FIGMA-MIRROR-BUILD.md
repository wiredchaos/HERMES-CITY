# HERMES CITY — FIGMA MIRROR REBUILD CONTRACT

## Objective
Rebuild the public HERMES CITY surface using the WIRED CHAOS Motherboard Figma guide as the literal design-system mirror while keeping HERMES CITY a spatial 3D civic shell.

Current public site:
`https://agentropolis-city-of-agents.github.io/HERMES-CITY/`

Hard rule:

> NO FLAT 2D DASHBOARD AS THE PRIMARY PUBLIC INTERFACE.

The current city representation is too abstract and reads like colored bars on a platform. Replace it with a legible 3D civic environment with clear spatial hierarchy, readable districts, and Figma-derived components embedded into the world.

## FIGMA SOURCE OF TRUTH
Mirror these exact tokens from the uploaded WIRED CHAOS Motherboard guide:

### Colors
- Base Black: `#000000`
- Neon Cyan: `#00FFFF`
- Glitch Red: `#FF3131`
- Electric Green: `#39FF14`
- Accent Pink: `#FF00FF`

### Typography
- Heading: Orbitron, Bold, 32px baseline
- Body: Inter, Regular, 16px baseline

### Effects
- Cyan Glow: outer glow `#00FFFF`, blur 20px, 60% opacity
- Red Pulse: drop shadow `#FF3131`, Y=0, blur 10px
- CRT Scanline Overlay: black / 5% horizontal stripes, subtle

### Motherboard grammar
- dark field / city ground plane
- central core node
- smaller subsystem nodes
- cyan 2px trace lines connecting systems
- clear labels attached to nodes/buildings
- status LEDs only when state is truthful

### Required reusable components
Implement spatial equivalents of:
- `ChipCard`
- `TraceButton`
- `AgentDock`
- `QuestWidget`
- `ModeToggle`

Do not render these as a flat homepage card grid. They belong inside the spatial experience.

## HERMES CITY SPATIAL MIRROR

Translate the current towers into real civic/institutional spaces:

- HERMES HQ → central coordination tower / civic core
- NemoClaw Works → builder/fabrication district
- Nemotron Council → research/council chamber
- Wallet Rails → commerce/settlement transit rail
- Mission Control → protected human operations tower
- Railwatch → transit/route observatory

The current simple extruded bars are placeholders only. Rebuild these as distinct recognizable structures with silhouette, purpose, and route relationships.

## NAVIGATION MODEL

Use the Figma motherboard prototype logic as a spatial interaction model:

Core → select district → enter district → inspect detail → back to city.

Map this to HERMES CITY as:

`City Core → district/institution → agent/workflow/tool/receipt surface → return to City`

Trace lines become routes, data paths, or transit corridors.

## UI HIERARCHY

Keep labels scannable and minimal:
- District / institution name
- one-line role
- concrete status
- detail only on interaction

Avoid huge white marketing headlines and dense blocks floating over the world.

## VISUAL CONTRACT

- obsidian/black environment
- cyan/red primary signal system
- green/pink accents only when meaningful
- glass/HUD treatment restrained
- fine technical labels
- environmental lighting should reinforce district identity
- motion explains route, hierarchy, state, or transfer
- no decorative animation that obscures navigation

## ACCESSIBILITY / PERFORMANCE

- preserve keyboard and semantic navigation
- reduced-motion support
- lazy-load expensive 3D/media
- keep initial shell lightweight
- maintain GitHub Pages project path support for `/HERMES-CITY/`
- never fake live telemetry or execution state

## ACCEPTANCE

- Public page is clearly 3D and spatial.
- Current bar-chart-like city is replaced with real district/institution forms.
- Figma colors, effects, traces, and component logic are visibly reflected.
- HERMES HQ, NemoClaw Works, Nemotron Council, Wallet Rails, Mission Control, and Railwatch are spatially distinct.
- User can select/enter/return without confusion.
- No generic dashboard replaces the city.
- Public boundary remains intact: visualization does not grant authority.

## Design philosophy

HERMES CITY should feel like a **mirror of the Figma motherboard transformed into a governed 3D city**.

The motherboard gives the logic.
The city gives it space.
The labels give it clarity.
