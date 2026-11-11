// DevUI Card 64 — Green Frequency Report
// Self-contained SVG / CSS recreation; no external images or chart packages.
import { useId } from "react";

export const cardMeta = {
  title: "Card 64 — Green Frequency Report",
  category: "Dashboard / Sales",
  description:
    "A tall Sales Report with neon-green frequency lines, monthly and yearly sales and three regional totals.",
  tags: ["Sales", "Chart", "Neon", "SVG"],
};

const frequencies = Array.from({ length: 56 }, (_, index) => ({
  x: 16 + index * 2.65,
  height:
    index > 23 && index < 49
      ? 113 - (index % 3) * 0.5
      : 111 - (index % 3) * 0.7,
  opacity: index > 23 && index < 49 ? 1 : 0.72 + (index % 4) * 0.08,
}));

export default function Cards64() {
  const id = useId();
  return (
    <>
      <style>{`
        .devui-sales-64 { width:300px; max-width:100%; min-width:0; }
        .devui-sales-64, .devui-sales-64 * { box-sizing:border-box; }
        .devui-sales-64 .sales-widget { margin:0; overflow:hidden; isolation:isolate; border-radius:3.1609% / 2.1318%; background:#010202; box-shadow:0 22px 30px -15px #000a; -webkit-font-smoothing:antialiased; }
        .devui-sales-64 .sales-art { display:block; width:100%; height:auto; }
        .devui-sales-64 .sales-art text { font-family:Inter,Arial,Helvetica,sans-serif; font-variant-numeric:tabular-nums; }
        .devui-sales-64 .sales-art .sales-mono { font-family:'SFMono-Regular',Consolas,'Liberation Mono',monospace; }
      `}</style>
      <div className="devui-sales-64">
        <figure className="sales-widget" aria-label="Green Frequency Report">
          <svg
            className="sales-art"
            viewBox="0 0 174 258"
            role="img"
            aria-label="A tall Sales Report with neon-green frequency lines, monthly and yearly sales and three regional totals."
          >
            <defs>
              <linearGradient id={`${id}-lines`} x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#b0ff8b" />
                <stop offset=".34" stopColor="#73ff49" />
                <stop offset=".65" stopColor="#38c81b" stopOpacity=".67" />
                <stop offset="1" stopColor="#153307" stopOpacity="0" />
              </linearGradient>
              <linearGradient id={`${id}-cluster`} x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#b0ff8b" />
                <stop offset=".65" stopColor="#79ff47" stopOpacity=".95" />
                <stop offset=".88" stopColor="#55d42b" stopOpacity=".7" />
                <stop offset="1" stopColor="#173c0b" stopOpacity="0" />
              </linearGradient>
              <filter
                id={`${id}-glow`}
                x="-50%"
                y="-20%"
                width="200%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="1.5" />
              </filter>
            </defs>
            <text
              x="11"
              y="20"
              fill="#f4f6f1"
              fontSize="11"
              fontWeight="600"
              letterSpacing="-.15"
            >
              Sales Report
            </text>
            <g opacity=".13" filter={`url(#${id}-glow)`}>
              {frequencies.map((bar, index) => (
                <rect
                  key={index}
                  x={bar.x}
                  y="30"
                  width="1.2"
                  height={bar.height}
                  fill="#72f548"
                  opacity={bar.opacity}
                />
              ))}
            </g>
            {frequencies.map((bar, index) => (
              <rect
                key={index}
                x={bar.x}
                y="30"
                width="1.15"
                height={bar.height}
                fill={`url(#${id}-${index > 23 && index < 49 ? "cluster" : "lines"})`}
                opacity={bar.opacity}
              />
            ))}
            <g>
              <text x="11" y="160" fill="#a6aea0" fontSize="6.1">
                <tspan fill="#7df26b">✦</tspan> Monthly
              </text>
              <text
                className="sales-mono"
                x="11"
                y="176"
                fill="#f3f6ee"
                fontSize="12.6"
                letterSpacing="-.3"
              >
                $8,097
              </text>
              <text
                x="11"
                y="185"
                fill="#16e3a1"
                fontSize="5.6"
                fontWeight="600"
              >
                +19.6%
                <tspan fill="#555d51" fontWeight="400">
                  {" "}
                  44,214 USD
                </tspan>
              </text>
              <path
                d="M95 155h3l-.8 1.4h-1.4Zm.5 2h2c.8.9 1.8 2.2 1.8 3.2 0 1.1-.8 1.7-2.8 1.7s-2.8-.6-2.8-1.7c0-1 1-2.3 1.8-3.2Z"
                fill="#e7ce4b"
              />
              <text x="102" y="160" fill="#a6aea0" fontSize="6.1">
                Yearly
              </text>
              <text
                className="sales-mono"
                x="93"
                y="176"
                fill="#f3f6ee"
                fontSize="12.6"
                letterSpacing="-.3"
              >
                $312,134
              </text>
              <text
                x="93"
                y="185"
                fill="#16e3a1"
                fontSize="5.6"
                fontWeight="600"
              >
                +2.5%
                <tspan fill="#555d51" fontWeight="400">
                  {" "}
                  301,002 USD
                </tspan>
              </text>
            </g>
            {[
              { name: "Los Angeles", value: "291,192" },
              { name: "New York", value: "192,654" },
              { name: "Canada", value: "166,491" },
            ].map((row, index) => (
              <g key={row.name}>
                <text x="11" y={206 + index * 18} fill="#aeb5a9" fontSize="7.1">
                  {row.name}
                </text>
                <text
                  className="sales-mono"
                  x="162"
                  y={206 + index * 18}
                  fill="#e5ede0"
                  fontSize="7.1"
                  textAnchor="end"
                >
                  {row.value}
                </text>
                {index < 2 && (
                  <path
                    d={`M11 ${212 + index * 18}H162`}
                    stroke="#20261e"
                    strokeWidth=".55"
                  />
                )}
              </g>
            ))}

            <rect
              x=".4"
              y=".4"
              width="173.2"
              height="257.2"
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
