# Hermes /steer Command Signal

HERMES CITY tracks `/steer` as a public workflow-control signal for live agent coordination.

## Command Difference

```text
/interrupt
= stop the current work and start a new turn

/queue
= wait until the current work finishes

/steer
= keep the current work running and inject new context into the active flow
```

## Why This Matters

`/steer` changes the feel of agent work.

Instead of treating an agent like a single prompt-response box, the operator can guide the work while it is already moving.

That makes Hermes feel less like static prompting and more like directing a real teammate during an active task.

## Example

Initial request:

```text
Build a REST API with auth, tests, and docs.
```

Mid-run steering instruction:

```text
/steer Actually, add rate limiting too.
```

Expected behavior:

```text
Hermes keeps working.
Hermes preserves active context.
Hermes incorporates rate limiting into the next useful iteration.
```

## Agent-City Pattern

In Agentropolis terms, `/steer` is a live course-correction primitive.

```text
Operator intent
  -> HERMES active task
  -> /steer context injection
  -> current lane updates plan
  -> work continues
  -> receipt captures steering event
```

## Governance Boundary

`/steer` should not bypass authority gates.

If the injected instruction changes risk, cost, permissions, wallet access, data access, or production scope, Hermes should re-check policy before execution.

Safe pattern:

```text
Steer the plan.
Do not skip the law.
```

## Public Takeaway

Small command.
Massive workflow unlock.

```text
/steer makes agents feel interruptible without being disposable.
```
