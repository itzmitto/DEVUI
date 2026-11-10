// DevUI Card 04 — Radial Heatmap
// Zelfstandig bestand; geen extra pakketten of stylesheets nodig.

export const cardMeta = {
  title: "Card 04 — Radial Heatmap",
  category: "Dashboard / Analytics",
  description: "Ronde hexagon-heatmap met een gele kern en rode gloed.",
  tags: ["Dashboard", "Heatmap", "Radial"],
};

function hexPoints(cx: number, cy: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    return `${(cx + Math.cos(angle) * 6).toFixed(2)},${(cy + Math.sin(angle) * 6).toFixed(2)}`;
  }).join(" ");
}

const cells = Array.from({ length: 15 * 19 }, (_, i) => {
  const row = Math.floor(i / 19);
  const col = i % 19;
  const x = 6 + col * 11.2 + (row % 2) * 5.6;
  const y = 6 + row * 10.5;
  const noise = ((col * 17 + row * 23) % 13) - 6;
  const distance = Math.hypot((x - 110) * 0.94, (y - 80) * 1.06) + noise * 1.2;
  const fill =
    distance < 19
      ? "#ffed00"
      : distance < 29
        ? "#ffd000"
        : distance < 39
          ? "#ff6300"
          : distance < 50
            ? "#ef152b"
            : distance < 61
              ? "#8e173b"
              : distance < 73
                ? "#30243e"
                : distance < 84
                  ? "#121626"
                  : "#070a12";
  return {
    points: hexPoints(x, y),
    fill,
    opacity: distance > 92 ? 0 : distance > 82 ? 0.45 : 1,
  };
});

export default function Cards4() {
  return (
    <>
      <style>{`.devui-card-4 { width: 320px; max-width: 100%; container-type: inline-size; }
.devui-card-4, .devui-card-4 * { box-sizing: border-box; }
.devui-card-4 .sales-panel {
  padding: 4.6cqw 5.8cqw 4.3cqw;
  border: 1px solid #55565a;
  border-radius: 10px;
  background: #010202;
  color: #f4f4f5;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 14px 30px -20px #000;
}
.devui-card-4 .sales-title { margin: 0 0 5cqw; font-size: 6.25cqw; font-weight: 600; line-height: 1.2; letter-spacing: -.15px; }
.devui-card-4 .sales-chart { display: block; width: 100%; height: auto; overflow: visible; }
.devui-card-4 .sales-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 5.5cqw; margin-top: 6.5cqw; }
.devui-card-4 .sales-label { display: flex; align-items: center; gap: 1.3cqw; color: #999a9b; font-size: 2.9cqw; line-height: 1.3; }
.devui-card-4 .sales-star { color: #75fa8a; font-size: 3.7cqw; line-height: 1; }
.devui-card-4 .sales-bag { width: 3.1cqw; height: 3.1cqw; color: #f4cd45; }
.devui-card-4 .sales-value { margin: 1.5cqw 0 1cqw; font: 400 7.2cqw/1.1 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; letter-spacing: -.4px; white-space: nowrap; }
.devui-card-4 .sales-change { margin: 0; color: #505452; font-size: 2.8cqw; line-height: 1.3; white-space: nowrap; }
.devui-card-4 .sales-change strong { margin-right: 1cqw; color: #22df99; font-weight: 600; }
.devui-card-4 .sales-table { width: 100%; margin-top: 5.8cqw; border-collapse: collapse; font-size: 3.5cqw; line-height: 1.3; }
.devui-card-4 .sales-table th, .devui-card-4 .sales-table td { padding: 3cqw 0; border-bottom: 1px solid #1e2020; }
.devui-card-4 .sales-table th { color: #a4a5a6; text-align: left; font-weight: 400; }
.devui-card-4 .sales-table td { color: #eee; text-align: right; font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; font-variant-numeric: tabular-nums; }
.devui-card-4 .sales-table tr:last-child th, .devui-card-4 .sales-table tr:last-child td { border-bottom: 0; padding-bottom: 0; }`}</style>
      <div className="devui-card-4">
        <article
          className="sales-panel"
          aria-label="Sales Report — Radial Heatmap"
        >
          <h2 className="sales-title">Sales Report</h2>
          <svg
            className="sales-chart"
            viewBox="0 0 220 164"
            role="img"
            aria-label="Ronde hexagon-heatmap met een gele kern en rode buitenring"
          >
            {cells.map((cell, i) => (
              <polygon
                key={i}
                points={cell.points}
                fill={cell.fill}
                opacity={cell.opacity}
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
                <td>166,451</td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </>
  );
}
