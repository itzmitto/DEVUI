// DevUI Card 59 — Crimson Income Flow
// Self-contained SVG streamgraph. No external images, fonts or chart packages.
import { useId } from "react";

export const cardMeta = {
  title: "Card 59 — Crimson Income Flow",
  category: "Dashboard / Streamgraphs",
  description:
    "A red, glowing layered income streamgraph with three black value labels.",
  tags: ["Streamgraph", "Sales", "Glow", "SVG"],
};

type StreamPoint = { x: number; y: number };
function curve(points: StreamPoint[]) {
  return points.reduce((path, point, index) => {
    if (index === 0) return `M${point.x} ${point.y}`;
    const previous = points[index - 1];
    const before = points[index - 2] ?? previous;
    const after = points[index + 1] ?? point;
    return `${path} C${previous.x + (point.x - before.x) / 7} ${previous.y + (point.y - before.y) / 7},${point.x - (after.x - previous.x) / 7} ${point.y - (after.y - previous.y) / 7},${point.x} ${point.y}`;
  }, "");
}
function ribbon(samples: number[][], factor: number) {
  const top = samples.map(([x, center, spread]) => ({
    x,
    y: center - spread * factor,
  }));
  const bottom = samples
    .map(([x, center, spread]) => ({ x, y: center + spread * factor }))
    .reverse();
  return `${curve(top)} ${curve(bottom).replace(/^M/, "L")} Z`;
}

const streamSamples = [
  [0, 137.0, 0.7],
  [18, 136.96, 1],
  [34, 136.91, 3],
  [50, 136.88, 8],
  [68, 136.83, 18],
  [86, 136.78, 21],
  [104, 136.74, 21],
  [120, 136.7, 24],
  [140, 136.65, 36],
  [160, 136.6, 50],
  [184, 136.54, 58],
  [200, 136.5, 58],
];
const layers = [
  { scale: 1, colors: ["#180000", "#390000", "#430000"] },
  { scale: 0.76, colors: ["#2a0000", "#730000", "#750000"] },
  { scale: 0.54, colors: ["#5f0000", "#b60000", "#ba0700"] },
  { scale: 0.32, colors: ["#d40000", "#ff1305", "#ff1409"] },
];
const markers = [
  { x: 38, value: "6,311" },
  { x: 100, value: "29,441" },
  { x: 162, value: "55,281" },
];

export default function Cards59() {
  const id = useId();
  return (
    <>
      <style>{`
        .devui-stream-59 { width: 200px; max-width: 100%; min-width: 0; }
        .devui-stream-59, .devui-stream-59 * { box-sizing: border-box; }
        .devui-stream-59 .stream-panel { overflow: hidden; isolation: isolate; margin: 0; border-radius: 3.0000% / 2.8302%; background: #000; box-shadow: 0 22px 30px -16px #000b; -webkit-font-smoothing: antialiased; }
        .devui-stream-59 .stream-art { display: block; width: 100%; height: auto; }
        .devui-stream-59 .stream-art text { font-family: Inter, Arial, Helvetica, sans-serif; font-variant-numeric: tabular-nums; }
        .devui-stream-59 .stream-art .stream-mono { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; }
      `}</style>
      <div className="devui-stream-59">
        <article className="stream-panel" aria-label="Crimson Income Flow">
          <svg
            className="stream-art"
            viewBox="0 0 200 212"
            role="img"
            aria-label="A red, glowing layered income streamgraph with three black value labels."
          >
            <defs>
              <filter
                id={`${id}-glow`}
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur stdDeviation="2" />
              </filter>
              <filter
                id={`${id}-haze`}
                x="-20%"
                y="-70%"
                width="140%"
                height="240%"
              >
                <feGaussianBlur stdDeviation="9" />
              </filter>
              {layers.map((layer, index) => (
                <linearGradient
                  key={index}
                  id={`${id}-layer-${index}`}
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop stopColor={layer.colors[0]} />
                  <stop offset=".5" stopColor={layer.colors[1]} />
                  <stop offset="1" stopColor={layer.colors[2]} />
                </linearGradient>
              ))}
            </defs>
            <text x="13" y="22" fill="#ddded9" fontSize="8.3">
              Income
            </text>
            <text
              className="stream-mono"
              x="13"
              y="41"
              fill="#f4f7f0"
              fontSize="18"
              fontWeight="500"
              letterSpacing="-.5"
            >
              $32,134
            </text>
            <text x="93" y="39" fill="#70ddb1" fontSize="8" fontWeight="600">
              +2.5%
            </text>
            <text x="13" y="54" fill="#53554f" fontSize="6.8">
              Compared to $21,340 last month
            </text>
            <circle
              cx="180"
              cy="21"
              r="9"
              fill="#75ed64"
              opacity=".1"
              filter={`url(#${id}-glow)`}
            />
            <path
              d="M180 16  181.5 19  185 21 181.5 23 180 27 178.5 23 175 21 178.5 19Z"
              fill="#8feb7a"
            />
            <path
              d={ribbon(streamSamples, 1)}
              fill="#eb0802"
              opacity=".55"
              filter={`url(#${id}-haze)`}
            />
            {layers.map((layer, index) => (
              <path
                key={index}
                d={ribbon(streamSamples, layer.scale)}
                fill={`url(#${id}-layer-${index})`}
              />
            ))}
            {[38, 60, 100, 144, 162].map((x) => (
              <path
                key={x}
                d={`M${x} 65V194`}
                stroke="#08060b"
                strokeWidth=".7"
                strokeOpacity=".5"
              />
            ))}
            {markers.map((marker) => (
              <g key={marker.x}>
                <title>{marker.value}</title>
                <rect
                  x={marker.x - 18}
                  y="121"
                  width="36"
                  height="18"
                  rx="9"
                  fill="#010101"
                />
                <text
                  className="stream-mono"
                  x={marker.x}
                  y="132.5"
                  fill="#f7f6eb"
                  fontSize="6.1"
                  textAnchor="middle"
                >
                  {marker.value}
                </text>
              </g>
            ))}
          </svg>
        </article>
      </div>
    </>
  );
}
