// DevUI Card 54 — Meditate
// Self-contained React / CSS / SVG. No external images or additional packages.
import { useId, useState } from "react";

export const cardMeta = {
  title: "Card 54 — Meditate",
  category: "Dashboard / Habit tracking",
  description:
    "An interactive meditate habit tile with a colored activity grid and a daily completion toggle.",
  tags: ["Habits", "Heatmap", "Interactive"],
};

const history = [
  [true, true, true, true, false, true, true, true, true],
  [true, false, true, true, true, true, true, true, false],
  [true, false, true, true, true, true, true, true, true],
  [true, true, true, false, true, true, true, false, true],
  [true, true, true, true, true, true, true, true, true],
  [false, true, true, true, true, true, true, true, true],
  [true, true, true, true, false, true, true, false, true],
];

export default function Cards54() {
  const id = useId();
  const [completed, setCompleted] = useState(true);
  return (
    <>
      <style>{`.devui-habit-54 { width: 300px; max-width: 100%; min-width: 0; }
        .devui-habit-54, .devui-habit-54 * { box-sizing: border-box; }
        .devui-habit-54 .habit-panel { overflow: hidden; margin: 0; isolation: isolate; border-radius: 17.3333% / 17.3333%; background: #272729; -webkit-font-smoothing: antialiased; }
        .devui-habit-54 .habit-art { display: block; width: 100%; height: auto; }
        .devui-habit-54 .habit-art text { font-family: Inter, Arial, Helvetica, sans-serif; font-variant-numeric: tabular-nums; }
        .devui-habit-54 .habit-toggle, .devui-habit-54 .day-toggle, .devui-habit-54 .calendar-day { cursor: pointer; outline: none; }
        .devui-habit-54 .habit-toggle:focus-visible .toggle-bg,
        .devui-habit-54 .day-toggle:focus-visible .day-circle,
        .devui-habit-54 .calendar-day:focus-visible .day-disc { stroke: #fff; stroke-width: 2; }
`}</style>
      <div className="devui-habit-54">
        <article className="habit-panel" aria-label="Meditate">
          <svg
            className="habit-art"
            viewBox="0 0 300 300"
            role="group"
            aria-label="Meditate habit tracker"
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
              width="298.4"
              height="298.4"
              rx="51.2"
              fill={`url(#${id}-panel)`}
              stroke="#979c98"
              strokeOpacity=".74"
              strokeWidth="1.5"
            />
            <g color="#cf2cdd">
              <rect
                x="32"
                y="32"
                width="44"
                height="44"
                rx="13"
                fill="currentColor"
                fillOpacity=".16"
              />
              <path
                d="M50 43c-4 0-6 3-5 6-4 1-5 6-2 8-2 4 1 8 5 8 1 5 8 5 10 1 4 1 6-3 5-6 4-3 4-8 0-10 0-6-7-10-11-6Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.55"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M53 47c-4-2-6 2-4 4-4 0-4 5-1 6-1 3 0 6 3 6m3-17c4 0 5 4 3 6 4 1 4 5 1 6l-1 6m-5-11 3 3-2 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
            </g>
            <text
              x="85"
              y="63"
              fill="#f8f8fa"
              fontSize="24"
              fontWeight="600"
              letterSpacing="-.3"
            >
              Meditate
            </text>
            <g
              className="habit-toggle"
              role="button"
              tabIndex={0}
              aria-pressed={completed}
              aria-label={
                completed
                  ? "Mark Meditate incomplete for today"
                  : "Mark Meditate complete for today"
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
                x="224"
                y="32"
                width="44"
                height="44"
                rx="13"
                fill={completed ? "#cf2cdd" : "#ffffff"}
                fillOpacity={completed ? 0.16 : 0.065}
              />
              <path
                d="m239 55 5 6 9-14"
                fill="none"
                stroke={completed ? "#cf2cdd" : "#aaaab1"}
                strokeWidth="3"
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
                    x={32 + c * 26.9}
                    y={84 + r * 26.8}
                    width="23"
                    height="23"
                    rx="3.2"
                    fill={active ? "#cf2cdd" : "#512b5b"}
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
