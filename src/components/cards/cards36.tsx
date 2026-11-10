// DevUI Card 36 — Situational Map
// Zelfstandig bestand. De 2.432 hexagonen reconstrueren het patroon uit de referentie.
import { useId, useState } from "react";

export const cardMeta = {
  title: "Card 36 — Situational Map",
  category: "Dashboard / Heatmaps",
  description:
    "Donkere situational map met blauwe en rode hexagonen, gele hotspots en kaartbediening.",
  tags: ["Hexagons", "Heatmap", "Situational map"],
};

const periods = ["1W", "1M", "3M", "1Y", "ALL"] as const;
type Period = (typeof periods)[number];
const alphabet = "0123456789ABCDEFGH";
const palette = [
  "#171c2f",
  "#1b1c37",
  "#262456",
  "#25235f",
  "#383cbd",
  "#3a3aca",
  "#4157e8",
  "#1c68ec",
  "#158de8",
  "#bfd5f4",
  "#40203f",
  "#6e2544",
  "#782046",
  "#de2638",
  "#e52243",
  "#f44655",
  "#d47f24",
  "#f4c413",
];
const rows = [
  "7775445540451414501111110110110BCBBBBCBCDEEDDEEDEEDHHHEHDDEDDDHH",
  "77444550550124551511101B11B0011BB11BCBECCDCEDDHDDDDEHHHDHEEEHHH0",
  "77475404514420504114111111001B0C1CBBDCCBBDBEBDDDDDEHHDHHHDHDEHDH",
  "77445555550550301511100011111100CCCCCBBBBCDEEEEDHEDHDEEEDDEDDHH0",
  "777555445050153543150150111111C1CB1C0C1CDEBEEEEEBDDEEEHDDDBDDHDE",
  "57755450540411501111111111111B01CBBCBECCDCDBEDBDEDDDEDEDBEEDDDH0",
  "57454554004344055042111111111010BCB1CBCCCECDEDDDEDDDDDEDDEEEDDEE",
  "74444444315115505111211111111CE10BBCECC1CEEBDEDEDEDDDDDEDEDDEEE0",
  "5554745414441415151110111111111B1CBCCCCBBBDCEEDDDEEDDDDDDEDHEDDD",
  "547545545504515511111111111111B1C1CC1BECEBCEBDDDCDBDDDEDDDBEBED0",
  "555454544414400555114211111111111BCCCC1CCDDEEBDDDDEDDCDDDEDDEEDD",
  "7747445445555555040111111110B11C11CBC0BBCBECECECDEEEEEDCECEEEEE0",
  "745475755551154452300111111111110CBCCCEBCEBDBCEECECDCDDDEDCDBDBC",
  "7755555555555405041401112111111CB0C1CBCCCEDECECEEBDDCDBDCEECEEB0",
  "75775774545432545300111111110B010CBB1BB0B01CC1CBC1DCDCEECCC1EBDD",
  "4777545415451515004111111110B1C0C10C0CC00CBCBE1BC1CCEC1E0BC1BBD0",
  "7745544440544035513311111011101B0111BBB0BB1101BC1BC1B1CCBB1BC1BB",
  "77757454450155152351200401111111B1CC1CCB1C1BC10111B01BC01011B110",
  "775554455454455135311111011111B101101B01B11B111BB111B0B10CB011BB",
  "7577545554441442004112111111111111111111111111111111111111111110",
  "7774544547444044145111111111101210111111111111111111111011111111",
  "7775755045545505115101111111111011111111111111111111D1B0111111D0",
  "7777547555451415551111111011111111111111111112111110111111111110",
  "7754545454451541154311112111111111211121111111111111011101111110",
  "7957555555550550511114101112112111111111112111012112112101210201",
  "7774557551551440221212122211122121232222222212220321202322122120",
  "7744475555555515314221221221222121212212122222122121221212212122",
  "7775454445445414333232322222222223222222303222222322222222222220",
  "7747445544055414134132531222222222122222322222222222222222222222",
  "7777475554555444343533333222222223222230223221222222222132222220",
  "7774445744745545102423433222222322222222235222222222221222222222",
  "7947445455545155255523242212223222222222322222222222322322222220",
  "7777545555554545553534433332322423222212222222312122222231212232",
  "7774775575445505213422253232432212222222322223322222222232222230",
  "7754757754745555344334323352223233222222222222532222222352222233",
  "9797744744541445332542344352333232222224122222222233222222233320",
  "9997774744754454255343244324322423122223322222222234322222222432",
  "9974975574454514212422342322422212222223222222222222222222233220",
];
const hexagon = Array.from({ length: 6 }, (_, i) => {
  const angle = (Math.PI / 3) * i - Math.PI / 2;
  return `${(Math.cos(angle) * 5.8).toFixed(2)},${(Math.sin(angle) * 5.8).toFixed(2)}`;
}).join(" ");
const cells = rows.flatMap((row, r) =>
  Array.from(row, (level, c) => ({
    x: 8 + c * 12 + (r % 2) * 6,
    y: 8 + r * 10.54,
    fill: palette[alphabet.indexOf(level)],
    hot: alphabet.indexOf(level) >= 16,
    column: c,
    row: r,
  })),
);
const clamp = (value: number, low: number, high: number) =>
  Math.max(low, Math.min(high, value));

export default function Cards36({
  onPeriodChange,
}: { onPeriodChange?: (period: Period) => void } = {}) {
  const mapId = useId();
  const [period, setPeriod] = useState<Period>("3M");
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [panMode, setPanMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hotspots, setHotspots] = useState(false);
  const [drag, setDrag] = useState<{
    x: number;
    y: number;
    startX: number;
    startY: number;
  } | null>(null);
  const reset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setDrag(null);
  };
  const move = (x: number, y: number) =>
    setPan((previous) => ({
      x: clamp(
        previous.x + x,
        -389 * Math.max(zoom - 1, 0.4),
        389 * Math.max(zoom - 1, 0.4),
      ),
      y: clamp(
        previous.y + y,
        -203 * Math.max(zoom - 1, 0.4),
        203 * Math.max(zoom - 1, 0.4),
      ),
    }));
  return (
    <>
      <style>{`.devui-card-36 { width:866px; max-width:100%; container-type:inline-size; }
.devui-card-36, .devui-card-36 * { box-sizing:border-box; }
.devui-card-36 .map-card { position:relative; isolation:isolate; width:100%; aspect-ratio:866 / 504; overflow:hidden; border:1px solid #080b17; border-radius:1cqw; background:linear-gradient(120deg,#111326,#121125 72%,#121127); color:#d3d4e6; font-family:Arial,Helvetica,sans-serif; box-shadow:0 1.5cqw 4cqw -2cqw rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.035); }
.devui-card-36 .map-title { position:absolute; left:2.05%; top:4.1%; margin:0; font-size:2.1cqw; line-height:1.2; font-weight:600; letter-spacing:-.15px; }
.devui-card-36 button { display:grid; place-items:center; padding:0; border:0; appearance:none; cursor:pointer; font:inherit; -webkit-tap-highlight-color:transparent; }
.devui-card-36 button:focus-visible { outline:2px solid #9ab4ff; outline-offset:3px; }
.devui-card-36 .map-tabs { position:absolute; left:20.9%; top:3.1%; display:flex; align-items:center; gap:1.5cqw; }
.devui-card-36 .map-tab { min-width:4.3cqw; height:2.8cqw; padding:0 .6cqw; border-radius:999px; background:transparent; color:#9696ad; font-size:1.02cqw; line-height:1; font-weight:600; }
.devui-card-36 .map-tab[aria-selected="true"] { color:#c4e0ff; background:#1049fa; box-shadow:inset 0 1px 1px rgba(134,197,255,.38),0 0 1cqw rgba(0,80,255,.45); }
.devui-card-36 .map-menu-button { position:absolute; right:2.1%; top:3%; width:2cqw; height:3cqw; color:#5d617d; background:none; }
.devui-card-36 .map-menu-button svg { width:100%; height:100%; }
.devui-card-36 .map-toolbar { position:absolute; left:1.95%; top:10.3%; display:flex; flex-direction:column; gap:.6cqw; width:3.65cqw; }
.devui-card-36 .map-zoom-group { overflow:hidden; border-radius:.4cqw; background:#080a15; }
.devui-card-36 .map-tool { width:3.65cqw; height:3.65cqw; border:1px solid rgba(66,73,113,.09); border-radius:.4cqw; color:#59607f; background:#080a15; }
.devui-card-36 .map-tool svg { width:1.9cqw; height:1.9cqw; }
.devui-card-36 .map-zoom-group .map-tool { border-radius:0; }
.devui-card-36 .map-tool[aria-pressed="true"] { color:#a2b1f1; background:#141d3a; }
.devui-card-36 .map-tool:disabled { opacity:.4; cursor:default; }
.devui-card-36 .map-layer-tool { position:absolute; left:1.95%; bottom:9.7%; }
.devui-card-36 .map-frame { position:absolute; left:7.85%; top:9.92%; width:89.84%; height:80.56%; }
.devui-card-36 .map-plot { display:block; width:100%; height:100%; overflow:hidden; border-radius:.5cqw; outline:none; touch-action:pan-y; }
.devui-card-36 .map-plot[data-pan="true"] { cursor:grab; touch-action:none; }
.devui-card-36 .map-plot[data-dragging="true"] { cursor:grabbing; }
.devui-card-36 .map-plot:focus-visible { outline:1px solid #435fa0; outline-offset:3px; }
.devui-card-36 .map-cells polygon { stroke:#11162b; stroke-width:.7; stroke-linejoin:round; }
.devui-card-36 .map-cells polygon:hover { stroke:#dce7ff; stroke-width:1.25; }
.devui-card-36 .map-axis { position:absolute; left:7.85%; bottom:3.9%; width:89.84%; height:3%; }
.devui-card-36 .map-axis text { fill:#51506f; font:9px 'SFMono-Regular',Consolas,monospace; }
.devui-card-36 .map-y-axis { position:absolute; left:2.7%; top:51%; width:2%; height:28%; }
.devui-card-36 .map-y-axis text { fill:#42435c; font:6px monospace; }
.devui-card-36 .map-options { position:absolute; z-index:5; right:2%; top:8.5%; width:20cqw; padding:.65cqw; border:1px solid #303550; border-radius:.8cqw; background:#161a31; box-shadow:0 .8cqw 2cqw rgba(0,0,0,.3); }
.devui-card-36 .map-options button { justify-content:start; width:100%; padding:1cqw; border-radius:.4cqw; text-align:left; color:#c2c8e3; background:transparent; font-size:1.15cqw; }
.devui-card-36 .map-options button:hover { background:#252c4b; }
.devui-card-36 .map-options button[aria-pressed="true"] { color:#7be4ff; }
.devui-card-36 .map-status { position:absolute; right:2.4%; bottom:3.9%; margin:0; color:#5d6591; font:1cqw monospace; }
@media(prefers-reduced-motion:reduce) { .devui-card-36 *, .devui-card-36 *::before, .devui-card-36 *::after { transition:none !important; } }`}</style>
      <div className="devui-card-36">
        <section className="map-card" aria-labelledby={`${mapId}-title`}>
          <h2 className="map-title" id={`${mapId}-title`}>
            Situational map
          </h2>
          <div className="map-tabs" role="tablist" aria-label="Periode">
            {periods.map((value) => (
              <button
                className="map-tab"
                type="button"
                role="tab"
                key={value}
                aria-selected={period === value}
                aria-controls={`${mapId}-panel`}
                onClick={() => {
                  setPeriod(value);
                  onPeriodChange?.(value);
                }}
              >
                {value}
              </button>
            ))}
          </div>
          <button
            className="map-menu-button"
            type="button"
            aria-label="Kaartopties"
            aria-expanded={menuOpen}
            aria-controls={`${mapId}-options`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg viewBox="0 0 16 24" fill="currentColor" aria-hidden="true">
              <circle cx="8" cy="6" r="1.1" />
              <circle cx="8" cy="12" r="1.1" />
              <circle cx="8" cy="18" r="1.1" />
            </svg>
          </button>
          <div className="map-toolbar" role="group" aria-label="Kaartbediening">
            <div className="map-zoom-group">
              <button
                className="map-tool"
                type="button"
                aria-label="Inzoomen"
                disabled={zoom >= 3}
                onClick={() => setZoom((value) => clamp(value + 0.25, 1, 3))}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
              <button
                className="map-tool"
                type="button"
                aria-label="Uitzoomen"
                disabled={zoom <= 1}
                onClick={() => {
                  setZoom((value) => clamp(value - 0.25, 1, 3));
                  setPan({ x: 0, y: 0 });
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                </svg>
              </button>
            </div>
            <button
              className="map-tool"
              type="button"
              aria-label="Kaart centreren"
              onClick={reset}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M18.5 10c0 5-6.5 10-6.5 10S5.5 15 5.5 10a6.5 6.5 0 0 1 13 0Z" />
                <circle cx="12" cy="10" r="2.5" />
                <path d="M9 22h6" />
              </svg>
            </button>
            <button
              className="map-tool"
              type="button"
              aria-label="Kaart verschuiven"
              aria-pressed={panMode}
              onClick={() => setPanMode(!panMode)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3m12-6 3 3-3 3" />
              </svg>
            </button>
          </div>
          <div
            className="map-frame"
            id={`${mapId}-panel`}
            role="tabpanel"
            aria-label={`Situational map, ${period}`}
          >
            <svg
              className="map-plot"
              viewBox="0 0 778 406"
              tabIndex={0}
              role="img"
              aria-label="Hexagon-heatmap: blauwe concentratie links, rode concentratie rechtsboven en gele hotspots. Gebruik plus en min om te zoomen; met verschuiven ingeschakeld kun je slepen of de pijltjestoetsen gebruiken."
              data-pan={panMode}
              data-dragging={drag !== null}
              onPointerDown={(event) => {
                if (!panMode) return;
                event.currentTarget.setPointerCapture(event.pointerId);
                setDrag({
                  x: event.clientX,
                  y: event.clientY,
                  startX: pan.x,
                  startY: pan.y,
                });
              }}
              onPointerMove={(event) => {
                if (!drag) return;
                const box = event.currentTarget.getBoundingClientRect();
                const boundX = 389 * Math.max(zoom - 1, 0.4),
                  boundY = 203 * Math.max(zoom - 1, 0.4);
                setPan({
                  x: clamp(
                    drag.startX + ((event.clientX - drag.x) * 778) / box.width,
                    -boundX,
                    boundX,
                  ),
                  y: clamp(
                    drag.startY + ((event.clientY - drag.y) * 406) / box.height,
                    -boundY,
                    boundY,
                  ),
                });
              }}
              onPointerUp={() => setDrag(null)}
              onPointerCancel={() => setDrag(null)}
              onLostPointerCapture={() => setDrag(null)}
              onKeyDown={(event) => {
                if (event.key === "+" || event.key === "=") {
                  event.preventDefault();
                  setZoom((value) => clamp(value + 0.25, 1, 3));
                } else if (event.key === "-") {
                  event.preventDefault();
                  setZoom((value) => clamp(value - 0.25, 1, 3));
                  setPan({ x: 0, y: 0 });
                } else if (event.key === "Home") {
                  event.preventDefault();
                  reset();
                } else if (
                  panMode &&
                  ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(
                    event.key,
                  )
                ) {
                  event.preventDefault();
                  move(
                    event.key === "ArrowLeft"
                      ? 24
                      : event.key === "ArrowRight"
                        ? -24
                        : 0,
                    event.key === "ArrowUp"
                      ? 24
                      : event.key === "ArrowDown"
                        ? -24
                        : 0,
                  );
                }
              }}
            >
              <g
                className="map-cells"
                transform={`translate(${pan.x} ${pan.y}) translate(389 203) scale(${zoom}) translate(-389 -203)`}
              >
                {cells.map((cell, i) => (
                  <polygon
                    key={i}
                    data-hot={cell.hot}
                    points={hexagon}
                    transform={`translate(${cell.x} ${cell.y})`}
                    fill={cell.fill}
                    opacity={hotspots && !cell.hot ? 0.2 : 1}
                  >
                    <title>{`x: ${cell.column * 3}, y: ${37 - cell.row}`}</title>
                  </polygon>
                ))}
              </g>
            </svg>
          </div>
          <svg
            className="map-axis"
            viewBox="0 0 778 16"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {Array.from({ length: 8 }, (_, i) => (
              <text key={i} x={8 + i * 96} y="11" textAnchor="middle">
                {i * 25}
              </text>
            ))}
          </svg>
          <svg className="map-y-axis" viewBox="0 0 16 150" aria-hidden="true">
            {Array.from({ length: 13 }, (_, i) => (
              <text key={i} x="8" y={8 + i * 11} textAnchor="middle">
                {12 - i}
              </text>
            ))}
          </svg>
          <button
            className="map-tool map-layer-tool"
            type="button"
            aria-label="Alleen hotspots benadrukken"
            aria-pressed={hotspots}
            onClick={() => setHotspots(!hotspots)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m4 19 7-15 3 11 3-8 3 12H4Zm3-6 12 4M7 19l6-8m-3-1 7 9" />
            </svg>
          </button>
          {zoom !== 1 && (
            <p className="map-status" aria-live="polite">
              {Math.round(zoom * 100)}%
            </p>
          )}
          {menuOpen && (
            <div
              className="map-options"
              id={`${mapId}-options`}
              role="group"
              aria-label="Kaartopties"
            >
              <button
                type="button"
                onClick={() => {
                  reset();
                  setMenuOpen(false);
                }}
              >
                Reset view
              </button>
              <button
                type="button"
                aria-pressed={hotspots}
                onClick={() => setHotspots(!hotspots)}
              >
                Highlight hotspots
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
