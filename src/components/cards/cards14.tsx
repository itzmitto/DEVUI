// DevUI Card 14 — Product & Design
// Zelfstandig bestand; geen extra stylesheets, fonts of iconenpakketten nodig.

export const cardMeta = {
  title: "Card 14 — Product & Design",
  category: "Dark / Light effects",
  description:
    "Pastelkleurig glas met een warme roze kern en een subtiele lichtboog.",
  tags: ["Pastel", "Glass", "Design"],
};

export default function Cards14() {
  return (
    <>
      <style>{`.devui-card-14 { width:320px; max-width:100%; container-type:inline-size; }
.devui-card-14, .devui-card-14 * { box-sizing:border-box; }
.devui-card-14 .panel { position:relative; isolation:isolate; width:100%; overflow:hidden; color:#f6f5f9; font-family:Arial,Helvetica,sans-serif; background:#090a0e; }
.devui-card-14 h2, .devui-card-14 h3, .devui-card-14 p { margin:0; }
.devui-card-14 button, .devui-card-14 input { font:inherit; }
.devui-card-14 button { cursor:pointer; -webkit-tap-highlight-color:transparent; }
.devui-card-14 button:focus-visible, .devui-card-14 input:focus-visible { outline:2px solid #a6b4ff; outline-offset:3px; }
.devui-card-14 .grain { position:absolute; z-index:3; inset:0; pointer-events:none; opacity:.13; background-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22160%22%20height%3D%22160%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%22.8%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Cpath%20fill%3D%22white%22%20filter%3D%22url%28%23n%29%22%20opacity%3D%22.4%22%20d%3D%22M0%200h160v160H0z%22%2F%3E%3C%2Fsvg%3E"); mix-blend-mode:screen; }
.devui-card-14 svg { display:block; }
@media(prefers-reduced-motion:reduce) { .devui-card-14 *, .devui-card-14 *::before, .devui-card-14 *::after { animation:none !important; transition:none !important; } }

.devui-card-14 .panel { aspect-ratio:1.4; border-radius:21cqw; background:radial-gradient(ellipse at 50% 28%,#ff794a 0%,#ff64a0 27%,#ec8fdb 48%,#b4d6ff 78%); box-shadow:inset 0 1cqw 1.8cqw rgba(255,255,255,.9),inset 0 -1.4cqw 2.5cqw #91beff,inset 1cqw 0 2cqw rgba(213,236,255,.7); }
.devui-card-14 .panel::before { content:''; position:absolute; inset:10%; border-radius:50%; background:radial-gradient(ellipse,#ff3c82 10%,transparent 68%); filter:blur(5cqw); opacity:.35; }
.devui-card-14 .design-arc { position:absolute; width:66%; left:17%; top:15%; color:#ffe0c6; opacity:.65; filter:drop-shadow(0 0 3px #ffe4a1); }
.devui-card-14 .product-title { position:absolute; left:0; right:0; top:43%; text-align:center; font-size:8cqw; line-height:1.2; font-weight:400; letter-spacing:-.4px; color:#ffdeeb; text-shadow:0 0 2cqw #ffd5e5; filter:blur(.3cqw); opacity:.8; }`}</style>
      <div className="devui-card-14">
        <div
          className="panel"
          role="img"
          aria-label="Product & Design, warm roze en lichtblauw glas"
        >
          <svg
            className="design-arc"
            viewBox="0 0 200 84"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7 28H193M35 62Q100-7 165 62"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <circle
              cx="100"
              cy="28"
              r="5"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path d="M20 25v6m160-6v6" stroke="currentColor" />
          </svg>
          <h2 className="product-title">Product&amp;Design</h2>
        </div>
      </div>
    </>
  );
}
