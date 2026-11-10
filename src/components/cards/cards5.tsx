// DevUI Card 05 — Matrix Heatmap
// Zelfstandig bestand; geen extra pakketten of stylesheets nodig.

export const cardMeta = {
  title: "Card 05 — Matrix Heatmap",
  category: "Dashboard / Analytics",
  description: "Gekleurde matrix met afgeronde vakjes en verkoopwaarden.",
  tags: ["Dashboard", "Matrix", "Heatmap"],
};

const values = [
  [28, 31, 33, 35, 44, 48, 55, 56],
  [32, 31, 34, 35, 26, 28, 22, 35],
  [36, 35, 35, 35, 35, 21, 36, 36],
  [27, 29, 32, 22, 34, 23, 29, 35],
  [14, 16, 18, 11, 13, 12, 16, 11],
  [32, 32, 32, 1, 31, 31, 11, 32],
  [3, 6, 8, 11, 31, 11, 12, 14],
  [3, 2, 7, 30, 31, 11, 19, 33],
];
const tones = [
  "bbglgcaa",
  "ggllbbbb",
  "ggglgbgg",
  "bbgbvbbg",
  "bbbbbbbb",
  "bbbvbbbb",
  "vvvbvbbb",
  "vvvvvvvb",
];
const palette: Record<string, string> = {
  v: "#522db4",
  b: "#635cf0",
  g: "#75e8a1",
  l: "#b6fa58",
  c: "#61dfb3",
  a: "#ffc952",
};

export default function Cards5() {
  return (
    <>
      <style>{`.devui-card-5 { width: 320px; max-width: 100%; container-type: inline-size; }
.devui-card-5, .devui-card-5 * { box-sizing: border-box; }
.devui-card-5 .sales-panel {
  padding: 4.6cqw 5.8cqw 4.3cqw;
  border: 1px solid #55565a;
  border-radius: 10px;
  background: #010202;
  color: #f4f4f5;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 14px 30px -20px #000;
}
.devui-card-5 .sales-title { margin: 0 0 5cqw; font-size: 6.25cqw; font-weight: 600; line-height: 1.2; letter-spacing: -.15px; }
.devui-card-5 .sales-chart { display: block; width: 100%; height: auto; overflow: visible; }
.devui-card-5 .sales-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 5.5cqw; margin-top: 6.5cqw; }
.devui-card-5 .sales-label { display: flex; align-items: center; gap: 1.3cqw; color: #999a9b; font-size: 2.9cqw; line-height: 1.3; }
.devui-card-5 .sales-star { color: #75fa8a; font-size: 3.7cqw; line-height: 1; }
.devui-card-5 .sales-bag { width: 3.1cqw; height: 3.1cqw; color: #f4cd45; }
.devui-card-5 .sales-value { margin: 1.5cqw 0 1cqw; font: 400 7.2cqw/1.1 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; letter-spacing: -.4px; white-space: nowrap; }
.devui-card-5 .sales-change { margin: 0; color: #505452; font-size: 2.8cqw; line-height: 1.3; white-space: nowrap; }
.devui-card-5 .sales-change strong { margin-right: 1cqw; color: #22df99; font-weight: 600; }
.devui-card-5 .sales-table { width: 100%; margin-top: 5.8cqw; border-collapse: collapse; font-size: 3.5cqw; line-height: 1.3; }
.devui-card-5 .sales-table th, .devui-card-5 .sales-table td { padding: 3cqw 0; border-bottom: 1px solid #1e2020; }
.devui-card-5 .sales-table th { color: #a4a5a6; text-align: left; font-weight: 400; }
.devui-card-5 .sales-table td { color: #eee; text-align: right; font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; font-variant-numeric: tabular-nums; }
.devui-card-5 .sales-table tr:last-child th, .devui-card-5 .sales-table tr:last-child td { border-bottom: 0; padding-bottom: 0; }`}</style>
      <div className="devui-card-5">
        <article
          className="sales-panel"
          aria-label="Sales Report — Matrix Heatmap"
        >
          <h2 className="sales-title">Sales Report</h2>
          <svg
            className="sales-chart"
            viewBox="0 0 220 164"
            role="img"
            aria-label="Heatmap met acht rijen en acht kolommen met verkoopwaarden"
          >
            {values.flatMap((row, r) =>
              row.map((value, c) => {
                const tone = tones[r][c];
                return (
                  <g key={`${r}-${c}`}>
                    <rect
                      x={c * 27.5}
                      y={r * 20.5}
                      width="25.8"
                      height="18.8"
                      rx="6"
                      fill={palette[tone]}
                    />
                    <text
                      x={c * 27.5 + 12.9}
                      y={r * 20.5 + 12.9}
                      textAnchor="middle"
                      fontFamily="Arial, sans-serif"
                      fontSize="10"
                      fill={"glca".includes(tone) ? "#13251b" : "#d9d4ff"}
                    >
                      {String(value).padStart(2, "0")}
                    </text>
                  </g>
                );
              }),
            )}
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
