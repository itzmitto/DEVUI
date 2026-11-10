// DevUI Card 40 — Analytics Overview
// Self-contained HTML/CSS/SVG. No external images, fonts or chart packages.
import { useId, useState } from "react";

export const cardMeta = {
  title: "Card 40 — Analytics Overview",
  category: "Dashboard / Analytics",
  description:
    "Two glowing area series with four revenue periods and violet growth badges.",
  tags: ["Analytics", "Area chart", "Revenue"],
};

function renderIcon(kind: string) {
  if (kind === "Daily")
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <rect x="1" y="1" width="14" height="14" rx="3" fill="#fff0c8" />
        <path d="m8 3 2 3-2 2-2-2Zm0 6 2 2-2 3-2-3Z" fill="#292321" />
      </svg>
    );
  if (kind === "Weekly")
    return (
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="#eee"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <path d="M8 1 11 4l4 4-4 4-3 3-3-3-4-4 4-4Z" />
        <path d="M8 4 12 8l-4 4-4-4Z" fill="#c29ad6" stroke="none" />
      </svg>
    );
  if (kind === "Monthly")
    return (
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="#f1f1f1"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="2.2" />
        <path d="M8 1v2m0 10v2M1 8h2m10 0h2M3 3l1.5 1.5m7 7L13 13M3 13l1.5-1.5m7-7L13 3" />
      </svg>
    );
  return (
    <svg viewBox="0 0 16 16" fill="#eee" aria-hidden="true">
      <path d="m8 1 6 3.5-6 3-6-3Zm-6 5 5 2.5V15l-5-3Zm12 0-5 2.5V15l5-3Z" />
    </svg>
  );
}
function growthIcon() {
  return (
    <svg
      className="growth-icon"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6.5" />
      <path
        d="M8 11V5m-2 2 2-2 2 2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function renderBadge(rate: string) {
  return (
    <span className="growth-badge">
      {growthIcon()}
      {rate}
    </span>
  );
}

const teal = [
  [0, 14],
  [47, 37],
  [64, 37],
  [105, 24],
  [140, 49],
  [161, 49],
  [196, 20],
  [215, 27],
  [271, 69],
  [282, 62],
  [314, 1],
];
const purple = [
  [0, 85],
  [24, 82],
  [60, 64],
  [102, 115],
  [148, 115],
  [203, 97],
  [272, 102],
  [314, 69],
];
const path = (points: number[][]) =>
  points
    .map((point, i) => `${i === 0 ? "M" : "L"}${point[0]} ${point[1]}`)
    .join(" ");
const tealPath = path(teal);
const purplePath = path(purple);

const metrics = [
  { name: "Daily", value: "$4,458", usd: "27,500 USD", growth: "10,8%" },
  { name: "Weekly", value: "$103,894", usd: "100,351 USD", growth: "12%" },
  { name: "Monthly", value: "$4,458", usd: "27,500 USD", growth: "9,2%" },
  { name: "Yearly", value: "$103,894", usd: "100,351 USD", growth: "1,8%" },
];

export default function Cards40() {
  const chartId = useId();
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <>
      <style>{`.devui-card-40 { width:360px; max-width:100%; container-type:inline-size; }
.devui-card-40, .devui-card-40 * { box-sizing:border-box; }
.devui-card-40 .dashboard-card { position:relative; isolation:isolate; height:149.2cqw; overflow:hidden; border-radius:5cqw; background:#000; color:#f4f4f4; font-family:Arial,Helvetica,sans-serif; -webkit-font-smoothing:antialiased; box-shadow:0 2cqw 6cqw -3cqw rgba(0,0,0,.15); }
.devui-card-40 h2, .devui-card-40 p { margin:0; }
.devui-card-40 .dashboard-title { position:absolute; left:6%; right:5%; top:4.2%; font:600 6.7cqw/1.2 Arial,Helvetica,sans-serif; letter-spacing:-.4px; }
.devui-card-40 .area-chart { position:absolute; display:block; left:6%; top:13.4%; width:88%; height:33.2%; overflow:visible; outline:none; }
.devui-card-40 .area-chart:focus-visible { outline:1px solid #477a68; outline-offset:3px; }
.devui-card-40 .metric-grid { position:absolute; left:6%; right:6%; display:grid; grid-template-columns:1.06fr .94fr; column-gap:7.2cqw; }
.devui-card-40 .metric-grid--four { top:50.8%; row-gap:5.5cqw; }
.devui-card-40 .metric-grid--two { top:52%; }
.devui-card-40 .metric-head { display:flex; align-items:center; justify-content:space-between; gap:2cqw; min-height:6.7cqw; }
.devui-card-40 .metric-name { display:flex; align-items:center; gap:1.7cqw; color:#d4d4d4; font-size:3.6cqw; line-height:1.2; white-space:nowrap; }
.devui-card-40 .metric-symbol { display:block; width:3.8cqw; height:3.8cqw; flex:0 0 3.8cqw; }
.devui-card-40 .metric-symbol svg { display:block; width:100%; height:100%; }
.devui-card-40 .growth-badge { display:inline-flex; align-items:center; justify-content:center; gap:1cqw; height:6.7cqw; padding:0 2.8cqw; border-radius:1.6cqw; background:#30253e; color:#c68cf5; font-size:3.05cqw; line-height:1; white-space:nowrap; }
.devui-card-40 .growth-icon { width:3.4cqw; height:3.4cqw; flex:0 0 3.4cqw; }
.devui-card-40 .metric-value { margin-top:3.4cqw; font:600 7.5cqw/1.2 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:-.45px; white-space:nowrap; }
.devui-card-40 .metric-subvalue { margin-top:.8cqw; color:#757575; font:400 3.35cqw/1.25 Arial,Helvetica,sans-serif; white-space:nowrap; }
.devui-card-40 .inline-growth { display:inline-flex; align-items:center; gap:.8cqw; margin-right:2cqw; color:#c18aff; font:500 3.4cqw/1.2 Arial,Helvetica,sans-serif; }
.devui-card-40 .summary-table { position:absolute; left:6%; bottom:4.1%; width:88%; border-collapse:collapse; font:400 3.6cqw/1.3 Arial,Helvetica,sans-serif; }
.devui-card-40 .summary-table th, .devui-card-40 .summary-table td { padding:3cqw 0; border-bottom:1px solid #272727; }
.devui-card-40 .summary-table th { text-align:left; font-weight:400; color:#d5d5d5; }
.devui-card-40 .summary-table td { text-align:right; color:#f6f6f6; font:600 3.85cqw/1.3 'SFMono-Regular',Consolas,'Liberation Mono',monospace; white-space:nowrap; }
.devui-card-40 .summary-table tr:last-child th, .devui-card-40 .summary-table tr:last-child td { border-bottom:0; }
.devui-card-40 .refund-footer { position:absolute; left:6%; right:6%; bottom:4.1%; display:flex; align-items:center; justify-content:space-between; padding-top:3.5cqw; border-top:1px solid #373737; color:#d6d6d6; font-size:3.6cqw; line-height:1.3; }
.devui-card-40 .refund-footer strong { color:#f5f5f5; font:600 3.85cqw/1.3 'SFMono-Regular',Consolas,'Liberation Mono',monospace; }
.devui-card-40 .area-tooltip { pointer-events:none; }
.devui-card-40 .area-tooltip text { fill:#eee; font:10px 'SFMono-Regular',Consolas,monospace; }
@media(prefers-reduced-motion:reduce) { .devui-card-40 * { animation:none !important; transition:none !important; } }`}</style>
      <div className="devui-card-40">
        <article className="dashboard-card" aria-label="Analytics overview">
          <h2 className="dashboard-title">Analytics</h2>
          <svg
            className="area-chart"
            viewBox="0 0 314 178"
            role="img"
            tabIndex={0}
            aria-label="Analytics with green and purple area series. Use left and right arrows to inspect points; Escape clears the tooltip."
            onPointerMove={(event) => {
              const box = event.currentTarget.getBoundingClientRect();
              const x = ((event.clientX - box.left) / box.width) * 314;
              setHovered(
                teal.reduce(
                  (best, p, i) =>
                    Math.abs(p[0] - x) < Math.abs(teal[best][0] - x) ? i : best,
                  0,
                ),
              );
            }}
            onPointerLeave={() => setHovered(null)}
            onBlur={() => setHovered(null)}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setHovered(null);
              } else if (
                event.key === "ArrowLeft" ||
                event.key === "ArrowRight"
              ) {
                event.preventDefault();
                setHovered((value) =>
                  Math.max(
                    0,
                    Math.min(
                      teal.length - 1,
                      (value ?? 0) + (event.key === "ArrowLeft" ? -1 : 1),
                    ),
                  ),
                );
              }
            }}
          >
            <defs>
              <linearGradient
                id={`${chartId}-green`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#18df9b" stopOpacity=".7" />
                <stop offset="100%" stopColor="#043526" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id={`${chartId}-purple`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#a578c7" stopOpacity=".92" />
                <stop offset="100%" stopColor="#292034" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={`${tealPath} L314 178H0Z`}
              fill={`url(#${chartId}-green)`}
            />
            <path d={tealPath} fill="none" stroke="#26dba4" strokeWidth="1" />
            {teal.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="2.2" fill="#46f7bd" />
            ))}
            <path
              d={`${purplePath} L314 178H0Z`}
              fill={`url(#${chartId}-purple)`}
            />
            <path d={purplePath} fill="none" stroke="#b38dd9" strokeWidth="1" />
            {purple.map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="2.2"
                fill="#c8a0ee"
                stroke="#e2bbff"
                strokeWidth=".3"
              />
            ))}
            {hovered !== null && (
              <g
                className="area-tooltip"
                transform={`translate(${Math.max(0, Math.min(228, teal[hovered][0] - 43))} ${Math.max(0, teal[hovered][1] - 34)})`}
              >
                <rect
                  width="86"
                  height="27"
                  rx="5"
                  fill="#191b22"
                  stroke="#445347"
                  strokeWidth=".6"
                />
                <text x="8" y="17">
                  Value {178 - teal[hovered][1]}
                </text>
              </g>
            )}
          </svg>
          <div className="metric-grid metric-grid--four">
            {metrics.map((metric) => (
              <section key={metric.name} aria-label={metric.name}>
                <div className="metric-head">
                  <p className="metric-name">
                    <span className="metric-symbol">
                      {renderIcon(metric.name)}
                    </span>
                    {metric.name}
                  </p>
                  {renderBadge(metric.growth)}
                </div>
                <p className="metric-value">{metric.value}</p>
                <p className="metric-subvalue">{metric.usd}</p>
              </section>
            ))}
          </div>
          <div className="refund-footer">
            <span>Refunds</span>
            <strong>$12,337</strong>
          </div>
        </article>
      </div>
    </>
  );
}
