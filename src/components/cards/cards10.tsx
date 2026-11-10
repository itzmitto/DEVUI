// DevUI Card 10 — Arctic Teal
// Zelfstandig bestand. De lichtopbouw schaalt mee met de kaartbreedte.
// Basis: 400 × 400 px, hoekradius 80 px en vier lagen binnenste schaduw.

export const cardMeta = {
  title: 'Card 10 — Arctic Teal',
  category: 'Glass / Glow',
  description: 'Donkere glazen kaart met een ondergloed in turquoise.',
  tags: ['Turquoise', 'Glass', 'Glow'],
}

export default function Cards10() {
  return (
    <>
      <style>{`.devui-card-10 {
  width: 400px;
  max-width: 100%;
  container-type: inline-size;
}
.devui-card-10 .glow-card {
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 20cqw;
  background: linear-gradient(180deg, #090c0d 0%, #091b20 100%);
  box-shadow:
    inset 0 1.5cqw 1.5cqw -.5cqw rgba(79, 211, 240, .15),
    inset 0 -5cqw 5cqw -1.5cqw rgba(255, 255, 255, .4),
    inset 0 -10cqw 7.5cqw -2cqw rgba(96, 228, 250, .5),
    inset 0 -20cqw 15cqw -7.5cqw #0c90b6,
    0 8cqw 7.5cqw -4.5cqw rgba(0, 0, 0, .95),
    0 3.5cqw 4.5cqw -2.5cqw rgba(0, 0, 0, .85);
}
.devui-card-10 .glow-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  box-shadow:
    inset .25cqw 0 .75cqw rgba(79, 211, 240, .22),
    inset -.25cqw 0 .75cqw rgba(79, 211, 240, .22),
    inset 0 -.5cqw .75cqw rgba(215, 251, 255, .85);
}
.devui-card-10 .glow-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: radial-gradient(
    ellipse 65% 12% at 50% 100%,
    rgba(215, 251, 255, .45) 0%,
    rgba(96, 228, 250, .15) 50%,
    transparent 100%
  );
}`}</style>
      <div className="devui-card-10">
        <div className="glow-card" role="img" aria-label="Donkere glazen kaart met een lichtgloed in turquoise langs de onderrand" />
      </div>
    </>
  )
}
