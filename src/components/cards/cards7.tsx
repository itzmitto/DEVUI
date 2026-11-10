// DevUI Card 07 — Guitar
// Zelfstandig bestand; geen extra CSS of iconenpakket nodig.

import { useState } from "react";

export const cardMeta = {
  title: "Card 07 — Guitar",
  category: "Habits / Activity",
  description:
    "Guitar-tracker met activiteitenraster en interactieve dagstatus.",
  tags: ["Habit tracker", "Guitar", "Heatmap"],
};

const levels = [
  "101200120223030130022112",
  "010000000220030020002002",
  "031002000322202030100220",
  "022230002030002132322230",
  "020101330110300000322002",
  "002020030222213330301222",
  "001000020311003120213020",
];
const palette = ["#302924", "#755637", "#ac7d49", "#e9a55c"];

export default function Cards7() {
  const [completed, setCompleted] = useState(false);

  return (
    <>
      <style>{`.devui-card-7 { width: 332px; max-width: 100%; container-type: inline-size; }
.devui-card-7, .devui-card-7 * { box-sizing: border-box; }
.devui-card-7 .habit-panel {
  padding: 3.9cqw;
  border: 1px solid rgba(255,255,255,.045);
  border-radius: 7.6cqw;
  color: #ecebed;
  background: linear-gradient(180deg, #29241f, #1e1e20);
  box-shadow: 0 2px 3px rgba(0,0,0,.12), inset 0 1px 0 rgba(255,255,255,.015);
  font-family: Arial, Helvetica, sans-serif;
}
.devui-card-7 .habit-header { display: grid; grid-template-columns: 12cqw minmax(0,1fr) 12.65cqw; align-items: center; gap: 3cqw; height: 12.65cqw; }
.devui-card-7 .habit-icon { display: grid; place-items: center; width: 12cqw; height: 12cqw; border-radius: 3.6cqw; color: #d5a05f; background: rgba(201,145,74,.12); }
.devui-card-7 .habit-icon svg { width: 6cqw; height: 6cqw; }
.devui-card-7 .habit-copy { min-width: 0; transform: translateY(1.5px); }
.devui-card-7 .habit-title { margin: 0 0 .65cqw; color: #ededef; font-size: 4.6cqw; font-weight: 600; line-height: 1.15; letter-spacing: -.1px; }
.devui-card-7 .habit-description { overflow: hidden; margin: 0; color: #969397; font-size: 3.85cqw; line-height: 1.25; letter-spacing: 0; white-space: nowrap; text-overflow: ellipsis; }
.devui-card-7 .habit-check { display: grid; place-items: center; width: 12.65cqw; height: 12.65cqw; padding: 0; border: 1px solid rgba(255,255,255,.08); border-radius: 4cqw; color: #8d8985; background: rgba(255,255,255,.025); cursor: pointer; appearance: none; box-shadow: inset 0 1px 1px rgba(255,255,255,.025); transition: background .15s ease, color .15s ease, transform .15s ease; -webkit-tap-highlight-color: transparent; }
.devui-card-7 .habit-check svg { width: 6.2cqw; height: 6.2cqw; }
.devui-card-7 .habit-check[aria-pressed="true"] { color: #172131; border-color: transparent; background: linear-gradient(150deg, #e5b276, #b98248); box-shadow: inset 0 1px 0 rgba(255,255,255,.13), 0 2px 3px rgba(0,0,0,.08); }
.devui-card-7 .habit-check:focus-visible { outline: 2px solid #d5a05f; outline-offset: 4px; }
@media(hover:hover) { .devui-card-7 .habit-check:hover { filter: brightness(1.12); } }
.devui-card-7 .habit-check:active { transform: scale(.95); }
.devui-card-7 .habit-chart { display: block; width: 100%; height: auto; margin-top: 3.1cqw; }
.devui-card-7 .habit-footer { display: flex; align-items: center; gap: 2.4cqw; margin-top: 3cqw; }
.devui-card-7 .habit-streak, .devui-card-7 .habit-week { display: inline-flex; align-items: center; gap: 1.3cqw; min-height: 6.6cqw; padding: 0 2.5cqw; border-radius: 999px; font: 400 3.35cqw/1 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; letter-spacing: .35px; white-space: nowrap; }
.devui-card-7 .habit-streak { color: #d5a05f; background: rgba(201,145,74,.12); }
.devui-card-7 .habit-streak svg { width: 3.7cqw; height: 3.7cqw; }
.devui-card-7 .habit-week { font-size: 3.2cqw; letter-spacing: .15px; color: #949094; background: rgba(255,255,255,.045); }
@media(prefers-reduced-motion:reduce) { .devui-card-7 .habit-check { transition: none; } }`}</style>
      <div className="devui-card-7">
        <article className="habit-panel" aria-label="Guitar habit tracker">
          <header className="habit-header">
            <span className="habit-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m11.5 11.5 6-6m-3 8c1.1-1.8 1-3.6-.2-4.8s-3-1.3-4.8-.2c-.8.5-1.2 1.5-1.6 2.3-.3.7-.9 1.1-1.8 1.3C3.5 12.7 2 14.2 2 16.5A5.5 5.5 0 0 0 7.5 22c2.3 0 3.8-1.5 4.4-4.1.2-.9.6-1.5 1.3-1.8.8-.4 1.8-.8 2.3-1.6ZM17 3l2-1 3 3-1 2-3 1-2-2 1-3Z" />
                <circle cx="8.5" cy="15.5" r="1.5" />
                <path d="m5 18 1 1" />
              </svg>
            </span>
            <div className="habit-copy">
              <h2 className="habit-title">Guitar</h2>
              <p
                className="habit-description"
                title="Practice guitar for at least 15 minutes"
              >
                Practice guitar for at least 15 minutes
              </p>
            </div>
            <button
              className="habit-check"
              type="button"
              aria-pressed={completed}
              aria-label={
                completed
                  ? "Markeer Guitar als niet voltooid vandaag"
                  : "Markeer Guitar als voltooid vandaag"
              }
              onClick={() => setCompleted((previous) => !previous)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.65"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m5 12 4.5 4.5L19 7" />
              </svg>
            </button>
          </header>
          <svg
            className="habit-chart"
            viewBox="0 0 304 84"
            role="img"
            aria-label="Activiteitenoverzicht voor Guitar met 24 weken en 7 dagen per week"
          >
            {levels.flatMap((row, r) =>
              Array.from(row, (level, c) => (
                <rect
                  key={`${r}-${c}`}
                  x={c * 12.7}
                  y={r * 12.2}
                  width="10"
                  height="10"
                  rx="2.5"
                  fill={palette[Number(level)]}
                />
              )),
            )}
          </svg>
          <footer className="habit-footer">
            <span className="habit-streak" aria-label="Reeks van 88 dagen">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12.5 2.5c1 4.4-4 5.1-4 8.5 0 1.4.8 2.2 1.5 2.6-.2-2.7 2-3.8 3-5.1 1.9 2.3 3.8 4.5 3.8 7.1A5.8 5.8 0 0 1 5.2 16c0-3.3 1.5-5.7 3.1-7.6-.1 2 .3 2.7.3 2.7-.2-3.6 3-5.4 3.9-8.6Z" />
              </svg>
              88
            </span>
            <span className="habit-week" aria-live="polite" aria-atomic="true">
              {2 + Number(completed)} of 3 this week
            </span>
          </footer>
        </article>
      </div>
    </>
  );
}
