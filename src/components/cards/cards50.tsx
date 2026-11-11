// DevUI Card 50 — Daily Calendar
// Self-contained SVG / CSS recreation. No external assets or additional packages.
export const cardMeta = {
  title: "Card 50 — Daily Calendar",
  category: "Dashboard / Widgets",
  description:
    "A clipped daily calendar with a blue task, amber meeting and pink design event.",
  tags: ["Calendar", "Schedule", "Timeline"],
};

export default function Cards50() {
  return (
    <>
      <style>{`
        .devui-widget-50 { width: 300px; max-width: 100%; min-width: 0; }
        .devui-widget-50, .devui-widget-50 * { box-sizing: border-box; }
        .devui-widget-50 .widget-surface {
          position: relative; isolation: isolate; overflow: hidden; margin: 0;
          border-radius: 36px; background: #1d1d1f;
          -webkit-font-smoothing: antialiased;
        }
        .devui-widget-50 .widget-art { display: block; width: 100%; height: auto; }
        .devui-widget-50 .widget-art text { font-family: Inter, Arial, Helvetica, sans-serif; font-variant-numeric: tabular-nums; }
      `}</style>
      <div className="devui-widget-50">
        <figure className="widget-surface" aria-label="Daily Calendar">
          <svg
            className="widget-art"
            viewBox="0 0 300 300"
            role="img"
            aria-label="Calendar for Monday 27 February. Design, Things to be Done Part 2, and Daily Meeting around 15:00."
          >
            <text
              x="22"
              y="49"
              fill="#f1f1f3"
              fontSize="28.5"
              fontWeight="500"
              letterSpacing="-.8"
            >
              Mon 27 Feb
            </text>
            <path
              d="M260 28v24M248 40h24"
              stroke="#62cdf4"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <path d="M0 72H300" stroke="#070709" strokeWidth="2" />
            <g stroke="#414143" strokeWidth="1.7">
              <path d="M22 73V300M150 73V300M278 73V300M0 241H300" />
            </g>
            <g stroke="#343436" strokeWidth="1.5">
              <path d="M105 73V300M0 136H300M0 189H300" />
            </g>
            <rect
              x="215"
              y="83"
              width="140"
              height="46"
              rx="13"
              fill="#552130"
              stroke="#b82f4e"
              strokeWidth="2"
            />
            <rect
              x="219"
              y="87"
              width="132"
              height="38"
              rx="9"
              fill="none"
              stroke="#d43a58"
              strokeOpacity=".35"
            />
            <text x="226" y="113" fill="#e5c9d1" fontSize="22">
              Design
            </text>
            <rect
              x="-80"
              y="136"
              width="420"
              height="46"
              rx="4"
              fill="#18334b"
              stroke="#237dce"
              strokeWidth="1.8"
            />
            <text x="-55" y="167" fill="#d0dbe6" fontSize="22">
              Things to be Done. Part 2
            </text>
            <rect
              x="22"
              y="189"
              width="128"
              height="44"
              rx="12"
              fill="#ffad00"
            />
            <text
              x="33"
              y="218"
              fill="#161208"
              fontSize="22"
              fontWeight="500"
              letterSpacing="-.5"
            >
              Daily Mee.
            </text>
            <g stroke="#474749" strokeWidth="1.6">
              {Array.from({ length: 13 }, (_, index) => (
                <path key={index} d={`M${22 + index * 21.3} 237v8`} />
              ))}
            </g>
            <path d="M105 85V300" stroke="#f2f2f4" strokeWidth="1.4" />
            <path d="m98 74 7 8 7-8Zm0 167 7-8 7 8Z" fill="#f5f5f6" />
            <g fill="#99999b" fontSize="22" letterSpacing="-.5">
              <text x="29" y="270">
                15:00
              </text>
              <text x="157" y="270">
                15:30
              </text>
              <text x="285" y="270">
                16:00
              </text>
            </g>
          </svg>
        </figure>
      </div>
    </>
  );
}
