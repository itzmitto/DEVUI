// DevUI Card 09 — Night Violet
// Zelfstandig bestand. De lichtopbouw schaalt mee met de kaartbreedte.
// Basis: 400 × 400 px, hoekradius 80 px en vier lagen binnenste schaduw.

export const cardMeta = {
  title: "Card 09 — Night Violet",
  category: "Glass / Glow",
  description: "Donkere glazen kaart met een ondergloed in violet.",
  tags: ["Violet", "Glass", "Glow"],
};

export default function Cards9() {
  return (
    <>
      <style>{`.devui-card-9 {
  width: 400px;
  max-width: 100%;
  container-type: inline-size;
}
.devui-card-9 .glow-card {
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 20cqw;
  background: linear-gradient(180deg, #0a090d 0%, #100c1e 100%);
  box-shadow:
    inset 0 1.5cqw 1.5cqw -.5cqw rgba(139, 104, 255, .15),
    inset 0 -5cqw 5cqw -1.5cqw rgba(255, 255, 255, .4),
    inset 0 -10cqw 7.5cqw -2cqw rgba(177, 147, 255, .5),
    inset 0 -20cqw 15cqw -7.5cqw #6135e0,
    0 8cqw 7.5cqw -4.5cqw rgba(0, 0, 0, .95),
    0 3.5cqw 4.5cqw -2.5cqw rgba(0, 0, 0, .85);
}
.devui-card-9 .glow-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  box-shadow:
    inset .25cqw 0 .75cqw rgba(139, 104, 255, .22),
    inset -.25cqw 0 .75cqw rgba(139, 104, 255, .22),
    inset 0 -.5cqw .75cqw rgba(233, 223, 255, .85);
}
.devui-card-9 .glow-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: radial-gradient(
    ellipse 65% 12% at 50% 100%,
    rgba(233, 223, 255, .45) 0%,
    rgba(177, 147, 255, .15) 50%,
    transparent 100%
  );
}`}</style>
      <div className="devui-card-9">
        <div
          className="glow-card"
          role="img"
          aria-label="Donkere glazen kaart met een lichtgloed in violet langs de onderrand"
        />
      </div>
    </>
  );
}
