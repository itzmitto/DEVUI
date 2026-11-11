// DevUI Card 63 — Sales Pulse
// Self-contained SVG / CSS recreation; no external images or chart packages.
import { useId } from "react";

export const cardMeta = {
  title: "Card 63 — Sales Pulse",
  category: "Dashboard / Sales",
  description:
    "A compact black sales card with $9,134 revenue and a turquoise pulse chart.",
  tags: ["Sales", "Chart", "Neon", "SVG"],
};

const candles = [
  { y: 20, h: 7, opacity: 1 },
  { y: 16, h: 10, opacity: 1 },
  { y: 12, h: 9, opacity: 1 },
  { y: 9, h: 9, opacity: 1 },
  { y: 11, h: 8, opacity: 0.9 },
  { y: 17, h: 9, opacity: 0.8 },
  { y: 23, h: 10, opacity: 0.55 },
  { y: 29, h: 9, opacity: 0.35 },
  { y: 32, h: 9, opacity: 0.2 },
  { y: 24, h: 9, opacity: 0.65 },
  { y: 10, h: 8, opacity: 1 },
  { y: 19, h: 8, opacity: 0.9 },
  { y: 19, h: 10, opacity: 0.8 },
  { y: 23, h: 8, opacity: 0.75 },
];

export default function Cards63() {
  const id = useId();
  return (
    <>
      <style>{`
        .devui-sales-63 { width:300px; max-width:100%; min-width:0; }
        .devui-sales-63, .devui-sales-63 * { box-sizing:border-box; }
        .devui-sales-63 .sales-widget { margin:0; overflow:hidden; isolation:isolate; border-radius:3.5714% / 10.1852%; background:#010202; box-shadow:0 22px 30px -15px #000a; -webkit-font-smoothing:antialiased; }
        .devui-sales-63 .sales-art { display:block; width:100%; height:auto; }
        .devui-sales-63 .sales-art text { font-family:Inter,Arial,Helvetica,sans-serif; font-variant-numeric:tabular-nums; }
        .devui-sales-63 .sales-art .sales-mono { font-family:'SFMono-Regular',Consolas,'Liberation Mono',monospace; }
      `}</style>
      <div className="devui-sales-63">
        <figure className="sales-widget" aria-label="Sales Pulse">
          <svg
            className="sales-art"
            viewBox="0 0 154 54"
            role="img"
            aria-label="A compact black sales card with $9,134 revenue and a turquoise pulse chart."
          >
            <defs>
              <filter
                id={`${id}-pulse`}
                x="-60%"
                y="-60%"
                width="220%"
                height="220%"
              >
                <feGaussianBlur stdDeviation="1.3" />
              </filter>
            </defs>
            <text x="8" y="15" fill="#b8bdb8" fontSize="6.5">
              Sales Report
            </text>
            <text
              className="sales-mono"
              x="8"
              y="33"
              fill="#f3f5f1"
              fontSize="14"
              letterSpacing="-.3"
            >
              $9,134
            </text>
            <text x="60" y="32" fill="#16e5a5" fontSize="5.7" fontWeight="600">
              +2.5%
            </text>
            <text x="8" y="45" fill="#51574f" fontSize="5.3">
              Avg. score 158,301
            </text>
            <g fill="#2df4b3" opacity=".15" filter={`url(#${id}-pulse)`}>
              {candles.map((candle, index) => (
                <rect
                  key={index}
                  x={90 + index * 3.9}
                  y={candle.y}
                  width="2"
                  height={candle.h}
                  opacity={candle.opacity}
                />
              ))}
            </g>
            {candles.map((candle, index) => (
              <g key={index} opacity={candle.opacity}>
                <path
                  d={`M${91 + index * 3.9} ${candle.y - 2}v${candle.h + 4}`}
                  stroke="#1dc99b"
                  strokeWidth=".45"
                />
                <rect
                  x={90 + index * 3.9}
                  y={candle.y}
                  width="1.9"
                  height={candle.h}
                  rx=".35"
                  fill="#2df4b3"
                />
              </g>
            ))}

            <rect
              x=".4"
              y=".4"
              width="153.2"
              height="53.2"
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
