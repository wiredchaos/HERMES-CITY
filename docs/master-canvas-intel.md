# Master Canvas Hermes Planning Note

**Source:** `wassermanproductions/master-canvas`  
**Status:** External upstream tool.  
**Hermes City role:** Pre-execution planning surface for storyboards, prompt boards, and structured creative handoffs.

## Boundary

Master Canvas should be treated as a planning layer before Hermes execution, not as a Hermes City replacement.

Hermes City owns agent runtime, orchestration, memory, sessions, plugins, and dispatch. Master Canvas can provide visual plans that may later become Hermes-ready execution packets.

## Useful fit

Master Canvas is relevant to Hermes City when a project needs visual pre-production before agent work begins:

- storyboard to task plan
- scene board to agent runbook
- shot list to execution sequence
- prompt board to prompt registry
- production notes to Hermes session context
- export bundle to handoff packet

## Correct language

Use:

> Master Canvas can serve as an external pre-production surface before Hermes City execution.

Avoid:

> Hermes City natively supports Master Canvas.

> Master Canvas is part of Hermes City.

> Master Canvas exports are already executable Hermes workflows.

## Future Hermes adapter contract

A future adapter should perform a narrow conversion:

1. Read a Master Canvas export.
2. Validate scenes, shots, prompts, and notes.
3. Convert each scene into a Hermes task group.
4. Convert each shot into a specific agent instruction.
5. Attach asset references and constraints.
6. Produce a reviewable execution packet before running any agent.

## Safety rule

No automatic execution from a visual board.

Every imported board should generate a reviewable plan first. Hermes execution should only start after the plan is inspected, scoped, and approved.

## Canon lock

Master Canvas feeds Hermes City.

Hermes City executes.
