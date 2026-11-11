// DevUI Card 66 — Segmented Sales
// Self-contained SVG / CSS recreation; no external images or chart packages.
import { useId } from "react";

export const cardMeta = {
  title: "Card 66 — Segmented Sales",
  category: "Dashboard / Sales",
  description:
    "A compact $9,134 sales card with seven rows of glowing green segmented bars.",
  tags: ["Sales", "Chart", "Neon", "SVG"],
};

const rowLevels = [2, 1, 3, 2, 5, 3, 4];

export default function Cards66() {
  const id = useId();
  return (
    <>
      <style>{`
        .devui-sales-66 { width:300px; max-width:100%; min-width:0; }
        .devui-sales-66, .devui-sales-66 * { box-sizing:border-box; }
        .devui-sales-66 .sales-widget { margin:0; overflow:hidden; isolation:isolate; border-radius:3.5714% / 10.1852%; background:#010202; box-shadow:0 22px 30px -15px #000a; -webkit-font-smoothing:antialiased; }
        .devui-sales-66 .sales-art { display:block; width:100%; height:auto; }
        .devui-sales-66 .sales-art text { font-family:Inter,Arial,Helvetica,sans-serif; font-variant-numeric:tabular-nums; }
        .devui-sales-66 .sales-art .sales-mono { font-family:'SFMono-Regular',Consolas,'Liberation Mono',monospace; }
      `}</style>
      <div className="devui-sales-66">
        <figure className="sales-widget" aria-label="Segmented Sales">
          <svg
            className="sales-art"
            viewBox="0 0 154 54"
            role="img"
            aria-label="A compact $9,134 sales card with seven rows of glowing green segmented bars."
          >
            <defs>
              <filter
                id={`${id}-segments`}
                x="-30%"
                y="-80%"
                width="160%"
                height="260%"
              >
                <feGaussianBlur stdDeviation="1.2" />
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
            <g fill="#7bf83d" opacity=".13" filter={`url(#${id}-segments)`}>
              {rowLevels.map((level, row) => (
                <rect
                  key={row}
                  x="90"
                  y={8 + row * 5.8}
                  width={level * 7.1 - 1.3}
                  height="2.8"
                  rx="1.1"
                />
              ))}
            </g>
            {rowLevels.map((level, row) => (
              <g key={row}>
                {Array.from({ length: 8 }, (_, column) => (
                  <rect
                    key={column}
                    x={90 + column * 7.1}
                    y={8 + row * 5.8}
                    width="5.8"
                    height="2.8"
                    rx="1.1"
                    fill={
                      column < level
                        ? column % 3 === 0
                          ? "#8cf14c"
                          : "#60dd35"
                        : "#292f25"
                    }
                  />
                ))}
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
