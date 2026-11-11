// DevUI Card 57 — March Habit Calendar
// Self-contained React / CSS / SVG. No external images or additional packages.
import { useId, useState } from "react";

export const cardMeta = {
  title: "Card 57 — March Habit Calendar",
  category: "Dashboard / Habit tracking",
  description:
    "A complete Monday-first March 2026 habit calendar, continuing the cropped reference with blue progress rings and selectable dates.",
  tags: ["Calendar", "Habits", "Progress", "Interactive"],
};

const monthProgress = [
  0.52, 1, 0.4, 0.72, 0.42, 1, 1, 0.67, 0.8, 1, 1, 0.48, 1, 1, 0.7, 0.4, 1, 0.6,
  1, 1, 1, 0.7, 1, 1, 0.4, 0.8, 1, 1, 1, 0.7, 1,
];
// A Monday-first month: March 1, 2026 is a Sunday. UTC keeps the dates stable.
const calendarDays = Array.from({ length: 42 }, (_, index) => {
  const date = new Date(Date.UTC(2026, 1, 23 + index));
  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const currentMonth = month === 2;
  return {
    day,
    currentMonth,
    month: month === 1 ? "February" : month === 2 ? "March" : "April",
    progress: currentMonth ? monthProgress[day - 1] : month === 1 ? 1 : 0,
    x: 73 + (index % 7) * 82.3,
    y: 183 + Math.floor(index / 7) * 82,
  };
});

export default function Cards57() {
  const id = useId();
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <>
      <style>{`.devui-habit-57 { width: 640px; max-width: 100%; min-width: 0; }
        .devui-habit-57, .devui-habit-57 * { box-sizing: border-box; }
        .devui-habit-57 .habit-panel { overflow: hidden; margin: 0; isolation: isolate; border-radius: 8.1250% / 7.8788%; background: #272729; -webkit-font-smoothing: antialiased; }
        .devui-habit-57 .habit-art { display: block; width: 100%; height: auto; }
        .devui-habit-57 .habit-art text { font-family: Inter, Arial, Helvetica, sans-serif; font-variant-numeric: tabular-nums; }
        .devui-habit-57 .habit-toggle, .devui-habit-57 .day-toggle, .devui-habit-57 .calendar-day { cursor: pointer; outline: none; }
        .devui-habit-57 .habit-toggle:focus-visible .toggle-bg,
        .devui-habit-57 .day-toggle:focus-visible .day-circle,
        .devui-habit-57 .calendar-day:focus-visible .day-disc { stroke: #fff; stroke-width: 2; }
`}</style>
      <div className="devui-habit-57">
        <article className="habit-panel" aria-label="March Habit Calendar">
          <svg
            className="habit-art"
            viewBox="0 0 640 660"
            role="group"
            aria-label="March Habit Calendar habit tracker"
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
              height="658.4"
              rx="51.2"
              fill={`url(#${id}-panel)`}
              stroke="#979c98"
              strokeOpacity=".74"
              strokeWidth="1.5"
            />
            <text
              x="43"
              y="72"
              fill="#fafafa"
              fontSize="37"
              fontWeight="600"
              letterSpacing="-.7"
            >
              March 2026
            </text>
            {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
              (day, index) => (
                <text
                  key={day}
                  x={73 + index * 82.3}
                  y="124"
                  fill="#bfc0c6"
                  fontSize="20"
                  textAnchor="middle"
                >
                  {day}
                </text>
              ),
            )}
            {calendarDays.map((cell, index) => {
              const next = calendarDays[index + 1];
              return next &&
                index % 7 !== 6 &&
                cell.progress === 1 &&
                next.progress === 1 &&
                cell.currentMonth === next.currentMonth ? (
                <line
                  key={index}
                  x1={cell.x}
                  y1={cell.y}
                  x2={next.x}
                  y2={next.y}
                  stroke={cell.currentMonth ? "#00a9f5" : "#21688a"}
                  strokeWidth="8"
                />
              ) : null;
            })}
            {calendarDays.map((cell, index) => {
              const filled = cell.progress === 1;
              return (
                <g
                  key={index}
                  className="calendar-day"
                  role="button"
                  tabIndex={0}
                  aria-pressed={selected === index}
                  aria-label={`${cell.month} ${cell.day}, 2026. ${Math.round(cell.progress * 100)} percent complete. Select date.`}
                  onClick={() =>
                    setSelected((value) => (value === index ? null : index))
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelected((value) => (value === index ? null : index));
                    }
                  }}
                >
                  <circle
                    className="day-disc"
                    cx={cell.x}
                    cy={cell.y}
                    r="32"
                    fill={
                      filled
                        ? cell.currentMonth
                          ? "#00a9f5"
                          : "#1e6284"
                        : "#3d3d42"
                    }
                  />
                  {!filled && cell.progress > 0 && (
                    <circle
                      cx={cell.x}
                      cy={cell.y}
                      r="30.5"
                      fill="none"
                      stroke="#00aaff"
                      strokeWidth="4.6"
                      strokeDasharray={`${2 * Math.PI * 30.5 * cell.progress} ${2 * Math.PI * 30.5}`}
                      strokeLinecap="round"
                      transform={`rotate(-90 ${cell.x} ${cell.y})`}
                    />
                  )}
                  {selected === index && (
                    <circle
                      cx={cell.x}
                      cy={cell.y}
                      r="36"
                      fill="none"
                      stroke="#fff"
                      strokeOpacity=".85"
                      strokeWidth="2"
                    />
                  )}
                  <text
                    x={cell.x}
                    y={cell.y + 9}
                    fill={cell.currentMonth ? "#f4f4f8" : "#c4d7e4"}
                    fontSize="27"
                    fontWeight={filled ? 600 : 400}
                    textAnchor="middle"
                  >
                    {cell.day}
                  </text>
                </g>
              );
            })}
          </svg>
        </article>
      </div>
    </>
  );
}
