// DevUI Card 08 — Reading
// Zelfstandig bestand; geen extra CSS of iconenpakket nodig.

import { useState } from "react";

export const cardMeta = {
  title: "Card 08 — Reading",
  category: "Habits / Activity",
  description:
    "Reading-tracker met activiteitenraster en interactieve dagstatus.",
  tags: ["Habit tracker", "Reading", "Heatmap"],
};

const levels = [
  "100021320301002131001112",
  "113111210022120302020122",
  "020103220320322022210002",
  "101001000320010111003120",
  "102212102010132123203020",
  "320200022001212121112011",
  "301323030001000220303222",
];
const palette = ["#232e33", "#3d6977", "#569ab0", "#6eceed"];

export default function Cards8() {
  const [completed, setCompleted] = useState(true);

  return (
    <>
      <style>{`.devui-card-8 { width: 332px; max-width: 100%; container-type: inline-size; }
.devui-card-8, .devui-card-8 * { box-sizing: border-box; }
.devui-card-8 .habit-panel {
  padding: 3.9cqw;
  border: 1px solid rgba(255,255,255,.045);
  border-radius: 7.6cqw;
  color: #ecebed;
  background: linear-gradient(180deg, #20292e, #1b1e20);
  box-shadow: 0 2px 3px rgba(0,0,0,.12), inset 0 1px 0 rgba(255,255,255,.015);
  font-family: Arial, Helvetica, sans-serif;
}
.devui-card-8 .habit-header { display: grid; grid-template-columns: 12cqw minmax(0,1fr) 12.65cqw; align-items: center; gap: 3cqw; height: 12.65cqw; }
.devui-card-8 .habit-icon { display: grid; place-items: center; width: 12cqw; height: 12cqw; border-radius: 3.6cqw; color: #69c6dc; background: rgba(91,189,216,.12); }
.devui-card-8 .habit-icon svg { width: 6cqw; height: 6cqw; }
.devui-card-8 .habit-copy { min-width: 0; transform: translateY(1.5px); }
.devui-card-8 .habit-title { margin: 0 0 .65cqw; color: #ededef; font-size: 4.6cqw; font-weight: 600; line-height: 1.15; letter-spacing: -.1px; }
.devui-card-8 .habit-description { overflow: hidden; margin: 0; color: #969397; font-size: 3.85cqw; line-height: 1.25; letter-spacing: 0; white-space: nowrap; text-overflow: ellipsis; }
.devui-card-8 .habit-check { display: grid; place-items: center; width: 12.65cqw; height: 12.65cqw; padding: 0; border: 1px solid rgba(255,255,255,.08); border-radius: 4cqw; color: #8d8985; background: rgba(255,255,255,.025); cursor: pointer; appearance: none; box-shadow: inset 0 1px 1px rgba(255,255,255,.025); transition: background .15s ease, color .15s ease, transform .15s ease; -webkit-tap-highlight-color: transparent; }
.devui-card-8 .habit-check svg { width: 6.2cqw; height: 6.2cqw; }
.devui-card-8 .habit-check[aria-pressed="true"] { color: #172131; border-color: transparent; background: linear-gradient(150deg, #72cfe2, #54a9bd); box-shadow: inset 0 1px 0 rgba(255,255,255,.13), 0 2px 3px rgba(0,0,0,.08); }
.devui-card-8 .habit-check:focus-visible { outline: 2px solid #69c6dc; outline-offset: 4px; }
@media(hover:hover) { .devui-card-8 .habit-check:hover { filter: brightness(1.12); } }
.devui-card-8 .habit-check:active { transform: scale(.95); }
.devui-card-8 .habit-chart { display: block; width: 100%; height: auto; margin-top: 3.1cqw; }
.devui-card-8 .habit-footer { display: flex; align-items: center; gap: 2.4cqw; margin-top: 3cqw; }
.devui-card-8 .habit-streak, .devui-card-8 .habit-week { display: inline-flex; align-items: center; gap: 1.3cqw; min-height: 6.6cqw; padding: 0 2.5cqw; border-radius: 999px; font: 400 3.35cqw/1 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; letter-spacing: .35px; white-space: nowrap; }
.devui-card-8 .habit-streak { color: #69c6dc; background: rgba(91,189,216,.12); }
.devui-card-8 .habit-streak svg { width: 3.7cqw; height: 3.7cqw; }
.devui-card-8 .habit-week { font-size: 3.2cqw; letter-spacing: .15px; color: #949094; background: rgba(255,255,255,.045); }
@media(prefers-reduced-motion:reduce) { .devui-card-8 .habit-check { transition: none; } }`}</style>
      <div className="devui-card-8">
        <article className="habit-panel" aria-label="Reading habit tracker">
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
                <path d="M12 5c-2.4-1.7-5.7-1.9-9-1v15c3.3-.9 6.6-.7 9 1m0-15c2.4-1.7 5.7-1.9 9-1v15c-3.3-.9-6.6-.7-9 1m0-15v15" />
              </svg>
            </span>
            <div className="habit-copy">
              <h2 className="habit-title">Reading</h2>
              <p
                className="habit-description"
                title="Read everyday for at least 15 minutes"
              >
                Read everyday for at least 15 minutes
              </p>
            </div>
            <button
              className="habit-check"
              type="button"
              aria-pressed={completed}
              aria-label={
                completed
                  ? "Markeer Reading als niet voltooid vandaag"
                  : "Markeer Reading als voltooid vandaag"
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
            aria-label="Activiteitenoverzicht voor Reading met 24 weken en 7 dagen per week"
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
            <span className="habit-streak" aria-label="Reeks van 212 dagen">
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
              212
            </span>
            <span className="habit-week" aria-live="polite" aria-atomic="true">
              {5 + Number(completed)} of 7 this week
            </span>
          </footer>
        </article>
      </div>
    </>
  );
}
