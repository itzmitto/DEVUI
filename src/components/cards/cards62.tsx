// DevUI Card 62 — Opal Discovery Cycle
// Self-contained vector artwork. No external images, fonts or packages.
import { useId } from "react";

export const cardMeta = {
  title: "Card 62 — Opal Discovery Cycle",
  category: "Diagram / Discovery",
  description:
    "The Opal discovery cycle with a segmented spectrum ring, curved phase labels, fine internal arcs and directional markers.",
  tags: ["Circular", "Gradient", "Diagram", "SVG"],
};

const center = 420;
function polar(radius: number, degrees: number) {
  const radians = ((degrees - 90) * Math.PI) / 180;
  return {
    x: center + Math.cos(radians) * radius,
    y: center + Math.sin(radians) * radius,
  };
}
function arc(radius: number, from: number, to: number) {
  const a = polar(radius, from);
  const b = polar(radius, to);
  return `M${a.x.toFixed(3)} ${a.y.toFixed(3)} A${radius} ${radius} 0 ${Math.abs(to - from) > 180 ? 1 : 0} ${to > from ? 1 : 0} ${b.x.toFixed(3)} ${b.y.toFixed(3)}`;
}

// Circumferential color stops: turquoise at the top, pearl at the lower right,
// blue on the left. Short overlapping SVG arcs form a seamless vector gradient.
const colorStops: [number, string][] = [
  [2, "#38b9b7"],
  [12, "#40d5d3"],
  [25, "#4ce5e3"],
  [42, "#68cce3"],
  [54, "#7cb0d8"],
  [65, "#8597bf"],
  [82, "#9686aa"],
  [102, "#b6a5bc"],
  [122, "#e2d8e3"],
  [144, "#eeeef8"],
  [156, "#d2dfef"],
  [173, "#a7c2d6"],
  [187, "#7fadc8"],
  [198, "#64a1c0"],
  [220, "#4582b5"],
  [249, "#326dc9"],
  [264, "#3170e4"],
  [277, "#3071f2"],
  [291, "#2861d4"],
  [310, "#214c98"],
  [329, "#245a7c"],
  [350, "#2d9398"],
];
const extendedStops: [number, string][] = [
  ...colorStops,
  [colorStops[0][0] + 360, colorStops[0][1]],
];
function colorAt(degrees: number) {
  const angle = degrees < colorStops[0][0] ? degrees + 360 : degrees;
  const index = extendedStops.findIndex(
    (stop, i) =>
      i < extendedStops.length - 1 &&
      angle >= stop[0] &&
      angle <= extendedStops[i + 1][0],
  );
  const [startAngle, startColor] = extendedStops[Math.max(0, index)];
  const [endAngle, endColor] = extendedStops[Math.max(0, index) + 1];
  const ratio = (angle - startAngle) / (endAngle - startAngle);
  return `rgb(${[1, 3, 5]
    .map((offset) =>
      Math.round(
        parseInt(startColor.slice(offset, offset + 2), 16) * (1 - ratio) +
          parseInt(endColor.slice(offset, offset + 2), 16) * ratio,
      ),
    )
    .join(",")})`;
}
const spectrum = Array.from({ length: 360 }, (_, index) => ({
  path: arc(297, index, index + 1.6),
  color: colorAt(index + 0.5),
}));
const minorCuts = [0, 40, 75, 135, 165, 210, 240, 270, 285, 340];
const majorCuts = [60, 180, 300];
const outerArcs = [
  [-93.5, -66.8],
  [-53.6, -21.8],
  [21.8, 53.6],
  [66.8, 95.5],
  [144.5, 173.5],
  [186.5, 213.5],
];
const directionMarkers = [
  { angle: -60, rotation: -55 },
  { angle: 60, rotation: 55 },
  { angle: 180, rotation: 180 },
];

export default function Cards62() {
  const id = useId();
  return (
    <>
      <style>{`
        .devui-card-62 { width:760px; max-width:100%; min-width:0; }
        .devui-card-62, .devui-card-62 * { box-sizing:border-box; }
        .devui-card-62 .opal-card { margin:0; overflow:hidden; background:#000; -webkit-font-smoothing:antialiased; }
        .devui-card-62 .opal-art { display:block; width:100%; height:auto; }
        .devui-card-62 .opal-wordmark { fill:#fafafa; font-family:Inter,Arial,Helvetica,sans-serif; font-size:70px; font-weight:400; letter-spacing:-1.2px; text-anchor:middle; }
        .devui-card-62 .opal-phase { fill:#f1f1f2; font-family:Inter,Arial,Helvetica,sans-serif; font-size:20px; font-weight:500; letter-spacing:1.25px; text-anchor:middle; }
      `}</style>
      <div className="devui-card-62">
        <figure className="opal-card" aria-label="Opal discovery cycle">
          <svg
            className="opal-art"
            viewBox="0 0 840 840"
            role="img"
            aria-labelledby={`${id}-title ${id}-description`}
          >
            <title id={`${id}-title`}>Opal</title>
            <desc id={`${id}-description`}>
              A continuous discovery cycle: target discovery, molecule discovery
              and clinical development. A blue, turquoise and pearlescent
              segmented ring surrounds the Opal wordmark.
            </desc>
            <defs>
              <clipPath id={`${id}-inside`}>
                <circle cx={center} cy={center} r="283.5" />
              </clipPath>
              <path id={`${id}-target`} d={arc(354, -26, 26)} />
              <path id={`${id}-clinical`} d={arc(365, 263, 215)} />
              <path id={`${id}-molecule`} d={arc(365, 143, 97)} />
              <linearGradient
                id={`${id}-left-line`}
                gradientUnits="userSpaceOnUse"
                x1="154"
                y1="367"
                x2="313"
                y2="172"
              >
                <stop stopColor="#3c59c6" stopOpacity=".6" />
                <stop offset=".55" stopColor="#345995" stopOpacity=".5" />
                <stop offset="1" stopColor="#528aac" stopOpacity=".46" />
              </linearGradient>
              <linearGradient
                id={`${id}-upper-line`}
                gradientUnits="userSpaceOnUse"
                x1="433"
                y1="332"
                x2="650"
                y2="279"
              >
                <stop stopColor="#333c50" stopOpacity=".28" />
                <stop offset="1" stopColor="#a4b3d3" stopOpacity=".77" />
              </linearGradient>
              <linearGradient
                id={`${id}-lower-line`}
                gradientUnits="userSpaceOnUse"
                x1="158"
                y1="485"
                x2="611"
                y2="611"
              >
                <stop stopColor="#334e83" stopOpacity=".48" />
                <stop offset=".45" stopColor="#263444" stopOpacity=".15" />
                <stop offset="1" stopColor="#a5a6af" stopOpacity=".5" />
              </linearGradient>
            </defs>

            <g clipPath={`url(#${id}-inside)`} fill="none" strokeWidth="1.7">
              <path
                d="M154 367C249 324 294 252 313 172"
                stroke={`url(#${id}-left-line)`}
              />
              <path
                d="M433 332C508 332 596 312 650 279"
                stroke={`url(#${id}-upper-line)`}
              />
              <path
                d="M377 153C415 305 460 416 561 440C613 455 658 443 691 431"
                stroke="#80828f"
                strokeOpacity=".2"
              />
              <path
                d="M665 294C582 400 570 503 624 600"
                stroke="#8b91a8"
                strokeOpacity=".47"
              />
              <path
                d="M158 485C352 452 484 496 611 611"
                stroke={`url(#${id}-lower-line)`}
              />
              <path
                d="M234 619C347 514 532 459 677 508"
                stroke="#5f6174"
                strokeOpacity=".18"
              />
              <path
                d="M269 154C283 273 230 391 153 455"
                stroke="#2d3b51"
                strokeOpacity=".1"
              />
            </g>

            <g
              fill="none"
              strokeWidth="26"
              strokeLinecap="butt"
              aria-hidden="true"
            >
              {spectrum.map((piece, index) => (
                <path key={index} d={piece.path} stroke={piece.color} />
              ))}
            </g>
            <g stroke="#000" strokeLinecap="butt" aria-hidden="true">
              {minorCuts.map((angle) => {
                const start = polar(282, angle);
                const end = polar(312, angle);
                return (
                  <path
                    key={angle}
                    d={`M${start.x} ${start.y}L${end.x} ${end.y}`}
                    strokeWidth="2.2"
                  />
                );
              })}
              {majorCuts.map((angle) => {
                const start = polar(281, angle);
                const end = polar(313, angle);
                return (
                  <path
                    key={angle}
                    d={`M${start.x} ${start.y}L${end.x} ${end.y}`}
                    strokeWidth="11"
                  />
                );
              })}
            </g>

            <g
              fill="none"
              stroke="#848484"
              strokeWidth="2.2"
              strokeOpacity=".85"
              aria-hidden="true"
            >
              {outerArcs.map(([from, to]) => (
                <path key={from} d={arc(360, from, to)} />
              ))}
            </g>
            <g className="opal-phase">
              <text>
                <textPath href={`#${id}-target`} startOffset="50%">
                  TARGET DISCOVERY
                </textPath>
              </text>
              <text>
                <textPath href={`#${id}-clinical`} startOffset="50%">
                  CLINICAL DEVELOPMENT
                </textPath>
              </text>
              <text>
                <textPath href={`#${id}-molecule`} startOffset="50%">
                  MOLECULE DISCOVERY
                </textPath>
              </text>
            </g>
            <g aria-hidden="true">
              {directionMarkers.map((marker) => {
                const position = polar(360, marker.angle);
                return (
                  <g
                    key={marker.angle}
                    transform={`translate(${position.x} ${position.y})`}
                  >
                    <circle
                      r="20"
                      fill="#000"
                      stroke="#808080"
                      strokeWidth="2.2"
                    />
                    <path
                      d="M-8 0H8M2-6 8 0 2 6"
                      transform={`rotate(${marker.rotation})`}
                      fill="none"
                      stroke="#f5f5f5"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                );
              })}
            </g>
            <text
              className="opal-wordmark"
              x={center}
              y="445"
              textLength="150"
              lengthAdjust="spacingAndGlyphs"
            >
              Opal
            </text>
          </svg>
        </figure>
      </div>
    </>
  );
}
