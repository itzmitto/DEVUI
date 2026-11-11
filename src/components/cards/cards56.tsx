// DevUI Card 56 — Weekly Habits
// Self-contained React / CSS / SVG. No external images or additional packages.
import { useId, useState } from "react";

export const cardMeta = {
  title: "Card 56 — Weekly Habits",
  category: "Dashboard / Habit tracking",
  description:
    "A four-habit weekly checklist with connected streaks and keyboard-accessible completion toggles.",
  tags: ["Habits", "Week", "Checklist", "Interactive"],
};

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const habits = [
  {
    label: "Wake Up 5 AM",
    icon: "alarm",
    color: "#ffa33e",
    days: [true, true, false, true, true, true, true],
  },
  {
    label: "Cold Shower",
    icon: "snow",
    color: "#00a8f4",
    days: [true, false, true, true, true, true, true],
  },
  {
    label: "Morning Run",
    icon: "run",
    color: "#2bd355",
    days: [true, true, false, true, true, true, true],
  },
  {
    label: "Read",
    icon: "book",
    color: "#00a9f5",
    days: [true, false, false, true, true, true, true],
  },
];
function habitIcon(kind: string) {
  if (kind === "alarm")
    return (
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="18" cy="19" r="6" />
        <path d="M18 15v4l-3 1M13 10l-3 3m13-3 3 3M13 25l-2 2m12-2 2 2M13 9l-3 1m13-1 3 1" />
      </g>
    );
  if (kind === "snow")
    return (
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M18 10v17M11 14l14 9M11 23l14-9M15 11l3 3 3-3M15 26l3-3 3 3M11 17l4-1-1-4M25 20l-4 1 1 4M11 20l4 1-1 4M25 17l-4-1 1-4" />
      </g>
    );
  if (kind === "run")
    return (
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="21" cy="10" r="2.6" fill="currentColor" stroke="none" />
        <path d="m17 15 4 3 5-1m-9-2-5 3-1 5m6-8-2 8 5 3-2 5m-3-8-4 7" />
      </g>
    );
  return (
    <g fill="currentColor">
      <path d="M9 11c4-1 6-1 8 1v15c-2-2-5-2-8-1Zm10 1c2-2 5-2 8-1v15c-3-1-6-1-8 1Z" />
      <path d="M17.5 13h1v13h-1Z" opacity=".3" />
    </g>
  );
}

export default function Cards56() {
  const id = useId();
  const [completion, setCompletion] = useState<boolean[][]>(() =>
    habits.map((habit) => [...habit.days]),
  );
  const toggleDay = (row: number, day: number) =>
    setCompletion((previous) =>
      previous.map((values, index) =>
        index === row
          ? values.map((value, column) => (column === day ? !value : value))
          : values,
      ),
    );
  return (
    <>
      <style>{`.devui-habit-56 { width: 640px; max-width: 100%; min-width: 0; }
        .devui-habit-56, .devui-habit-56 * { box-sizing: border-box; }
        .devui-habit-56 .habit-panel { overflow: hidden; margin: 0; isolation: isolate; border-radius: 8.1250% / 17.3333%; background: #272729; -webkit-font-smoothing: antialiased; }
        .devui-habit-56 .habit-art { display: block; width: 100%; height: auto; }
        .devui-habit-56 .habit-art text { font-family: Inter, Arial, Helvetica, sans-serif; font-variant-numeric: tabular-nums; }
        .devui-habit-56 .habit-toggle, .devui-habit-56 .day-toggle, .devui-habit-56 .calendar-day { cursor: pointer; outline: none; }
        .devui-habit-56 .habit-toggle:focus-visible .toggle-bg,
        .devui-habit-56 .day-toggle:focus-visible .day-circle,
        .devui-habit-56 .calendar-day:focus-visible .day-disc { stroke: #fff; stroke-width: 2; }
`}</style>
      <div className="devui-habit-56">
        <article className="habit-panel" aria-label="Weekly Habits">
          <svg
            className="habit-art"
            viewBox="0 0 640 300"
            role="group"
            aria-label="Weekly Habits habit tracker"
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
            <text
              x="32"
              y="49"
              fill="#bebec3"
              fontSize="24"
              fontWeight="500"
              letterSpacing="-.3"
            >
              9 – 15 Mar
            </text>
            {["M", "T", "W", "T", "F", "S", "S"].map((label, day) => (
              <text
                key={day}
                x={339 + day * 42.2}
                y="48"
                fill="#bcbcc2"
                fontSize="19"
                textAnchor="middle"
              >
                {label}
              </text>
            ))}
            {habits.map((habit, row) => {
              const cy = 94 + row * 53;
              return (
                <g key={habit.label}>
                  <g transform={`translate(32 ${cy - 18})`} color={habit.color}>
                    <rect
                      width="36"
                      height="37"
                      rx="10"
                      fill="currentColor"
                      fillOpacity=".18"
                    />
                    {habitIcon(habit.icon)}
                  </g>
                  <text
                    x="80"
                    y={cy + 8}
                    fill="#f6f5f8"
                    fontSize="23.5"
                    fontWeight="500"
                    letterSpacing="-.2"
                  >
                    {habit.label}
                  </text>
                  {completion[row]
                    .slice(0, -1)
                    .map(
                      (done, day) =>
                        done &&
                        completion[row][day + 1] && (
                          <path
                            key={day}
                            d={`M${339 + day * 42.2} ${cy}h42.2`}
                            stroke={habit.color}
                            strokeWidth="4"
                            strokeOpacity=".55"
                          />
                        ),
                    )}
                  {completion[row].map((done, day) => (
                    <g
                      key={day}
                      className="day-toggle"
                      role="button"
                      tabIndex={0}
                      aria-pressed={done}
                      aria-label={`${habit.label}, ${weekDays[day]}: ${done ? "completed" : "not completed"}`}
                      onClick={() => toggleDay(row, day)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          toggleDay(row, day);
                        }
                      }}
                    >
                      <circle
                        className="day-circle"
                        cx={339 + day * 42.2}
                        cy={cy}
                        r="15"
                        fill={habit.color}
                        fillOpacity={done ? 1 : 0.25}
                      />
                      {done && (
                        <path
                          d={`m${334 + day * 42.2} ${cy} 4 5 7-10`}
                          fill="none"
                          stroke="#fff"
                          strokeWidth="1.9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      )}
                    </g>
                  ))}
                </g>
              );
            })}
          </svg>
        </article>
      </div>
    </>
  );
}
