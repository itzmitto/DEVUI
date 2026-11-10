// DevUI Card 39 — Time To First Chunk
// Self-contained HTML/CSS/SVG. No external chart or icon package required.
import { useId, useState } from "react";

export const cardMeta = {
  title: "Card 39 — Time To First Chunk",
  category: "Observability / Retrieval",
  description:
    "A cumulative latency chart with a striped SLO region and interactive time inspection.",
  tags: ["Latency", "CDF", "SLO"],
};

const anchors = [
  [0, 0],
  [0.35, 0],
  [0.58, 0.06],
  [0.72, 0.17],
  [0.9, 0.31],
  [1.05, 0.41],
  [1.22, 0.5],
  [1.45, 0.62],
  [1.75, 0.75],
  [1.98, 0.81],
  [2.2, 0.85],
  [2.52, 0.9],
  [2.82, 0.95],
  [3, 500 / 520],
  [3.2, 0.98],
  [3.85, 0.99],
  [6, 1],
];
function cdfAt(time: number) {
  const t = Math.max(0, Math.min(6, time));
  const next = anchors.findIndex((point) => point[0] >= t);
  if (next <= 0) return anchors[0][1];
  const a = anchors[next - 1],
    b = anchors[next];
  return a[1] + ((b[1] - a[1]) * (t - a[0])) / (b[0] - a[0]);
}
const samples = Array.from({ length: 365 }, (_, i) => ({
  x: i,
  y: (1 - Math.floor(cdfAt((i / 364) * 6) * 520) / 520) * 143,
}));
const curve = samples
  .map((p, i) =>
    i === 0
      ? `M${p.x.toFixed(2)} ${p.y.toFixed(2)}`
      : `H${p.x.toFixed(2)}V${p.y.toFixed(2)}`,
  )
  .join(" ");
const area = curve + " L364 143H0Z";
const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export default function Cards39() {
  const plotId = useId();
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const time = hoverTime ?? 3;
  const remaining = Math.round((1 - cdfAt(time)) * 520);
  const marker =
    hoverTime === null
      ? { x: 74, y: 71.5 }
      : { x: (time / 6) * 364, y: (1 - cdfAt(time)) * 143 };
  return (
    <>
      <style>{`.devui-card-39 { width:414px; max-width:100%; container-type:inline-size; }
.devui-card-39, .devui-card-39 * { box-sizing:border-box; }
.devui-card-39 .ops-card { padding:1cqw; border-radius:3.5cqw; color:#eee; background:#111212; box-shadow:inset 0 -1cqw .7cqw rgba(0,0,0,.25),0 .5cqw 1cqw rgba(0,0,0,.08); font-family:Arial,Helvetica,sans-serif; -webkit-font-smoothing:antialiased; }
.devui-card-39 .ops-header { display:flex; align-items:center; gap:3.4cqw; height:17.6cqw; padding:0 4.8cqw; }
.devui-card-39 .ops-icon { display:grid; place-items:center; flex:0 0 8.3cqw; width:8.3cqw; height:8.3cqw; border:1px dashed #4e514b; border-radius:2cqw; color:#f0f3ee; }
.devui-card-39 .ops-icon svg { width:4.9cqw; height:4.9cqw; }
.devui-card-39 h2, .devui-card-39 p { margin:0; }
.devui-card-39 .ops-title { font:500 3.86cqw/1.2 Arial,Helvetica,sans-serif; letter-spacing:-.08px; }
.devui-card-39 .ops-subtitle { margin-top:.15cqw; color:#686b65; font-size:3.4cqw; line-height:1.2; }
.devui-card-39 .ops-body { padding:4.35cqw; border-radius:2cqw; background:linear-gradient(#20211f,#1d1e1c); }
.devui-card-39 .ops-primary { display:flex; align-items:baseline; gap:3cqw; white-space:nowrap; }
.devui-card-39 .ops-value { color:#f1f3ee; font:italic 400 6.3cqw/1.2 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:-.1px; }
.devui-card-39 .ops-target { color:#69d9b1; font:400 3.45cqw/1.2 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:.05px; }
.devui-card-39 .ops-chart-heading { display:flex; align-items:baseline; justify-content:space-between; gap:2cqw; margin-top:3.9cqw; color:#a6a9a1; font-size:3.4cqw; line-height:1.25; }
.devui-card-39 .ops-chart-note { color:#666b62; font:400 3.3cqw/1.2 'SFMono-Regular',Consolas,'Liberation Mono',monospace; white-space:nowrap; }
.devui-card-39 .ops-chart { display:block; width:100%; height:auto; margin-top:3.9cqw; overflow:visible; outline:none; }
.devui-card-39 .ops-chart:focus-visible { outline:1px solid #55b993; outline-offset:3px; border-radius:4px; }
.devui-card-39 .ops-axis { display:flex; justify-content:space-between; margin-top:2.4cqw; color:#74776e; font:400 3.3cqw/1.2 'SFMono-Regular',Consolas,'Liberation Mono',monospace; }
.devui-card-39 .ops-legend { display:grid; gap:2.2cqw; list-style:none; margin:4cqw 0 0; padding:0; }
.devui-card-39 .ops-legend li { display:flex; align-items:center; justify-content:space-between; gap:3cqw; font:400 3.45cqw/1.2 'SFMono-Regular',Consolas,'Liberation Mono',monospace; }
.devui-card-39 .legend-label { display:flex; align-items:center; gap:2.4cqw; color:#aaaDA3; }
.devui-card-39 .legend-dot { width:2.5cqw; height:2.5cqw; border-radius:.5cqw; background:#4de6ad; }
.devui-card-39 .legend-dot--muted { background:#2d6f53; }
.devui-card-39 .legend-dot--gray { background:#565953; }
.devui-card-39 .legend-value { color:#f1f2ed; }
.devui-card-39 .tooltip-title { fill:#b9c5b6; font:13px Arial,Helvetica,sans-serif; }
.devui-card-39 .tooltip-value { fill:#f2f5ee; font:600 14px 'SFMono-Regular',Consolas,'Liberation Mono',monospace; }
.devui-card-39 .plot-tooltip { pointer-events:none; filter:drop-shadow(0 2px 4px rgba(0,0,0,.12)); }
@media(prefers-reduced-motion:reduce) { .devui-card-39 * { transition:none !important; } }

.devui-card-39 .latency-chart { cursor:crosshair; }
.devui-card-39 .cdf-line { fill:none; stroke:#5ae7b5; stroke-width:2.05; stroke-linejoin:round; stroke-linecap:round; }`}</style>
      <div className="devui-card-39">
        <section className="ops-card" aria-label="Time to first chunk">
          <header className="ops-header">
            <span className="ops-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="square"
                strokeLinejoin="miter"
              >
                <path d="M4 18h5v-5h5V8h6" />
              </svg>
            </span>
            <div>
              <h2 className="ops-title">Time to first chunk</h2>
              <p className="ops-subtitle">ingest → first embedding</p>
            </div>
          </header>
          <div className="ops-body">
            <div className="ops-primary">
              <p className="ops-value">2.82 s / 3.0 s</p>
              <p className="ops-target">p95 / SLO</p>
            </div>
            <div className="ops-chart-heading">
              <span>Share of chunks ready</span>
              <span className="ops-chart-note">n = 520</span>
            </div>
            <svg
              className="ops-chart latency-chart"
              viewBox="0 0 364 145"
              role="img"
              tabIndex={0}
              aria-label="Cumulative share of chunks ready. Use the arrow keys to inspect time and Home to return to the default view."
              onPointerMove={(event) => {
                const bounds = event.currentTarget.getBoundingClientRect();
                setHoverTime(
                  clamp(
                    ((event.clientX - bounds.left) / bounds.width) * 6,
                    0,
                    6,
                  ),
                );
              }}
              onPointerLeave={() => setHoverTime(null)}
              onKeyDown={(event) => {
                if (event.key === "Home") {
                  event.preventDefault();
                  setHoverTime(null);
                } else if (
                  event.key === "ArrowLeft" ||
                  event.key === "ArrowRight"
                ) {
                  event.preventDefault();
                  setHoverTime((value) =>
                    clamp(
                      (value ?? 3) + (event.key === "ArrowLeft" ? -0.1 : 0.1),
                      0,
                      6,
                    ),
                  );
                }
              }}
            >
              <defs>
                <linearGradient
                  id={`${plotId}-area`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#4bdb9f" stopOpacity=".16" />
                  <stop offset="100%" stopColor="#2ed48d" stopOpacity=".09" />
                </linearGradient>
                <pattern
                  id={`${plotId}-hatch`}
                  width="7"
                  height="7"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M-2 2 2-2M0 7 7 0M5 9 9 5"
                    stroke="#84a78b"
                    strokeWidth=".8"
                    opacity=".18"
                  />
                </pattern>
                <clipPath id={`${plotId}-area-clip`}>
                  <path d={area} />
                </clipPath>
              </defs>
              {[36, 72, 108].map((y) => (
                <path
                  key={y}
                  d={`M0 ${y}H364`}
                  stroke="#30352f"
                  strokeWidth=".7"
                  opacity=".5"
                />
              ))}
              <path d={area} fill={`url(#${plotId}-area)`} />
              <rect
                x="182"
                y="0"
                width="182"
                height="143"
                fill={`url(#${plotId}-hatch)`}
                clipPath={`url(#${plotId}-area-clip)`}
              />
              <path
                d="M74 71.5V143M171.08 0V143M182 0V143"
                stroke="#929e89"
                strokeWidth=".8"
                strokeDasharray="3 4"
                opacity=".42"
              />
              <path className="cdf-line" d={curve} />
              <circle cx="171.08" cy="7.15" r="3.6" fill="#5ce9b4" />
              <circle
                className="cdf-marker"
                cx={marker.x}
                cy={marker.y}
                r="4.2"
                fill="#63edb9"
                stroke="#1b4933"
                strokeWidth="1"
              />
              <g
                className="plot-tooltip latency-tooltip"
                transform={`translate(${hoverTime === null ? 24 : clamp(marker.x - 50, 0, 262)} ${hoverTime === null ? 13 : clamp(marker.y - 60, 3, 90)})`}
              >
                <rect
                  width="100"
                  height="51"
                  rx="7"
                  fill="#414742"
                  fillOpacity=".85"
                  stroke="#7d897a"
                  strokeWidth=".65"
                  strokeOpacity=".65"
                />
                <text className="tooltip-title" x="9" y="20">
                  Past {time.toFixed(1)} S
                </text>
                <text className="tooltip-value" x="9" y="40">
                  {remaining} chunks
                </text>
              </g>
            </svg>
            <div className="ops-axis">
              <span>0 s</span>
              <span>6 s</span>
            </div>
            <ul className="ops-legend" aria-label="Latency percentiles">
              <li>
                <span className="legend-label">
                  <span className="legend-dot" />
                  p50
                </span>
                <span className="legend-value">1.22 s</span>
              </li>
              <li>
                <span className="legend-label">
                  <span className="legend-dot legend-dot--muted" />
                  p95
                </span>
                <span className="legend-value">2.82 s</span>
              </li>
              <li>
                <span className="legend-label">
                  <span className="legend-dot legend-dot--gray" />
                  p99
                </span>
                <span className="legend-value">3.85 s</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
