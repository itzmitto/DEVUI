// DevUI Card 33 — 3D Bubble Plot
// Zelfstandig bestand met SVG-perspectiefgrafiek; geen 3D- of grafiekpakket nodig.
import { useId } from "react";

export const cardMeta = {
  title: "Card 33 — 3D Bubble Plot",
  category: "Dashboard / 3D charts",
  description: "Gekleurde driedimensionale bollen in een perspectiefraster.",
  tags: ["3D", "Bubbles", "Sales"],
};

function project(x: number, y: number, z = 0) {
  return { x: 155 + 115 * x - 130 * y, y: 112 + 54 * x + 44 * y - 112 * z };
}
function line(a: ReturnType<typeof project>, b: ReturnType<typeof project>) {
  return `M${a.x.toFixed(2)} ${a.y.toFixed(2)}L${b.x.toFixed(2)} ${b.y.toFixed(2)}`;
}
function renderGrid(tint: string) {
  return (
    <g>
      <g fill="none" stroke={tint} strokeWidth=".85" opacity=".72">
        {Array.from({ length: 6 }, (_, i) => {
          const t = i / 5;
          return (
            <g key={i}>
              <path d={line(project(0, t, 0), project(0, t, 1))} />
              <path d={line(project(t, 0, 0), project(t, 0, 1))} />
              <path d={line(project(0, 0, t), project(0, 1, t))} />
              <path d={line(project(0, 0, t), project(1, 0, t))} />
              <path d={line(project(0, t, 0), project(1, t, 0))} />
              <path d={line(project(t, 0, 0), project(t, 1, 0))} />
            </g>
          );
        })}
      </g>
      {[100, 200, 300, 400, 500].map((value, i) => (
        <text
          key={value}
          className="plot-axis"
          x="20"
          y={159 - i * 28}
          textAnchor="end"
        >
          {value}
        </text>
      ))}
      {[50, 75, 95].map((value, i) => {
        const p = project(0.15 + i * 0.28, 1);
        return (
          <text
            key={value}
            className="plot-axis"
            x={p.x}
            y={p.y + 14}
            textAnchor="middle"
            transform={`rotate(24 ${p.x} ${p.y + 14})`}
          >
            {value}
          </text>
        );
      })}
      {[120, 140, 160, 180].map((value, i) => {
        const p = project(1, 1 - i * 0.285);
        return (
          <text
            key={value}
            className="plot-axis"
            x={p.x + 1}
            y={p.y + 14}
            textAnchor="middle"
            transform={`rotate(-18 ${p.x + 1} ${p.y + 14})`}
          >
            {value}
          </text>
        );
      })}
    </g>
  );
}

const bubbles = [
  { x: 164, y: 20, r: 6, color: "#66c5ef", light: "#d8faff" },
  { x: 178, y: 31, r: 9, color: "#84c84a", light: "#d0eea4" },
  { x: 194, y: 39, r: 7, color: "#8fcdeb", light: "#ddf8ff" },
  { x: 208, y: 50, r: 7, color: "#8e36e4", light: "#d896ff" },
  { x: 218, y: 64, r: 6, color: "#498bd9", light: "#b2ddff" },
  { x: 101, y: 58, r: 6, color: "#68c4df", light: "#d9f7ff" },
  { x: 121, y: 43, r: 16, color: "#94b82c", light: "#d8f16f" },
  { x: 84, y: 99, r: 11, color: "#8a1bd2", light: "#d477ff" },
  { x: 110, y: 103, r: 17, color: "#736a8b", light: "#b8acc8" },
  { x: 183, y: 64, r: 14, color: "#8f19e3", light: "#cf71ff" },
  { x: 212, y: 87, r: 14, color: "#e51b3b", light: "#ff8091" },
  { x: 229, y: 102, r: 6, color: "#75b9e2", light: "#c7ecff" },
  { x: 218, y: 114, r: 13, color: "#5d22d9", light: "#9874ff" },
  { x: 154, y: 91, r: 27, color: "#dd7412", light: "#ffbf41" },
  { x: 92, y: 131, r: 11, color: "#7a15c3", light: "#c063f3" },
  { x: 105, y: 151, r: 10, color: "#6421c4", light: "#a861ef" },
  { x: 130, y: 141, r: 13, color: "#e79316", light: "#ffd65f" },
  { x: 190, y: 157, r: 14, color: "#4934c2", light: "#8c80ee" },
  { x: 166, y: 160, r: 16, color: "#629442", light: "#b6d353" },
  { x: 134, y: 173, r: 5, color: "#70c8e4", light: "#dcf7ff" },
  { x: 83, y: 118, r: 4, color: "#7caee0", light: "#cee7ff" },
];

export default function Cards33() {
  const plotId = useId();
  return (
    <>
      <style>{`.devui-card-33 { width: 320px; max-width: 100%; container-type: inline-size; }
.devui-card-33, .devui-card-33 * { box-sizing: border-box; }
.devui-card-33 .sales-panel {
  padding: 4.6cqw 5.8cqw 4.3cqw;
  border: 1px solid #171917;
  border-radius: 3.2cqw;
  background: #010202;
  color: #f4f4f5;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 7cqw 10cqw -4cqw rgba(0,0,0,.55);
}
.devui-card-33 .sales-title { margin: 0 0 3.2cqw; font-size: 6.25cqw; font-weight: 600; line-height: 1.2; letter-spacing: -.15px; }
.devui-card-33 .sales-chart { display: block; width: 100%; height: auto; overflow: visible; }
.devui-card-33 .sales-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 5.5cqw; margin-top: 4.5cqw; }
.devui-card-33 .sales-label { display: flex; align-items: center; gap: 1.3cqw; color: #999a9b; font-size: 2.9cqw; line-height: 1.3; }
.devui-card-33 .sales-star { color: #75fa8a; font-size: 3.7cqw; line-height: 1; }
.devui-card-33 .sales-bag { width: 3.1cqw; height: 3.1cqw; color: #f4cd45; }
.devui-card-33 .sales-value { margin: 1.5cqw 0 1cqw; font: 400 7.2cqw/1.1 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; letter-spacing: -.4px; white-space: nowrap; }
.devui-card-33 .sales-change { margin: 0; color: #505452; font-size: 2.8cqw; line-height: 1.3; white-space: nowrap; }
.devui-card-33 .sales-change strong { margin-right: 1cqw; color: #22df99; font-weight: 600; }
.devui-card-33 .sales-table { width: 100%; margin-top: 5.8cqw; border-collapse: collapse; font-size: 3.5cqw; line-height: 1.3; }
.devui-card-33 .sales-table th, .devui-card-33 .sales-table td { padding: 3cqw 0; border-bottom: 1px solid #1e2020; }
.devui-card-33 .sales-table th { color: #a4a5a6; text-align: left; font-weight: 400; }
.devui-card-33 .sales-table td { color: #eee; text-align: right; font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; font-variant-numeric: tabular-nums; }
.devui-card-33 .sales-table tr:last-child th, .devui-card-33 .sales-table tr:last-child td { border-bottom: 0; padding-bottom: 0; }
.devui-card-33 .sales-chart { isolation:isolate; }
.devui-card-33 .plot-axis { fill:#d0d1c9; font:8px Arial,Helvetica,sans-serif; }
.devui-card-33 .bubble-halo { filter:blur(5px); }
.devui-card-33 .point-halo { filter:blur(6px); }
.devui-card-33 .volume-haze { filter:blur(12px); }
.devui-card-33 .surface-ridge { stroke:#10284f; stroke-width:.9; stroke-linejoin:round; }`}</style>
      <div className="devui-card-33">
        <article
          className="sales-panel"
          aria-label="Sales Report — 3D Bubble Plot"
        >
          <h2 className="sales-title">Sales Report</h2>

          <svg
            className="sales-chart"
            viewBox="0 0 280 228"
            role="img"
            aria-label="Driedimensionale bollengrafiek met gekleurde bollen"
          >
            <defs>
              {bubbles.map((b, i) => (
                <radialGradient
                  key={i}
                  id={`${plotId}-bubble-${i}`}
                  cx="32%"
                  cy="24%"
                  r="80%"
                >
                  <stop offset="0%" stopColor={b.light} stopOpacity=".9" />
                  <stop offset="48%" stopColor={b.color} stopOpacity=".87" />
                  <stop offset="100%" stopColor={b.color} stopOpacity=".35" />
                </radialGradient>
              ))}
            </defs>
            {renderGrid("#42433d")}
            <g className="bubble-halo">
              {bubbles.map((b, i) => (
                <circle
                  key={i}
                  cx={b.x}
                  cy={b.y}
                  r={b.r + 3}
                  fill={b.color}
                  opacity=".15"
                />
              ))}
            </g>
            {bubbles.map((b, i) => (
              <g key={i}>
                <circle
                  cx={b.x}
                  cy={b.y}
                  r={b.r}
                  fill={`url(#${plotId}-bubble-${i})`}
                  stroke={b.color}
                  strokeWidth=".8"
                  strokeOpacity=".8"
                />
                <path
                  d={`M${b.x - b.r * 0.74} ${b.y - b.r * 0.32}A${b.r * 0.8} ${b.r * 0.8} 0 0 1 ${b.x + b.r * 0.25} ${b.y - b.r * 0.76}`}
                  fill="none"
                  stroke={b.light}
                  strokeWidth=".9"
                  opacity=".4"
                />
              </g>
            ))}
          </svg>

          <div className="sales-metrics">
            <div>
              <div className="sales-label">
                <span className="sales-star" aria-hidden="true">
                  ✦
                </span>
                Monthly
              </div>
              <p className="sales-value">$8,097</p>
              <p className="sales-change">
                <strong>+19.6%</strong>44,214 USD
              </p>
            </div>
            <div>
              <div className="sales-label">
                <svg
                  className="sales-bag"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5 1h6l-1.5 3h-3L5 1Zm1 4h4c1 1.2 3.5 4 3.5 6.2 0 2.1-1.5 3.3-5.5 3.3s-5.5-1.2-5.5-3.3C2.5 9 5 6.2 6 5Z" />
                  <path
                    d="M8 7v5m1.5-4H7.4c-1.4 0-1.4 1.5 0 1.5h1.2c1.4 0 1.4 1.5 0 1.5H6.5"
                    fill="none"
                    stroke="#010202"
                    strokeWidth=".8"
                  />
                </svg>
                Yearly
              </div>
              <p className="sales-value">$312,134</p>
              <p className="sales-change">
                <strong>+2.5%</strong>301,002 USD
              </p>
            </div>
          </div>
          <table className="sales-table" aria-label="Verkoop per regio">
            <tbody>
              <tr>
                <th scope="row">Los Angeles</th>
                <td>291,192</td>
              </tr>
              <tr>
                <th scope="row">New York</th>
                <td>192,654</td>
              </tr>
              <tr>
                <th scope="row">Canada</th>
                <td>166,491</td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </>
  );
}
