// DevUI Card 48 — Security Status
// Self-contained SVG / CSS recreation. No external assets or additional packages.
import { useId } from "react";

export const cardMeta = {
  title: "Card 48 — Security Status",
  category: "Dashboard / Widgets",
  description:
    "A dark security status widget with diagonal stripes and a red two-item warning. Demo interface.",
  tags: ["Security", "Warning", "Status"],
};

export default function Cards48() {
  const id = useId();
  return (
    <>
      <style>{`
        .devui-widget-48 { width: 300px; max-width: 100%; min-width: 0; }
        .devui-widget-48, .devui-widget-48 * { box-sizing: border-box; }
        .devui-widget-48 .widget-surface {
          position: relative; isolation: isolate; overflow: hidden; margin: 0;
          border-radius: 36px; background: #1d1d1f;
          -webkit-font-smoothing: antialiased;
        }
        .devui-widget-48 .widget-art { display: block; width: 100%; height: auto; }
        .devui-widget-48 .widget-art text { font-family: Inter, Arial, Helvetica, sans-serif; font-variant-numeric: tabular-nums; }
      `}</style>
      <div className="devui-widget-48">
        <figure className="widget-surface" aria-label="Security Status">
          <svg
            className="widget-art"
            viewBox="0 0 300 300"
            role="img"
            aria-label="Demo security widget: Security is at Risk. 153,320. Last scan 30 seconds ago. Two items."
          >
            <defs>
              <linearGradient id={`${id}-security`} x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#202022" />
                <stop offset="1" stopColor="#322021" />
              </linearGradient>
              <pattern
                id={`${id}-stripes`}
                width="34"
                height="34"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M-17 0 17 34M17 0 51 34"
                  stroke="#404042"
                  strokeWidth="5.5"
                />
              </pattern>
            </defs>
            <rect width="300" height="300" fill={`url(#${id}-security)`} />
            <rect width="300" height="35" fill="#252527" />
            <rect width="300" height="35" fill={`url(#${id}-stripes)`} />
            <text
              x="150"
              y="79"
              fill="#f6f5f6"
              fontSize="29.5"
              fontWeight="500"
              textAnchor="middle"
              letterSpacing="-.4"
            >
              Security is at Risk
            </text>
            <text
              x="150"
              y="131"
              fill="#fff"
              fontSize="45"
              fontWeight="550"
              textAnchor="middle"
              letterSpacing="-1"
            >
              153 320
            </text>
            <text x="39" y="172" fill="#b5aeb0" fontSize="22">
              30s ago
            </text>
            <rect
              x="136"
              y="149"
              width="128"
              height="35"
              rx="10"
              fill="#414043"
            />
            <text
              x="200"
              y="173"
              fill="#bbb7ba"
              fontSize="21"
              textAnchor="middle"
            >
              Quick scan
            </text>
            <path
              d="M49 203H250Q256 203 261 208L273 220Q278 225 278 232V252Q278 258 273 263L261 275Q256 278 250 278H49Q43 278 38 273L27 262Q23 257 23 251V232Q23 226 28 221L40 208Q44 203 49 203Z"
              fill="#742e2b"
              fillOpacity=".36"
              stroke="#ff4a49"
              strokeWidth="3.5"
            />
            <path
              d="M97 229a4 4 0 0 1 7 0l10 17a4 4 0 0 1-3.5 6H90.5a4 4 0 0 1-3.5-6Z"
              fill="#ff4b49"
            />
            <path
              d="M100.5 236v7"
              stroke="#682326"
              strokeWidth="2.3"
              strokeLinecap="round"
            />
            <circle cx="100.5" cy="247" r="1.2" fill="#682326" />
            <text
              x="123"
              y="249"
              fill="#ff4a48"
              fontSize="27"
              fontWeight="500"
              letterSpacing="-.7"
            >
              2 Items
            </text>
          </svg>
        </figure>
      </div>
    </>
  );
}
