// DevUI Card 46 — Luminous Radial Statistics
// Self-contained SVG artwork. No external images, fonts or chart packages.
import { useId } from "react";

export const cardMeta = {
  title: "Card 46 — Luminous Radial Statistics",
  category: "Dashboard / Radial charts",
  description:
    "A luminous multilevel radial chart with a sculpted amber center, colored arc segments and circular percentage indicators.",
  tags: ["Radial", "Glow", "Statistics", "SVG"],
};

const center = { x: 398, y: 376 };
function polar(radius: number, degrees: number) {
  const angle = ((degrees - 90) * Math.PI) / 180;
  return {
    x: center.x + radius * Math.cos(angle),
    y: center.y + radius * Math.sin(angle),
  };
}
function arc(radius: number, start: number, end: number) {
  const a = polar(radius, start);
  const b = polar(radius, end);
  return `M${a.x.toFixed(3)} ${a.y.toFixed(3)} A${radius} ${radius} 0 ${end - start > 180 ? 1 : 0} 1 ${b.x.toFixed(3)} ${b.y.toFixed(3)}`;
}
function sector(radius: number, width: number, start: number, end: number) {
  const innerEnd = polar(radius - width, end);
  const innerStart = polar(radius - width, start);
  return `${arc(radius, start, end)} L${innerEnd.x.toFixed(3)} ${innerEnd.y.toFixed(3)} A${radius - width} ${radius - width} 0 ${end - start > 180 ? 1 : 0} 0 ${innerStart.x.toFixed(3)} ${innerStart.y.toFixed(3)} Z`;
}

const palette = {
  green: "#00d448",
  lime: "#93dc00",
  yellow: "#e5cd13",
  orange: "#eb6009",
  red: "#e90008",
  pink: "#ec0054",
  magenta: "#e200c8",
  lavender: "#a16be8",
  purple: "#5200f4",
  blue: "#2586ff",
  cyan: "#04d9f2",
};
type Tone = keyof typeof palette;
type Band = {
  radius: number;
  width: number;
  segments: [number, number, Tone][];
};
const bands: Band[] = [
  {
    radius: 304,
    width: 52,
    segments: [
      [189, 203, "pink"],
      [205, 208, "magenta"],
      [210, 216, "lavender"],
      [219, 236, "purple"],
      [239, 270, "blue"],
      [272, 289, "cyan"],
      [291, 357, "green"],
      [359, 366.5, "lime"],
      [369, 379, "yellow"],
      [382, 409, "orange"],
      [411.5, 426, "red"],
    ],
  },
  {
    radius: 244,
    width: 53,
    segments: [
      [114, 129, "pink"],
      [132, 135, "magenta"],
      [138, 142, "lavender"],
      [145, 161, "purple"],
      [163.5, 195, "blue"],
      [197, 214, "cyan"],
      [217, 282, "green"],
      [284, 290, "lime"],
      [292, 304, "yellow"],
      [307, 334, "orange"],
      [337, 350, "red"],
    ],
  },
  {
    radius: 184,
    width: 82,
    segments: [
      [64, 77, "pink"],
      [79, 83, "magenta"],
      [85, 92, "lavender"],
      [94, 111, "purple"],
      [113.5, 141, "blue"],
      [144, 164, "cyan"],
      [167, 239, "green"],
      [242, 254, "yellow"],
      [257, 284, "orange"],
      [286.5, 375, "red"],
    ],
  },
];

export default function Cards46() {
  const id = useId();
  return (
    <>
      <style>{`
        .devui-card-46 { width: 760px; max-width: 100%; }
        .devui-card-46, .devui-card-46 * { box-sizing: border-box; }
        .devui-card-46 .radial-panel {
          position: relative; isolation: isolate; overflow: hidden; margin: 0;
          border: 1px solid #201d32; border-radius: 22px; background: #060610;
          box-shadow: 0 28px 70px -40px #000c;
        }
        .devui-card-46 .radial-art { display: block; width: 100%; height: auto; }
        .devui-card-46 .radial-art text { font-family: Inter, 'Segoe UI', Arial, sans-serif; }
        .devui-card-46 .quarter-label { fill: #dfdce9; font-size: 12.5px; letter-spacing: .2px; }
        .devui-card-46 .radial-value { fill: #f3f0f8; font-size: 15px; font-variant-numeric: tabular-nums; }
        .devui-card-46 .radial-caption { fill: #dfdbe7; font-size: 12px; letter-spacing: .15px; }
        .devui-card-46 .gauge-number { fill: #f9f7ff; font-size: 18px; font-weight: 650; text-anchor: middle; }
        .devui-card-46 .center-percent { fill: #e9e7ec; font-size: 11.5px; text-anchor: middle; }
        .devui-card-46 .total-label { fill: #b4afc3; font-size: 15.5px; letter-spacing: .15px; }
        .devui-card-46 .total-value { fill: #fff; font-size: 53px; font-weight: 750; letter-spacing: -2.1px; }
        .devui-card-46 .radial-segment .segment-edge { transition: stroke-opacity .18s; }
        .devui-card-46 .radial-segment:hover .segment-edge { stroke-opacity: 1; }
        @media (prefers-reduced-motion: reduce) { .devui-card-46 * { transition: none !important; } }
      `}</style>
      <div className="devui-card-46">
        <figure
          className="radial-panel"
          aria-label="Luminous radial statistics: general statistics $98,642, central progress 51%, active users 27% and new users 68%."
        >
          <svg
            className="radial-art"
            viewBox="0 0 840 760"
            role="img"
            aria-label="Three concentric bands of glowing colored segments surrounding an amber ring. Active users: 92,980. New users: 22,650."
          >
            <defs>
              <radialGradient id={`${id}-disk`} cx="47%" cy="43%" r="65%">
                <stop stopColor="#0f1021" />
                <stop offset=".76" stopColor="#0e0d20" />
                <stop offset="1" stopColor="#101024" />
              </radialGradient>
              <radialGradient id={`${id}-ambient`}>
                <stop stopColor="#f15b0c" stopOpacity=".24" />
                <stop offset=".52" stopColor="#e52904" stopOpacity=".16" />
                <stop offset="1" stopColor="#d61c00" stopOpacity="0" />
              </radialGradient>
              <linearGradient id={`${id}-amber`} x1="0" y1="0" x2=".3" y2="1">
                <stop stopColor="#ffbb3e" />
                <stop offset=".2" stopColor="#f3920c" />
                <stop offset=".57" stopColor="#c05e09" />
                <stop offset="1" stopColor="#6d1b05" />
              </linearGradient>
              <radialGradient id={`${id}-core-light`} cx="24%" cy="16%" r="92%">
                <stop stopColor="#fff9b4" stopOpacity=".36" />
                <stop offset=".22" stopColor="#ffb550" stopOpacity=".12" />
                <stop offset=".65" stopColor="#451000" stopOpacity=".06" />
                <stop offset="1" stopColor="#ffbb49" stopOpacity=".18" />
              </radialGradient>
              <radialGradient
                id={`${id}-core-volume`}
                gradientUnits="userSpaceOnUse"
                cx={center.x}
                cy={center.y}
                r="92"
              >
                <stop offset="72.8%" stopColor="#2b0b00" stopOpacity=".62" />
                <stop offset="81%" stopColor="#9a3500" stopOpacity=".12" />
                <stop offset="90%" stopColor="#ffb43a" stopOpacity=".03" />
                <stop offset="97%" stopColor="#ffd590" stopOpacity=".22" />
                <stop offset="100%" stopColor="#ffe5ad" stopOpacity=".44" />
              </radialGradient>
              <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#ffd382" stopOpacity=".65" />
                <stop offset=".5" stopColor="#f5a145" stopOpacity=".16" />
                <stop offset="1" stopColor="#c54b0b" stopOpacity=".22" />
              </linearGradient>
              <filter
                id={`${id}-soft`}
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur stdDeviation="5" />
              </filter>
              <filter
                id={`${id}-haze`}
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="13" />
              </filter>
              {bands.map((band, index) =>
                band.segments.map((segment, segmentIndex) => (
                  <radialGradient
                    key={`${index}-${segmentIndex}`}
                    id={`${id}-band-${index}-${segmentIndex}`}
                    gradientUnits="userSpaceOnUse"
                    cx={center.x}
                    cy={center.y}
                    r={band.radius}
                  >
                    <stop
                      offset={`${((band.radius - band.width) / band.radius) * 100}%`}
                      stopColor={palette[segment[2]]}
                      stopOpacity="0"
                    />
                    <stop
                      offset={`${((band.radius - band.width * 0.58) / band.radius) * 100}%`}
                      stopColor={palette[segment[2]]}
                      stopOpacity={index === 2 ? ".13" : ".09"}
                    />
                    <stop
                      offset="100%"
                      stopColor={palette[segment[2]]}
                      stopOpacity={index === 2 ? ".37" : ".26"}
                    />
                  </radialGradient>
                )),
              )}
            </defs>

            <g fill="none" stroke="#282238">
              <circle cx={center.x} cy={center.y} r="479" strokeOpacity=".22" />
              <circle cx={center.x} cy={center.y} r="458" strokeOpacity=".38" />
              <circle cx={center.x} cy={center.y} r="451" strokeOpacity=".3" />
            </g>
            <g stroke="#34283f" strokeWidth=".75">
              {Array.from({ length: 440 }, (_, index) => {
                const angle = (index / 440) * 360;
                const a = polar(414, angle);
                const b = polar(index % 5 === 0 ? 439 : 434, angle);
                const opacity =
                  Math.abs(Math.sin((angle * Math.PI) / 180)) ** 7 * 0.65 +
                  0.025;
                return (
                  <line
                    key={index}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    strokeOpacity={opacity}
                  />
                );
              })}
            </g>
            <circle
              cx={center.x - 3}
              cy={center.y}
              r="350"
              fill={`url(#${id}-disk)`}
            />
            <g fill="none" stroke="#272237" strokeWidth="1" strokeOpacity=".58">
              <circle cx={center.x} cy={center.y} r="304" />
              <circle cx={center.x} cy={center.y} r="244" />
              <circle cx={center.x} cy={center.y} r="184" />
            </g>

            {bands.map((band, index) => (
              <g key={index}>
                {band.segments.map(([start, end, tone], segmentIndex) => (
                  <g className="radial-segment" key={`${tone}-${segmentIndex}`}>
                    <title>{`${tone[0].toUpperCase() + tone.slice(1)} segment, ring ${index + 1}`}</title>
                    <path
                      d={sector(band.radius, band.width, start, end)}
                      fill={`url(#${id}-band-${index}-${segmentIndex})`}
                    />
                    <path
                      d={arc(band.radius, start, end)}
                      fill="none"
                      stroke={palette[tone]}
                      strokeWidth="12"
                      strokeOpacity=".075"
                      filter={`url(#${id}-soft)`}
                    />
                    <path
                      className="segment-edge"
                      d={arc(band.radius, start, end)}
                      fill="none"
                      stroke={palette[tone]}
                      strokeWidth="7.3"
                      strokeOpacity=".95"
                    />
                  </g>
                ))}
              </g>
            ))}

            <circle
              cx={center.x}
              cy={center.y}
              r="139"
              fill={`url(#${id}-ambient)`}
              filter={`url(#${id}-haze)`}
            />
            <circle
              cx={center.x}
              cy={center.y}
              r="90"
              fill="none"
              stroke="#f85c0b"
              strokeWidth="26"
              strokeOpacity=".09"
              filter={`url(#${id}-haze)`}
            />
            <path d={sector(92, 25, 0, 359.999)} fill={`url(#${id}-amber)`} />
            <path
              d={sector(92, 25, 0, 359.999)}
              fill={`url(#${id}-core-light)`}
            />
            <path
              d={sector(92, 25, 0, 359.999)}
              fill={`url(#${id}-core-volume)`}
            />
            <circle
              cx={center.x}
              cy={center.y}
              r="91.8"
              fill="none"
              stroke={`url(#${id}-rim)`}
              strokeWidth="1.5"
            />
            <circle
              cx={center.x}
              cy={center.y}
              r="67"
              fill="#0b0e16"
              stroke="#3e241b"
              strokeWidth=".7"
            />
            <circle
              cx={center.x}
              cy={center.y}
              r="33"
              fill="none"
              stroke="#3d3d43"
              strokeWidth="4.4"
            />
            <path
              d={arc(33, 0, 183.6)}
              fill="none"
              stroke="#4df078"
              strokeWidth="7"
              strokeOpacity=".3"
              filter={`url(#${id}-soft)`}
            />
            <path
              d={arc(33, 0, 183.6)}
              fill="none"
              stroke="#5cf77d"
              strokeWidth="4.4"
              strokeLinecap="round"
            />
            <g
              transform={`translate(${center.x - 7} ${center.y - 16})`}
              aria-hidden="true"
            >
              <rect width="14" height="14" rx=".6" fill="#f7f7f8" />
              <path
                d="M3 10 6 7l2 1 3-4M8 4h3v3"
                fill="none"
                stroke="#171824"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <text className="center-percent" x={center.x} y={center.y + 16}>
              51%
            </text>

            <g className="quarter-label">
              <text x="376" y="129">
                Second
                <tspan x="376" dy="18">
                  quarter
                </tspan>
              </text>
              <text x="531" y="261">
                First
                <tspan x="531" dy="18">
                  quarter
                </tspan>
              </text>
              <text x="659" y="276">
                Third
                <tspan x="659" dy="18">
                  quarter
                </tspan>
              </text>
            </g>

            <g>
              <circle
                cx="673"
                cy="433"
                r="31.5"
                fill="#0c0d1e"
                fillOpacity=".85"
                stroke="#77719a"
                strokeWidth="3"
              />
              <circle
                cx="673"
                cy="433"
                r="31.5"
                fill="none"
                stroke="#6cec76"
                strokeWidth="3"
                strokeDasharray={`${2 * Math.PI * 31.5 * 0.27} ${2 * Math.PI * 31.5}`}
                transform="rotate(-90 673 433)"
                strokeLinecap="round"
              />
              <text className="gauge-number" x="673" y="439">
                27%
              </text>
              <text className="radial-value" x="720" y="430">
                92,980
              </text>
              <text className="radial-caption" x="720" y="450">
                Active users
              </text>
            </g>
            <g>
              <circle
                cx="673"
                cy="539"
                r="31.5"
                fill="#0c0d1e"
                fillOpacity=".85"
                stroke="#77719a"
                strokeWidth="3"
              />
              <circle
                cx="673"
                cy="539"
                r="31.5"
                fill="none"
                stroke="#ffb249"
                strokeWidth="3"
                strokeDasharray={`${2 * Math.PI * 31.5 * 0.68} ${2 * Math.PI * 31.5}`}
                transform="rotate(-90 673 539)"
                strokeLinecap="round"
              />
              <text className="gauge-number" x="673" y="545">
                68%
              </text>
              <text className="radial-value" x="720" y="536">
                22,650
              </text>
              <text className="radial-caption" x="720" y="556">
                New users
              </text>
            </g>
            <text className="total-label" x="530" y="620">
              General statistics
            </text>
            <text className="total-value" x="530" y="678">
              $98,642
            </text>
          </svg>
        </figure>
      </div>
    </>
  );
}
