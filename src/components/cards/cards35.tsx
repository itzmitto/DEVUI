// DevUI Card 35 — 3D Spectrum Surface
// Zelfstandig bestand met SVG-perspectiefgrafiek; geen 3D- of grafiekpakket nodig.
import { useId } from "react";

export const cardMeta = {
  title: "Card 35 — 3D Spectrum Surface",
  category: "Dashboard / 3D charts",
  description:
    "Golvende geribbelde oppervlaktegrafiek in groen, cyaan, blauw en paars.",
  tags: ["3D", "Surface", "Spectrum"],
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

function height(x: number, y: number) {
  const peak =
    0.81 * Math.exp(-((x - 0.4) ** 2 / 0.031 + (y - 0.62) ** 2 / 0.1));
  const second =
    0.46 * Math.exp(-((x - 0.72) ** 2 / 0.038 + (y - 0.25) ** 2 / 0.046));
  return (
    0.012 +
    peak +
    second +
    0.018 * Math.sin(x * 29 + y * 7) * Math.sin(Math.PI * x)
  );
}
function surfacePath(y: number) {
  const start = project(0, y),
    end = project(1, y);
  const curve = Array.from({ length: 65 }, (_, i) => {
    const x = i / 64,
      p = project(x, y, height(x, y));
    return `L${p.x.toFixed(2)} ${p.y.toFixed(2)}`;
  }).join(" ");
  return `M${start.x.toFixed(2)} ${start.y.toFixed(2)} ${curve}L${end.x.toFixed(2)} ${end.y.toFixed(2)}Z`;
}
const sliceColors = [
  "#165dc4",
  "#176dd0",
  "#177fd7",
  "#1491dd",
  "#10a1df",
  "#10b4dd",
  "#15c9d2",
  "#1bdbc4",
  "#24eeb1",
  "#32fca2",
  "#3aff92",
  "#44ff85",
  "#48ff80",
  "#3cff86",
  "#23f793",
  "#16e9ac",
  "#19d5c8",
  "#25b9e3",
  "#3a8eec",
  "#4c6be6",
  "#5151e0",
  "#4d3ad8",
  "#452bd1",
];

export default function Cards35() {
  const plotId = useId();
  return (
    <>
      <style>{`.devui-card-35 { width: 320px; max-width: 100%; container-type: inline-size; }
.devui-card-35, .devui-card-35 * { box-sizing: border-box; }
.devui-card-35 .sales-panel {
  padding: 4.6cqw 5.8cqw 4.3cqw;
  border: 1px solid #171917;
  border-radius: 3.2cqw;
  background: #010202;
  color: #f4f4f5;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 7cqw 10cqw -4cqw rgba(0,0,0,.55);
}
.devui-card-35 .sales-title { margin: 0 0 3.2cqw; font-size: 6.25cqw; font-weight: 600; line-height: 1.2; letter-spacing: -.15px; }
.devui-card-35 .sales-chart { display: block; width: 100%; height: auto; overflow: visible; }
.devui-card-35 .sales-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 5.5cqw; margin-top: 4.5cqw; }
.devui-card-35 .sales-label { display: flex; align-items: center; gap: 1.3cqw; color: #999a9b; font-size: 2.9cqw; line-height: 1.3; }
.devui-card-35 .sales-star { color: #75fa8a; font-size: 3.7cqw; line-height: 1; }
.devui-card-35 .sales-bag { width: 3.1cqw; height: 3.1cqw; color: #f4cd45; }
.devui-card-35 .sales-value { margin: 1.5cqw 0 1cqw; font: 400 7.2cqw/1.1 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; letter-spacing: -.4px; white-space: nowrap; }
.devui-card-35 .sales-change { margin: 0; color: #505452; font-size: 2.8cqw; line-height: 1.3; white-space: nowrap; }
.devui-card-35 .sales-change strong { margin-right: 1cqw; color: #22df99; font-weight: 600; }
.devui-card-35 .sales-table { width: 100%; margin-top: 5.8cqw; border-collapse: collapse; font-size: 3.5cqw; line-height: 1.3; }
.devui-card-35 .sales-table th, .devui-card-35 .sales-table td { padding: 3cqw 0; border-bottom: 1px solid #1e2020; }
.devui-card-35 .sales-table th { color: #a4a5a6; text-align: left; font-weight: 400; }
.devui-card-35 .sales-table td { color: #eee; text-align: right; font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; font-variant-numeric: tabular-nums; }
.devui-card-35 .sales-table tr:last-child th, .devui-card-35 .sales-table tr:last-child td { border-bottom: 0; padding-bottom: 0; }
.devui-card-35 .sales-chart { isolation:isolate; }
.devui-card-35 .plot-axis { fill:#d0d1c9; font:8px Arial,Helvetica,sans-serif; }
.devui-card-35 .bubble-halo { filter:blur(5px); }
.devui-card-35 .point-halo { filter:blur(6px); }
.devui-card-35 .volume-haze { filter:blur(12px); }
.devui-card-35 .surface-ridge { stroke:#10284f; stroke-width:.9; stroke-linejoin:round; }`}</style>
      <div className="devui-card-35">
        <article
          className="sales-panel"
          aria-label="Sales Report — 3D Spectrum Surface"
        >
          <h2 className="sales-title">Sales Report</h2>

          <svg
            className="sales-chart"
            viewBox="0 0 280 228"
            role="img"
            aria-label="Driedimensionale geribbelde oppervlaktegrafiek in paars, blauw en groen"
          >
            <defs>
              <radialGradient id={`${plotId}-volume`}>
                <stop offset="0%" stopColor="#00ae38" stopOpacity=".18" />
                <stop offset="100%" stopColor="#008b27" stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse
              cx="155"
              cy="96"
              rx="113"
              ry="88"
              fill={`url(#${plotId}-volume)`}
            />
            {renderGrid("#284d31")}
            {sliceColors.map((color, i) => (
              <path
                className="surface-ridge"
                key={i}
                d={surfacePath(i / (sliceColors.length - 1))}
                fill={color}
              />
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
