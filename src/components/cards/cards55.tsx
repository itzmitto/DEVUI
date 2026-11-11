// DevUI Card 55 — Deep Work
// Self-contained React / CSS / SVG. No external images or additional packages.
import { useId, useState } from "react";

export const cardMeta = {
  title: "Card 55 — Deep Work",
  category: "Dashboard / Habit tracking",
  description:
    "An interactive deep work habit tile with a colored activity grid and a daily completion toggle.",
  tags: ["Habits", "Heatmap", "Interactive"],
};

const history = [
  [
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ],
  [
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
  ],
  [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    false,
    true,
    true,
    false,
    true,
    true,
    false,
    true,
  ],
  [
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
  ],
  [
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ],
  [
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ],
  [
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
  ],
];

export default function Cards55() {
  const id = useId();
  const [completed, setCompleted] = useState(true);
  return (
    <>
      <style>{`.devui-habit-55 { width: 640px; max-width: 100%; min-width: 0; }
        .devui-habit-55, .devui-habit-55 * { box-sizing: border-box; }
        .devui-habit-55 .habit-panel { overflow: hidden; margin: 0; isolation: isolate; border-radius: 8.1250% / 17.3333%; background: #272729; -webkit-font-smoothing: antialiased; }
        .devui-habit-55 .habit-art { display: block; width: 100%; height: auto; }
        .devui-habit-55 .habit-art text { font-family: Inter, Arial, Helvetica, sans-serif; font-variant-numeric: tabular-nums; }
        .devui-habit-55 .habit-toggle, .devui-habit-55 .day-toggle, .devui-habit-55 .calendar-day { cursor: pointer; outline: none; }
        .devui-habit-55 .habit-toggle:focus-visible .toggle-bg,
        .devui-habit-55 .day-toggle:focus-visible .day-circle,
        .devui-habit-55 .calendar-day:focus-visible .day-disc { stroke: #fff; stroke-width: 2; }
`}</style>
      <div className="devui-habit-55">
        <article className="habit-panel" aria-label="Deep Work">
          <svg
            className="habit-art"
            viewBox="0 0 640 300"
            role="group"
            aria-label="Deep Work habit tracker"
          >
            <defs>
              <linearGradient id={`${id}-panel`} x1="0" y1="0" x2=".18" y2="1">
                <stop stopColor="#3e3e42" />
                <stop offset=".55" stopColor="#29292c" />
                <stop offset="1" stopColor="#222225" />
              </linearGradient>
            </defs>
            <rect
              x=".8"
              y=".8"
              width="638.4"
              height="298.4"
              rx="51.2"
              fill={`url(#${id}-panel)`}
              stroke="#979c98"
              strokeOpacity=".74"
              strokeWidth="1.5"
            />
            <g color="#797cf0">
              <rect
                x="32"
                y="32"
                width="58"
                height="58"
                rx="13"
                fill="currentColor"
                fillOpacity=".16"
              />
              <path
                d="M46 71V51h30v20M42 73h38"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M50 54h22v15H50Z" fill="currentColor" opacity=".08" />
            </g>
            <text
              x="106"
              y="72"
              fill="#f8f8fa"
              fontSize="29"
              fontWeight="600"
              letterSpacing="-.3"
            >
              Deep Work
            </text>
            <g
              className="habit-toggle"
              role="button"
              tabIndex={0}
              aria-pressed={completed}
              aria-label={
                completed
                  ? "Mark Deep Work incomplete for today"
                  : "Mark Deep Work complete for today"
              }
              onClick={() => setCompleted((value) => !value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setCompleted((value) => !value);
                }
              }}
            >
              <title>{completed ? "Completed today" : "Mark complete"}</title>
              <rect
                className="toggle-bg"
                x="548"
                y="32"
                width="58"
                height="58"
                rx="13"
                fill={completed ? "#797cf0" : "#ffffff"}
                fillOpacity={completed ? 0.16 : 0.065}
              />
              <path
                d="m568 62 6 9 13-19"
                fill="none"
                stroke={completed ? "#797cf0" : "#aaaab1"}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            {history.map((row, r) =>
              row.map((filled, c) => {
                const active =
                  r === history.length - 1 && c === row.length - 1
                    ? completed
                    : filled;
                return (
                  <rect
                    key={`${r}-${c}`}
                    x={32 + c * 24.2}
                    y={102 + r * 24}
                    width="20"
                    height="20"
                    rx="3.2"
                    fill={active ? "#797cf0" : "#414260"}
                    stroke="#ffffff"
                    strokeOpacity=".035"
                    strokeWidth=".7"
                  />
                );
              }),
            )}
          </svg>
        </article>
      </div>
    </>
  );
}
