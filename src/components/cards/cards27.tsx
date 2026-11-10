// DevUI Card 27 — Green Segments
// Zelfstandig bestand met schaalbare SVG-grafiek en eigen styling.
import { useState } from "react";

export const cardMeta = {
  title: "Card 27 — Green Segments",
  category: "Dashboard / Bar charts",
  description:
    "Zeven rijen groene voortgangssegmenten met zachte neonreflectie.",
  tags: ["Segments", "Green", "Progress"],
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const counts = [2, 1, 2, 4, 1, 3, 5];

export default function Cards27() {
  const [selected, setSelected] = useState(true);
  return (
    <>
      <style>{`.devui-card-27 { width:320px; max-width:100%; container-type:inline-size; }
.devui-card-27, .devui-card-27 * { box-sizing:border-box; }
.devui-card-27 .chart-card { position:relative; isolation:isolate; width:100%; aspect-ratio:158 / 168; overflow:hidden; border:1px solid rgba(255,255,255,.045); border-radius:3cqw; color:#f5f5f4; background:#020303; font-family:Arial,Helvetica,sans-serif; box-shadow:0 5cqw 9cqw -3cqw rgba(0,0,0,.55); }
.devui-card-27 .chart-card::before { content:''; position:absolute; z-index:-1; inset:0; pointer-events:none; background:radial-gradient(ellipse 69% 55% at 41% 76%,rgba(59,200,29,.13),transparent 83%); }
.devui-card-27 .chart-heading { position:relative; z-index:2; padding:6cqw 6cqw 0; }
.devui-card-27 p, .devui-card-27 h2 { margin:0; }
.devui-card-27 .income-label { margin-bottom:1.4cqw; color:#d7d9d8; font-size:4cqw; line-height:1.15; }
.devui-card-27 .income-line { display:flex; align-items:baseline; gap:3cqw; white-space:nowrap; }
.devui-card-27 .income-value { font:600 8.8cqw/1.1 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:-.35px; }
.devui-card-27 .income-delta { color:#15dda1; font-size:3.8cqw; font-weight:600; }
.devui-card-27 .income-compare { margin-top:2.1cqw; color:#464a47; font-size:3.7cqw; line-height:1.15; white-space:nowrap; letter-spacing:-.1px; }
.devui-card-27 .chart-insight { position:absolute; top:6.3cqw; right:5.5cqw; display:grid; place-items:center; width:8cqw; height:8cqw; margin:0; padding:0; border:1px solid rgba(112,255,108,.07); border-radius:50%; color:#88f86b; background:#0e1b0c; cursor:pointer; appearance:none; }
.devui-card-27 .chart-insight svg { width:5cqw; height:5cqw; filter:drop-shadow(0 0 3px #5ce545); }
.devui-card-27 .chart-insight[aria-pressed="false"] { color:#657263; background:#0b100c; }
.devui-card-27 .chart-insight[aria-pressed="false"] svg { filter:none; }
.devui-card-27 .chart-insight:focus-visible, .devui-card-27 .chart-options:focus-visible { outline:2px solid #9cff8b; outline-offset:3px; }
.devui-card-27 .chart-options { position:absolute; right:6.1cqw; top:5cqw; border:0; padding:0; width:5cqw; height:10cqw; background:none; color:#747572; cursor:pointer; }
.devui-card-27 .chart-options svg { width:100%; height:100%; }
.devui-card-27 .metric-pair { display:grid; grid-template-columns:1fr 1fr; gap:4cqw; padding:7cqw 6cqw 0; }
.devui-card-27 .metric-label { display:flex; align-items:center; gap:1.5cqw; margin-bottom:2cqw; font-size:3.8cqw; color:#93998f; }
.devui-card-27 .metric-star { color:#67ed6e; font-size:4.8cqw; line-height:1; }
.devui-card-27 .metric-bag { width:3.8cqw; height:3.8cqw; color:#e9cd39; }
.devui-card-27 .metric-value { font:400 7.6cqw/1.1 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:-.2px; white-space:nowrap; }
.devui-card-27 .metric-change { margin-top:2cqw; color:#3d433e; font-size:3cqw; white-space:nowrap; }
.devui-card-27 .metric-change strong { margin-right:1.2cqw; font-weight:600; color:#19d79a; }
.devui-card-27 .chart-svg { position:absolute; display:block; left:7%; bottom:5%; width:86%; height:64%; overflow:visible; }
.devui-card-27 .chart-svg text { font-family:'SFMono-Regular',Consolas,'Liberation Mono',monospace; }
.devui-card-27 .axis-label { fill:#cccfc8; font-size:10px; }
.devui-card-27 .chart-value-label { fill:#d8eed1; font-size:9px; }
@media(prefers-reduced-motion:reduce) { .devui-card-27 *, .devui-card-27 *::before, .devui-card-27 *::after { transition:none !important; animation:none !important; } }

.devui-card-27 .segment-active { filter:drop-shadow(0 0 4px rgba(105,255,60,.82)); }`}</style>
      <div className="devui-card-27">
        <section className="chart-card" aria-label="Green Segments">
          <header className="chart-heading">
            <p className="income-label">Income</p>
            <div className="income-line">
              <h2 className="income-value">$32,134</h2>
              <span className="income-delta">+2.5%</span>
            </div>
            <p className="income-compare">Compare to $21,340 last month</p>
          </header>
          <button
            className="chart-insight"
            type="button"
            aria-label="Markeer inkomensinzicht"
            aria-pressed={selected}
            onClick={() => setSelected(!selected)}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="m12 2 3.1 6.9L22 12l-6.9 3.1L12 22l-3.1-6.9L2 12l6.9-3.1Z" />
            </svg>
          </button>

          <svg
            className="chart-svg"
            viewBox="0 0 280 218"
            role="img"
            aria-label="Voortgang per dag van de week"
          >
            {days.map((day, r) => (
              <g key={day}>
                <text className="axis-label" x="0" y={17 + r * 31}>
                  {day}
                </text>
                {Array.from({ length: 6 }, (_, c) => (
                  <rect
                    key={c}
                    className={c < counts[r] ? "segment-active" : ""}
                    x={30 + c * 42}
                    y={8 + r * 31}
                    width="38"
                    height="7.5"
                    rx="3.75"
                    fill={c < counts[r] ? "#85ff5e" : "#292c29"}
                  />
                ))}
                <path
                  d={`M0 ${29 + r * 31}H279`}
                  stroke="#131711"
                  strokeWidth=".65"
                />
              </g>
            ))}
          </svg>
        </section>
      </div>
    </>
  );
}
