// DevUI Card 31 — Crimson Floating Bars
// Zelfstandig bestand met schaalbare SVG-grafiek en eigen styling.
import { useState, useId } from "react";

export const cardMeta = {
  title: "Card 31 — Crimson Floating Bars",
  category: "Dashboard / Bar charts",
  description:
    "Rode zwevende staven met een zachte gloed en vervagende onderkant.",
  tags: ["Floating bars", "Red", "Glow"],
};

const positions = [
  114, 62, 88, 70, 76, 96, 114, 36, 18, 36, 62, 88, 102, 80, 107, 115, 98, 80,
  84,
];

export default function Cards31() {
  const [showValues, setShowValues] = useState(false);
  const gradientId = useId();
  return (
    <>
      <style>{`.devui-card-31 { width:320px; max-width:100%; container-type:inline-size; }
.devui-card-31, .devui-card-31 * { box-sizing:border-box; }
.devui-card-31 .chart-card { position:relative; isolation:isolate; width:100%; aspect-ratio:158 / 168; overflow:hidden; border:1px solid rgba(255,255,255,.045); border-radius:3cqw; color:#f5f5f4; background:#020303; font-family:Arial,Helvetica,sans-serif; box-shadow:0 5cqw 9cqw -3cqw rgba(0,0,0,.55); }
.devui-card-31 .chart-card::before { content:''; position:absolute; z-index:-1; inset:0; pointer-events:none; background:radial-gradient(ellipse 75% 55% at 50% 70%,rgba(220,0,0,.3),transparent 93%); }
.devui-card-31 .chart-heading { position:relative; z-index:2; padding:6cqw 6cqw 0; }
.devui-card-31 p, .devui-card-31 h2 { margin:0; }
.devui-card-31 .income-label { margin-bottom:1.4cqw; color:#d7d9d8; font-size:4cqw; line-height:1.15; }
.devui-card-31 .income-line { display:flex; align-items:baseline; gap:3cqw; white-space:nowrap; }
.devui-card-31 .income-value { font:600 8.8cqw/1.1 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:-.35px; }
.devui-card-31 .income-delta { color:#15dda1; font-size:3.8cqw; font-weight:600; }
.devui-card-31 .income-compare { margin-top:2.1cqw; color:#464a47; font-size:3.7cqw; line-height:1.15; white-space:nowrap; letter-spacing:-.1px; }
.devui-card-31 .chart-insight { position:absolute; top:6.3cqw; right:5.5cqw; display:grid; place-items:center; width:8cqw; height:8cqw; margin:0; padding:0; border:1px solid rgba(112,255,108,.07); border-radius:50%; color:#88f86b; background:#0e1b0c; cursor:pointer; appearance:none; }
.devui-card-31 .chart-insight svg { width:5cqw; height:5cqw; filter:drop-shadow(0 0 3px #5ce545); }
.devui-card-31 .chart-insight[aria-pressed="false"] { color:#657263; background:#0b100c; }
.devui-card-31 .chart-insight[aria-pressed="false"] svg { filter:none; }
.devui-card-31 .chart-insight:focus-visible, .devui-card-31 .chart-options:focus-visible { outline:2px solid #9cff8b; outline-offset:3px; }
.devui-card-31 .chart-options { position:absolute; right:6.1cqw; top:5cqw; border:0; padding:0; width:5cqw; height:10cqw; background:none; color:#747572; cursor:pointer; }
.devui-card-31 .chart-options svg { width:100%; height:100%; }
.devui-card-31 .metric-pair { display:grid; grid-template-columns:1fr 1fr; gap:4cqw; padding:7cqw 6cqw 0; }
.devui-card-31 .metric-label { display:flex; align-items:center; gap:1.5cqw; margin-bottom:2cqw; font-size:3.8cqw; color:#93998f; }
.devui-card-31 .metric-star { color:#67ed6e; font-size:4.8cqw; line-height:1; }
.devui-card-31 .metric-bag { width:3.8cqw; height:3.8cqw; color:#e9cd39; }
.devui-card-31 .metric-value { font:400 7.6cqw/1.1 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:-.2px; white-space:nowrap; }
.devui-card-31 .metric-change { margin-top:2cqw; color:#3d433e; font-size:3cqw; white-space:nowrap; }
.devui-card-31 .metric-change strong { margin-right:1.2cqw; font-weight:600; color:#19d79a; }
.devui-card-31 .chart-svg { position:absolute; display:block; left:7%; bottom:5%; width:86%; height:64%; overflow:visible; }
.devui-card-31 .chart-svg text { font-family:'SFMono-Regular',Consolas,'Liberation Mono',monospace; }
.devui-card-31 .axis-label { fill:#cccfc8; font-size:10px; }
.devui-card-31 .chart-value-label { fill:#d8eed1; font-size:9px; }
@media(prefers-reduced-motion:reduce) { .devui-card-31 *, .devui-card-31 *::before, .devui-card-31 *::after { transition:none !important; animation:none !important; } }

.devui-card-31 .red-candle { filter:drop-shadow(0 0 3px rgba(255,13,13,.7)); }`}</style>
      <div className="devui-card-31">
        <section className="chart-card" aria-label="Crimson Floating Bars">
          <header className="chart-heading">
            <p className="income-label">Income</p>
            <div className="income-line">
              <h2 className="income-value">$32,134</h2>
              <span className="income-delta">+2.5%</span>
            </div>
            <p className="income-compare">Compare to $21,340 last month</p>
          </header>
          <button
            className="chart-options"
            type="button"
            aria-label="Toon grafiekwaarden"
            aria-pressed={showValues}
            onClick={() => setShowValues(!showValues)}
          >
            <svg viewBox="0 0 10 24" fill="currentColor" aria-hidden="true">
              <circle cx="5" cy="5" r="1" />
              <circle cx="5" cy="12" r="1" />
              <circle cx="5" cy="19" r="1" />
            </svg>
          </button>

          <svg
            className="chart-svg"
            viewBox="0 0 280 218"
            role="img"
            aria-label="Rode trend over negen perioden"
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff1717" />
                <stop offset="58%" stopColor="#cf0909" stopOpacity=".8" />
                <stop offset="100%" stopColor="#920000" stopOpacity="0" />
              </linearGradient>
            </defs>
            {positions.map((top, i) => (
              <g key={i}>
                <rect
                  className="red-candle"
                  x={i * 15 + 3}
                  y={top}
                  width="8.5"
                  height="53"
                  rx="4.25"
                  fill={`url(#${gradientId})`}
                />
                {showValues && (
                  <text
                    className="chart-value-label"
                    x={i * 15 + 7}
                    y={top - 5}
                    textAnchor="middle"
                  >
                    {190 - top}
                  </text>
                )}
              </g>
            ))}
            {Array.from({ length: 9 }, (_, i) => (
              <text
                className="axis-label"
                key={i}
                x={i * 33.3 + 8}
                y="212"
                textAnchor="middle"
              >
                {String(i + 1).padStart(2, "0")}
              </text>
            ))}
          </svg>
        </section>
      </div>
    </>
  );
}
