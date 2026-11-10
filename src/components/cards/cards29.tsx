// DevUI Card 29 — Stacked Neon Capsules
// Zelfstandig bestand met schaalbare SVG-grafiek en eigen styling.
import { useState } from "react";

export const cardMeta = {
  title: "Card 29 — Stacked Neon Capsules",
  category: "Dashboard / Bar charts",
  description:
    "Acht stapels afgeronde groene, cyaan, paarse en roze segmenten.",
  tags: ["Stacked bars", "Capsules", "Neon"],
};

const colors = [
  "#80ff54",
  "#15d9e2",
  "#7047be",
  "#d600ec",
  "#fb2b91",
  "#35403d",
];
const stacks = [
  [91, 12, 12, 14, 28, 11],
  [28, 28, 28, 28, 28, 28],
  [21, 22, 24, 22, 28, 51],
  [61, 22, 20, 22, 28, 15],
  [23, 24, 24, 22, 28, 47],
  [17, 18, 18, 18, 28, 69],
  [63, 5, 7, 6, 28, 57],
  [95, 12, 12, 14, 28, 7],
];

export default function Cards29() {
  const [selected, setSelected] = useState(true);
  return (
    <>
      <style>{`.devui-card-29 { width:320px; max-width:100%; container-type:inline-size; }
.devui-card-29, .devui-card-29 * { box-sizing:border-box; }
.devui-card-29 .chart-card { position:relative; isolation:isolate; width:100%; aspect-ratio:158 / 168; overflow:hidden; border:1px solid rgba(255,255,255,.045); border-radius:3cqw; color:#f5f5f4; background:#020303; font-family:Arial,Helvetica,sans-serif; box-shadow:0 5cqw 9cqw -3cqw rgba(0,0,0,.55); }
.devui-card-29 .chart-card::before { content:''; position:absolute; z-index:-1; inset:0; pointer-events:none; background:radial-gradient(ellipse 70% 55% at 45% 60%,rgba(34,79,17,.13),transparent 85%); }
.devui-card-29 .chart-heading { position:relative; z-index:2; padding:6cqw 6cqw 0; }
.devui-card-29 p, .devui-card-29 h2 { margin:0; }
.devui-card-29 .income-label { margin-bottom:1.4cqw; color:#d7d9d8; font-size:4cqw; line-height:1.15; }
.devui-card-29 .income-line { display:flex; align-items:baseline; gap:3cqw; white-space:nowrap; }
.devui-card-29 .income-value { font:600 8.8cqw/1.1 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:-.35px; }
.devui-card-29 .income-delta { color:#15dda1; font-size:3.8cqw; font-weight:600; }
.devui-card-29 .income-compare { margin-top:2.1cqw; color:#464a47; font-size:3.7cqw; line-height:1.15; white-space:nowrap; letter-spacing:-.1px; }
.devui-card-29 .chart-insight { position:absolute; top:6.3cqw; right:5.5cqw; display:grid; place-items:center; width:8cqw; height:8cqw; margin:0; padding:0; border:1px solid rgba(112,255,108,.07); border-radius:50%; color:#88f86b; background:#0e1b0c; cursor:pointer; appearance:none; }
.devui-card-29 .chart-insight svg { width:5cqw; height:5cqw; filter:drop-shadow(0 0 3px #5ce545); }
.devui-card-29 .chart-insight[aria-pressed="false"] { color:#657263; background:#0b100c; }
.devui-card-29 .chart-insight[aria-pressed="false"] svg { filter:none; }
.devui-card-29 .chart-insight:focus-visible, .devui-card-29 .chart-options:focus-visible { outline:2px solid #9cff8b; outline-offset:3px; }
.devui-card-29 .chart-options { position:absolute; right:6.1cqw; top:5cqw; border:0; padding:0; width:5cqw; height:10cqw; background:none; color:#747572; cursor:pointer; }
.devui-card-29 .chart-options svg { width:100%; height:100%; }
.devui-card-29 .metric-pair { display:grid; grid-template-columns:1fr 1fr; gap:4cqw; padding:7cqw 6cqw 0; }
.devui-card-29 .metric-label { display:flex; align-items:center; gap:1.5cqw; margin-bottom:2cqw; font-size:3.8cqw; color:#93998f; }
.devui-card-29 .metric-star { color:#67ed6e; font-size:4.8cqw; line-height:1; }
.devui-card-29 .metric-bag { width:3.8cqw; height:3.8cqw; color:#e9cd39; }
.devui-card-29 .metric-value { font:400 7.6cqw/1.1 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:-.2px; white-space:nowrap; }
.devui-card-29 .metric-change { margin-top:2cqw; color:#3d433e; font-size:3cqw; white-space:nowrap; }
.devui-card-29 .metric-change strong { margin-right:1.2cqw; font-weight:600; color:#19d79a; }
.devui-card-29 .chart-svg { position:absolute; display:block; left:7%; bottom:5%; width:86%; height:64%; overflow:visible; }
.devui-card-29 .chart-svg text { font-family:'SFMono-Regular',Consolas,'Liberation Mono',monospace; }
.devui-card-29 .axis-label { fill:#cccfc8; font-size:10px; }
.devui-card-29 .chart-value-label { fill:#d8eed1; font-size:9px; }
@media(prefers-reduced-motion:reduce) { .devui-card-29 *, .devui-card-29 *::before, .devui-card-29 *::after { transition:none !important; animation:none !important; } }

.devui-card-29 .capsule { filter:drop-shadow(0 0 2px rgba(71,255,117,.25)); }`}</style>
      <div className="devui-card-29">
        <section className="chart-card" aria-label="Stacked Neon Capsules">
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
            aria-label="Acht perioden met gestapelde gekleurde bijdragen"
          >
            {stacks.map((heights, c) => {
              let y = 4;
              return (
                <g key={c}>
                  {heights.map((height, s) => {
                    const top = y;
                    y += height + 4;
                    return (
                      <rect
                        key={s}
                        className={s < 5 ? "capsule" : ""}
                        x={c * 35.5 + 8}
                        y={top}
                        width="8.5"
                        height={height}
                        rx="4.25"
                        fill={colors[s]}
                      />
                    );
                  })}
                  <text
                    className="axis-label"
                    x={c * 35.5 + 12}
                    y="212"
                    textAnchor="middle"
                  >
                    {`$${c + 1}`.replace("$", "$0")}
                  </text>
                </g>
              );
            })}
          </svg>
        </section>
      </div>
    </>
  );
}
