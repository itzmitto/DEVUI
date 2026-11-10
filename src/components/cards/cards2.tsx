// DevUI Card 02 — Blue Glow

export const cardMeta = {
  title: "Card 02 — Blue Glow",
  category: "Glass / Glow",
  description:
    "Donkere kaart met een zachte blauwe gloed en heldere onderrand.",
  tags: ["Dark", "Blue", "Glow"],
};

export default function Cards2() {
  return (
    <>
      <style>{`
        .devui-card-2 {
          box-sizing: border-box;
          position: relative;
          isolation: isolate;
          width: 400px;
          max-width: 100%;
          aspect-ratio: 1;
          overflow: hidden;
          border-radius: 20%;

          background: linear-gradient(
            180deg,
            #0a0909 0%,
            #09101e 100%
          );

          box-shadow:
            inset 0 6px 6px -2px rgba(35, 101, 255, 0.15),
            inset 0 -20px 20px -6px rgba(255, 255, 255, 0.4),
            inset 0 -40px 30px -8px rgba(102, 148, 255, 0.5),
            inset 0 -80px 60px -30px #144ccd,
            0 32px 30px -18px rgba(0, 0, 0, 0.95),
            0 14px 18px -10px rgba(0, 0, 0, 0.85);
        }

        .devui-card-2::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;

          box-shadow:
            inset 1px 0 3px rgba(130, 174, 255, 0.22),
            inset -1px 0 3px rgba(130, 174, 255, 0.22),
            inset 0 -2px 3px rgba(195, 245, 255, 0.85);
        }

        .devui-card-2::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;

          background: radial-gradient(
            ellipse 65% 12% at 50% 100%,
            rgba(148, 230, 255, 0.45) 0%,
            rgba(70, 132, 255, 0.15) 50%,
            transparent 100%
          );
        }
      `}</style>

      <div
        className="devui-card-2"
        role="img"
        aria-label="Donkere glazen kaart met een blauwe lichtgloed langs de onderrand"
      />
    </>
  );
}
