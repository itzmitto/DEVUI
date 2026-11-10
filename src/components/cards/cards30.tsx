// DevUI Card 30 — Mint Floating Bars
// Zelfstandig bestand met schaalbare SVG-grafiek en eigen styling.

export const cardMeta = {
  title: "Card 30 — Mint Floating Bars",
  category: "Dashboard / Bar charts",
  description:
    "Zwevende mintgroene afgeronde staven met een diffuse lichtwolk.",
  tags: ["Floating bars", "Mint", "Glow"],
};

const candles = [
  [66, 0.95],
  [71, 0.3],
  [52, 1],
  [35, 1],
  [43, 0.4],
  [72, 0.18],
  [61, 1],
  [86, 0.6],
  [111, 0.3],
  [126, 0.22],
  [109, 0.15],
  [35, 1],
  [85, 0.17],
  [74, 0.95],
  [85, 0.25],
  [62, 0.95],
  [86, 0.2],
  [35, 1],
];

export default function Cards30() {
  return (
    <>
      <style>{`.devui-card-30 { width:320px; max-width:100%; container-type:inline-size; }
.devui-card-30, .devui-card-30 * { box-sizing:border-box; }
.devui-card-30 .chart-card { position:relative; isolation:isolate; width:100%; aspect-ratio:158 / 168; overflow:hidden; border:1px solid rgba(255,255,255,.045); border-radius:3cqw; color:#f5f5f4; background:#020303; font-family:Arial,Helvetica,sans-serif; box-shadow:0 5cqw 9cqw -3cqw rgba(0,0,0,.55); }
.devui-card-30 .chart-card::before { content:''; position:absolute; z-index:-1; inset:0; pointer-events:none; background:radial-gradient(ellipse 67% 41% at 52% 61%,rgba(0,235,153,.19),transparent 90%); }
.devui-card-30 .chart-heading { position:relative; z-index:2; padding:6cqw 6cqw 0; }
.devui-card-30 p, .devui-card-30 h2 { margin:0; }
.devui-card-30 .income-label { margin-bottom:1.4cqw; color:#d7d9d8; font-size:4cqw; line-height:1.15; }
.devui-card-30 .income-line { display:flex; align-items:baseline; gap:3cqw; white-space:nowrap; }
.devui-card-30 .income-value { font:600 8.8cqw/1.1 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:-.35px; }
.devui-card-30 .income-delta { color:#15dda1; font-size:3.8cqw; font-weight:600; }
.devui-card-30 .income-compare { margin-top:2.1cqw; color:#464a47; font-size:3.7cqw; line-height:1.15; white-space:nowrap; letter-spacing:-.1px; }
.devui-card-30 .chart-insight { position:absolute; top:6.3cqw; right:5.5cqw; display:grid; place-items:center; width:8cqw; height:8cqw; margin:0; padding:0; border:1px solid rgba(112,255,108,.07); border-radius:50%; color:#88f86b; background:#0e1b0c; cursor:pointer; appearance:none; }
.devui-card-30 .chart-insight svg { width:5cqw; height:5cqw; filter:drop-shadow(0 0 3px #5ce545); }
.devui-card-30 .chart-insight[aria-pressed="false"] { color:#657263; background:#0b100c; }
.devui-card-30 .chart-insight[aria-pressed="false"] svg { filter:none; }
.devui-card-30 .chart-insight:focus-visible, .devui-card-30 .chart-options:focus-visible { outline:2px solid #9cff8b; outline-offset:3px; }
.devui-card-30 .chart-options { position:absolute; right:6.1cqw; top:5cqw; border:0; padding:0; width:5cqw; height:10cqw; background:none; color:#747572; cursor:pointer; }
.devui-card-30 .chart-options svg { width:100%; height:100%; }
.devui-card-30 .metric-pair { display:grid; grid-template-columns:1fr 1fr; gap:4cqw; padding:7cqw 6cqw 0; }
.devui-card-30 .metric-label { display:flex; align-items:center; gap:1.5cqw; margin-bottom:2cqw; font-size:3.8cqw; color:#93998f; }
.devui-card-30 .metric-star { color:#67ed6e; font-size:4.8cqw; line-height:1; }
.devui-card-30 .metric-bag { width:3.8cqw; height:3.8cqw; color:#e9cd39; }
.devui-card-30 .metric-value { font:400 7.6cqw/1.1 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:-.2px; white-space:nowrap; }
.devui-card-30 .metric-change { margin-top:2cqw; color:#3d433e; font-size:3cqw; white-space:nowrap; }
.devui-card-30 .metric-change strong { margin-right:1.2cqw; font-weight:600; color:#19d79a; }
.devui-card-30 .chart-svg { position:absolute; display:block; left:7%; bottom:5%; width:86%; height:64%; overflow:visible; }
.devui-card-30 .chart-svg text { font-family:'SFMono-Regular',Consolas,'Liberation Mono',monospace; }
.devui-card-30 .axis-label { fill:#cccfc8; font-size:10px; }
.devui-card-30 .chart-value-label { fill:#d8eed1; font-size:9px; }
@media(prefers-reduced-motion:reduce) { .devui-card-30 *, .devui-card-30 *::before, .devui-card-30 *::after { transition:none !important; animation:none !important; } }

.devui-card-30 .mint-bright { filter:drop-shadow(0 0 4px rgba(0,255,177,.7)); }`}</style>
      <div className="devui-card-30">
        <section className="chart-card" aria-label="Mint Floating Bars">
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
            aria-label="Mintgroene trend over negen perioden"
          >
            {candles.map((c, i) => (
              <rect
                className={c[1] > 0.7 ? "mint-bright" : ""}
                key={i}
                x={i * 15.4 + 4}
                y={c[0]}
                width="8.5"
                height="42"
                rx="4.25"
                fill="#24f4bd"
                opacity={c[1]}
              />
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
