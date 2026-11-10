// DevUI Card 21 — Speed & Efficiency II
// Zelfstandig bestand; geen extra stylesheets, fonts of iconenpakketten nodig.

export const cardMeta = {
  title: "Card 21 — Speed & Efficiency II",
  category: "Dark / Light effects",
  description: "Brede performance-kaart met een cyaan-violette lichtboog.",
  tags: ["Performance", "Cyan", "Glow"],
};

export default function Cards21() {
  return (
    <>
      <style>{`.devui-card-21 { width:320px; max-width:100%; container-type:inline-size; }
.devui-card-21, .devui-card-21 * { box-sizing:border-box; }
.devui-card-21 .panel { position:relative; isolation:isolate; width:100%; overflow:hidden; color:#f6f5f9; font-family:Arial,Helvetica,sans-serif; background:#090a0e; }
.devui-card-21 h2, .devui-card-21 h3, .devui-card-21 p { margin:0; }
.devui-card-21 button, .devui-card-21 input { font:inherit; }
.devui-card-21 button { cursor:pointer; -webkit-tap-highlight-color:transparent; }
.devui-card-21 button:focus-visible, .devui-card-21 input:focus-visible { outline:2px solid #a6b4ff; outline-offset:3px; }
.devui-card-21 .grain { position:absolute; z-index:3; inset:0; pointer-events:none; opacity:.13; background-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22160%22%20height%3D%22160%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%22.8%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Cpath%20fill%3D%22white%22%20filter%3D%22url%28%23n%29%22%20opacity%3D%22.4%22%20d%3D%22M0%200h160v160H0z%22%2F%3E%3C%2Fsvg%3E"); mix-blend-mode:screen; }
.devui-card-21 svg { display:block; }
@media(prefers-reduced-motion:reduce) { .devui-card-21 *, .devui-card-21 *::before, .devui-card-21 *::after { animation:none !important; transition:none !important; } }

.devui-card-21 .panel { aspect-ratio:1.525; border-radius:11cqw; background:radial-gradient(ellipse at -17% 49%,rgba(100,140,150,.13),transparent 65%),#131b20; }
.devui-card-21 .panel::after { content:''; position:absolute; z-index:-1; inset:0; background:radial-gradient(ellipse 135% 180% at -8% -33%,transparent 78%,#183451 84%,#89cee7 91%,#eff9ff 95%,#ad8ce4 100%); filter:blur(1cqw); }
.devui-card-21 .speed-gauge { position:absolute; left:-33%; top:6%; width:67%; height:86%; opacity:.44; }
.devui-card-21 .speed-copy { position:relative; margin-left:36%; width:57%; padding-top:13%; }
.devui-card-21 h2 { margin-bottom:3cqw; font-size:4.15cqw; font-weight:500; line-height:1.22; color:#e0e7eb; }
.devui-card-21 p { color:#839096; font-size:3.5cqw; line-height:1.25; }`}</style>
      <div className="devui-card-21">
        <article
          className="panel"
          aria-label="Optimized For Speed & Efficiency"
        >
          <svg
            className="speed-gauge"
            viewBox="0 0 200 200"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="100" cy="100" r="88" stroke="#31454e" strokeWidth="3" />
            <circle
              cx="100"
              cy="100"
              r="77"
              stroke="#3c525c"
              strokeWidth="1.5"
            />
            <path
              d="M100 15v12m0 146v12M15 100h12m146 0h12M40 40l9 9m102 102 9 9M40 160l9-9M151 49l9-9"
              stroke="#34434b"
              strokeWidth="2"
            />
            <path d="M100 100H176" stroke="#7b8e93" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="4" fill="#51626b" />
            <text x="145" y="104" fontSize="8" fill="#435660" stroke="none">
              100
            </text>
          </svg>
          <div className="speed-copy">
            <h2>Optimized For Speed &amp; Efficiency</h2>
            <p>
              Built for quick load times and smooth interactions, ensuring a
              seamless, high-performance experience for users.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
