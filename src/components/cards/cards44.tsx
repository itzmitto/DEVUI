// DevUI Card 44 — Hexagon Heatmap
// Self-contained React, CSS and SVG; no external images or chart packages.
export const cardMeta = {
  title: "Card 44 — Hexagon Heatmap",
  category: "Dashboard / Analytics",
  description:
    "A yellow-centered hexagonal heatmap on a black Sales Report card.",
  tags: ["Hexagons", "Heatmap", "Sales"],
};

const hexColors = [
  [
    "",
    "",
    "",
    "",
    "#111113",
    "#0e101b",
    "#20213f",
    "#0b0f1d",
    "#0e101d",
    "#110e1d",
    "#211e3c",
    "#0d0d0e",
    "#0b0a10",
    "",
    "",
    "",
  ],
  [
    "",
    "#0d0d0d",
    "#0b0c0e",
    "#100f19",
    "#21233b",
    "#212240",
    "#202140",
    "#21203f",
    "#1f1f3e",
    "#0c1022",
    "#0d101c",
    "#1f1e3e",
    "#0a101c",
    "#0b0b0b",
    "",
    "",
  ],
  [
    "",
    "",
    "#0d0d0d",
    "#0e0d1b",
    "#22203f",
    "#691e3d",
    "#1f2143",
    "#661d3d",
    "#711f39",
    "#212341",
    "#23203d",
    "#1b1e3c",
    "#212046",
    "#0f0e1c",
    "",
    "",
  ],
  [
    "",
    "",
    "#100e1b",
    "#1f1f39",
    "#651f3e",
    "#64233e",
    "#701e34",
    "#d40908",
    "#6e222f",
    "#771d3d",
    "#612634",
    "#1e233f",
    "#21223e",
    "",
    "",
    "",
  ],
  [
    "",
    "",
    "#100f14",
    "#0c0e1b",
    "#691f39",
    "#632337",
    "#ce0b00",
    "#da0a03",
    "#d40c00",
    "#d90e00",
    "#cf1400",
    "#691f33",
    "#1d233d",
    "#0b0e1a",
    "#08070c",
    "",
  ],
  [
    "#0a090e",
    "#100f1d",
    "#1e203a",
    "#731534",
    "#681936",
    "#cf0800",
    "#f8b50e",
    "#ffaf0b",
    "#f7b610",
    "#d80d03",
    "#5c212c",
    "#2c1a43",
    "#1e223f",
    "#222041",
    "",
    "",
  ],
  [
    "",
    "#0e0d19",
    "#20253c",
    "#1d1d3f",
    "#662037",
    "#dc090d",
    "#feb00e",
    "#fab00c",
    "#fdaf0b",
    "#feb10a",
    "#dd0a06",
    "#cf1100",
    "#721b3b",
    "#0d0f1c",
    "",
    "",
  ],
  [
    "#100e1b",
    "#1f1f3a",
    "#681b32",
    "#691d33",
    "#711b38",
    "#cc0f0d",
    "#fcaf07",
    "#edb609",
    "#f7bb08",
    "#e00606",
    "#d00b00",
    "#692236",
    "#1b223e",
    "#0d1022",
    "",
    "",
  ],
  [
    "",
    "#0d0f20",
    "#1d213f",
    "#711834",
    "#c41200",
    "#6a2427",
    "#fcae14",
    "#feb104",
    "#f8bb0b",
    "#f2b816",
    "#d01100",
    "#6e1d30",
    "#6a1a39",
    "#721639",
    "#0c0b18",
    "",
  ],
  [
    "#0c0e1d",
    "#1a2139",
    "#6a1b3a",
    "#6e1c3a",
    "#6e1c34",
    "#db0700",
    "#dd040c",
    "#ffaf00",
    "#feb70c",
    "#d70d06",
    "#df0700",
    "#6b1c32",
    "#1f1e3d",
    "#201d3f",
    "#1f1b40",
    "",
  ],
  [
    "#0c0c0c",
    "#0f0e1c",
    "#090d1b",
    "#701a37",
    "#6a1939",
    "#19253f",
    "#6d1f32",
    "#e20700",
    "#d10c00",
    "#d60e00",
    "#db0703",
    "#751930",
    "#711835",
    "#711a3d",
    "#0d0d1b",
    "",
  ],
  [
    "#0b0a0f",
    "#110d1c",
    "#691731",
    "#21213d",
    "#202137",
    "#cc0900",
    "#731c3a",
    "#791a38",
    "#711a35",
    "#751d3a",
    "#661d3a",
    "#20243b",
    "#172139",
    "#0e1016",
    "",
    "",
  ],
  [
    "",
    "",
    "#0e0d12",
    "#0f0c1c",
    "#681d34",
    "#6a1c3f",
    "#2a193c",
    "#6a1b3a",
    "#73173a",
    "#681837",
    "#202037",
    "#1e1c35",
    "#0c0e1f",
    "#0d0d1c",
    "#08070c",
    "",
  ],
  [
    "",
    "",
    "#0e101d",
    "#1a203b",
    "#11101b",
    "#1b203f",
    "#1e213b",
    "#6b1a39",
    "#211c3e",
    "#1f203e",
    "#0d0d23",
    "#0f0c1d",
    "#0c0b11",
    "",
    "",
    "",
  ],
  [
    "",
    "",
    "",
    "#0d0c12",
    "#0f101d",
    "#0f0c1a",
    "#110a19",
    "#130e1c",
    "#20203f",
    "#0e0d1b",
    "#0e0c1a",
    "#0b0712",
    "",
    "",
    "",
    "",
  ],
];

function hexagon(cx: number, cy: number) {
  return Array.from({ length: 6 }, (_, index) => {
    const angle = (index * Math.PI) / 3 - Math.PI / 2;
    return `${(cx + Math.cos(angle) * 6.9).toFixed(2)},${(cy + Math.sin(angle) * 6.9).toFixed(2)}`;
  }).join(" ");
}

export default function Cards44() {
  return (
    <>
      <style>{`.devui-card-44 { width: 272px; max-width: 100%; container-type: inline-size; }
.devui-card-44, .devui-card-44 * { box-sizing: border-box; }
.devui-card-44 .sales-panel {
  padding: 4.9cqw 6.25cqw 7cqw;
  overflow: hidden;
  border: 1px solid #090a0a;
  border-radius: 3cqw;
  background: #000;
  color: #f3f3f3;
  font-family: Inter, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  box-shadow: 0 9cqw 12cqw -5cqw #0009;
}
.devui-card-44 .sales-title { margin: 0 0 4.4cqw; font-size: 6.25cqw; font-weight: 600; line-height: 1.2; letter-spacing: -.13cqw; }
.devui-card-44 .sales-chart { display: block; width: 100%; height: auto; }
.devui-card-44 .sales-metrics { display: grid; grid-template-columns: 54% 46%; margin-top: 4.9cqw; }
.devui-card-44 .sales-label { display: flex; align-items: center; gap: 1.25cqw; margin: 0; color: #a6a6a0; font-size: 3.1cqw; line-height: 1.3; }
.devui-card-44 .sales-star { display: block; color: #a8ed4a; font-size: 4.2cqw; line-height: 1; }
.devui-card-44 .sales-bag { width: 3.3cqw; height: 3.3cqw; color: #ebd04b; flex-shrink: 0; }
.devui-card-44 .sales-value { margin: 1.6cqw 0 .7cqw; font: 400 7.7cqw/1.1 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; letter-spacing: -.12cqw; white-space: nowrap; }
.devui-card-44 .sales-change { margin: 0; color: #494c47; font: 400 2.8cqw/1.3 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; white-space: nowrap; }
.devui-card-44 .sales-change strong { margin-right: 1.4cqw; color: #81d8a1; font-weight: 500; }
.devui-card-44 .sales-table { width: 100%; margin-top: 5.1cqw; border-collapse: collapse; font-size: 3.5cqw; line-height: 1.3; }
.devui-card-44 .sales-table th, .devui-card-44 .sales-table td { padding: 2.8cqw 0; border-bottom: 1px solid #1a1a1a; }
.devui-card-44 .sales-table th { color: #b1b1ab; text-align: left; font-weight: 400; }
.devui-card-44 .sales-table td { text-align: right; color: #eee; font: 400 3.8cqw/1.2 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; font-variant-numeric: tabular-nums; }
.devui-card-44 .sales-table tr:last-child th, .devui-card-44 .sales-table tr:last-child td { border-bottom: 0; padding-bottom: 0; }
`}</style>
      <div className="devui-card-44">
        <article
          className="sales-panel"
          aria-label="Sales Report — Hexagon Heatmap"
        >
          <h2 className="sales-title">Sales Report</h2>
          <svg
            className="sales-chart"
            viewBox="0 0 238 176"
            role="img"
            aria-label="Hexagonal sales heatmap with a yellow center, a red ring and a dark blue outer edge"
          >
            {hexColors.map((row, r) =>
              row.map(
                (color, c) =>
                  color && (
                    <polygon
                      key={`${r}-${c}`}
                      points={hexagon(
                        22.8 + c * 12.65 + (r % 2) * 6.325,
                        7 + r * 11.3,
                      )}
                      fill={color}
                      stroke="#010103"
                      strokeWidth=".6"
                      strokeLinejoin="round"
                    />
                  ),
              ),
            )}
          </svg>
          <div className="sales-metrics">
            <section aria-label="Monthly sales">
              <p className="sales-label">
                <span className="sales-star" aria-hidden="true">
                  ✦
                </span>
                Monthly
              </p>
              <p className="sales-value">$8,097</p>
              <p className="sales-change">
                <strong>+19.6%</strong>44,214 USD
              </p>
            </section>
            <section aria-label="Yearly sales">
              <p className="sales-label">
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
                    stroke="#000"
                    strokeWidth=".8"
                  />
                </svg>
                Yearly
              </p>
              <p className="sales-value">$312,134</p>
              <p className="sales-change">
                <strong>+2.5%</strong>301,002 USD
              </p>
            </section>
          </div>
          <table className="sales-table" aria-label="Sales by region">
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
