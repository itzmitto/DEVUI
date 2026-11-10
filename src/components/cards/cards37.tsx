// DevUI Card 37 — Purple Hex
// Zelfstandig bestand; geen extra pakketten of stylesheets nodig.

export const cardMeta = {
  title: "Card 37 — Magma Fire",
  category: "Dashboard / Analytics",
  description: "Hexagon-heatmap met gloeiende lava en magma.",
  tags: ["Dashboard", "Hexagons", "Magma", "Fire"],
};

function hexPoints(cx: number, cy: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    return `${(cx + Math.cos(angle) * 6).toFixed(2)},${(cy + Math.sin(angle) * 6).toFixed(2)}`;
  }).join(" ");
}

const magma = [
  "#3B0A0A",
  "#641111",
  "#881809",
  "#A9260B",
  "#D43A08",
  "#6B1B13",
];

const lava = ["#FFCF4D", "#FF8A18", "#FF4A0B"];

const embers = ["#FFD966", "#FFB52C", "#FFE9A3"];

const cells = Array.from({ length: 15 * 19 }, (_, i) => {
  const row = Math.floor(i / 19);
  const col = i % 19;

  const seed = (col * 13 + row * 7 + col * row * 3) % 37;

  const edge = 2 + Math.round(1.5 * Math.sin(row * 0.68)) + (row > 10 ? 2 : 0);

  const isLava = col < edge && seed > 2;

  const isEmber =
    (col === 13 && row > 1 && row < 7) || (col === 18 && row % 4 === 1);

  const fill = isLava
    ? lava[seed % lava.length]
    : isEmber
      ? embers[seed % embers.length]
      : magma[seed % magma.length];

  return {
    points: hexPoints(6 + col * 11.2 + (row % 2) * 5.6, 6 + row * 10.5),
    fill,
  };
});

export default function Cards37() {
  return (
    <>
      <style>{`
         .devui-card-37 {
           width: 320px;
           max-width: 100%;
           container-type: inline-size;
         }

         .devui-card-37,
         .devui-card-37 * {
           box-sizing: border-box;
         }

         .devui-card-37 .sales-panel {
           padding: 4.6cqw 5.8cqw 4.3cqw;
           border: 1px solid #55565a;
           border-radius: 10px;
           background: #010202;
           color: #f4f4f5;
           font-family: Arial, Helvetica, sans-serif;
           box-shadow: 0 14px 30px -20px #000;
         }

         .devui-card-37 .sales-title {
           margin: 0 0 5cqw;
           font-size: 6.25cqw;
           font-weight: 600;
           line-height: 1.2;
           letter-spacing: -.15px;
         }

         .devui-card-37 .sales-chart {
           display: block;
           width: 100%;
           height: auto;
           overflow: visible;
         }

         .devui-card-37 .sales-metrics {
           display: grid;
           grid-template-columns: 1fr 1fr;
           gap: 5.5cqw;
           margin-top: 6.5cqw;
         }

         .devui-card-37 .sales-label {
           display: flex;
           align-items: center;
           gap: 1.3cqw;
           color: #999a9b;
           font-size: 2.9cqw;
           line-height: 1.3;
         }

         .devui-card-37 .sales-star {
           color: #ff8a18;
           font-size: 3.7cqw;
           line-height: 1;
         }

         .devui-card-37 .sales-bag {
           width: 3.1cqw;
           height: 3.1cqw;
           color: #ffcf4d;
         }

         .devui-card-37 .sales-value {
           margin: 1.5cqw 0 1cqw;
           font: 400 7.2cqw/1.1 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
           letter-spacing: -.4px;
           white-space: nowrap;
         }

         .devui-card-37 .sales-change {
           margin: 0;
           color: #ff6b29;
           font-size: 2.8cqw;
           line-height: 1.3;
           white-space: nowrap;
         }

         .devui-card-37 .sales-change strong {
           margin-right: 1cqw;
           color: #22df99;
           font-weight: 600;
         }

         .devui-card-37 .sales-table {
           width: 100%;
           margin-top: 5.8cqw;
           border-collapse: collapse;
           font-size: 3.5cqw;
           line-height: 1.3;
         }

         .devui-card-37 .sales-table th,
         .devui-card-37 .sales-table td {
           padding: 3cqw 0;
           border-bottom: 1px solid #1e2020;
         }

         .devui-card-37 .sales-table th {
           color: #a4a5a6;
           text-align: left;
           font-weight: 400;
         }

         .devui-card-37 .sales-table td {
           color: #eee;
           text-align: right;
           font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
           font-variant-numeric: tabular-nums;
         }

         .devui-card-37 .sales-table tr:last-child th,
         .devui-card-37 .sales-table tr:last-child td {
           border-bottom: 0;
           padding-bottom: 0;
         }
       `}</style>

      <div className="devui-card-37">
        <article className="sales-panel" aria-label="Sales Report — Purple Hex">
          <h2 className="sales-title">Sales Report</h2>

          <svg
            className="sales-chart"
            viewBox="0 0 220 164"
            role="img"
            aria-label="Paarse hexagon-heatmap met groene accenten"
          >
            {cells.map((cell, i) => (
              <polygon key={i} points={cell.points} fill={cell.fill} />
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
                <strong>+19.6%</strong>
                44,214 USD
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
                <strong>+2.5%</strong>
                301,002 USD
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
