# GLM-5.2 Hybrid NVIDIA Inference Intel

Source: https://huggingface.co/madeby561/GLM-5.2-MXFP8-NVFP4-NF3-Hybrid

## Verdict

Yes, this applies to HERMES-CITY.

Core lock:

```text
GLM-5.2 MXFP8/NVFP4/NF3 Hybrid = experimental private long-context research lane.
HERMES may dispatch to it only through Model Exchange and policy gates.
```

This is not a default worker, not a city brain, and not a reason to buy hardware before demand is proven.

## What the signal says

The model card presents a community-built hybrid quant of GLM-5.2 designed to make a full large MoE deployment fit on a 4-card NVIDIA workstation/server class box.

Reported model-card signals:

- Base: `zai-org/GLM-5.2`.
- Quantized lineage includes `lukealonso/GLM-5.2-NVFP4`.
- License listed on Hugging Face: MIT.
- Format tags include safetensors, GLM MoE, NVFP4, NF3, MXFP8, quantization, and modelopt.
- The author warns it loads only through a custom serving image using an in-house NF3 3-bit kernel.
- Claimed serving target: 4x 96GB sm120 GPUs plus about 64GB RAM.
- Claimed deployment size: about 327GB total.
- Claimed usable context profile: about 118k context with concurrency headroom, or up to about 240k single stream.
- The card explicitly says this is not the official model's 1M context and is not officially supported.
- Hugging Face shows no hosted Inference Provider deployment for this checkpoint at time of capture.

## HERMES interpretation

HERMES should route this lane like a specialized district utility:

```text
Task arrives
  -> classify intent
  -> classify risk
  -> check context size
  -> check privacy need
  -> check cost ceiling
  -> choose hosted lane first unless private workload justifies self-host
  -> dispatch through Model Exchange
  -> require fallback
  -> write receipt
```

The model is valuable when the task needs private, long-context synthesis and the cost of hosted inference becomes worse than owned capacity.

## HERMES dispatch rules

Route to this lane only when:

1. the task is research/synthesis/planning heavy
2. the context window requirement exceeds normal hosted lanes
3. privacy/locality matters
4. latency is acceptable
5. fallback is available
6. policy gate passes
7. the receipt can capture model, quant, serving image, and context settings

Do not route to this lane for:

- fast summaries
- routine chat
- small code edits
- wallet actions
- destructive tool calls
- identity-sensitive automation without extra validation

## Do now

- Track as optional self-hosted capacity.
- Keep HERMES provider-neutral.
- Add routing metadata when Model Exchange schemas are implemented.
- Benchmark before activation.

## Do not do yet

- Do not make it the default HERMES model.
- Do not bypass policy because the model is local.
- Do not confuse long context with better reasoning.
- Do not create a new repo for this checkpoint.

## Canon line

```text
HERMES dispatches work.
The Model Exchange selects capacity.
The Policy Gate controls authority.
Receipts preserve truth.
```
