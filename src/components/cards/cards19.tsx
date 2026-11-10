// DevUI Card 19 — Sales Aurora
// Zelfstandig bestand; geen extra stylesheets, fonts of iconenpakketten nodig.

export const cardMeta = {
  title: "Card 19 — Sales Aurora",
  category: "Dark / Light effects",
  description:
    "Glazen omzetkaart met zachte sterren, een lijn- en staafgrafiek.",
  tags: ["Sales", "Chart", "Glass"],
};

const bars = [146, 104, 104, 105, 67, 94, 25];
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"];

export default function Cards19() {
  return (
    <>
      <style>{`.devui-card-19 { width:320px; max-width:100%; container-type:inline-size; }
.devui-card-19, .devui-card-19 * { box-sizing:border-box; }
.devui-card-19 .panel { position:relative; isolation:isolate; width:100%; overflow:hidden; color:#f6f5f9; font-family:Arial,Helvetica,sans-serif; background:#090a0e; }
.devui-card-19 h2, .devui-card-19 h3, .devui-card-19 p { margin:0; }
.devui-card-19 button, .devui-card-19 input { font:inherit; }
.devui-card-19 button { cursor:pointer; -webkit-tap-highlight-color:transparent; }
.devui-card-19 button:focus-visible, .devui-card-19 input:focus-visible { outline:2px solid #a6b4ff; outline-offset:3px; }
.devui-card-19 .grain { position:absolute; z-index:3; inset:0; pointer-events:none; opacity:.13; background-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22160%22%20height%3D%22160%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%22.8%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Cpath%20fill%3D%22white%22%20filter%3D%22url%28%23n%29%22%20opacity%3D%22.4%22%20d%3D%22M0%200h160v160H0z%22%2F%3E%3C%2Fsvg%3E"); mix-blend-mode:screen; }
.devui-card-19 svg { display:block; }
@media(prefers-reduced-motion:reduce) { .devui-card-19 *, .devui-card-19 *::before, .devui-card-19 *::after { animation:none !important; transition:none !important; } }

.devui-card-19 .panel { aspect-ratio:.988; border-radius:9cqw; border:1px solid #ada5c2; background:radial-gradient(ellipse at 75% 8%,rgba(185,193,247,.78),transparent 70%),linear-gradient(135deg,#2c2e3b,#07070c 66%); box-shadow:inset -1px -2px 2px rgba(255,255,255,.3); }
.devui-card-19 .sales-copy { position:relative; padding:7cqw 9cqw 0; z-index:2; }
.devui-card-19 .sales-label { font-size:4cqw; color:#d7d7e5; }
.devui-card-19 h2 { margin-top:2cqw; font-size:16.2cqw; line-height:1; font-weight:400; letter-spacing:-.8cqw; }
.devui-card-19 .sales-change { margin-top:4cqw; font-size:4.2cqw; color:#dddde5; }
.devui-card-19 .sales-graph { position:absolute; left:8%; bottom:3%; width:84%; height:49%; overflow:visible; }
.devui-card-19 .sales-stars { position:absolute; right:5%; top:6%; width:38%; height:43%; color:#e0e9ff; }
.devui-card-19 .grain { opacity:.09; }`}</style>
      <div className="devui-card-19">
        <section className="panel" aria-label="Sales, 70,318 dollar">
          <div className="sales-copy">
            <p className="sales-label">SALES</p>
            <h2>$70,318</h2>
            <p className="sales-change">+$10,967 (+7.36%)</p>
          </div>
          <svg
            className="sales-stars"
            viewBox="0 0 100 120"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="m60 7 1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5ZM83 31l1 2.8 2.8 1-2.8 1-1 2.8-1-2.8-2.8-1 2.8-1ZM51 62l2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" />
            <circle cx="91" cy="15" r="1" />
            <circle cx="12" cy="34" r=".8" />
            <circle cx="72" cy="96" r="1.4" />
          </svg>
          <svg
            className="sales-graph"
            viewBox="0 0 280 180"
            role="img"
            aria-label="Omzet stijgt van januari tot juli"
          >
            <g fill="#9c9cbf">
              {bars.map((bar, i) => (
                <rect
                  key={i}
                  x={12 + i * 36}
                  y={bar}
                  width="33"
                  height={160 - bar}
                  opacity={0.13 + i * 0.016}
                />
              ))}
            </g>
            <path
              d="M28 146 64 104 100 104 136 105 172 67 208 94 244 25"
              fill="none"
              stroke="#b6b6d4"
              strokeWidth="1.5"
            />
            <path
              d="m233 28 11-3 0 12"
              fill="none"
              stroke="#dbdcf0"
              strokeWidth="1.5"
            />
            <circle cx="64" cy="104" r="5" fill="#222330" stroke="#aeb0d5" />
            <rect
              x="37"
              y="78"
              width="55"
              height="17"
              rx="8.5"
              fill="#d0d5ff"
            />
            <text
              x="64.5"
              y="89.5"
              textAnchor="middle"
              fontSize="9"
              fill="#272a4a"
            >
              $42,710
            </text>
            {months.map((month, i) => (
              <text
                key={month}
                x={28 + i * 36}
                y="176"
                textAnchor="middle"
                fill="#d2d1de"
                fontSize="8"
              >
                {month}
              </text>
            ))}
          </svg>
          <span className="grain" aria-hidden="true" />
        </section>
      </div>
    </>
  );
}
