// DevUI Card 13 — Nova Pink
// Zelfstandig bestand. De lichtopbouw schaalt mee met de kaartbreedte.
// Basis: 400 × 400 px, hoekradius 80 px en vier lagen binnenste schaduw.

export const cardMeta = {
  title: "Card 13 — Nova Pink",
  category: "Glass / Glow",
  description: "Donkere glazen kaart met een ondergloed in fuchsia.",
  tags: ["Fuchsia", "Glass", "Glow"],
};

export default function Cards13() {
  return (
    <>
      <style>{`.devui-card-13 {
  width: 400px;
  max-width: 100%;
  container-type: inline-size;
}
.devui-card-13 .glow-card {
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 20cqw;
  background: linear-gradient(180deg, #0d090d 0%, #1c0b19 100%);
  box-shadow:
    inset 0 1.5cqw 1.5cqw -.5cqw rgba(241, 111, 202, .15),
    inset 0 -5cqw 5cqw -1.5cqw rgba(255, 255, 255, .4),
    inset 0 -10cqw 7.5cqw -2cqw rgba(255, 124, 216, .5),
    inset 0 -20cqw 15cqw -7.5cqw #c51b8e,
    0 8cqw 7.5cqw -4.5cqw rgba(0, 0, 0, .95),
    0 3.5cqw 4.5cqw -2.5cqw rgba(0, 0, 0, .85);
}
.devui-card-13 .glow-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  box-shadow:
    inset .25cqw 0 .75cqw rgba(241, 111, 202, .22),
    inset -.25cqw 0 .75cqw rgba(241, 111, 202, .22),
    inset 0 -.5cqw .75cqw rgba(255, 228, 248, .85);
}
.devui-card-13 .glow-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: radial-gradient(
    ellipse 65% 12% at 50% 100%,
    rgba(255, 228, 248, .45) 0%,
    rgba(255, 124, 216, .15) 50%,
    transparent 100%
  );
}`}</style>
      <div className="devui-card-13">
        <div
          className="glow-card"
          role="img"
          aria-label="Donkere glazen kaart met een lichtgloed in fuchsia langs de onderrand"
        />
      </div>
    </>
  );
}
