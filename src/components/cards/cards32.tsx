// DevUI Card 32 — Lime Micro Histogram
// Zelfstandig bestand met schaalbare SVG-grafiek en eigen styling.
import { useState, useId } from "react";

export const cardMeta = {
  title: "Card 32 — Lime Micro Histogram",
  category: "Dashboard / Bar charts",
  description:
    "Dicht raster van dunne mintgroene en limekleurige histogramstaven.",
  tags: ["Histogram", "Lime", "Micro bars"],
};

const bins = [65, 74, 112, 32, 74, 32, 74, 146, 112, 94, 112, 146, 179, 146];

export default function Cards32() {
  const [showValues, setShowValues] = useState(false);
  const gradientId = useId();
  return (
    <>
      <style>{`.devui-card-32 { width:320px; max-width:100%; container-type:inline-size; }
.devui-card-32, .devui-card-32 * { box-sizing:border-box; }
.devui-card-32 .chart-card { position:relative; isolation:isolate; width:100%; aspect-ratio:158 / 168; overflow:hidden; border:1px solid rgba(255,255,255,.045); border-radius:3cqw; color:#f5f5f4; background:#020303; font-family:Arial,Helvetica,sans-serif; box-shadow:0 5cqw 9cqw -3cqw rgba(0,0,0,.55); }
.devui-card-32 .chart-card::before { content:''; position:absolute; z-index:-1; inset:0; pointer-events:none; background:radial-gradient(ellipse 79% 45% at 62% 74%,rgba(0,128,41,.15),transparent 90%); }
.devui-card-32 .chart-heading { position:relative; z-index:2; padding:6cqw 6cqw 0; }
.devui-card-32 p, .devui-card-32 h2 { margin:0; }
.devui-card-32 .income-label { margin-bottom:1.4cqw; color:#d7d9d8; font-size:4cqw; line-height:1.15; }
.devui-card-32 .income-line { display:flex; align-items:baseline; gap:3cqw; white-space:nowrap; }
.devui-card-32 .income-value { font:600 8.8cqw/1.1 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:-.35px; }
.devui-card-32 .income-delta { color:#15dda1; font-size:3.8cqw; font-weight:600; }
.devui-card-32 .income-compare { margin-top:2.1cqw; color:#464a47; font-size:3.7cqw; line-height:1.15; white-space:nowrap; letter-spacing:-.1px; }
.devui-card-32 .chart-insight { position:absolute; top:6.3cqw; right:5.5cqw; display:grid; place-items:center; width:8cqw; height:8cqw; margin:0; padding:0; border:1px solid rgba(112,255,108,.07); border-radius:50%; color:#88f86b; background:#0e1b0c; cursor:pointer; appearance:none; }
.devui-card-32 .chart-insight svg { width:5cqw; height:5cqw; filter:drop-shadow(0 0 3px #5ce545); }
.devui-card-32 .chart-insight[aria-pressed="false"] { color:#657263; background:#0b100c; }
.devui-card-32 .chart-insight[aria-pressed="false"] svg { filter:none; }
.devui-card-32 .chart-insight:focus-visible, .devui-card-32 .chart-options:focus-visible { outline:2px solid #9cff8b; outline-offset:3px; }
.devui-card-32 .chart-options { position:absolute; right:6.1cqw; top:5cqw; border:0; padding:0; width:5cqw; height:10cqw; background:none; color:#747572; cursor:pointer; }
.devui-card-32 .chart-options svg { width:100%; height:100%; }
.devui-card-32 .metric-pair { display:grid; grid-template-columns:1fr 1fr; gap:4cqw; padding:7cqw 6cqw 0; }
.devui-card-32 .metric-label { display:flex; align-items:center; gap:1.5cqw; margin-bottom:2cqw; font-size:3.8cqw; color:#93998f; }
.devui-card-32 .metric-star { color:#67ed6e; font-size:4.8cqw; line-height:1; }
.devui-card-32 .metric-bag { width:3.8cqw; height:3.8cqw; color:#e9cd39; }
.devui-card-32 .metric-value { font:400 7.6cqw/1.1 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:-.2px; white-space:nowrap; }
.devui-card-32 .metric-change { margin-top:2cqw; color:#3d433e; font-size:3cqw; white-space:nowrap; }
.devui-card-32 .metric-change strong { margin-right:1.2cqw; font-weight:600; color:#19d79a; }
.devui-card-32 .chart-svg { position:absolute; display:block; left:7%; bottom:5%; width:86%; height:64%; overflow:visible; }
.devui-card-32 .chart-svg text { font-family:'SFMono-Regular',Consolas,'Liberation Mono',monospace; }
.devui-card-32 .axis-label { fill:#cccfc8; font-size:10px; }
.devui-card-32 .chart-value-label { fill:#d8eed1; font-size:9px; }
@media(prefers-reduced-motion:reduce) { .devui-card-32 *, .devui-card-32 *::before, .devui-card-32 *::after { transition:none !important; animation:none !important; } }

.devui-card-32 .micro-bar { filter:drop-shadow(0 0 1.5px rgba(75,255,145,.55)); }`}</style>
      <div className="devui-card-32">
        <section className="chart-card" aria-label="Lime Micro Histogram">
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
            aria-label="Fijnmazige inkomensverdeling over negen perioden"
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#39ffe4" />
                <stop offset="65%" stopColor="#45f17c" />
                <stop offset="100%" stopColor="#99ff35" />
              </linearGradient>
            </defs>
            {bins.flatMap((height, b) =>
              Array.from({ length: 4 }, (_, s) => (
                <rect
                  className="micro-bar"
                  key={`${b}-${s}`}
                  x={(b * 4 + s) * 5 + 1}
                  y={190 - height}
                  width="3.5"
                  height={height}
                  fill={`url(#${gradientId})`}
                />
              )),
            )}
            {showValues &&
              bins.map((value, i) => (
                <text
                  className="chart-value-label"
                  key={i}
                  x={i * 20 + 8}
                  y={184 - value}
                  textAnchor="middle"
                >
                  {value}
                </text>
              ))}
            {Array.from({ length: 9 }, (_, i) => (
              <text
                className="axis-label"
                key={i}
                x={i * 33.3 + 8}
                y="212"
                textAnchor="middle"
              >
                {String(181 + i)}
              </text>
            ))}
          </svg>
        </section>
      </div>
    </>
  );
}
