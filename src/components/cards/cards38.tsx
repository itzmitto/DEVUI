// DevUI Card 38 — Retrieval Map
// Self-contained HTML/CSS/SVG. No external chart or icon package required.
import { useState } from "react";

export const cardMeta = {
  title: "Card 38 — Retrieval Map",
  category: "Observability / Retrieval",
  description:
    "A green hexbin retrieval map with score thresholds and an inspectable densest bin.",
  tags: ["Retrieval", "Hexbin", "Metrics"],
};

const palette = [
  "#294d3c",
  "#2e634a",
  "#337e59",
  "#379a6d",
  "#3bb780",
  "#42d595",
  "#4beaab",
  "#30312f",
  "#373835",
  "#3f403c",
];
const rows = [
  "...1.1.2.2.2.2.1.2.......",
  ".254325434251231220..00..",
  ".3254325435525234432.0...",
  "1432543254363432554222.0.",
  "1244463455212355442522.1.",
  "1333434221211041442421211",
  "2222313210..1.11212112122",
  ".9.9...8.8.8.7.7.7.7.9.9.",
  "98988788888.7.777.87.7889",
  "87.7879798887887.787...79",
  "8..7889889888787788.7.7..",
  "7.8.8.8.8...9.8...8.7...7",
];
const hexagon = Array.from({ length: 6 }, (_, i) => {
  const angle = (i * Math.PI) / 3;
  return `${(Math.cos(angle) * 9.2).toFixed(2)},${(Math.sin(angle) * 9.2).toFixed(2)}`;
}).join(" ");
const cells = rows.flatMap((row, r) =>
  Array.from(row, (level, c) => ({
    x: 21 + c * 13.8,
    y: r * 15.8 + (c % 2) * 7.9,
    level,
    color: level === "." ? "transparent" : palette[Number(level)],
    count:
      r === 4 && c === 5
        ? 232
        : 8 * (1 + (Number(level) % 7) * 4 + ((c + r * 3) % 5)),
    row: r,
    column: c,
  })),
);
const densest = cells.findIndex((cell) => cell.row === 4 && cell.column === 5);
const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export default function Cards38() {
  const [selected, setSelected] = useState(densest);
  const active = cells[selected];
  return (
    <>
      <style>{`.devui-card-38 { width:414px; max-width:100%; container-type:inline-size; }
.devui-card-38, .devui-card-38 * { box-sizing:border-box; }
.devui-card-38 .ops-card { padding:1cqw; border-radius:3.5cqw; color:#eee; background:#111212; box-shadow:inset 0 -1cqw .7cqw rgba(0,0,0,.25),0 .5cqw 1cqw rgba(0,0,0,.08); font-family:Arial,Helvetica,sans-serif; -webkit-font-smoothing:antialiased; }
.devui-card-38 .ops-header { display:flex; align-items:center; gap:3.4cqw; height:17.6cqw; padding:0 4.8cqw; }
.devui-card-38 .ops-icon { display:grid; place-items:center; flex:0 0 8.3cqw; width:8.3cqw; height:8.3cqw; border:1px dashed #4e514b; border-radius:2cqw; color:#f0f3ee; }
.devui-card-38 .ops-icon svg { width:4.9cqw; height:4.9cqw; }
.devui-card-38 h2, .devui-card-38 p { margin:0; }
.devui-card-38 .ops-title { font:500 3.86cqw/1.2 Arial,Helvetica,sans-serif; letter-spacing:-.08px; }
.devui-card-38 .ops-subtitle { margin-top:.15cqw; color:#686b65; font-size:3.4cqw; line-height:1.2; }
.devui-card-38 .ops-body { padding:4.35cqw; border-radius:2cqw; background:linear-gradient(#20211f,#1d1e1c); }
.devui-card-38 .ops-primary { display:flex; align-items:baseline; gap:3cqw; white-space:nowrap; }
.devui-card-38 .ops-value { color:#f1f3ee; font:italic 400 6.3cqw/1.2 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:-.1px; }
.devui-card-38 .ops-target { color:#69d9b1; font:400 3.45cqw/1.2 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:.05px; }
.devui-card-38 .ops-chart-heading { display:flex; align-items:baseline; justify-content:space-between; gap:2cqw; margin-top:3.9cqw; color:#a6a9a1; font-size:3.4cqw; line-height:1.25; }
.devui-card-38 .ops-chart-note { color:#666b62; font:400 3.3cqw/1.2 'SFMono-Regular',Consolas,'Liberation Mono',monospace; white-space:nowrap; }
.devui-card-38 .ops-chart { display:block; width:100%; height:auto; margin-top:3.9cqw; overflow:visible; outline:none; }
.devui-card-38 .ops-chart:focus-visible { outline:1px solid #55b993; outline-offset:3px; border-radius:4px; }
.devui-card-38 .ops-axis { display:flex; justify-content:space-between; margin-top:2.4cqw; color:#74776e; font:400 3.3cqw/1.2 'SFMono-Regular',Consolas,'Liberation Mono',monospace; }
.devui-card-38 .ops-legend { display:grid; gap:2.2cqw; list-style:none; margin:4cqw 0 0; padding:0; }
.devui-card-38 .ops-legend li { display:flex; align-items:center; justify-content:space-between; gap:3cqw; font:400 3.45cqw/1.2 'SFMono-Regular',Consolas,'Liberation Mono',monospace; }
.devui-card-38 .legend-label { display:flex; align-items:center; gap:2.4cqw; color:#aaaDA3; }
.devui-card-38 .legend-dot { width:2.5cqw; height:2.5cqw; border-radius:.5cqw; background:#4de6ad; }
.devui-card-38 .legend-dot--muted { background:#2d6f53; }
.devui-card-38 .legend-dot--gray { background:#565953; }
.devui-card-38 .legend-value { color:#f1f2ed; }
.devui-card-38 .tooltip-title { fill:#b9c5b6; font:13px Arial,Helvetica,sans-serif; }
.devui-card-38 .tooltip-value { fill:#f2f5ee; font:600 14px 'SFMono-Regular',Consolas,'Liberation Mono',monospace; }
.devui-card-38 .plot-tooltip { pointer-events:none; filter:drop-shadow(0 2px 4px rgba(0,0,0,.12)); }
@media(prefers-reduced-motion:reduce) { .devui-card-38 * { transition:none !important; } }

.devui-card-38 .heat-cell { stroke:rgba(36,73,54,.1); stroke-width:.4; }
.devui-card-38 .heat-selection { fill:#49e2a2; stroke:#102a1b; stroke-width:2; pointer-events:none; }`}</style>
      <div className="devui-card-38">
        <section className="ops-card" aria-label="Retrieval map">
          <header className="ops-header">
            <span className="ops-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="m12 4 7 4v8l-7 4-7-4V8Z" />
              </svg>
            </span>
            <div>
              <h2 className="ops-title">Retrieval map</h2>
              <p className="ops-subtitle">chunk size × score · 24 h</p>
            </div>
          </header>
          <div className="ops-body">
            <div className="ops-primary">
              <p className="ops-value">0.71 / 0.40</p>
              <p className="ops-target">median / gate</p>
            </div>
            <div className="ops-chart-heading">
              <span>Score by chunk size</span>
              <span className="ops-chart-note">1 hex = 8 chunks</span>
            </div>
            <svg
              className="ops-chart heat-chart"
              viewBox="0 0 364 186"
              role="img"
              tabIndex={0}
              aria-label="Retrieval map. Use the arrow keys to inspect bins and Home to return to the densest bin."
              onPointerLeave={() => setSelected(densest)}
              onKeyDown={(event) => {
                const steps: Record<string, number> = {
                  ArrowLeft: -1,
                  ArrowRight: 1,
                  ArrowUp: -25,
                  ArrowDown: 25,
                };
                if (event.key === "Home") {
                  event.preventDefault();
                  setSelected(densest);
                } else if (event.key in steps) {
                  event.preventDefault();
                  let next = selected;
                  for (let i = 0; i < cells.length; i++) {
                    next =
                      (next + steps[event.key] + cells.length) % cells.length;
                    if (cells[next].level !== ".") break;
                  }
                  setSelected(next);
                }
              }}
            >
              {cells.map((cell, i) =>
                cell.level === "." ? null : (
                  <polygon
                    key={i}
                    className="heat-cell"
                    points={hexagon}
                    transform={`translate(${cell.x} ${cell.y})`}
                    fill={cell.color}
                    data-index={i}
                    data-x={cell.x}
                    data-y={cell.y}
                    data-count={cell.count}
                    onPointerEnter={() => setSelected(i)}
                  />
                ),
              )}
              <path
                d="M0 111H364"
                stroke="#737d6d"
                strokeWidth=".8"
                strokeDasharray="3 4"
                opacity=".7"
              />
              <polygon
                className="heat-selection"
                points={hexagon}
                transform={`translate(${active.x} ${active.y})`}
              />
              <g
                className="plot-tooltip heat-tooltip"
                transform={`translate(${clamp(active.x - 54, 0, 254)} ${clamp(active.y - 62, 5, 125)})`}
              >
                <rect
                  width="110"
                  height="51"
                  rx="7"
                  fill="#405648"
                  fillOpacity=".88"
                  stroke="#7a947b"
                  strokeWidth=".6"
                  strokeOpacity=".5"
                />
                <text className="tooltip-title" x="9" y="20">
                  {selected === densest ? "Densest Bin" : "Selected Bin"}
                </text>
                <text className="tooltip-value" x="9" y="40">
                  {active.count} chunks
                </text>
              </g>
            </svg>
            <div className="ops-axis">
              <span>90 tok</span>
              <span>1.5k tok</span>
            </div>
            <ul className="ops-legend" aria-label="Retrieval score legend">
              <li>
                <span className="legend-label">
                  <span className="legend-dot" />
                  above gate
                </span>
                <span className="legend-value">85 %</span>
              </li>
              <li>
                <span className="legend-label">
                  <span className="legend-dot legend-dot--muted" />
                  sparse (≤3)
                </span>
                <span className="legend-value">113 bins</span>
              </li>
              <li>
                <span className="legend-label">
                  <span className="legend-dot legend-dot--gray" />
                  below 0.40
                </span>
                <span className="legend-value">15 %</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
