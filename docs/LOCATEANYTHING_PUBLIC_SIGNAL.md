# LocateAnything Public Signal

Status: public-safe candidate signal

Repo role: public coordination layer for the Agentropolis ecosystem.

## What this is

NVIDIA LocateAnything-3B is being tracked as an optional visual grounding model candidate for Agentropolis public demos, BoardForge Arena District previews, accessibility helpers, and creator QA narratives.

Plain language:

```text
Ask the system what to find in an image.
The vision layer returns where it is.
The app still decides what is allowed.
```

## Public-safe framing

This is a perception lane, not an execution lane.

It can help public users understand images, interfaces, and virtual scenes by locating objects or UI elements.

It should not be described as:

- autonomous wallet verification
- ownership proof
- a gameplay authority
- a replacement for BoardForge rules
- a required dependency for Agentropolis
- permissive open source unless the license review confirms that use

## BoardForge Arena District examples

Public demo language:

- locate pieces on a chessboard screenshot
- find the PFP battle banner
- find the Doginal Dogs themed object
- point to the next interactable tile
- identify where the move confirmation button is
- help a new player understand the screen

## Accessibility value

This candidate is especially strong for accessibility and onboarding.

Potential prompts:

```text
Where is the nearest playable piece?
Where is the resign button?
Where is the match timer?
Find the crown icon.
Find the highlighted move.
```

The public shell can explain the output while the private City OS and MCP layer enforce what can actually happen.

## HERMES routing posture

```text
public user request
  -> HERMES public shell
  -> policy classification
  -> MCP vision tool lane if allowed
  -> visual grounding result
  -> explanation, not direct authority
```

## Safety and privacy

Do not ask users to upload sensitive personal documents for public demos.

Do not store user-uploaded PFPs, screenshots, or recordings in this repo.

Do not expose private Agentropolis orchestration, internal prompts, credentials, wallet keys, or client data.

## License caution

The provided Hugging Face screenshot shows `nvidia-license`.

Public language should say:

```text
candidate optional vision backend pending license review
```

Do not say:

```text
MIT replacement
Apache replacement
free commercial dependency
bundled model
```

## Recommended public one-liner

BoardForge can optionally add visual grounding so players and creators can ask where things are on a board, screen, or themed world while the game engine and governance layer still control what is legal.

## Decision

Approved for public-safe tracking as a HERMES signal.

Core lock:

```text
LocateAnything-3B = optional visual grounding signal
HERMES-CITY = public explanation and coordination
AGENTROPOLIS-AGENT-MCP = governed execution membrane
agentropolis = private City OS authority
```