// DevUI Card 65 — Neon Revenue Comparison
// Self-contained SVG / CSS recreation; no external images or chart packages.
import { useId } from "react";

export const cardMeta = {
  title: "Card 65 — Neon Revenue Comparison",
  category: "Dashboard / Sales",
  description:
    "A wide black sales dashboard with weekly, monthly and yearly metrics and nineteen luminous gradient bars.",
  tags: ["Sales", "Chart", "Neon", "SVG"],
};

const bars = [
  { value: 359, height: 70, label: "50" },
  { value: 465, height: 103, label: "165" },
  { value: 180, height: 45, label: "195" },
  { value: 548, height: 115, label: "260" },
  { value: 398, height: 106, label: "295" },
  { value: 548, height: 115, label: "355" },
  { value: 375, height: 68, label: "310" },
  { value: 588, height: 106, label: "495" },
  { value: 334, height: 68, label: "535" },
  { value: 330, height: 68, label: "560" },
  { value: 255, height: 44, label: "615" },
  { value: 215, height: 44, label: "665" },
  { value: 195, height: 44, label: "695" },
  { value: 330, height: 68, label: "735" },
  { value: 465, height: 106, label: "795" },
  { value: 299, height: 72, label: "895" },
  { value: 198, height: 42, label: "815" },
  { value: 435, height: 76, label: "899" },
  { value: 559, height: 106, label: "995" },
];
const metrics = [
  {
    x: 12,
    label: "Weekly",
    value: "$2,197",
    growth: "+19.6%",
    growthX: 75,
    color: "#ee5298",
    comparison: "Compared to $1,340 last week",
  },
  {
    x: 136,
    label: "Monthly",
    value: "$8,903",
    growth: "+19%",
    growthX: 199,
    color: "#9deb71",
    comparison: "Compared to $5,441 last month",
  },
  {
    x: 259,
    label: "Yearly",
    value: "$98,134",
    growth: "+22%",
    growthX: 326,
    color: "#eac739",
    comparison: "Compared to $76,330 last year",
  },
];

export default function Cards65() {
  const id = useId();
  return (
    <>
      <style>{`
        .devui-sales-65 { width:740px; max-width:100%; min-width:0; }
        .devui-sales-65, .devui-sales-65 * { box-sizing:border-box; }
        .devui-sales-65 .sales-widget { margin:0; overflow:hidden; isolation:isolate; border-radius:1.4865% / 2.4336%; background:#010202; box-shadow:0 22px 30px -15px #000a; -webkit-font-smoothing:antialiased; }
        .devui-sales-65 .sales-art { display:block; width:100%; height:auto; }
        .devui-sales-65 .sales-art text { font-family:Inter,Arial,Helvetica,sans-serif; font-variant-numeric:tabular-nums; }
        .devui-sales-65 .sales-art .sales-mono { font-family:'SFMono-Regular',Consolas,'Liberation Mono',monospace; }
      `}</style>
      <div className="devui-sales-65">
        <figure className="sales-widget" aria-label="Neon Revenue Comparison">
          <svg
            className="sales-art"
            viewBox="0 0 370 226"
            role="img"
            aria-label="A wide black sales dashboard with weekly, monthly and yearly metrics and nineteen luminous gradient bars."
          >
            <defs>
              <linearGradient
                id={`${id}-bars`}
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="75"
                x2="0"
                y2="204"
              >
                <stop stopColor="#fbff89" />
                <stop offset=".2" stopColor="#d3ff4a" />
                <stop offset=".4" stopColor="#61f975" />
                <stop offset=".59" stopColor="#18d5f4" />
                <stop offset=".78" stopColor="#2824e6" />
                <stop offset="1" stopColor="#100529" stopOpacity="0" />
              </linearGradient>
              <filter
                id={`${id}-bar-glow`}
                x="-60%"
                y="-15%"
                width="220%"
                height="130%"
              >
                <feGaussianBlur stdDeviation="2.6" />
              </filter>
            </defs>
            {metrics.map((metric, index) => (
              <g key={metric.label}>
                {index === 0 ? (
                  <g fill="none" stroke={metric.color} strokeWidth=".8">
                    <circle cx={metric.x + 2} cy="16" r="2" />
                    <circle cx={metric.x + 2} cy="16" r=".65" />
                  </g>
                ) : index === 1 ? (
                  <path
                    d={`m${metric.x + 2} 13 1 2 2 1-2 1-1 2-1-2-2-1 2-1Z`}
                    fill={metric.color}
                  />
                ) : (
                  <path
                    d={`M${metric.x + 1} 13h3l-.7 1.4h-1.6Zm.4 2h2.2c.9 1 1.8 2.2 1.8 3.1 0 1-1 1.6-2.9 1.6s-2.9-.6-2.9-1.6c0-.9.9-2.1 1.8-3.1Z`}
                    fill={metric.color}
                  />
                )}
                <text x={metric.x + 7} y="19" fill="#d4d9d0" fontSize="7">
                  {metric.label}
                </text>
                <text
                  className="sales-mono"
                  x={metric.x}
                  y="37"
                  fill="#f1f5ed"
                  fontSize="14.8"
                  fontWeight="600"
                  letterSpacing="-.35"
                >
                  {metric.value}
                </text>
                <text
                  x={metric.growthX}
                  y="30"
                  fill="#18e3a0"
                  fontSize="5.6"
                  fontWeight="600"
                >
                  {metric.growth}
                </text>
                <text x={metric.x} y="49" fill="#4f594c" fontSize="5.7">
                  {metric.comparison}
                </text>
              </g>
            ))}
            <g
              fill="none"
              stroke="#22281d"
              strokeWidth=".45"
              strokeOpacity=".7"
            >
              {bars.map((_, index) => (
                <path key={index} d={`M${16.8 + index * 18.8} 63V203`} />
              ))}
            </g>
            <g opacity=".13" filter={`url(#${id}-bar-glow)`}>
              {bars.map((bar, index) => (
                <rect
                  key={index}
                  x={12 + index * 18.8}
                  y={202 - bar.height}
                  width="9.6"
                  height={bar.height}
                  fill={`url(#${id}-bars)`}
                />
              ))}
            </g>
            {bars.map((bar, index) => (
              <g key={index}>
                <title>{`Bin ${bar.label}: ${bar.value}`}</title>
                <rect
                  x={12 + index * 18.8}
                  y={202 - bar.height}
                  width="9.6"
                  height={bar.height}
                  rx=".25"
                  fill={`url(#${id}-bars)`}
                />
                <text
                  className="sales-mono"
                  x={16.8 + index * 18.8}
                  y={196 - bar.height}
                  fill="#e1e8d6"
                  fontSize="5.4"
                  textAnchor="middle"
                >
                  {bar.value}
                </text>
                <text
                  className="sales-mono"
                  x={16.8 + index * 18.8}
                  y="214"
                  fill="#d7e1cf"
                  fontSize="5.4"
                  textAnchor="middle"
                >
                  {bar.label}
                </text>
              </g>
            ))}

            <rect
              x=".4"
              y=".4"
              width="369.2"
              height="225.2"
              rx="5.1"
              fill="none"
              stroke="#f6f6f6"
              strokeWidth=".8"
            />
          </svg>
        </figure>
      </div>
    </>
  );
}
