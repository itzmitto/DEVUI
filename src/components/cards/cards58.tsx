// DevUI Card 58 — Sales Flow Report
// Self-contained SVG streamgraph. No external images, fonts or chart packages.
import { useId } from "react";

export const cardMeta = {
  title: "Card 58 — Sales Flow Report",
  category: "Dashboard / Streamgraphs",
  description:
    "Layered cyan, blue and purple sales flows with weekly, monthly and yearly revenue, six value markers and regional sales totals.",
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
  [0, 196.0, 1],
  [20, 195.81, 2],
  [40, 195.62, 3],
  [60, 195.43, 5],
  [80, 195.25, 11],
  [100, 195.06, 23],
  [120, 194.87, 34],
  [140, 194.68, 39],
  [180, 194.3, 39],
  [220, 193.92, 39],
  [245, 193.69, 41],
  [270, 193.45, 49],
  [300, 193.17, 62],
  [325, 192.93, 70],
  [365, 192.56, 70],
  [424, 192.0, 70],
];
const layers = [
  { scale: 1, colors: ["#091a30", "#133178", "#4d247d"] },
  { scale: 0.71, colors: ["#0b254d", "#2448a6", "#414bb9"] },
  { scale: 0.56, colors: ["#0d3557", "#1c71c8", "#255cd0"] },
  { scale: 0.35, colors: ["#80ba91", "#1bbdd4", "#00f5a6"] },
];
const markers = [
  { x: 94, top: "21,980", bottom: "3,921" },
  { x: 213, top: "58,291", bottom: "12,222" },
  { x: 332, top: "82,229", bottom: "22,951" },
];
const revenues = [
  {
    x: 13,
    label: "Weekly",
    value: "$2,197",
    growth: "+19.6%",
    growthX: 80,
    comparison: "Compared to $1,340 last week",
  },
  {
    x: 154,
    label: "Monthly",
    value: "$8,903",
    growth: "+19%",
    growthX: 223,
    comparison: "Compared to $5,441 last month",
  },
  {
    x: 294,
    label: "Yearly",
    value: "$98,134",
    growth: "+22%",
    growthX: 372,
    comparison: "Compared to $76,330 last year",
  },
];
const regions = [
  { name: "Los Angeles", values: ["$28,930", "$50,331", "$279,128"] },
  { name: "New York", values: ["$18,782", "$48,795", "$218,658"] },
  { name: "Canada", values: ["$14,221", "$30,123", "$280,988"] },
];

export default function Cards58() {
  const id = useId();
  return (
    <>
      <style>{`
        .devui-stream-58 { width: 424px; max-width: 100%; min-width: 0; }
        .devui-stream-58, .devui-stream-58 * { box-sizing: border-box; }
        .devui-stream-58 .stream-panel { overflow: hidden; isolation: isolate; margin: 0; border-radius: 1.4151% / 1.6043%; background: #000; box-shadow: 0 22px 30px -16px #000b; -webkit-font-smoothing: antialiased; }
        .devui-stream-58 .stream-art { display: block; width: 100%; height: auto; }
        .devui-stream-58 .stream-art text { font-family: Inter, Arial, Helvetica, sans-serif; font-variant-numeric: tabular-nums; }
        .devui-stream-58 .stream-art .stream-mono { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; }
      `}</style>
      <div className="devui-stream-58">
        <article className="stream-panel" aria-label="Sales Flow Report">
          <svg
            className="stream-art"
            viewBox="0 0 424 374"
            role="img"
            aria-label="Layered cyan, blue and purple sales flows with weekly, monthly and yearly revenue, six value markers and regional sales totals."
          >
            <defs>
              <filter
                id={`${id}-glow`}
                x="-75%"
                y="-75%"
                width="250%"
                height="250%"
              >
                <feGaussianBlur stdDeviation="3" />
              </filter>
              <filter
                id={`${id}-haze`}
                x="-20%"
                y="-70%"
                width="140%"
                height="240%"
              >
                <feGaussianBlur stdDeviation="16" />
              </filter>
              <radialGradient id={`${id}-ambient`}>
                <stop stopColor="#005ee1" stopOpacity=".3" />
                <stop offset="1" stopColor="#005ee1" stopOpacity="0" />
              </radialGradient>
              {layers.map((layer, index) => (
                <linearGradient
                  key={index}
                  id={`${id}-layer-${index}`}
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop stopColor={layer.colors[0]} stopOpacity=".55" />
                  <stop offset=".36" stopColor={layer.colors[1]} />
                  <stop offset="1" stopColor={layer.colors[2]} />
                </linearGradient>
              ))}
            </defs>
            <text
              x="13"
              y="26"
              fill="#f3f3f3"
              fontSize="12.5"
              fontWeight="600"
              letterSpacing="-.25"
            >
              Sales Report
            </text>
            <circle
              cx="403"
              cy="21"
              r="9"
              fill="#75ed64"
              opacity=".1"
              filter={`url(#${id}-glow)`}
            />
            <path
              d="M403 16  404.5 19  408 21 404.5 23 403 27 401.5 23 398 21 401.5 19Z"
              fill="#8feb7a"
            />
            {revenues.map((metric) => (
              <g key={metric.label}>
                <text x={metric.x} y="50" fill="#d8dad6" fontSize="8.3">
                  {metric.label}
                </text>
                <text
                  className="stream-mono"
                  x={metric.x}
                  y="69"
                  fill="#f1f4ee"
                  fontSize="17"
                  fontWeight="500"
                  letterSpacing="-.4"
                >
                  {metric.value}
                </text>
                <text
                  x={metric.growthX}
                  y="62"
                  fill="#68ddb0"
                  fontSize="6.3"
                  fontWeight="600"
                >
                  {metric.growth}
                </text>
                <text x={metric.x} y="83" fill="#73766e" fontSize="7.3">
                  {metric.comparison}
                </text>
              </g>
            ))}
            <ellipse
              cx="235"
              cy="194"
              rx="198"
              ry="108"
              fill={`url(#${id}-ambient)`}
            />
            <path
              d={ribbon(streamSamples, 1)}
              fill="#314bd3"
              opacity=".48"
              filter={`url(#${id}-haze)`}
            />
            {layers.map((layer, index) => (
              <path
                key={index}
                d={ribbon(streamSamples, layer.scale)}
                fill={`url(#${id}-layer-${index})`}
              />
            ))}
            {markers.map((marker) => (
              <g key={marker.x}>
                <title>{`Upper: ${marker.top}. Lower: ${marker.bottom}.`}</title>
                <path
                  d={`M${marker.x} 124V252`}
                  stroke="#070b13"
                  strokeWidth="1.2"
                />
                <rect
                  x={marker.x - 25}
                  y="106"
                  width="50"
                  height="20"
                  rx="10"
                  fill="#010202"
                />
                <text
                  className="stream-mono"
                  x={marker.x}
                  y="119"
                  fill="#f2f1ec"
                  fontSize="8.5"
                  textAnchor="middle"
                >
                  {marker.top}
                </text>
                <rect
                  x={marker.x - 25}
                  y="252"
                  width="50"
                  height="20"
                  rx="10"
                  fill="#010202"
                />
                <text
                  className="stream-mono"
                  x={marker.x}
                  y="265"
                  fill="#f2f1ec"
                  fontSize="8.5"
                  textAnchor="middle"
                >
                  {marker.bottom}
                </text>
              </g>
            ))}
            {regions.map((region, index) => (
              <g key={region.name}>
                <text x="13" y={309 + index * 25} fill="#a7aaa0" fontSize="10">
                  {region.name}
                </text>
                {region.values.map((value, column) => (
                  <text
                    key={column}
                    className="stream-mono"
                    x={[208, 313, 411][column]}
                    y={309 + index * 25}
                    fill="#e2e7db"
                    fontSize="10"
                    textAnchor="end"
                  >
                    {value}
                  </text>
                ))}
                {index < regions.length - 1 && (
                  <path
                    d={`M13 ${320 + index * 25}H411`}
                    fill="none"
                    stroke="#232521"
                    strokeWidth=".7"
                  />
                )}
              </g>
            ))}
          </svg>
        </article>
      </div>
    </>
  );
}
