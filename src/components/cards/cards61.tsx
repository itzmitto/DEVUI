// DevUI Card 61 — Alert Volume
// Self-contained React / CSS / SVG recreation with deterministic demo data.
import { useId, useState } from "react";

export const cardMeta = {
  title: "Card 61 — Alert Volume",
  category: "Dashboard / Security analytics",
  description:
    "A stacked alert-volume chart with functional filters, daily and weekly views, keyboard inspection and a detailed tooltip. Uses demo data.",
  tags: ["Security", "Stacked bars", "Analytics", "Interactive"],
};

type Category =
  | "identity"
  | "endpoint"
  | "cloud"
  | "email"
  | "network"
  | "saas";
type Verdict = "all" | "closed" | "escalated";
type RecordDay = { date: number; values: number[]; escalated: number };
type ChartBar = RecordDay & { end: number; label: string };
const categories: { key: Category; label: string; color: string }[] = [
  { key: "identity", label: "Identity", color: "#9a67f5" },
  { key: "endpoint", label: "Endpoint", color: "#739cf8" },
  { key: "cloud", label: "Cloud", color: "#a1c6e8" },
  { key: "email", label: "Email", color: "#ffd16e" },
  { key: "network", label: "Network", color: "#83ebba" },
  { key: "saas", label: "SaaS", color: "#f85fc1" },
];
const escalatedColor = "#dc5478";
const format = (value: number) => value.toLocaleString("en-US");
const sum = (values: number[]) =>
  values.reduce((total, value) => total + value, 0);
const formatDate = (value: number) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
function distribute(values: number[], target: number) {
  const total = sum(values);
  if (!total) return values.map(() => 0);
  const result = values.map((value) => Math.round((value / total) * target));
  const largest = values.indexOf(Math.max(...values));
  result[largest] += target - sum(result);
  return result;
}

const shape = [
  980, 950, 1650, 1670, 1660, 1600, 1680, 960, 1000, 1660, 1740, 1800, 1770,
  1790, 980, 970, 1650, 1700, 1650, 1620, 2682, 1490, 1000, 1730, 1740, 1750,
  1780, 1740, 1120, 1100,
];
const totals = shape.map((value, index) =>
  index === 20
    ? 2682
    : Math.round((value * (43969 - 2682)) / (sum(shape) - 2682)),
);
totals[0] += 43969 - sum(totals);
const escalations = [
  5, 7, 6, 7, 7, 9, 9, 8, 6, 10, 10, 11, 7, 6, 6, 5, 11, 11, 9, 8, 22, 10, 4, 5,
  6, 8, 11, 8, 6, 7,
];
const missingEscalations = 250 - sum(escalations);
for (let index = 0; index < missingEscalations; index++)
  escalations[index + 2] += 1;
const demoDays: RecordDay[] = totals.map((total, index) => ({
  date: Date.UTC(2026, 8, 12 + index),
  values:
    index === 20
      ? [820, 409, 280, 900, 160, 113]
      : distribute(
          [
            31 + Math.sin(index * 0.78) * 5,
            20 + Math.cos(index * 0.53) * 2,
            14 + Math.sin(index * 0.39) * 2,
            16 + Math.cos(index * 0.7) * 3,
            11 + Math.sin(index * 0.3) * 2,
            8 + Math.cos(index * 0.6),
          ],
          total,
        ),
  escalated: escalations[index],
}));

function chevron() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true">
      <path
        d="m2.5 4.5 3.5 3 3.5-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Cards61() {
  const id = useId();
  const [mode, setMode] = useState<"day" | "week">("day");
  const [range, setRange] = useState("30");
  const [source, setSource] = useState<"all" | Category>("all");
  const [groupBy, setGroupBy] = useState<"source" | "verdict">("source");
  const [verdict, setVerdict] = useState<Verdict>("all");
  const [active, setActive] = useState<number | null>(20);

  const daily: RecordDay[] = demoDays.slice(-Number(range)).map((record) => {
    const values = record.values.map((value, index) =>
      source === "all" || categories[index].key === source ? value : 0,
    );
    const total = sum(values);
    const escalated = Math.round(
      (record.escalated * total) / sum(record.values),
    );
    if (verdict === "closed")
      return {
        ...record,
        values: distribute(values, total - escalated),
        escalated: 0,
      };
    if (verdict === "escalated")
      return { ...record, values: distribute(values, escalated), escalated };
    return { ...record, values, escalated };
  });
  const bars: ChartBar[] = [];
  daily.forEach((record, index) => {
    const bucket = mode === "week" ? Math.floor(index / 7) : index;
    const current = bars[bucket];
    if (current) {
      current.values = current.values.map(
        (value, column) => value + record.values[column],
      );
      current.escalated += record.escalated;
      current.end = record.date;
      current.label = `${formatDate(current.date)} – ${formatDate(record.date)}`;
    } else
      bars.push({
        ...record,
        values: [...record.values],
        end: record.date,
        label: formatDate(record.date),
      });
  });
  const total = sum(daily.map((record) => sum(record.values)));
  const escalatedTotal = sum(daily.map((record) => record.escalated));
  const closedTotal = total - escalatedTotal;
  const closedPercent = total ? (closedTotal / total) * 100 : 0;
  const legend =
    groupBy === "source"
      ? categories.filter(
          (category) => source === "all" || category.key === source,
        )
      : [{ key: "closed", label: "Auto-closed", color: "#83ebba" }];
  const maximum = Math.max(1, ...bars.map((record) => sum(record.values)));
  const domain =
    mode === "day" && source === "all" && verdict === "all"
      ? 2800
      : Math.max(
          100,
          Math.ceil(maximum / (maximum > 3000 ? 1000 : 500)) *
            (maximum > 3000 ? 1000 : 500),
        );
  const yScale = 218.4 / domain;
  const negativeDomain = Math.max(
    24,
    ...bars.map((record) => record.escalated),
  );
  const negativeScale = 52.8 / negativeDomain;
  const negativeTick = negativeDomain > 30 ? Math.round(negativeDomain) : 20;
  const spacing = 612 / bars.length;
  const barWidth =
    mode === "day" ? Math.min(14, spacing * 0.7) : Math.min(50, spacing * 0.56);
  const centerX = (index: number) => index * spacing + spacing / 2 - 1.2;
  const visibleValues = (record: ChartBar) =>
    groupBy === "source"
      ? record.values
      : [sum(record.values) - record.escalated];
  const selected = active === null ? undefined : bars[active];
  const selectedX = active === null ? 0 : centerX(active);
  const tooltipX = Math.max(0, Math.min(465, selectedX - 188));
  const tooltipRows: { label: string; color: string; value: number }[] = [];
  if (selected) {
    if (groupBy === "verdict")
      tooltipRows.push({
        label: "Auto-closed",
        color: "#83ebba",
        value: sum(selected.values) - selected.escalated,
      });
    else {
      const columns =
        source === "all"
          ? [3, 0, 1]
          : [categories.findIndex((category) => category.key === source)];
      columns.forEach((column) =>
        tooltipRows.push({
          label: categories[column].label,
          color: categories[column].color,
          value: selected.values[column],
        }),
      );
    }
    if (verdict !== "closed")
      tooltipRows.push({
        label: "Escalated",
        color: escalatedColor,
        value: selected.escalated,
      });
  }
  const labels =
    mode === "week"
      ? bars.map((_, index) => index)
      : bars.length === 30
        ? [0, 7, 14, 21, 28]
        : Array.from({ length: Math.min(5, bars.length) }, (_, index) =>
            Math.round(
              (index * (bars.length - 1)) /
                Math.max(1, Math.min(5, bars.length) - 1),
            ),
          );
  const reset = () => setActive(null);

  return (
    <>
      <style>{`
        .devui-alert-61 { width:728px; max-width:100%; min-width:0; container-type:inline-size; }
        .devui-alert-61, .devui-alert-61 * { box-sizing:border-box; }
        .devui-alert-61 .av-card { overflow:hidden; isolation:isolate; border:.55cqw solid #171717; border-radius:2.75cqw; background:#0a0a0a; color:#f2f2f2; font-family:Inter,Arial,Helvetica,sans-serif; font-variant-numeric:tabular-nums; box-shadow:0 1px 0 #ffffff03,inset 0 0 0 1px #ffffff02; -webkit-font-smoothing:antialiased; }
        .devui-alert-61 h2, .devui-alert-61 p { margin:0; }
        .devui-alert-61 .av-header { height:10.99cqw; display:flex; align-items:center; justify-content:space-between; gap:2cqw; padding:0 3.3cqw; border-bottom:1px solid #1a1a1a; }
        .devui-alert-61 .av-brand { display:flex; align-items:center; gap:1.92cqw; }
        .devui-alert-61 .av-icon { width:4.67cqw; height:4.67cqw; border:1px solid #292929; border-radius:1.1cqw; background:#141414; display:grid; place-items:center; box-shadow:inset 0 1px 0 #ffffff05; }
        .devui-alert-61 .av-icon svg { width:2.5cqw; height:2.5cqw; }
        .devui-alert-61 .av-title { font-size:2.2cqw; font-weight:500; line-height:1.3; }
        .devui-alert-61 .av-subtitle { margin-top:.4cqw; color:#666; font-size:1.92cqw; line-height:1.3; }
        .devui-alert-61 .av-modes { display:flex; align-items:center; gap:.4cqw; padding:.55cqw; border-radius:1.65cqw; background:#131313; }
        .devui-alert-61 .av-modes button { appearance:none; border:1px solid transparent; border-radius:.85cqw; padding:.9cqw 1.8cqw; background:none; color:#969696; font-family:inherit; font-size:1.92cqw; line-height:1.15; cursor:pointer; }
        .devui-alert-61 .av-modes button[aria-pressed="true"] { background:#272727; color:#f4f4f4; border-color:#343434; box-shadow:0 1px 3px #0006; }
        .devui-alert-61 .av-modes button:focus-visible, .devui-alert-61 select:focus-visible { outline:2px solid #a98aff; outline-offset:2px; }
        .devui-alert-61 .av-filters { height:12.09cqw; display:grid; grid-template-columns:20.6cqw 19.64cqw 15.52cqw minmax(0,1fr); align-items:center; padding:0 3.3cqw; border-bottom:1px solid #1b1b1b; }
        .devui-alert-61 .av-filter { min-width:0; padding-right:2.2cqw; }
        .devui-alert-61 .av-filter + .av-filter { padding-left:2.5cqw; border-left:1px solid #191919; }
        .devui-alert-61 .av-filter-label { display:block; color:#6f6f6f; font-size:1.92cqw; line-height:1.3; margin-bottom:.8cqw; }
        .devui-alert-61 .av-select-wrap { display:flex; align-items:center; gap:.8cqw; }
        .devui-alert-61 .av-select-wrap svg { flex:0 0 1.65cqw; width:1.65cqw; height:1.65cqw; color:#a2a2a2; pointer-events:none; }
        .devui-alert-61 select { appearance:none; min-width:0; max-width:100%; padding:.4cqw 0; border:0; border-radius:3px; background:#0a0a0a; color:#f3f3f3; font-family:inherit; font-size:2.13cqw; line-height:1.3; cursor:pointer; }
        .devui-alert-61 .av-main { padding:3.02cqw 3.3cqw 0; }
        .devui-alert-61 .av-summary { display:flex; justify-content:space-between; align-items:baseline; gap:1cqw; min-height:3.98cqw; }
        .devui-alert-61 .av-summary-left { display:flex; align-items:baseline; gap:1.5cqw; }
        .devui-alert-61 .av-count { color:#f5f5f5; font:500 3.57cqw/1.1 'SFMono-Regular',Consolas,'Liberation Mono',monospace; letter-spacing:-.08cqw; white-space:nowrap; }
        .devui-alert-61 .av-summary-note { color:#949494; font-size:1.92cqw; line-height:1.3; }
        .devui-alert-61 .av-closed { color:#686868; font-size:2.12cqw; line-height:1.3; white-space:nowrap; }
        .devui-alert-61 .av-closed strong { margin-right:.8cqw; color:#ececec; font:400 2.12cqw/1.3 'SFMono-Regular',Consolas,monospace; }
        .devui-alert-61 .av-legend { display:flex; align-items:center; gap:2.6cqw; min-height:2.47cqw; margin-top:2.2cqw; color:#aaa; font-size:1.92cqw; line-height:1.3; }
        .devui-alert-61 .av-legend span { display:inline-flex; align-items:center; gap:1.2cqw; white-space:nowrap; }
        .devui-alert-61 .av-swatch { display:inline-block; flex:0 0 1.3cqw; width:1.3cqw; height:1.3cqw; border-radius:.25cqw; }
        .devui-alert-61 .av-legend .av-escalated-legend { margin-left:auto; }
        .devui-alert-61 .av-chart-wrap { margin-top:1.79cqw; }
        .devui-alert-61 .av-chart { display:block; width:100%; height:auto; outline:none; }
        .devui-alert-61 .av-chart text { font-family:'SFMono-Regular',Consolas,'Liberation Mono',monospace; font-variant-numeric:tabular-nums; }
        .devui-alert-61 .av-chart .av-axis { fill:#666; font-size:14px; }
        .devui-alert-61 .av-chart .av-tooltip-label { fill:#b1b1b1; font-family:Inter,Arial,sans-serif; font-size:14px; }
        .devui-alert-61 .av-bar { cursor:crosshair; outline:none; }
        .devui-alert-61 .av-bar:focus-visible .av-hit { stroke:#a98aff; stroke-width:1; }
        .devui-alert-61 .av-tooltip { pointer-events:none; }
        .devui-alert-61 .av-footer { height:11.81cqw; display:grid; grid-template-columns:.95fr 1.06fr 1.08fr 1.1fr; align-items:center; padding:0 3.3cqw; border-top:1px solid #191919; }
        .devui-alert-61 .av-stat + .av-stat { border-left:1px solid #181818; padding-left:2.5cqw; }
        .devui-alert-61 .av-stat-label { color:#6b6b6b; font-size:1.92cqw; line-height:1.3; white-space:nowrap; }
        .devui-alert-61 .av-stat-value { margin-top:1.1cqw; color:#f0f0f0; font:400 2.33cqw/1.3 'SFMono-Regular',Consolas,'Liberation Mono',monospace; white-space:nowrap; }
        .devui-alert-61 .av-stat-value--pink { color:#e46389; }
        @container (max-width:540px) {
          .devui-alert-61 .av-header { height:72px; padding:0 16px; }
          .devui-alert-61 .av-brand { gap:10px; }
          .devui-alert-61 .av-icon { width:32px; height:32px; border-radius:7px; }
          .devui-alert-61 .av-icon svg { width:18px; height:18px; }
          .devui-alert-61 .av-title { font-size:15px; }
          .devui-alert-61 .av-subtitle { font-size:12px; }
          .devui-alert-61 .av-modes button { font-size:12px; padding:6px 9px; }
          .devui-alert-61 .av-filters { height:auto; grid-template-columns:repeat(2,minmax(0,1fr)); gap:16px 0; padding:16px; }
          .devui-alert-61 .av-filter { padding-right:10px; }
          .devui-alert-61 .av-filter:nth-child(3) { padding-left:0; border-left:0; }
          .devui-alert-61 .av-filter-label { font-size:12px; margin-bottom:4px; }
          .devui-alert-61 select { font-size:13px; }
          .devui-alert-61 .av-select-wrap svg { width:11px; height:11px; flex-basis:11px; }
          .devui-alert-61 .av-main { padding:18px 16px 0; }
          .devui-alert-61 .av-summary { flex-wrap:wrap; gap:8px; }
          .devui-alert-61 .av-count { font-size:24px; }
          .devui-alert-61 .av-summary-note, .devui-alert-61 .av-closed, .devui-alert-61 .av-closed strong { font-size:12px; }
          .devui-alert-61 .av-legend { flex-wrap:wrap; gap:10px 15px; font-size:11px; margin-top:14px; }
          .devui-alert-61 .av-swatch { width:8px; height:8px; flex-basis:8px; border-radius:2px; }
          .devui-alert-61 .av-legend .av-escalated-legend { margin-left:0; }
          .devui-alert-61 .av-chart-wrap { overflow-x:auto; margin-top:18px; }
          .devui-alert-61 .av-chart { min-width:570px; }
          .devui-alert-61 .av-footer { height:auto; grid-template-columns:repeat(2,minmax(0,1fr)); gap:16px; padding:18px 16px; }
          .devui-alert-61 .av-stat:nth-child(3) { padding-left:0; border-left:0; }
          .devui-alert-61 .av-stat-label { font-size:11px; }
          .devui-alert-61 .av-stat-value { font-size:15px; margin-top:5px; }
        }
      `}</style>
      <div className="devui-alert-61">
        <article className="av-card" aria-labelledby={`${id}-title`}>
          <header className="av-header">
            <div className="av-brand">
              <span className="av-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="#e5e5e5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M4 15V8m4 7V4m4 11V7m4 8v-4" />
                </svg>
              </span>
              <div>
                <h2 className="av-title" id={`${id}-title`}>
                  Alert volume
                </h2>
                <p className="av-subtitle">Triaged by Vigil</p>
              </div>
            </div>
            <div className="av-modes" role="group" aria-label="Chart interval">
              {(["day", "week"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={mode === value}
                  onClick={() => {
                    setMode(value);
                    reset();
                  }}
                >
                  {value === "day" ? "Day" : "Week"}
                </button>
              ))}
            </div>
          </header>
          <div className="av-filters">
            <label className="av-filter">
              <span className="av-filter-label">Date range</span>
              <span className="av-select-wrap">
                <select
                  value={range}
                  onChange={(event) => {
                    setRange(event.target.value);
                    reset();
                  }}
                >
                  <option value="30">Sep 12 – Oct 11</option>
                  <option value="14">Sep 28 – Oct 11</option>
                  <option value="7">Oct 5 – Oct 11</option>
                </select>
                {chevron()}
              </span>
            </label>
            <label className="av-filter">
              <span className="av-filter-label">Source</span>
              <span className="av-select-wrap">
                <select
                  value={source}
                  onChange={(event) => {
                    setSource(event.target.value as "all" | Category);
                    reset();
                  }}
                >
                  <option value="all">All sources</option>
                  {categories.map((category) => (
                    <option key={category.key} value={category.key}>
                      {category.label}
                    </option>
                  ))}
                </select>
                {chevron()}
              </span>
            </label>
            <label className="av-filter">
              <span className="av-filter-label">Group by</span>
              <span className="av-select-wrap">
                <select
                  value={groupBy}
                  onChange={(event) => {
                    setGroupBy(event.target.value as "source" | "verdict");
                    reset();
                  }}
                >
                  <option value="source">Source</option>
                  <option value="verdict">Verdict</option>
                </select>
                {chevron()}
              </span>
            </label>
            <label className="av-filter">
              <span className="av-filter-label">Verdict</span>
              <span className="av-select-wrap">
                <select
                  value={verdict}
                  onChange={(event) => {
                    setVerdict(event.target.value as Verdict);
                    reset();
                  }}
                >
                  <option value="all">All verdicts</option>
                  <option value="closed">Auto-closed</option>
                  <option value="escalated">Escalated</option>
                </select>
                {chevron()}
              </span>
            </label>
          </div>
          <div className="av-main">
            <div className="av-summary" aria-live="polite" aria-atomic="true">
              <div className="av-summary-left">
                <p className="av-count">{format(total)}</p>
                <p className="av-summary-note">
                  alerts triaged in {daily.length} days
                </p>
              </div>
              <p className="av-closed">
                <strong>{closedPercent.toFixed(1)}%</strong>closed without a
                human
              </p>
            </div>
            <div className="av-legend" aria-label="Chart legend">
              {legend.map((category) => (
                <span key={category.key}>
                  <i
                    className="av-swatch"
                    style={{ background: category.color }}
                  />
                  {category.label}
                </span>
              ))}
              {verdict !== "closed" && (
                <span className="av-escalated-legend">
                  <i
                    className="av-swatch"
                    style={{ background: escalatedColor }}
                  />
                  Escalated
                </span>
              )}
            </div>
            <div className="av-chart-wrap">
              <svg
                className="av-chart"
                viewBox="0 0 672 328"
                role="group"
                tabIndex={0}
                aria-label={`${format(total)} alerts. ${mode === "day" ? "Daily" : "Weekly"} stacked bars. Use left and right arrows to inspect values; Escape closes the tooltip. Demo data.`}
                onPointerLeave={reset}
                onKeyDown={(event) => {
                  if (event.key === "Escape") reset();
                  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                    event.preventDefault();
                    const direction = event.key === "ArrowRight" ? 1 : -1;
                    setActive((value) =>
                      value === null
                        ? direction === 1
                          ? 0
                          : bars.length - 1
                        : Math.max(
                            0,
                            Math.min(bars.length - 1, value + direction),
                          ),
                    );
                  }
                }}
              >
                {[1, 2].map((index) => {
                  const value =
                    domain === 2800
                      ? index * 1000
                      : Math.round((domain * index) / 3);
                  const y = 219 - value * yScale;
                  return (
                    <g key={index}>
                      <path
                        d={`M0 ${y}H620`}
                        fill="none"
                        stroke="#242424"
                        strokeOpacity=".4"
                        strokeWidth=".7"
                        strokeDasharray="4 5"
                      />
                      <text className="av-axis" x="634" y={y + 5}>
                        {value >= 1000
                          ? `${+(value / 1000).toFixed(1)}k`
                          : value}
                      </text>
                    </g>
                  );
                })}
                <path
                  d="M0 219.5H620"
                  fill="none"
                  stroke="#3d3d3d"
                  strokeWidth=".8"
                />
                <text className="av-axis" x="634" y="223">
                  0
                </text>
                <text
                  className="av-axis"
                  x="634"
                  y={219 + negativeTick * negativeScale + 9}
                >
                  {negativeTick}
                </text>
                {bars.map((record, index) => {
                  const values = visibleValues(record);
                  const visible = values.filter((value) => value > 0).length;
                  const stackHeight = sum(values) * yScale;
                  const gaps = Math.min(
                    2,
                    stackHeight / Math.max(1, visible * 3),
                  );
                  const available = Math.max(
                    0,
                    stackHeight - Math.max(0, visible - 1) * gaps,
                  );
                  let bottom = 219;
                  return (
                    <g
                      key={record.date}
                      className="av-bar"
                      role="button"
                      tabIndex={0}
                      aria-pressed={active === index}
                      aria-label={`${record.label}: ${format(sum(record.values))} alerts, ${format(record.escalated)} escalated. Inspect values.`}
                      onPointerEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onClick={() => setActive(index)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setActive(index);
                        }
                      }}
                    >
                      <rect
                        className="av-hit"
                        x={index * spacing}
                        y="0"
                        width={spacing}
                        height="278"
                        fill="transparent"
                      />
                      {values.map((value, column) => {
                        if (!value) return null;
                        const height =
                          (available * value) / Math.max(1, sum(values));
                        bottom -= height;
                        const y = bottom;
                        bottom -= gaps;
                        return (
                          <rect
                            key={column}
                            x={centerX(index) - barWidth / 2}
                            y={y}
                            width={barWidth}
                            height={height}
                            rx="2.2"
                            fill={
                              groupBy === "source"
                                ? categories[column].color
                                : "#83ebba"
                            }
                          />
                        );
                      })}
                      {record.escalated > 0 && (
                        <rect
                          x={centerX(index) - barWidth / 2}
                          y="223"
                          width={barWidth}
                          height={record.escalated * negativeScale}
                          rx="2"
                          fill={escalatedColor}
                          fillOpacity={active === index ? 1 : 0.92}
                        />
                      )}
                      {active === index && (
                        <rect
                          x={centerX(index) - barWidth / 2 - 3.5}
                          y={Math.max(1, 219 - stackHeight - 4)}
                          width={barWidth + 7}
                          height={
                            223 +
                            record.escalated * negativeScale +
                            4 -
                            Math.max(1, 219 - stackHeight - 4)
                          }
                          rx="4"
                          fill="none"
                          stroke="#b6b6b6"
                          strokeWidth="1"
                        />
                      )}
                    </g>
                  );
                })}
                {labels.map((index) => (
                  <text
                    key={index}
                    className="av-axis"
                    x={index === 0 ? 0 : centerX(index)}
                    y="305"
                    textAnchor={index === 0 ? "start" : "middle"}
                  >
                    {formatDate(bars[index].date)}
                  </text>
                ))}
                {selected && (
                  <g
                    className="av-tooltip"
                    transform={`translate(${tooltipX} 8)`}
                  >
                    <rect
                      width="164"
                      height={38 + tooltipRows.length * 24}
                      rx="7"
                      fill="#222323"
                      fillOpacity=".97"
                      stroke="#303131"
                      strokeWidth=".8"
                    />
                    <text x="14" y="24" fill="#a4a4a4" fontSize="14">
                      {formatDate(selected.date)}
                    </text>
                    <text
                      x="150"
                      y="24"
                      fill="#f4f4f4"
                      fontSize="14"
                      textAnchor="end"
                    >
                      {format(sum(selected.values))}
                    </text>
                    {tooltipRows.map((row, index) => (
                      <g key={row.label}>
                        <rect
                          x="14"
                          y={39 + index * 24}
                          width="9"
                          height="10"
                          rx="2"
                          fill={row.color}
                        />
                        <text
                          className="av-tooltip-label"
                          x="33"
                          y={49 + index * 24}
                        >
                          {row.label}
                        </text>
                        <text
                          x="150"
                          y={49 + index * 24}
                          fill="#f4f4f4"
                          fontSize="14"
                          textAnchor="end"
                        >
                          {format(row.value)}
                        </text>
                      </g>
                    ))}
                  </g>
                )}
              </svg>
            </div>
          </div>
          <footer className="av-footer">
            <div className="av-stat">
              <p className="av-stat-label">Auto-closed</p>
              <p className="av-stat-value">{format(closedTotal)}</p>
            </div>
            <div className="av-stat">
              <p className="av-stat-label">Escalated</p>
              <p className="av-stat-value av-stat-value--pink">
                {format(escalatedTotal)}
              </p>
            </div>
            <div className="av-stat">
              <p className="av-stat-label">Median triage</p>
              <p className="av-stat-value">{total ? "38 s" : "—"}</p>
            </div>
            <div className="av-stat">
              <p className="av-stat-label">Analyst time saved</p>
              <p className="av-stat-value">
                {format(Math.round((closedTotal / 43719) * 1180))} h
              </p>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
}
