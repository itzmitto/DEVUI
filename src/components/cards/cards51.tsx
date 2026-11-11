// DevUI Card 51 — Activity Streak
// Self-contained SVG / CSS recreation. No external assets or additional packages.
export const cardMeta = {
  title: "Card 51 — Activity Streak",
  category: "Dashboard / Widgets",
  description:
    "A green contribution matrix with 154 total activities and a best streak of 51.",
  tags: ["Activity", "Streak", "Heatmap"],
};

const activityColors = [
  [
    "#3a3a3c",
    "#3a3a3c",
    "#38613f",
    "#366241",
    "#368448",
    "#3a3a3c",
    "#3a3a3c",
    "#3a3a3c",
    "#2ed15c",
    "#33ab51",
  ],
  [
    "#38834b",
    "#3a3a3c",
    "#318748",
    "#386045",
    "#3a3a3c",
    "#3a3a3c",
    "#31d157",
    "#3b5e46",
    "#386045",
    "#3a3a3c",
  ],
  [
    "#386141",
    "#396043",
    "#3a3a3c",
    "#31d05a",
    "#39613f",
    "#3b603f",
    "#2ead56",
    "#3a3a3c",
    "#3a3a3c",
    "#38834a",
  ],
  [
    "#3a3a3c",
    "#31ac51",
    "#35aa51",
    "#3a3a3c",
    "#3a3a3c",
    "#3a3a3c",
    "#396045",
    "#31d05c",
    "#366145",
    "#3a3a3c",
  ],
  [
    "#2ad35c",
    "#3a3a3c",
    "#38613f",
    "#386143",
    "#34ab51",
    "#3a3a3c",
    "#3a3a3c",
    "#2ed15c",
    "#358548",
    "#386143",
  ],
  [
    "#366145",
    "#35844b",
    "#3a3a3c",
    "#38834b",
    "#3a3a3c",
    "#3a3a3c",
    "#3a3a3c",
    "#3c5e46",
    "#2fd255",
    "#1c1c1e",
  ],
  [
    "#396141",
    "#3b5f45",
    "#3a3a3c",
    "#3a3a3c",
    "#366143",
    "#2ed257",
    "#28d45a",
    "#2d884b",
    "#3a3a3c",
    "#1c1c1e",
  ],
];

export default function Cards51() {
  return (
    <>
      <style>{`
        .devui-widget-51 { width: 314px; max-width: 100%; min-width: 0; }
        .devui-widget-51, .devui-widget-51 * { box-sizing: border-box; }
        .devui-widget-51 .widget-surface {
          position: relative; isolation: isolate; overflow: hidden; margin: 0;
          border-radius: 36px; background: #1d1d1f;
          -webkit-font-smoothing: antialiased;
        }
        .devui-widget-51 .widget-art { display: block; width: 100%; height: auto; }
        .devui-widget-51 .widget-art text { font-family: Inter, Arial, Helvetica, sans-serif; font-variant-numeric: tabular-nums; }
      `}</style>
      <div className="devui-widget-51">
        <figure className="widget-surface" aria-label="Activity Streak">
          <svg
            className="widget-art"
            viewBox="0 0 314 300"
            role="img"
            aria-label="Activity streak: 154 total, 51 best. A seven-row contribution grid with green activity squares."
          >
            <text
              x="20"
              y="62"
              fill="#f7f7f8"
              fontSize="42"
              fontWeight="500"
              letterSpacing="-1"
            >
              154
              <tspan fill="#b3b3b6" fontSize="22" letterSpacing="-.4">
                {" "}
                Total
              </tspan>
            </text>
            <text
              x="176"
              y="62"
              fill="#f7f7f8"
              fontSize="42"
              fontWeight="500"
              letterSpacing="-1"
            >
              51
              <tspan fill="#b3b3b6" fontSize="22" letterSpacing="-.4">
                {" "}
                Best
              </tspan>
            </text>
            {activityColors.map((row, r) =>
              row.map(
                (color, c) =>
                  color !== "#1c1c1e" && (
                    <rect
                      key={`${r}-${c}`}
                      x={22 + c * 29.2}
                      y={84 + r * 28.2}
                      width="23"
                      height="23"
                      rx="5.2"
                      fill={color}
                      stroke="#ffffff"
                      strokeOpacity={color === "#39393b" ? ".015" : ".07"}
                      strokeWidth=".8"
                    />
                  ),
              ),
            )}
          </svg>
        </figure>
      </div>
    </>
  );
}
