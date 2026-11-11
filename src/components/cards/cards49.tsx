// DevUI Card 49 — Storage Matrix
// Self-contained SVG / CSS recreation. No external assets or additional packages.
export const cardMeta = {
  title: "Card 49 — Storage Matrix",
  category: "Dashboard / Widgets",
  description:
    "A memory usage widget with a violet, magenta and blue block matrix.",
  tags: ["Storage", "Matrix", "Usage"],
};

const storageColors = [
  [
    "#5d59ec",
    "#5b5ae9",
    "#5e5aec",
    "#5c5bf0",
    "#5c59f7",
    "#5d5af2",
    "#c45bf6",
    "#c357fa",
    "#c656fa",
    "#0985ff",
    "#0a88ff",
    "#39393b",
    "#39393b",
    "#38383a",
    "#39393b",
    "#3a3a3c",
  ],
  [
    "#5e5ceb",
    "#5e5aef",
    "#5d5ae9",
    "#5d5dec",
    "#5d59f5",
    "#5d59f0",
    "#c357ff",
    "#c556ff",
    "#0586ff",
    "#0786ff",
    "#0686ff",
    "#39393b",
    "#39393b",
    "#39393b",
    "#39393b",
    "#3a3a3c",
  ],
  [
    "#5b5cde",
    "#5d5ce0",
    "#5f5ce5",
    "#5d5ce7",
    "#5c57f2",
    "#5d5ae7",
    "#c456f7",
    "#c758fa",
    "#0685ff",
    "#0983ff",
    "#0983ff",
    "#3a3a3c",
    "#3a3a3c",
    "#3a3a3c",
    "#3b3b3d",
    "#3c3c3e",
  ],
  [
    "#5c5de3",
    "#5e5cdf",
    "#5e5ae7",
    "#605aef",
    "#615ef2",
    "#5c5aed",
    "#bf58f6",
    "#c058f2",
    "#0583fc",
    "#0582ff",
    "#0983ff",
    "#3a3a3c",
    "#3a3a3c",
    "#3a3a3c",
    "#3a3a3c",
    "#3b3b3d",
  ],
  [
    "#5a59e6",
    "#5d5cec",
    "#5c5bea",
    "#5c5bf0",
    "#5b59ea",
    "#5f5ee5",
    "#c059f5",
    "#bd5ae7",
    "#0987ff",
    "#0885ff",
    "#39393b",
    "#3b3b3d",
    "#3a3a3c",
    "#3a3a3c",
    "#3a3a3c",
    "#38383a",
  ],
  [
    "#5c59ee",
    "#5f5ce9",
    "#5b57ed",
    "#5d60e9",
    "#5c5eea",
    "#5e5ce9",
    "#c45aea",
    "#c759f0",
    "#0787ff",
    "#0a84ff",
    "#39393b",
    "#3b3b3d",
    "#39393b",
    "#38383a",
    "#38383a",
    "#39393b",
  ],
  [
    "#5d59ee",
    "#5e5bed",
    "#5f5af1",
    "#5d5ddf",
    "#5e5cec",
    "#5e5de7",
    "#c05aea",
    "#c65af5",
    "#0885ff",
    "#0885ff",
    "#3a3a3c",
    "#3a3a3c",
    "#3b3b3d",
    "#3b3b3d",
    "#39393b",
    "#3b3b3d",
  ],
];

export default function Cards49() {
  return (
    <>
      <style>{`
        .devui-widget-49 { width: 300px; max-width: 100%; min-width: 0; }
        .devui-widget-49, .devui-widget-49 * { box-sizing: border-box; }
        .devui-widget-49 .widget-surface {
          position: relative; isolation: isolate; overflow: hidden; margin: 0;
          border-radius: 36px; background: #1d1d1f;
          -webkit-font-smoothing: antialiased;
        }
        .devui-widget-49 .widget-art { display: block; width: 100%; height: auto; }
        .devui-widget-49 .widget-art text { font-family: Inter, Arial, Helvetica, sans-serif; font-variant-numeric: tabular-nums; }
      `}</style>
      <div className="devui-widget-49">
        <figure className="widget-surface" aria-label="Storage Matrix">
          <svg
            className="widget-art"
            viewBox="0 0 300 300"
            role="img"
            aria-label="Storage usage: 5.31 of 16 GB, 28 percent. Categories: 5.90, 2.15 and 2.59 GB."
          >
            <text
              x="21"
              y="63"
              fill="#f6f6f7"
              fontSize="46"
              fontWeight="500"
              letterSpacing="-1"
            >
              5.31
              <tspan fill="#969698" fontSize="23" letterSpacing="-.4">
                /16 GB
              </tspan>
            </text>
            <circle
              cx="33"
              cy="88"
              r="9.5"
              fill="none"
              stroke="#9b9b9c"
              strokeWidth="2"
            />
            <path d="M33 82v12" stroke="#9b9b9c" strokeWidth="1.8" />
            <text x="53" y="96" fill="#979799" fontSize="23">
              28%
            </text>
            <circle
              cx="241"
              cy="58"
              r="34"
              fill="#1b1b1d"
              stroke="#040405"
              strokeWidth="5"
            />
            <g stroke="#f1f1f3" strokeWidth="2.8" strokeLinecap="round">
              {Array.from({ length: 8 }, (_, index) => {
                const angle = (index * Math.PI) / 4;
                return (
                  <line
                    key={index}
                    x1={241 + Math.sin(angle) * 9}
                    y1={58 - Math.cos(angle) * 9}
                    x2={241 + Math.sin(angle) * 14}
                    y2={58 - Math.cos(angle) * 14}
                    opacity={0.7 + index / 28}
                  />
                );
              })}
            </g>
            <circle cx="241" cy="58" r="2" fill="#f1f1f3" />
            {storageColors.map((row, r) =>
              row.map((color, c) => (
                <rect
                  key={`${r}-${c}`}
                  x={22.2 + c * 16.3}
                  y={128.4 + r * 16.25}
                  width="11.2"
                  height="11.2"
                  rx="2.6"
                  fill={color}
                />
              )),
            )}
            <text x="22" y="272" fontSize="21" letterSpacing="-.4">
              <tspan fill="#805aeb">5.90</tspan>
              <tspan fill="#4d4d50"> | </tspan>
              <tspan fill="#bd4cda">2.15</tspan>
              <tspan fill="#4d4d50"> | </tspan>
              <tspan fill="#1588ef">2.59</tspan>
            </text>
            <text x="278" y="272" fill="#9b9b9e" fontSize="22" textAnchor="end">
              GB
            </text>
          </svg>
        </figure>
      </div>
    </>
  );
}
