// DevUI Card 25 — Neon Grouped Bars
// Zelfstandig bestand met schaalbare SVG-grafiek en eigen styling.
import { useState } from "react";

export const cardMeta = {
  title: "Card 25 — Neon Grouped Bars",
  category: "Dashboard / Bar charts",
  description: "Zes groepen smalle paarse, blauwe en turquoise staven.",
  tags: ["Bar chart", "Grouped", "Neon"],
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const colors = ["#8a54d8", "#437ceb", "#29b8ee", "#00f2c7", "#4cffc9"];
const values = [
  [117, 135, 166, 78, 68],
  [46, 53, 125, 97, 86],
  [37, 43, 50, 43, 37],
  [73, 83, 102, 184, 160],
  [91, 103, 166, 144, 127],
  [22, 26, 32, 16, 14],
];

export default function Cards25() {
  const [selected, setSelected] = useState(true);
  return (
    <>
      <style>{`.devui-card-25 { width:320px; max-width:100%; container-type:inline-size; }
.devui-card-25, .devui-card-25 * { box-sizing:border-box; }
.devui-card-25 .chart-card { position:relative; isolation:isolate; width:100%; aspect-ratio:158 / 168; overflow:hidden; border:1px solid rgba(255,255,255,.045); border-radius:3cqw; color:#f5f5f4; background:#020303; font-family:Arial,Helvetica,sans-serif; box-shadow:0 5cqw 9cqw -3cqw rgba(0,0,0,.55); }
.devui-card-25 .chart-card::before { content:''; position:absolute; z-index:-1; inset:0; pointer-events:none; background:none; }
.devui-card-25 .chart-heading { position:relative; z-index:2; padding:6cqw 6cqw 0; }
.devui-card-25 p, .devui-card-25 h2 { margin:0; }
.devui-card-25 .income-label { margin-bottom:1.4cqw; color:#d7d9d8; font-size:4cqw; line-height:1.15; }
.devui-card-25 .income-line { display:flex; align-items:baseline; gap:3cqw; white-space:nowrap; }
.devui-card-25 .income-value { font:600 8.8cqw/1.1 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:-.35px; }
.devui-card-25 .income-delta { color:#15dda1; font-size:3.8cqw; font-weight:600; }
.devui-card-25 .income-compare { margin-top:2.1cqw; color:#464a47; font-size:3.7cqw; line-height:1.15; white-space:nowrap; letter-spacing:-.1px; }
.devui-card-25 .chart-insight { position:absolute; top:6.3cqw; right:5.5cqw; display:grid; place-items:center; width:8cqw; height:8cqw; margin:0; padding:0; border:1px solid rgba(112,255,108,.07); border-radius:50%; color:#88f86b; background:#0e1b0c; cursor:pointer; appearance:none; }
.devui-card-25 .chart-insight svg { width:5cqw; height:5cqw; filter:drop-shadow(0 0 3px #5ce545); }
.devui-card-25 .chart-insight[aria-pressed="false"] { color:#657263; background:#0b100c; }
.devui-card-25 .chart-insight[aria-pressed="false"] svg { filter:none; }
.devui-card-25 .chart-insight:focus-visible, .devui-card-25 .chart-options:focus-visible { outline:2px solid #9cff8b; outline-offset:3px; }
.devui-card-25 .chart-options { position:absolute; right:6.1cqw; top:5cqw; border:0; padding:0; width:5cqw; height:10cqw; background:none; color:#747572; cursor:pointer; }
.devui-card-25 .chart-options svg { width:100%; height:100%; }
.devui-card-25 .metric-pair { display:grid; grid-template-columns:1fr 1fr; gap:4cqw; padding:7cqw 6cqw 0; }
.devui-card-25 .metric-label { display:flex; align-items:center; gap:1.5cqw; margin-bottom:2cqw; font-size:3.8cqw; color:#93998f; }
.devui-card-25 .metric-star { color:#67ed6e; font-size:4.8cqw; line-height:1; }
.devui-card-25 .metric-bag { width:3.8cqw; height:3.8cqw; color:#e9cd39; }
.devui-card-25 .metric-value { font:400 7.6cqw/1.1 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:-.2px; white-space:nowrap; }
.devui-card-25 .metric-change { margin-top:2cqw; color:#3d433e; font-size:3cqw; white-space:nowrap; }
.devui-card-25 .metric-change strong { margin-right:1.2cqw; font-weight:600; color:#19d79a; }
.devui-card-25 .chart-svg { position:absolute; display:block; left:7%; bottom:5%; width:86%; height:64%; overflow:visible; }
.devui-card-25 .chart-svg text { font-family:'SFMono-Regular',Consolas,'Liberation Mono',monospace; }
.devui-card-25 .axis-label { fill:#cccfc8; font-size:10px; }
.devui-card-25 .chart-value-label { fill:#d8eed1; font-size:9px; }
@media(prefers-reduced-motion:reduce) { .devui-card-25 *, .devui-card-25 *::before, .devui-card-25 *::after { transition:none !important; animation:none !important; } }

.devui-card-25 .grouped-bar { filter:drop-shadow(0 0 1.1px currentColor); }`}</style>
      <div className="devui-card-25">
        <section className="chart-card" aria-label="Neon Grouped Bars">
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
            aria-label="Inkomen per weekdag van maandag tot zaterdag"
          >
            {values.map((group, g) => (
              <g key={g}>
                {group.map((value, s) => (
                  <rect
                    className="grouped-bar"
                    key={s}
                    x={g * 47 + s * 6 + 1}
                    y={190 - value}
                    width="4.5"
                    height={value}
                    fill={colors[s]}
                  />
                ))}
                <text
                  className="axis-label"
                  x={g * 47 + 15}
                  y="212"
                  textAnchor="middle"
                >
                  {days[g]}
                </text>
                <path
                  d={`M${g * 47 + 39} 196v14`}
                  stroke="#1c2023"
                  strokeWidth=".5"
                />
              </g>
            ))}
          </svg>
        </section>
      </div>
    </>
  );
}
