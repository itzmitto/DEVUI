// DevUI Card 67 — Mini Sales Histogram
// Self-contained SVG / CSS recreation; no external images or chart packages.
import { useId } from "react";

export const cardMeta = {
  title: "Card 67 — Mini Sales Histogram",
  category: "Dashboard / Sales",
  description:
    "A compact dark-green histogram next to $9,134 sales and a positive 2.5 percent change.",
  tags: ["Sales", "Chart", "Neon", "SVG"],
};

const histogram = [16, 24, 25, 29, 33, 31, 26, 24, 33, 29, 23];

export default function Cards67() {
  const id = useId();
  return (
    <>
      <style>{`
        .devui-sales-67 { width:300px; max-width:100%; min-width:0; }
        .devui-sales-67, .devui-sales-67 * { box-sizing:border-box; }
        .devui-sales-67 .sales-widget { margin:0; overflow:hidden; isolation:isolate; border-radius:3.5714% / 10.1852%; background:#010202; box-shadow:0 22px 30px -15px #000a; -webkit-font-smoothing:antialiased; }
        .devui-sales-67 .sales-art { display:block; width:100%; height:auto; }
        .devui-sales-67 .sales-art text { font-family:Inter,Arial,Helvetica,sans-serif; font-variant-numeric:tabular-nums; }
        .devui-sales-67 .sales-art .sales-mono { font-family:'SFMono-Regular',Consolas,'Liberation Mono',monospace; }
      `}</style>
      <div className="devui-sales-67">
        <figure className="sales-widget" aria-label="Mini Sales Histogram">
          <svg
            className="sales-art"
            viewBox="0 0 154 54"
            role="img"
            aria-label="A compact dark-green histogram next to $9,134 sales and a positive 2.5 percent change."
          >
            <defs>
              <linearGradient
                id={`${id}-histogram`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop stopColor="#4e883d" />
                <stop offset=".45" stopColor="#294722" />
                <stop offset="1" stopColor="#0a1008" />
              </linearGradient>
            </defs>
            {histogram.map((height, index) => (
              <rect
                key={index}
                x={8 + index * 5.1}
                y={44 - height}
                width="4.8"
                height={height}
                fill={`url(#${id}-histogram)`}
                stroke="#527147"
                strokeWidth=".15"
              />
            ))}
            <text x="71" y="16" fill="#b8bdb8" fontSize="6.5">
              Sales Report
            </text>
            <text
              className="sales-mono"
              x="71"
              y="34"
              fill="#f3f5f1"
              fontSize="14"
              letterSpacing="-.3"
            >
              $9,134
            </text>
            <text x="123" y="32" fill="#16e5a5" fontSize="5.7" fontWeight="600">
              +2.5%
            </text>
            <text x="71" y="46" fill="#51574f" fontSize="5.3">
              Avg. score 158,301
            </text>

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
