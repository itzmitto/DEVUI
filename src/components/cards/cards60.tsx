// DevUI Card 60 — Violet Income Pulse
// Self-contained SVG streamgraph. No external images, fonts or chart packages.
import { useId } from "react";

export const cardMeta = {
  title: "Card 60 — Violet Income Pulse",
  category: "Dashboard / Streamgraphs",
  description:
    "A glowing violet and magenta income distribution with a golden center line, three value labels and month labels.",
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
    y:
      center -
      (factor < 0.1 ? Math.max(0.6, spread * factor) : spread * factor),
  }));
  const bottom = samples
    .map(([x, center, spread]) => ({
      x,
      y:
        center +
        (factor < 0.1 ? Math.max(0.6, spread * factor) : spread * factor),
    }))
    .reverse();
  return `${curve(top)} ${curve(bottom).replace(/^M/, "L")} Z`;
}

const streamSamples = [
  [0, 134, 0.6],
  [18, 134, 1],
  [28, 134, 3],
  [40, 134, 12],
  [52, 134, 14],
  [62, 134, 27],
  [76, 134, 32],
  [86, 134, 40],
  [100, 134, 42],
  [112, 134, 40],
  [123, 134, 31],
  [134, 134, 28],
  [146, 134, 14],
  [158, 134, 12],
  [172, 134, 2],
  [184, 134, 1],
  [200, 134, 0.6],
];
const layers = [
  { scale: 1, colors: ["#2e0b42", "#720bbb", "#47106d"] },
  { scale: 0.7, colors: ["#481242", "#b41ddd", "#7a207e"] },
  { scale: 0.4, colors: ["#622938", "#ee4dba", "#bc4268"] },
  { scale: 0.045, colors: ["#b58936", "#ffd772", "#e0a658"] },
];
const markers = [
  { x: 55, value: "6,665" },
  { x: 101, value: "29,441" },
  { x: 145, value: "4,212" },
];

export default function Cards60() {
  const id = useId();
  return (
    <>
      <style>{`
        .devui-stream-60 { width: 200px; max-width: 100%; min-width: 0; }
        .devui-stream-60, .devui-stream-60 * { box-sizing: border-box; }
        .devui-stream-60 .stream-panel { overflow: hidden; isolation: isolate; margin: 0; border-radius: 3.0000% / 2.8302%; background: #000; box-shadow: 0 22px 30px -16px #000b; -webkit-font-smoothing: antialiased; }
        .devui-stream-60 .stream-art { display: block; width: 100%; height: auto; }
        .devui-stream-60 .stream-art text { font-family: Inter, Arial, Helvetica, sans-serif; font-variant-numeric: tabular-nums; }
        .devui-stream-60 .stream-art .stream-mono { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; }
      `}</style>
      <div className="devui-stream-60">
        <article className="stream-panel" aria-label="Violet Income Pulse">
          <svg
            className="stream-art"
            viewBox="0 0 200 212"
            role="img"
            aria-label="A glowing violet and magenta income distribution with a golden center line, three value labels and month labels."
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
              fill="#9700dc"
              opacity=".6"
              filter={`url(#${id}-haze)`}
            />
            {layers.map((layer, index) => (
              <path
                key={index}
                d={ribbon(streamSamples, layer.scale)}
                fill={`url(#${id}-layer-${index})`}
              />
            ))}
            <path
              d={ribbon(streamSamples, 0.045)}
              fill="#ffd16d"
              opacity=".24"
              filter={`url(#${id}-glow)`}
            />
            {[38, 60, 100, 144, 162].map((x) => (
              <path
                key={x}
                d={`M${x} 65V180`}
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
            {["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"].map(
              (month, index) => (
                <text
                  key={month}
                  x={19 + index * 22.9}
                  y="194"
                  fill="#e5e6dc"
                  fontSize="5.8"
                  textAnchor="middle"
                >
                  {month}
                </text>
              ),
            )}
          </svg>
        </article>
      </div>
    </>
  );
}
