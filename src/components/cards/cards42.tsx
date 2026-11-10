// DevUI Card 42 — Revenue Flow
// Original design. Self-contained React / CSS / SVG with deterministic demo data.
import { useId, useState } from "react";

export const cardMeta = {
  title: "Card 42 — Revenue Flow",
  category: "Dashboard / Analytics",
  description:
    "An original revenue dashboard with interactive periods, smooth SVG curves and point inspection. Uses demo data.",
  tags: ["Revenue", "Interactive", "Chart", "Gradient"],
};

type Period = "7D" | "30D" | "90D";
const periods: Period[] = ["7D", "30D", "90D"];
const series: Record<
  Period,
  {
    current: number[];
    previous: number[];
    labels: string[];
    transactions: number;
    conversion: string;
  }
> = {
  "7D": {
    current: [1180, 1440, 980, 2100, 1780, 2960, 3480],
    previous: [1000, 1150, 1300, 1470, 1590, 2070, 2350],
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    transactions: 384,
    conversion: "4.2%",
  },
  "30D": {
    current: [
      1640, 1910, 1780, 2660, 2310, 3450, 2980, 3920, 3660, 4830, 4510, 6040,
    ],
    previous: [
      1380, 1580, 1720, 1540, 2130, 1970, 2480, 2670, 2510, 3120, 2940, 3650,
    ],
    labels: [
      "Day 01",
      "Day 04",
      "Day 06",
      "Day 09",
      "Day 12",
      "Day 14",
      "Day 17",
      "Day 19",
      "Day 22",
      "Day 25",
      "Day 27",
      "Day 30",
    ],
    transactions: 1248,
    conversion: "4.8%",
  },
  "90D": {
    current: [
      5700, 6800, 6100, 8400, 7900, 10300, 9200, 11700, 10800, 14300, 13200,
      16600, 18100,
    ],
    previous: [
      5100, 5600, 6000, 5800, 7400, 7100, 8200, 7800, 9300, 10300, 9700, 11800,
      12400,
    ],
    labels: [
      "Week 01",
      "Week 02",
      "Week 03",
      "Week 04",
      "Week 05",
      "Week 06",
      "Week 07",
      "Week 08",
      "Week 09",
      "Week 10",
      "Week 11",
      "Week 12",
      "Week 13",
    ],
    transactions: 4062,
    conversion: "5.1%",
  },
};

const money = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
const sum = (values: number[]) =>
  values.reduce((total, value) => total + value, 0);
type Point = { x: number; y: number };

// Catmull–Rom to cubic Bézier, with restrained tension for a smooth, readable curve.
function smoothPath(points: Point[]) {
  return points.reduce((path, point, index) => {
    if (!index) return `M ${point.x} ${point.y}`;
    const before = points[index - 2] ?? points[0];
    const start = points[index - 1];
    const after = points[index + 1] ?? point;
    return `${path} C ${start.x + (point.x - before.x) / 8} ${start.y + (point.y - before.y) / 8}, ${point.x - (after.x - start.x) / 8} ${point.y - (after.y - start.y) / 8}, ${point.x} ${point.y}`;
  }, "");
}

export default function Cards42() {
  const id = useId();
  const [period, setPeriod] = useState<Period>("30D");
  const [active, setActive] = useState<number | null>(null);
  const data = series[period];
  const total = sum(data.current);
  const growth = (total / sum(data.previous) - 1) * 100;
  const ceiling =
    Math.ceil(Math.max(...data.current, ...data.previous) / 1000) * 1000;
  const toPoints = (values: number[]): Point[] =>
    values.map((value, index) => ({
      x: 43 + (index / (values.length - 1)) * 361,
      y: 169 - (value / ceiling) * 147,
    }));
  const points = toPoints(data.current);
  const currentPath = smoothPath(points);
  const previousPath = smoothPath(toPoints(data.previous));
  const last = points[points.length - 1];
  const selected = active === null ? null : points[active];
  const ticks = Array.from({ length: 5 }, (_, index) =>
    Math.round((index * (points.length - 1)) / 4),
  );

  return (
    <>
      <style>{`
        .devui-revenue-42 { width: 460px; max-width: 100%; container-type: inline-size; }
        .devui-revenue-42, .devui-revenue-42 * { box-sizing: border-box; }
        .devui-revenue-42 .rf-card {
          position: relative; isolation: isolate; overflow: hidden; padding: 6.1cqw;
          border: 1px solid #2a2837; border-radius: 5.2cqw; color: #f6f4ff;
          background: radial-gradient(ellipse at 93% -12%, #652ea52b, transparent 55%), linear-gradient(145deg, #16151e, #0d0e14 70%);
          box-shadow: inset 0 1px 0 #ffffff06, 0 20px 60px -32px #000a;
          font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-variant-numeric: tabular-nums; -webkit-font-smoothing: antialiased;
        }
        .devui-revenue-42 h2, .devui-revenue-42 p { margin: 0; }
        .devui-revenue-42 .rf-top { display: flex; align-items: center; justify-content: space-between; gap: 4cqw; }
        .devui-revenue-42 .rf-brand { display: flex; align-items: center; gap: 2.5cqw; }
        .devui-revenue-42 .rf-icon { display: grid; place-items: center; width: 9.1cqw; height: 9.1cqw; border-radius: 2.8cqw; background: #a878ff12; border: 1px solid #b18bff26; color: #bc96ff; }
        .devui-revenue-42 .rf-icon svg { width: 5cqw; height: 5cqw; }
        .devui-revenue-42 .rf-eyebrow { color: #8c849d; font-size: 2.05cqw; font-weight: 600; letter-spacing: .4cqw; text-transform: uppercase; }
        .devui-revenue-42 .rf-title { margin-top: .8cqw; font-size: 3.8cqw; font-weight: 600; letter-spacing: -.12cqw; }
        .devui-revenue-42 .rf-periods { display: flex; gap: .6cqw; padding: .8cqw; border: 1px solid #ffffff08; border-radius: 2.5cqw; background: #08090f80; }
        .devui-revenue-42 .rf-period { appearance: none; display: block; padding: 1.7cqw 2cqw; border: 1px solid transparent; border-radius: 1.7cqw; background: transparent; color: #827b90; cursor: pointer; font-family: inherit; font-size: 2.45cqw; font-weight: 600; line-height: 1; transition: color .15s, background .15s; }
        .devui-revenue-42 .rf-period:hover { color: #e9dfff; }
        .devui-revenue-42 .rf-period[aria-pressed="true"] { color: #e9dcff; background: #342443; border-color: #b58bff26; box-shadow: 0 1px 3px #0004; }
        .devui-revenue-42 .rf-period:focus-visible { outline: 2px solid #b58bff; outline-offset: 2px; }
        .devui-revenue-42 .rf-balance { display: flex; flex-wrap: wrap; align-items: center; gap: 3cqw; margin-top: 7cqw; }
        .devui-revenue-42 .rf-total { font-size: 9.3cqw; font-weight: 600; line-height: 1.08; letter-spacing: -.55cqw; }
        .devui-revenue-42 .rf-growth { display: inline-flex; align-items: center; gap: .9cqw; padding: 1.2cqw 1.7cqw; border: 1px solid #57d7b21d; border-radius: 1.6cqw; background: #3de2aa10; color: #6bdfb9; font-size: 2.6cqw; font-weight: 600; }
        .devui-revenue-42 .rf-growth svg { width: 2.9cqw; height: 2.9cqw; }
        .devui-revenue-42 .rf-subtitle { margin-top: 2cqw; color: #7b7589; font-size: 2.65cqw; }
        .devui-revenue-42 .rf-chart { display: block; width: 100%; height: auto; overflow: visible; margin-top: 5.4cqw; border-radius: 1cqw; outline: none; }
        .devui-revenue-42 .rf-chart:focus-visible { outline: 1px solid #a980f080; outline-offset: 4px; }
        .devui-revenue-42 .rf-axis { fill: #666174; font: 9px Inter, 'Segoe UI', sans-serif; }
        .devui-revenue-42 .rf-guide { stroke: #ffffff0a; stroke-width: 1; }
        .devui-revenue-42 .rf-tooltip { pointer-events: none; }
        .devui-revenue-42 .rf-tooltip-label { fill: #9a90ad; font: 9px Inter, 'Segoe UI', sans-serif; }
        .devui-revenue-42 .rf-tooltip-value { fill: #f3eaff; font: 600 13px Inter, 'Segoe UI', sans-serif; }
        .devui-revenue-42 .rf-legend { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 5cqw; margin-top: 1.5cqw; color: #9991a8; font-size: 2.45cqw; }
        .devui-revenue-42 .rf-legend span { display: inline-flex; align-items: center; gap: 1.6cqw; }
        .devui-revenue-42 .rf-key { width: 4.5cqw; height: 2px; border-radius: 2px; background: #b68aff; box-shadow: 0 0 8px #a977ff50; }
        .devui-revenue-42 .rf-key--previous { background: none; border-top: 2px dashed #5bc8be; box-shadow: none; opacity: .8; }
        .devui-revenue-42 .rf-footer { display: grid; grid-template-columns: 1fr 1.15fr .85fr; margin-top: 6cqw; padding-top: 4.7cqw; border-top: 1px solid #ffffff0a; }
        .devui-revenue-42 .rf-stat + .rf-stat { padding-left: 4.3cqw; border-left: 1px solid #ffffff0b; }
        .devui-revenue-42 .rf-stat-label { color: #7d768d; font-size: 2.35cqw; white-space: nowrap; }
        .devui-revenue-42 .rf-stat-value { margin-top: 1.8cqw; color: #e8e3f2; font-size: 4.05cqw; line-height: 1.15; font-weight: 500; letter-spacing: -.1cqw; }
        @media (prefers-reduced-motion: reduce) { .devui-revenue-42 * { transition: none !important; } }
      `}</style>
      <div className="devui-revenue-42">
        <article
          className="rf-card"
          aria-label="Revenue flow dashboard with demo data"
        >
          <header className="rf-top">
            <div className="rf-brand">
              <span className="rf-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 16 5-5 4 3 8-9M15 5h5v5" />
                  <path d="M3 21h18" opacity=".4" />
                </svg>
              </span>
              <div>
                <p className="rf-eyebrow">Overview</p>
                <h2 className="rf-title">Revenue flow</h2>
              </div>
            </div>
            <div
              className="rf-periods"
              role="group"
              aria-label="Revenue period"
            >
              {periods.map((value) => (
                <button
                  key={value}
                  type="button"
                  className="rf-period"
                  aria-pressed={period === value}
                  aria-label={`Last ${value.slice(0, -1)} days`}
                  onClick={() => {
                    setPeriod(value);
                    setActive(null);
                  }}
                >
                  {value}
                </button>
              ))}
            </div>
          </header>
          <div className="rf-balance" aria-live="polite" aria-atomic="true">
            <p className="rf-total">{money(total)}</p>
            <span className="rf-growth">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m3 11 9-7M5 4h7v7" />
              </svg>
              +{growth.toFixed(1)}%
            </span>
          </div>
          <p className="rf-subtitle">
            Total revenue · compared with the previous period
          </p>
          <svg
            className="rf-chart"
            viewBox="0 0 420 199"
            role="img"
            tabIndex={0}
            aria-label={`Revenue for the last ${period.slice(0, -1)} days: ${money(total)}. Use left and right arrows to inspect points; Escape clears the selection.`}
            onPointerMove={(event) => {
              const box = event.currentTarget.getBoundingClientRect();
              const x = ((event.clientX - box.left) / box.width) * 420;
              setActive(
                Math.max(
                  0,
                  Math.min(
                    points.length - 1,
                    Math.round(((x - 43) / 361) * (points.length - 1)),
                  ),
                ),
              );
            }}
            onPointerLeave={() => setActive(null)}
            onBlur={() => setActive(null)}
            onKeyDown={(event) => {
              if (event.key === "Escape") setActive(null);
              if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                event.preventDefault();
                const direction = event.key === "ArrowRight" ? 1 : -1;
                setActive((value) =>
                  value === null
                    ? direction === 1
                      ? 0
                      : points.length - 1
                    : Math.max(
                        0,
                        Math.min(points.length - 1, value + direction),
                      ),
                );
              }
            }}
          >
            <defs>
              <linearGradient id={`${id}-area`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a76aff" stopOpacity=".32" />
                <stop offset="100%" stopColor="#a76aff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id={`${id}-line`} x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#8058e8" />
                <stop offset="65%" stopColor="#bb8eff" />
                <stop offset="100%" stopColor="#e2c5ff" />
              </linearGradient>
            </defs>
            {[0, 1, 2, 3, 4].map((index) => {
              const value = ceiling * (1 - index / 4);
              return (
                <g key={index}>
                  <line
                    className="rf-guide"
                    x1="43"
                    x2="404"
                    y1={22 + index * 36.75}
                    y2={22 + index * 36.75}
                  />
                  <text className="rf-axis" x="0" y={25 + index * 36.75}>
                    {value === 0
                      ? "$0"
                      : `$${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}k`}
                  </text>
                </g>
              );
            })}
            <path
              d={`${currentPath} L 404 169 L 43 169 Z`}
              fill={`url(#${id}-area)`}
            />
            <path
              d={previousPath}
              fill="none"
              stroke="#58bdb6"
              strokeOpacity=".72"
              strokeWidth="1.6"
              strokeDasharray="4 5"
              strokeLinecap="round"
            />
            <path
              d={currentPath}
              fill="none"
              stroke="#a875fa"
              strokeWidth="8"
              strokeOpacity=".065"
            />
            <path
              d={currentPath}
              fill="none"
              stroke={`url(#${id}-line)`}
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx={last.x}
              cy={last.y}
              r="8"
              fill="#b88aff"
              opacity=".11"
            />
            <circle
              cx={last.x}
              cy={last.y}
              r="3.3"
              fill="#e5cdff"
              stroke="#a671ed"
              strokeWidth="1.6"
            />
            {ticks.map((index) => (
              <text
                key={index}
                className="rf-axis"
                x={points[index].x}
                y="191"
                textAnchor={
                  index === 0
                    ? "start"
                    : index === points.length - 1
                      ? "end"
                      : "middle"
                }
              >
                {data.labels[index]}
              </text>
            ))}
            {selected && active !== null && (
              <g className="rf-tooltip">
                <line
                  x1={selected.x}
                  x2={selected.x}
                  y1="18"
                  y2="169"
                  stroke="#bd98ec"
                  strokeOpacity=".35"
                  strokeDasharray="3 4"
                />
                <circle
                  cx={selected.x}
                  cy={selected.y}
                  r="6"
                  fill="#22182e"
                  stroke="#d1a9ff"
                  strokeWidth="2"
                />
                <g
                  transform={`translate(${Math.max(45, Math.min(307, selected.x - 48))} ${Math.max(0, selected.y - 62)})`}
                >
                  <rect
                    width="94"
                    height="48"
                    rx="8"
                    fill="#211b2c"
                    stroke="#5e427b"
                    strokeWidth=".8"
                  />
                  <text className="rf-tooltip-label" x="10" y="16">
                    {data.labels[active]}
                  </text>
                  <text className="rf-tooltip-value" x="10" y="35">
                    {money(data.current[active])}
                  </text>
                </g>
              </g>
            )}
          </svg>
          <div className="rf-legend" aria-hidden="true">
            <span>
              <i className="rf-key" />
              Current period
            </span>
            <span>
              <i className="rf-key rf-key--previous" />
              Previous period
            </span>
          </div>
          <footer className="rf-footer">
            <div className="rf-stat">
              <p className="rf-stat-label">Transactions</p>
              <p className="rf-stat-value">
                {data.transactions.toLocaleString("en-US")}
              </p>
            </div>
            <div className="rf-stat">
              <p className="rf-stat-label">Avg. order value</p>
              <p className="rf-stat-value">
                {money(total / data.transactions)}
              </p>
            </div>
            <div className="rf-stat">
              <p className="rf-stat-label">Conversion</p>
              <p className="rf-stat-value">{data.conversion}</p>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
}
