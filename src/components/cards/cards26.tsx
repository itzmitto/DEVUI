// DevUI Card 26 — Spectrum Horizontal
// Zelfstandig bestand met schaalbare SVG-grafiek en eigen styling.

export const cardMeta = {
  title: "Card 26 — Spectrum Horizontal",
  category: "Dashboard / Bar charts",
  description:
    "Vier gekleurde horizontale staven per werkdag met maand- en jaarcijfers.",
  tags: ["Horizontal bars", "Spectrum", "Metrics"],
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const colors = ["#9263ff", "#ff3838", "#ff3d9e", "#ffe936"];
const values = [
  [225, 170, 140, 100],
  [225, 215, 198, 185],
  [112, 101, 78, 53],
  [225, 101, 59, 53],
  [248, 185, 158, 105],
];

export default function Cards26() {
  return (
    <>
      <style>{`.devui-card-26 { width:320px; max-width:100%; container-type:inline-size; }
.devui-card-26, .devui-card-26 * { box-sizing:border-box; }
.devui-card-26 .chart-card { position:relative; isolation:isolate; width:100%; aspect-ratio:158 / 168; overflow:hidden; border:1px solid rgba(255,255,255,.045); border-radius:3cqw; color:#f5f5f4; background:#020303; font-family:Arial,Helvetica,sans-serif; box-shadow:0 5cqw 9cqw -3cqw rgba(0,0,0,.55); }
.devui-card-26 .chart-card::before { content:''; position:absolute; z-index:-1; inset:0; pointer-events:none; background:none; }
.devui-card-26 .chart-heading { position:relative; z-index:2; padding:6cqw 6cqw 0; }
.devui-card-26 p, .devui-card-26 h2 { margin:0; }
.devui-card-26 .income-label { margin-bottom:1.4cqw; color:#d7d9d8; font-size:4cqw; line-height:1.15; }
.devui-card-26 .income-line { display:flex; align-items:baseline; gap:3cqw; white-space:nowrap; }
.devui-card-26 .income-value { font:600 8.8cqw/1.1 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:-.35px; }
.devui-card-26 .income-delta { color:#15dda1; font-size:3.8cqw; font-weight:600; }
.devui-card-26 .income-compare { margin-top:2.1cqw; color:#464a47; font-size:3.7cqw; line-height:1.15; white-space:nowrap; letter-spacing:-.1px; }
.devui-card-26 .chart-insight { position:absolute; top:6.3cqw; right:5.5cqw; display:grid; place-items:center; width:8cqw; height:8cqw; margin:0; padding:0; border:1px solid rgba(112,255,108,.07); border-radius:50%; color:#88f86b; background:#0e1b0c; cursor:pointer; appearance:none; }
.devui-card-26 .chart-insight svg { width:5cqw; height:5cqw; filter:drop-shadow(0 0 3px #5ce545); }
.devui-card-26 .chart-insight[aria-pressed="false"] { color:#657263; background:#0b100c; }
.devui-card-26 .chart-insight[aria-pressed="false"] svg { filter:none; }
.devui-card-26 .chart-insight:focus-visible, .devui-card-26 .chart-options:focus-visible { outline:2px solid #9cff8b; outline-offset:3px; }
.devui-card-26 .chart-options { position:absolute; right:6.1cqw; top:5cqw; border:0; padding:0; width:5cqw; height:10cqw; background:none; color:#747572; cursor:pointer; }
.devui-card-26 .chart-options svg { width:100%; height:100%; }
.devui-card-26 .metric-pair { display:grid; grid-template-columns:1fr 1fr; gap:4cqw; padding:7cqw 6cqw 0; }
.devui-card-26 .metric-label { display:flex; align-items:center; gap:1.5cqw; margin-bottom:2cqw; font-size:3.8cqw; color:#93998f; }
.devui-card-26 .metric-star { color:#67ed6e; font-size:4.8cqw; line-height:1; }
.devui-card-26 .metric-bag { width:3.8cqw; height:3.8cqw; color:#e9cd39; }
.devui-card-26 .metric-value { font:400 7.6cqw/1.1 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:-.2px; white-space:nowrap; }
.devui-card-26 .metric-change { margin-top:2cqw; color:#3d433e; font-size:3cqw; white-space:nowrap; }
.devui-card-26 .metric-change strong { margin-right:1.2cqw; font-weight:600; color:#19d79a; }
.devui-card-26 .chart-svg { position:absolute; display:block; left:7%; bottom:5%; width:86%; height:64%; overflow:visible; }
.devui-card-26 .chart-svg text { font-family:'SFMono-Regular',Consolas,'Liberation Mono',monospace; }
.devui-card-26 .axis-label { fill:#cccfc8; font-size:10px; }
.devui-card-26 .chart-value-label { fill:#d8eed1; font-size:9px; }
@media(prefers-reduced-motion:reduce) { .devui-card-26 *, .devui-card-26 *::before, .devui-card-26 *::after { transition:none !important; animation:none !important; } }

.devui-card-26 .spectrum-bar { filter:drop-shadow(0 0 1px rgba(214,106,255,.6)); }`}</style>
      <div className="devui-card-26">
        <section className="chart-card" aria-label="Spectrum Horizontal">
          <header className="metric-pair">
            <div>
              <p className="metric-label">
                <span className="metric-star" aria-hidden="true">
                  ✦
                </span>
                Monthly
              </p>
              <h2 className="metric-value">$8,097</h2>
              <p className="metric-change">
                <strong>+19.6%</strong>44,214 USD
              </p>
            </div>
            <div>
              <p className="metric-label">
                <svg
                  className="metric-bag"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5 1h6l-1.5 3h-3L5 1Zm1 4h4c1 1.2 3.5 4 3.5 6.2 0 2.1-1.5 3.3-5.5 3.3s-5.5-1.2-5.5-3.3C2.5 9 5 6.2 6 5Z" />
                  <path
                    d="M8 7v5m1.5-4H7.4c-1.4 0-1.4 1.5 0 1.5h1.2c1.4 0 1.4 1.5 0 1.5H6.5"
                    fill="none"
                    stroke="#080902"
                    strokeWidth=".8"
                  />
                </svg>
                Yearly
              </p>
              <h2 className="metric-value">$312,134</h2>
              <p className="metric-change">
                <strong>+2.5%</strong>321,002 USD
              </p>
            </div>
          </header>

          <svg
            className="chart-svg"
            viewBox="0 0 280 218"
            role="img"
            aria-label="Vier reeksen per werkdag"
          >
            {Array.from({ length: 51 }, (_, i) => (
              <path
                key={i}
                d={`M${30 + i * 5} 5v195`}
                stroke="#131817"
                strokeWidth=".7"
              />
            ))}
            {values.map((row, r) => (
              <g key={r}>
                <text className="axis-label" x="0" y={22 + r * 41}>
                  {days[r]}
                </text>
                {row.map((value, s) => (
                  <rect
                    key={s}
                    className="spectrum-bar"
                    x="30"
                    y={8 + r * 41 + s * 5.7}
                    width={value}
                    height="3.9"
                    fill={colors[s]}
                  />
                ))}
              </g>
            ))}
          </svg>
        </section>
      </div>
    </>
  );
}
