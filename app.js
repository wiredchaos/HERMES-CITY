const bootLines = [
  "boot://hermes-city",
  "status: public shell online",
  "boundary: private engine protected",
  "module: hermes orchestration map",
  "module: nemoclaw builder lane",
  "module: nemotron research council",
  "module: railwatch signal board",
  "license: apache-2.0",
  "ready: civic coordination interface"
];

const terminal = document.querySelector("#typewriter");
const revealItems = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.88;
  revealItems.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    if (top < trigger) item.classList.add("visible");
  });
}

function typeBootSequence() {
  if (!terminal) return;
  let lineIndex = 0;
  let charIndex = 0;
  let output = "";

  function tick() {
    const line = bootLines[lineIndex];
    output += line[charIndex] || "";
    terminal.textContent = output + "_";
    charIndex += 1;

    if (charIndex > line.length) {
      output += "\n";
      lineIndex += 1;
      charIndex = 0;
    }

    if (lineIndex < bootLines.length) {
      setTimeout(tick, charIndex === 0 ? 220 : 24);
    } else {
      terminal.textContent = output + "\nSYSTEM READY";
    }
  }

  tick();
}

function addCardSignals() {
  document.querySelectorAll(".card").forEach((card, index) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(35, 231, 255, 0.18), rgba(12, 18, 28, 0.78) 42%)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.background = "rgba(12, 18, 28, 0.78)";
    });
    card.style.transitionDelay = `${index * 80}ms`;
  });
}

window.addEventListener("scroll", revealOnScroll, { passive: true });
window.addEventListener("load", () => {
  revealOnScroll();
  typeBootSequence();
  addCardSignals();
});
