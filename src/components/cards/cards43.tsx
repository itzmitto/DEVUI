// DevUI Card 43 — Clipboard History
// Self-contained React + CSS + SVG. No image assets or additional packages.
export const cardMeta = {
  title: "Card 43 — Clipboard History",
  category: "Feature / Activity",
  description:
    "A dark clipboard-history feature card with a red activity heatmap.",
  tags: ["Clipboard", "Heatmap", "Dark", "Feature"],
};

// Seven days, twenty-two weeks; the colors recreate the reference pattern.
const activityColors = [
  [
    "#582a2b",
    "#5c2f33",
    "#a74146",
    "#ea5d5b",
    "#de585d",
    "#d8545b",
    "#86393b",
    "#482324",
    "#472628",
    "#28161a",
    "#723132",
    "#a3494a",
    "#9e4643",
    "#7a3237",
    "#3f1d22",
    "#2a191e",
    "#301e24",
    "#28171d",
    "#191617",
    "#381d24",
    "#552c2c",
    "#201416",
  ],
  [
    "#4e282c",
    "#ba4d4a",
    "#ee595f",
    "#eb5959",
    "#db595a",
    "#d35255",
    "#c95150",
    "#542628",
    "#281715",
    "#873635",
    "#a94546",
    "#823838",
    "#983b3c",
    "#90353c",
    "#8d3939",
    "#43201c",
    "#4e2227",
    "#271617",
    "#351b1d",
    "#311d1f",
    "#341c1c",
    "#191617",
  ],
  [
    "#411f1d",
    "#f86265",
    "#f45f5c",
    "#61292e",
    "#703237",
    "#4b222f",
    "#8e3c3f",
    "#c9504d",
    "#993f39",
    "#b34649",
    "#7d323f",
    "#2a1618",
    "#3f1c21",
    "#763032",
    "#86373a",
    "#793336",
    "#4b2427",
    "#331c1f",
    "#3d1d20",
    "#331b1c",
    "#421c23",
    "#181516",
  ],
  [
    "#502628",
    "#fa6665",
    "#d05351",
    "#3a1c1b",
    "#6a3233",
    "#36191b",
    "#5a2c2d",
    "#c75451",
    "#ba4f47",
    "#b14b4d",
    "#3a1d1e",
    "#34191f",
    "#3f1d23",
    "#361a16",
    "#8b393c",
    "#74302e",
    "#2e191a",
    "#271616",
    "#3a1b21",
    "#2a1618",
    "#211418",
    "#241519",
  ],
  [
    "#6d3234",
    "#fc6565",
    "#ed5f5b",
    "#5a2725",
    "#5f282b",
    "#7d3536",
    "#a74645",
    "#c44a4e",
    "#9a3c3d",
    "#ad4449",
    "#652d30",
    "#391e1e",
    "#4a2024",
    "#542428",
    "#833436",
    "#662a2b",
    "#2a171b",
    "#231417",
    "#211418",
    "#261818",
    "#311b1e",
    "#1c1417",
  ],
  [
    "#301e1d",
    "#7f3b40",
    "#eb5d5a",
    "#e85d57",
    "#de5b5b",
    "#da595a",
    "#ce5155",
    "#663130",
    "#4d2524",
    "#b54e4f",
    "#ae4548",
    "#8d3d3e",
    "#763636",
    "#923b3c",
    "#883b40",
    "#3d211f",
    "#2a1919",
    "#52242c",
    "#2d1a1c",
    "#51272b",
    "#3d2120",
    "#201618",
  ],
  [
    "#863b39",
    "#522b2d",
    "#b14846",
    "#e65c57",
    "#d75859",
    "#d3565b",
    "#7c3535",
    "#9b3f41",
    "#62312a",
    "#4a242c",
    "#853939",
    "#9f4243",
    "#964041",
    "#8d393a",
    "#5c2b27",
    "#391b1a",
    "#4c2329",
    "#2d1918",
    "#401e25",
    "#452424",
    "#4b2226",
    "#1f1719",
  ],
];

const months = [
  { label: "SEP", x: 60 },
  { label: "OCT", x: 111 },
  { label: "NOV", x: 162 },
  { label: "DEC", x: 214 },
  { label: "JAN", x: 266 },
];

export default function Cards43() {
  return (
    <>
      <style>{`
        .devui-card-43 {
          width: 306px;
          max-width: 100%;
          container-type: inline-size;
        }
        .devui-card-43,
        .devui-card-43 * {
          box-sizing: border-box;
        }
        .devui-card-43 .clipboard-card {
          position: relative;
          isolation: isolate;
          aspect-ratio: 306 / 228;
          overflow: hidden;
          border: 1px solid #242426;
          border-radius: 2.6cqw;
          background: linear-gradient(140deg, #111113 0%, #0e0e10 60%, #0b0b0d 100%);
          box-shadow: inset 0 0 0 1px #ffffff03, 0 2px 8px #00000012;
          color: #a3a3a8;
          font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .devui-card-43 .clipboard-card::before {
          content: '';
          position: absolute;
          inset: 1px;
          pointer-events: none;
          border: 1px solid #ffffff02;
          border-radius: inherit;
        }
        .devui-card-43 .clipboard-heatmap {
          position: absolute;
          top: 6.6%;
          left: 4.9%;
          display: block;
          width: 95.1%;
          height: auto;
          overflow: hidden;
        }
        .devui-card-43 .heatmap-month {
          fill: #755052;
          font: 5.2px ui-monospace, SFMono-Regular, Consolas, monospace;
          text-anchor: middle;
        }
        .devui-card-43 .heatmap-day {
          fill: #c86466;
          font: 5.2px ui-monospace, SFMono-Regular, Consolas, monospace;
        }
        .devui-card-43 .clipboard-description {
          position: absolute;
          top: 69.9%;
          left: 4.9%;
          right: 4.9%;
          margin: 0;
          font-size: 3.59cqw;
          font-weight: 400;
          line-height: 1.28;
          letter-spacing: .035cqw;
        }
        .devui-card-43 .clipboard-description strong {
          color: #eeeeef;
          font-weight: 600;
        }
        .devui-card-43 .clipboard-tag {
          position: absolute;
          left: 5.2%;
          bottom: 6.6%;
          display: inline-flex;
          align-items: center;
          gap: 1.2cqw;
          min-height: 4.6cqw;
          padding: .55cqw 1cqw;
          border: 1px solid #ffffff03;
          border-radius: 1.3cqw;
          background: #18181b;
          color: #e1e1e5;
          font-size: 2.48cqw;
          font-weight: 600;
          line-height: 1.1;
          white-space: nowrap;
          box-shadow: 0 1px 2px #0000001a;
        }
        .devui-card-43 .clipboard-tag svg {
          display: block;
          width: 2.65cqw;
          height: 2.65cqw;
          flex: 0 0 2.65cqw;
        }
      `}</style>
      <div className="devui-card-43">
        <article
          className="clipboard-card"
          aria-label="Clipboard History — Never forget"
        >
          <svg
            className="clipboard-heatmap"
            viewBox="0 0 290 128"
            role="img"
            aria-label="Red clipboard activity heatmap from September through January. Activity is strongest in September and October."
          >
            <g fill="none" stroke="#34232c" strokeWidth=".7">
              <path d="M23 118V15H290M23 117.5H290" />
            </g>
            {months.map((month) => (
              <text
                key={month.label}
                className="heatmap-month"
                x={month.x}
                y="7"
              >
                {month.label}
              </text>
            ))}
            <g className="heatmap-day">
              <text x="0" y="46">
                MON
              </text>
              <text x="0" y="70">
                WED
              </text>
              <text x="0" y="94">
                FRI
              </text>
            </g>
            <g>
              {activityColors.map((row, day) =>
                row.map((color, week) => (
                  <rect
                    key={`${week}-${day}`}
                    x={37 + week * 11.75}
                    y={26 + day * 11.8}
                    width="8.4"
                    height="8.4"
                    rx=".35"
                    fill={color}
                  />
                )),
              )}
            </g>
          </svg>
          <p className="clipboard-description">
            <strong>Never forget.</strong> With unlimited Clipboard History you
            <br />
            can find that image you copied last year.
          </p>
          <span className="clipboard-tag">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect
                x=".5"
                y=".5"
                width="15"
                height="15"
                rx="3.2"
                fill="#e76970"
              />
              <rect
                x="4.6"
                y="4.4"
                width="7"
                height="8.3"
                rx="1.25"
                stroke="#fff1f1"
                strokeWidth="1.1"
              />
              <path d="M6 3.5h4v2H6z" fill="#fff1f1" />
              <path
                d="M6.8 8h2.6M6.8 10h2.6"
                stroke="#fff1f1"
                strokeWidth=".9"
                strokeLinecap="round"
              />
            </svg>
            Clipboard History
          </span>
        </article>
      </div>
    </>
  );
}
