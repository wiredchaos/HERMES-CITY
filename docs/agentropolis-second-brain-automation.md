# AGENTROPOLIS Second Brain Automation Doctrine

Status: active infrastructure doctrine

## Core lock

AGENTROPOLIS does not use AKIRA CODEX for infrastructure memory.

AKIRA CODEX remains WIRED CHAOS lore only.

AGENTROPOLIS uses the AGENTROPOLIS ONTOLOGY and AGENTROPOLIS KNOWLEDGE GRAPH for infrastructure memory.

## Hermes City role

HERMES-CITY is the automation and orchestration layer for the AGENTROPOLIS second-brain system.

It should coordinate scheduled agents, test runs, operator approvals, execution logs, and write-back loops into the AGENTROPOLIS Ontology.

## Operating loop

```text
Read ontology
  -> Run agent lane
  -> Produce result
  -> Update logs
  -> Suggest ontology write-back
  -> Await approval when behavior changes
  -> Schedule next run
```

## Automation rule

No agent should become fully autonomous before one reviewed test run.

Recommended gate:

```text
Discovery -> operator approval -> one test run -> review -> schedule
```

## Lanes

- Memory refresh
- Research brief
- Build suggestion
- Creator backlog
- Distribution prompt
- Repo health scan
- Voice memo digest
- Ontology maintenance

## Write-back rule

Useful output should become structured memory, not loose chat.

Examples:

- Decisions become Decision records.
- Repeated instructions become Rule records.
- Useful prompts become Prompt records.
- Build patterns become Workflow records.
- Runs become Execution Log records.
