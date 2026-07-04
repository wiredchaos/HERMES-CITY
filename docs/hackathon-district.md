# HERMES-CITY Hackathon District

## Core decision

Yes. The Hackathon District applies to HERMES-CITY.

HERMES-CITY should carry the operating surface for HERMES/ZERO: scan hackathons, score opportunities, map existing builds, generate submissions, and prepare demo sequences.

Morph applies only as a coding-agent infrastructure lane under Hermes. It supports code search, fast patching, model routing, context compaction, and trace-level failure detection. It does not replace Hermes identity, profiles, memory, city UI, or governance.

## District identity

```txt
District: HACKATHON DISTRICT
Commander: HERMES/ZERO
Repo role: city UI and agent operation surface
Layer: applications district
Status: online candidate
```

## HERMES/ZERO mission

HERMES/ZERO turns competitions into executable build campaigns.

```txt
find active hackathons
read sponsor incentives
score win probability
map existing AGENTROPOLIS builds
write the submission
produce build augmentation notes
prepare the demo order
```

## Required city views

```txt
RADAR
APPLICATIONS
HERMES AGENT
SUBMISSIONS
BUILD PLAN
ARSENAL
```

## HERMES loop

```txt
1. SEARCH: discover live hackathons, RFS prompts, sponsor tracks, and deadlines
2. ANALYZE: identify judging criteria, sponsor API hooks, and prize fit
3. MAP: match AGENTROPOLIS builds to the competition
4. GENERATE: write the pitch, answers, demo script, and architecture
5. AUGMENT: define code changes needed to win
6. PACKAGE: move final output into submission-ready form
```

## Morph boundary

Morph can support HERMES/ZERO when the task is code-heavy.

Allowed uses:

- semantic search across HERMES-CITY and related repos
- fast apply for partial React and documentation edits
- compact long-running HERMES sessions
- route coding tasks to appropriate providers
- classify failed agent loops or broken tool traces

Not allowed:

- making Morph the HERMES brain
- exposing Morph credentials in frontend code
- treating Morph as its own city district
- skipping AGENTROPOLIS governance receipts

## UI implementation note from chat

The pasted prototype should be consolidated into one district component. Do not keep two `export default` components in the same file.

Recommended entry surface:

```jsx
export default function HackathonDistrict() {
  const [view, setView] = useState("RADAR");

  return (
    <DistrictShell>
      <DistrictHeader
        title="HACKATHON DISTRICT"
        subtitle="HERMES/ZERO // FIND · MAP · BUILD · WIN"
      />
      <DistrictNav
        active={view}
        setActive={setView}
        tabs={["RADAR", "APPLICATIONS", "HERMES AGENT", "SUBMISSIONS", "BUILD PLAN", "ARSENAL"]}
      />
      {view === "RADAR" && <HackathonRadar />}
      {view === "APPLICATIONS" && <ApplicationCenter />}
      {view === "HERMES AGENT" && <HermesAgent />}
      {view === "SUBMISSIONS" && <SubmissionConsole />}
      {view === "BUILD PLAN" && <BuildPlan />}
      {view === "ARSENAL" && <BuildArsenal />}
    </DistrictShell>
  );
}
```

## API safety rule

Do not call Anthropic directly from React.

Frontend should call an internal route like `/api/claude`. The backend route must read `ANTHROPIC_API_KEY` from local environment variables only.

## Build inventory seed

- NDLP Dashboard
- AGENTROPOLIS 3D City
- GNOSIS 33.3 Agent Forge
- Local Acquisition Engine
- SIGNAL/ZERO
- Viral Launch Agent
- Claude Doctor
- Workflow Agent
- LinkedIn Intel Agent
- Design Agent
- HACKATHON/ZERO
- Cognitive Stack
- NDLP Command plus GNOSIS Swarm

## Current lock

HERMES-CITY owns the HERMES/ZERO operational interface.

Morph supports the coding lane. It does not become the product, the repo, or the city brain.
