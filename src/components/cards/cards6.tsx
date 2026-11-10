// DevUI Card 06 — Sport
// Zelfstandig bestand; geen extra CSS of iconenpakket nodig.

import { useState } from "react";

export const cardMeta = {
  title: "Card 06 — Sport",
  category: "Habits / Activity",
  description:
    "Sport-tracker met activiteitenraster en interactieve dagstatus.",
  tags: ["Habit tracker", "Sport", "Heatmap"],
};

const levels = [
  "000303020230102203200220",
  "010032202221201212313012",
  "320010000310102202013012",
  "201020100032233023100202",
  "100020102131220331100211",
  "123131333212123120101220",
  "110220201323002121001103",
];
const palette = ["#282734", "#4d4d79", "#6d6db3", "#8e8ef2"];

export default function Cards6() {
  const [completed, setCompleted] = useState(true);

  return (
    <>
      <style>{`.devui-card-6 { width: 332px; max-width: 100%; container-type: inline-size; }
.devui-card-6, .devui-card-6 * { box-sizing: border-box; }
.devui-card-6 .habit-panel {
  padding: 3.9cqw;
  border: 1px solid rgba(255,255,255,.045);
  border-radius: 7.6cqw;
  color: #ecebed;
  background: linear-gradient(180deg, #222127, #1e1e20);
  box-shadow: 0 2px 3px rgba(0,0,0,.12), inset 0 1px 0 rgba(255,255,255,.015);
  font-family: Arial, Helvetica, sans-serif;
}
.devui-card-6 .habit-header { display: grid; grid-template-columns: 12cqw minmax(0,1fr) 12.65cqw; align-items: center; gap: 3cqw; height: 12.65cqw; }
.devui-card-6 .habit-icon { display: grid; place-items: center; width: 12cqw; height: 12cqw; border-radius: 3.6cqw; color: #9a94ed; background: rgba(143,132,226,.12); }
.devui-card-6 .habit-icon svg { width: 6cqw; height: 6cqw; }
.devui-card-6 .habit-copy { min-width: 0; transform: translateY(1.5px); }
.devui-card-6 .habit-title { margin: 0 0 .65cqw; color: #ededef; font-size: 4.6cqw; font-weight: 600; line-height: 1.15; letter-spacing: -.1px; }
.devui-card-6 .habit-description { overflow: hidden; margin: 0; color: #969397; font-size: 3.85cqw; line-height: 1.25; letter-spacing: 0; white-space: nowrap; text-overflow: ellipsis; }
.devui-card-6 .habit-check { display: grid; place-items: center; width: 12.65cqw; height: 12.65cqw; padding: 0; border: 1px solid rgba(255,255,255,.08); border-radius: 4cqw; color: #8d8985; background: rgba(255,255,255,.025); cursor: pointer; appearance: none; box-shadow: inset 0 1px 1px rgba(255,255,255,.025); transition: background .15s ease, color .15s ease, transform .15s ease; -webkit-tap-highlight-color: transparent; }
.devui-card-6 .habit-check svg { width: 6.2cqw; height: 6.2cqw; }
.devui-card-6 .habit-check[aria-pressed="true"] { color: #172131; border-color: transparent; background: linear-gradient(150deg, #9994f1, #827bd1); box-shadow: inset 0 1px 0 rgba(255,255,255,.13), 0 2px 3px rgba(0,0,0,.08); }
.devui-card-6 .habit-check:focus-visible { outline: 2px solid #9a94ed; outline-offset: 4px; }
@media(hover:hover) { .devui-card-6 .habit-check:hover { filter: brightness(1.12); } }
.devui-card-6 .habit-check:active { transform: scale(.95); }
.devui-card-6 .habit-chart { display: block; width: 100%; height: auto; margin-top: 3.1cqw; }
.devui-card-6 .habit-footer { display: flex; align-items: center; gap: 2.4cqw; margin-top: 3cqw; }
.devui-card-6 .habit-streak, .devui-card-6 .habit-week { display: inline-flex; align-items: center; gap: 1.3cqw; min-height: 6.6cqw; padding: 0 2.5cqw; border-radius: 999px; font: 400 3.35cqw/1 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; letter-spacing: .35px; white-space: nowrap; }
.devui-card-6 .habit-streak { color: #9a94ed; background: rgba(143,132,226,.12); }
.devui-card-6 .habit-streak svg { width: 3.7cqw; height: 3.7cqw; }
.devui-card-6 .habit-week { font-size: 3.2cqw; letter-spacing: .15px; color: #949094; background: rgba(255,255,255,.045); }
@media(prefers-reduced-motion:reduce) { .devui-card-6 .habit-check { transition: none; } }`}</style>
      <div className="devui-card-6">
        <article className="habit-panel" aria-label="Sport habit tracker">
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
                <path d="m8 8 8 8M5.5 3.5l3 3-3 3-3-3a1.4 1.4 0 0 1 0-2l1-1a1.4 1.4 0 0 1 2 0Zm13 11 3 3a1.4 1.4 0 0 1 0 2l-1 1a1.4 1.4 0 0 1-2 0l-3-3 3-3ZM7 4l3-1 3 3-1 3-3 3-3-3 1-2m10 13-3 1-3-3 1-3 3-3 3 3-1 2" />
              </svg>
            </span>
            <div className="habit-copy">
              <h2 className="habit-title">Sport</h2>
              <p
                className="habit-description"
                title="Weightlifting, running or similar"
              >
                Weightlifting, running or similar
              </p>
            </div>
            <button
              className="habit-check"
              type="button"
              aria-pressed={completed}
              aria-label={
                completed
                  ? "Markeer Sport als niet voltooid vandaag"
                  : "Markeer Sport als voltooid vandaag"
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
            aria-label="Activiteitenoverzicht voor Sport met 24 weken en 7 dagen per week"
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
            <span className="habit-streak" aria-label="Reeks van 374 dagen">
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
              374
            </span>
            <span className="habit-week" aria-live="polite" aria-atomic="true">
              {3 + Number(completed)} of 4 this week
            </span>
          </footer>
        </article>
      </div>
    </>
  );
}
