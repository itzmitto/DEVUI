// DevUI Card 47 — Focus Timeline
// Self-contained SVG / CSS recreation. No external assets or additional packages.
export const cardMeta = {
  title: "Card 47 — Focus Timeline",
  category: "Dashboard / Widgets",
  description: "A study timer, session timeline and orange activity markers.",
  tags: ["Timer", "Timeline", "Focus"],
};

const focusBlocks = [
  { x: 0, width: 20, color: "#38393b" },
  { x: 22, width: 39, color: "#61cef6" },
  { x: 64, width: 7, color: "#168cff" },
  { x: 74, width: 13, color: "#e7f3ff" },
  { x: 90, width: 4, color: "#258eff" },
  { x: 97, width: 111, color: "#5fcdf4" },
  { x: 211, width: 8, color: "#edf5ec" },
  { x: 222, width: 13, color: "#5bccf7" },
  { x: 238, width: 21, color: "#0b85ff" },
  { x: 262, width: 8, color: "#e0f0ff" },
  { x: 273, width: 6, color: "#1686ff" },
  { x: 282, width: 18, color: "#393a3b" },
];
const focusDots = [
  [24, 265],
  [33, 265],
  [47, 265],
  [62, 265],
  [99, 265],
  [133, 265],
  [142, 265],
  [151, 265],
  [160, 265],
  [169, 265],
  [185, 265],
  [212, 265],
  [221, 265],
  [230, 265],
  [239, 265],
  [24, 274],
  [62, 274],
  [133, 274],
  [151, 274],
  [185, 274],
  [212, 274],
  [221, 274],
  [230, 274],
];

export default function Cards47() {
  return (
    <>
      <style>{`
        .devui-widget-47 { width: 300px; max-width: 100%; min-width: 0; }
        .devui-widget-47, .devui-widget-47 * { box-sizing: border-box; }
        .devui-widget-47 .widget-surface {
          position: relative; isolation: isolate; overflow: hidden; margin: 0;
          border-radius: 36px; background: #1d1d1f;
          -webkit-font-smoothing: antialiased;
        }
        .devui-widget-47 .widget-art { display: block; width: 100%; height: auto; }
        .devui-widget-47 .widget-art text { font-family: Inter, Arial, Helvetica, sans-serif; font-variant-numeric: tabular-nums; }
      `}</style>
      <div className="devui-widget-47">
        <figure className="widget-surface" aria-label="Focus Timeline">
          <svg
            className="widget-art"
            viewBox="0 0 300 300"
            role="img"
            aria-label="Focus timer: 01:47:19. Sessions: 57 minutes, 24 minutes and 26 minutes. Score: 21."
          >
            <rect
              x="22"
              y="22"
              width="110"
              height="54"
              rx="27"
              fill="#29292b"
              stroke="#363638"
              strokeWidth="2.5"
            />
            <rect
              x="27"
              y="27"
              width="100"
              height="44"
              rx="22"
              fill="#303032"
              stroke="#1c1c1e"
              strokeWidth="1.2"
            />
            <path
              d="M77 26H49a23 23 0 0 0 0 46h62"
              fill="none"
              stroke="#77d4f7"
              strokeWidth="1.5"
            />
            <g transform="translate(60 35)" fill="#61c9ef">
              <path d="m0 8 16-7 17 7-17 8Z" />
              <path d="M6 14v9c6 6 15 6 21 0v-9l-11 5Z" />
              <path
                d="M3 10v15"
                fill="none"
                stroke="#61c9ef"
                strokeWidth="1.6"
              />
              <circle cx="3" cy="27" r="1.9" />
            </g>
            <rect
              x="211"
              y="29"
              width="68"
              height="40"
              rx="20"
              fill="#ffaf00"
            />
            <path d="m230 37 10 6v11l-10 6-10-6V43Z" fill="#17160f" />
            <path
              d="m227 45 6 6m0-6-6 6"
              stroke="#ffb700"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <text x="245" y="57" fill="#0d0d0b" fontSize="23" fontWeight="600">
              21
            </text>
            <text
              x="21"
              y="126"
              fill="#f7f7f8"
              fontSize="38"
              fontWeight="400"
              letterSpacing="-.9"
            >
              01:47:19
            </text>
            <text x="22" y="160" fontSize="22" letterSpacing="-.5">
              <tspan fill="#68cdeb">57m</tspan>
              <tspan fill="#4b4b4e"> · </tspan>
              <tspan fill="#1f89e8">24m</tspan>
              <tspan fill="#4b4b4e"> · </tspan>
              <tspan fill="#eeeeef">26m</tspan>
            </text>
            {focusBlocks.map((block) => (
              <rect
                key={block.x}
                x={block.x}
                y="175"
                width={block.width}
                height="80"
                rx="2.5"
                fill={block.color}
              />
            ))}
            <g fill="#ffb01c">
              {focusDots.map(([x, y], index) => (
                <circle key={index} cx={x} cy={y} r="2.5" />
              ))}
            </g>
          </svg>
        </figure>
      </div>
    </>
  );
}
