// DevUI Card 52 — Developer Radar
// Self-contained SVG / CSS recreation. No external assets or additional packages.
import { useId } from "react";

export const cardMeta = {
  title: "Card 52 — Developer Radar",
  category: "Dashboard / Widgets",
  description:
    "A circular green developer radar for commits, code reviews, issues and pull requests.",
  tags: ["Radar", "Developer", "Chart"],
};

export default function Cards52() {
  const id = useId();
  return (
    <>
      <style>{`
        .devui-widget-52 { width: 314px; max-width: 100%; min-width: 0; }
        .devui-widget-52, .devui-widget-52 * { box-sizing: border-box; }
        .devui-widget-52 .widget-surface {
          position: relative; isolation: isolate; overflow: hidden; margin: 0;
          border-radius: 36px; background: #1d1d1f;
          -webkit-font-smoothing: antialiased;
        }
        .devui-widget-52 .widget-art { display: block; width: 100%; height: auto; }
        .devui-widget-52 .widget-art text { font-family: Inter, Arial, Helvetica, sans-serif; font-variant-numeric: tabular-nums; }
      `}</style>
      <div className="devui-widget-52">
        <figure className="widget-surface" aria-label="Developer Radar">
          <svg
            className="widget-art"
            viewBox="0 0 314 300"
            role="img"
            aria-label="Developer radar chart comparing commits, code reviews, issues and pull requests."
          >
            <defs>
              <radialGradient id={`${id}-radar`} cx="50%" cy="50%" r="55%">
                <stop stopColor="#1c2420" />
                <stop offset=".67" stopColor="#1b221e" />
                <stop offset=".9" stopColor="#1d3225" />
                <stop offset="1" stopColor="#273c2e" />
              </radialGradient>
            </defs>
            <circle
              cx="157"
              cy="151"
              r="124.5"
              fill="#202421"
              stroke="#424443"
              strokeWidth="2"
            />
            <circle
              cx="157"
              cy="151"
              r="120.5"
              fill={`url(#${id}-radar)`}
              stroke="#7c7f7a"
              strokeWidth="1.2"
              strokeOpacity=".4"
            />
            <g
              fill="none"
              stroke="#747973"
              strokeWidth="1.5"
              strokeOpacity=".52"
            >
              <path d="M71 65 244 238M244 65 71 238" />
              <path
                d="m121 111 54 18-3 42-64 25Z"
                fill="#b1c5ab"
                fillOpacity=".04"
                stroke="#c2c4be"
                strokeOpacity=".65"
              />
              <path
                d="m121 111 51 60m3-42-67 67"
                stroke="#bbc5b6"
                strokeOpacity=".47"
              />
            </g>
            <polygon
              points="125,117 217,86 201,195 125,179"
              fill="#35d367"
              fillOpacity=".21"
              stroke="#36d766"
              strokeWidth="1.8"
            />
            <path
              d="m125 117 76 78m16-109-92 93"
              fill="none"
              stroke="#45ad68"
              strokeOpacity=".18"
            />
            {[
              [125, 117],
              [217, 86],
              [201, 195],
              [125, 179],
            ].map(([x, y], index) => (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="5.3"
                fill="#31d463"
                stroke="#173b25"
                strokeWidth="2"
              />
            ))}
            <g fill="#d7d7da" fontSize="20" letterSpacing="-.3">
              <text x="39" y="88" transform="rotate(-49 39 88)">
                Commits
              </text>
              <text x="213" y="30" transform="rotate(49 213 30)">
                Code Rev.
              </text>
              <text x="29" y="220" transform="rotate(49 29 220)">
                Pull Req.
              </text>
              <text x="239" y="270" transform="rotate(-49 239 270)">
                Issues
              </text>
            </g>
          </svg>
        </figure>
      </div>
    </>
  );
}
