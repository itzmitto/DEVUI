// DevUI Card 45 — Spectrum Heatmap
// Self-contained React, CSS and SVG; no external images or chart packages.
import { useId } from "react";

export const cardMeta = {
  title: "Card 45 — Spectrum Heatmap",
  category: "Dashboard / Analytics",
  description:
    "A vivid violet, green, magenta and yellow grid on a black Sales Report card.",
  tags: ["Spectrum", "Heatmap", "Sales"],
};

const matrixColors = [
  [
    "#b90aee",
    "#8825f8",
    "#3350f7",
    "#05a7e2",
    "#05c494",
    "#07c953",
    "#02ce27",
    "#07c568",
    "#08abaf",
    "#7932e2",
    "#e222d9",
    "#f75ba1",
  ],
  [
    "#a913ee",
    "#7d2bf0",
    "#394af2",
    "#0193ea",
    "#03b6b6",
    "#04c65b",
    "#04cc15",
    "#04b687",
    "#7840e1",
    "#c713e6",
    "#f12cd6",
    "#f43fbd",
  ],
  [
    "#911ff0",
    "#7e26ef",
    "#5f30f0",
    "#2f59f5",
    "#0899e0",
    "#00c38b",
    "#02c83a",
    "#1493b4",
    "#cd22e8",
    "#f429d3",
    "#f138cd",
    "#f535ca",
  ],
  [
    "#6535f7",
    "#951bec",
    "#ab15ea",
    "#772af1",
    "#1678f1",
    "#06a0cd",
    "#0f91c4",
    "#7337e9",
    "#d70def",
    "#ef18e5",
    "#e518e3",
    "#f61ede",
  ],
  [
    "#237adf",
    "#ab18e0",
    "#dc32cd",
    "#aa19e8",
    "#2862f0",
    "#4a48f2",
    "#a71fe9",
    "#ce0be6",
    "#de03e5",
    "#da06e0",
    "#ca0ae7",
    "#e61ecf",
  ],
  [
    "#0f98c3",
    "#cf32d2",
    "#f69d7d",
    "#bd1ee6",
    "#3b53f1",
    "#931ef1",
    "#f157a3",
    "#f447a6",
    "#e317d7",
    "#de0adb",
    "#bf0be6",
    "#e732c8",
  ],
  [
    "#9131db",
    "#f153a7",
    "#f89576",
    "#ce19e3",
    "#7927ee",
    "#b414ee",
    "#ff609a",
    "#f99769",
    "#f78876",
    "#f26093",
    "#e53ebb",
    "#fa867c",
  ],
  [
    "#f16da3",
    "#fd9972",
    "#fb9477",
    "#d71cdf",
    "#951cee",
    "#c90dea",
    "#fc4cb4",
    "#fbc94d",
    "#ffd539",
    "#fdd441",
    "#f7c856",
    "#fedb41",
  ],
  [
    "#fbdf48",
    "#ffc955",
    "#f79d6e",
    "#e121d7",
    "#9e17e6",
    "#d20be3",
    "#fa49ab",
    "#ffd439",
    "#f7a711",
    "#facb1f",
    "#fef23a",
    "#fae528",
  ],
  [
    "#fccb47",
    "#fa9870",
    "#fa6e88",
    "#f537c1",
    "#df2cd3",
    "#ed36c2",
    "#fc6792",
    "#ffdd30",
    "#fcae15",
    "#fcce29",
    "#f8da44",
    "#fadc3c",
  ],
  [
    "#f35aad",
    "#ef34cb",
    "#eb29cf",
    "#f87791",
    "#f4b464",
    "#f6ab72",
    "#fe9278",
    "#ffe03d",
    "#fec827",
    "#ffd544",
    "#e358a9",
    "#ef6e8d",
  ],
  [
    "#e916e4",
    "#d708e8",
    "#d010de",
    "#fba566",
    "#f6af23",
    "#fdd23e",
    "#fab55a",
    "#fde334",
    "#fdc51e",
    "#fbbb5d",
    "#b126dd",
    "#c42add",
  ],
];

export default function Cards45() {
  const mapId = useId();
  return (
    <>
      <style>{`.devui-card-45 { width: 272px; max-width: 100%; container-type: inline-size; }
.devui-card-45, .devui-card-45 * { box-sizing: border-box; }
.devui-card-45 .sales-panel {
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
.devui-card-45 .sales-title { margin: 0 0 4.4cqw; font-size: 6.25cqw; font-weight: 600; line-height: 1.2; letter-spacing: -.13cqw; }
.devui-card-45 .sales-chart { display: block; width: 100%; height: auto; }
.devui-card-45 .sales-metrics { display: grid; grid-template-columns: 54% 46%; margin-top: 4.9cqw; }
.devui-card-45 .sales-label { display: flex; align-items: center; gap: 1.25cqw; margin: 0; color: #a6a6a0; font-size: 3.1cqw; line-height: 1.3; }
.devui-card-45 .sales-star { display: block; color: #a8ed4a; font-size: 4.2cqw; line-height: 1; }
.devui-card-45 .sales-bag { width: 3.3cqw; height: 3.3cqw; color: #ebd04b; flex-shrink: 0; }
.devui-card-45 .sales-value { margin: 1.6cqw 0 .7cqw; font: 400 7.7cqw/1.1 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; letter-spacing: -.12cqw; white-space: nowrap; }
.devui-card-45 .sales-change { margin: 0; color: #494c47; font: 400 2.8cqw/1.3 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; white-space: nowrap; }
.devui-card-45 .sales-change strong { margin-right: 1.4cqw; color: #81d8a1; font-weight: 500; }
.devui-card-45 .sales-table { width: 100%; margin-top: 5.1cqw; border-collapse: collapse; font-size: 3.5cqw; line-height: 1.3; }
.devui-card-45 .sales-table th, .devui-card-45 .sales-table td { padding: 2.8cqw 0; border-bottom: 1px solid #1a1a1a; }
.devui-card-45 .sales-table th { color: #b1b1ab; text-align: left; font-weight: 400; }
.devui-card-45 .sales-table td { text-align: right; color: #eee; font: 400 3.8cqw/1.2 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; font-variant-numeric: tabular-nums; }
.devui-card-45 .sales-table tr:last-child th, .devui-card-45 .sales-table tr:last-child td { border-bottom: 0; padding-bottom: 0; }

.devui-card-45 .sales-chart--matrix { width: 96%; margin-inline: auto; }
`}</style>
      <div className="devui-card-45">
        <article
          className="sales-panel"
          aria-label="Sales Report — Spectrum Heatmap"
        >
          <h2 className="sales-title">Sales Report</h2>
          <svg
            className="sales-chart sales-chart--matrix"
            viewBox="0 0 228 170"
            role="img"
            aria-label="Multicolor sales heatmap with a twelve-by-twelve grid in violet, magenta, green and yellow"
          >
            <defs>
              <clipPath id={`${mapId}-clip`}>
                <rect width="228" height="170" rx="1" />
              </clipPath>
              <filter
                id={`${mapId}-blend`}
                x="-10%"
                y="-10%"
                width="120%"
                height="120%"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur stdDeviation="3" />
              </filter>
            </defs>
            <g clipPath={`url(#${mapId}-clip)`}>
              <g filter={`url(#${mapId}-blend)`}>
                {matrixColors.map((row, r) =>
                  row.map((color, c) => (
                    <rect
                      key={`${r}-${c}`}
                      x={c * 19 - 1}
                      y={r * (170 / 12) - 1}
                      width="21"
                      height={170 / 12 + 2}
                      fill={color}
                    />
                  )),
                )}
              </g>
              <g
                fill="none"
                stroke="#151020"
                strokeWidth=".8"
                strokeOpacity=".58"
              >
                {Array.from({ length: 13 }, (_, index) => (
                  <path
                    key={index}
                    d={`M${index * 19} 0V170 M0 ${index * (170 / 12)}H228`}
                  />
                ))}
              </g>
              <rect
                x=".4"
                y=".4"
                width="227.2"
                height="169.2"
                rx="1"
                fill="none"
                stroke="#797068"
                strokeOpacity=".24"
                strokeWidth=".8"
              />
            </g>
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
                    strokeWidth=".e8"
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
