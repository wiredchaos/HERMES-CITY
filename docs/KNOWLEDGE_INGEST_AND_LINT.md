# Knowledge Ingest and Lint

HERMES coordinates knowledge ingestion, validation, indexing, contradiction detection, and receipt generation.

Pipeline:

sources -> ingest -> ontology -> compiled knowledge -> indexes -> lint -> policy gate -> receipt.

Rules:
- Ingest one source at a time when practical.
- Preserve immutable source evidence.
- Update entity links.
- Detect contradictions rather than hiding them.
- Generate receipts for every ingest.
- Escalate unresolved conflicts for operator review.
