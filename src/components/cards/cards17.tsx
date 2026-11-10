// DevUI Card 17 — Mountain Signal
// Zelfstandig bestand; geen extra stylesheets, fonts of iconenpakketten nodig.

export const cardMeta = {
  title: "Card 17 — Mountain Signal",
  category: "Dark / Light effects",
  description:
    "Groene lichtkaart met verticale signaalbalken en een bergsilhouet.",
  tags: ["Green", "Signal", "Glow"],
};

const heights = [
  65, 55, 43, 36, 42, 53, 65, 77, 86, 84, 78, 66, 70, 78, 86, 94, 100, 102, 90,
  88, 96, 104, 110, 116, 123,
];

export default function Cards17() {
  return (
    <>
      <style>{`.devui-card-17 { width:320px; max-width:100%; container-type:inline-size; }
.devui-card-17, .devui-card-17 * { box-sizing:border-box; }
.devui-card-17 .panel { position:relative; isolation:isolate; width:100%; overflow:hidden; color:#f6f5f9; font-family:Arial,Helvetica,sans-serif; background:#090a0e; }
.devui-card-17 h2, .devui-card-17 h3, .devui-card-17 p { margin:0; }
.devui-card-17 button, .devui-card-17 input { font:inherit; }
.devui-card-17 button { cursor:pointer; -webkit-tap-highlight-color:transparent; }
.devui-card-17 button:focus-visible, .devui-card-17 input:focus-visible { outline:2px solid #a6b4ff; outline-offset:3px; }
.devui-card-17 .grain { position:absolute; z-index:3; inset:0; pointer-events:none; opacity:.13; background-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22160%22%20height%3D%22160%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%22.8%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Cpath%20fill%3D%22white%22%20filter%3D%22url%28%23n%29%22%20opacity%3D%22.4%22%20d%3D%22M0%200h160v160H0z%22%2F%3E%3C%2Fsvg%3E"); mix-blend-mode:screen; }
.devui-card-17 svg { display:block; }
@media(prefers-reduced-motion:reduce) { .devui-card-17 *, .devui-card-17 *::before, .devui-card-17 *::after { animation:none !important; transition:none !important; } }

.devui-card-17 .panel { aspect-ratio:.944; border-radius:24cqw; background:linear-gradient(#080c09,#010503 60%,#0c2010); box-shadow:inset 0 1cqw 1.8cqw rgba(216,232,218,.5),inset 0 -4cqw 4cqw -1cqw #c9ffca,inset 0 -14cqw 12cqw -4cqw #65fa7d; }
.devui-card-17 .mountain-title { position:absolute; top:11%; width:100%; text-align:center; font-size:6.3cqw; font-weight:600; line-height:1.05; letter-spacing:-.25px; }
.devui-card-17 .mountain-title span { display:block; color:#9bdbb5; }
.devui-card-17 .mountain-graph { position:absolute; left:13%; top:31%; width:74%; height:36%; }`}</style>
      <div className="devui-card-17">
        <div
          className="panel"
          role="img"
          aria-label="Groene signaalkaart met bergen"
        >
          <h2 className="mountain-title">
            выше гор<span>могут быть только горы</span>
          </h2>
          <svg
            className="mountain-graph"
            viewBox="0 0 250 140"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {heights.map((height, i) => (
              <g key={i}>
                <rect
                  x={i * 10}
                  y="0"
                  width="6.8"
                  height="132"
                  fill="#3c9d50"
                  opacity=".38"
                />
                <rect
                  x={i * 10}
                  y="0"
                  width="6.8"
                  height={height}
                  fill="#86ec91"
                />
              </g>
            ))}
          </svg>
          <span className="grain" aria-hidden="true" />
        </div>
      </div>
    </>
  );
}
