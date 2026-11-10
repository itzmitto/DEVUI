// DevUI Card 20 — Photo Player
// Zelfstandig bestand; geen extra stylesheets, fonts of iconenpakketten nodig.
import { useState } from "react";

export const cardMeta = {
  title: "Card 20 — Photo Player",
  category: "Dark / Light effects",
  description:
    "Compacte muziekspeler met rode bovenrand en een blauw verlichte golfvorm.",
  tags: ["Music", "Player", "Glow"],
};

const wave = Array.from(
  { length: 60 },
  (_, i) => 22 + ((i * 19 + i * i * 7) % 49),
);

export default function Cards20() {
  const [playing, setPlaying] = useState(true);
  const [liked, setLiked] = useState(true);
  const [position, setPosition] = useState(57);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <style>{`.devui-card-20 { width:320px; max-width:100%; container-type:inline-size; }
.devui-card-20, .devui-card-20 * { box-sizing:border-box; }
.devui-card-20 .panel { position:relative; isolation:isolate; width:100%; overflow:hidden; color:#f6f5f9; font-family:Arial,Helvetica,sans-serif; background:#090a0e; }
.devui-card-20 h2, .devui-card-20 h3, .devui-card-20 p { margin:0; }
.devui-card-20 button, .devui-card-20 input { font:inherit; }
.devui-card-20 button { cursor:pointer; -webkit-tap-highlight-color:transparent; }
.devui-card-20 button:focus-visible, .devui-card-20 input:focus-visible { outline:2px solid #a6b4ff; outline-offset:3px; }
.devui-card-20 .grain { position:absolute; z-index:3; inset:0; pointer-events:none; opacity:.13; background-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22160%22%20height%3D%22160%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%22.8%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Cpath%20fill%3D%22white%22%20filter%3D%22url%28%23n%29%22%20opacity%3D%22.4%22%20d%3D%22M0%200h160v160H0z%22%2F%3E%3C%2Fsvg%3E"); mix-blend-mode:screen; }
.devui-card-20 svg { display:block; }
@media(prefers-reduced-motion:reduce) { .devui-card-20 *, .devui-card-20 *::before, .devui-card-20 *::after { animation:none !important; transition:none !important; } }

.devui-card-20 .panel { aspect-ratio:1.73; border-radius:13cqw; background:linear-gradient(#100a0a,#030407 51%,#0b1948); box-shadow:inset 0 1.4cqw 3cqw -1cqw #824235,inset 0 -2cqw 2.5cqw -.5cqw #c1c4ff,inset 0 -8cqw 7cqw -2cqw #344eff; }
.devui-card-20 .player-meta { position:absolute; left:8%; top:16%; font-size:3cqw; line-height:1.45; }
.devui-card-20 .player-meta strong { display:block; font-size:2.8cqw; letter-spacing:.25px; }
.devui-card-20 .player-meta span { color:#8c8586; }
.devui-card-20 .player-like { position:absolute; right:14%; top:15%; border:0; padding:1cqw; color:#d6e1df; background:none; font-size:5.2cqw; line-height:1; }
.devui-card-20 .player-like[aria-pressed="false"] { color:#666267; }
.devui-card-20 .player-options { position:absolute; z-index:4; top:29%; right:7%; padding:2cqw; border:1px solid #43404c; border-radius:2cqw; background:#18171f; }
.devui-card-20 .player-options button { border:0; padding:2cqw; background:none; color:#d7d3e5; font-size:3cqw; }
.devui-card-20 .player-menu { position:absolute; right:7%; top:16%; width:5cqw; height:5cqw; border:0; border-radius:50%; color:#65676b; background:#1a1b20; font-size:3cqw; }
.devui-card-20 .transport { position:absolute; top:27%; left:40%; display:flex; align-items:center; gap:2cqw; }
.devui-card-20 .transport button { border:0; padding:0; background:none; color:#686867; font-size:7cqw; line-height:1; }
.devui-card-20 .transport button svg { width:6cqw; height:6cqw; fill:currentColor; }
.devui-card-20 .transport .main-play { font-size:7.5cqw; color:#8a8a84; width:5cqw; }
.devui-card-20 .player-wave { position:absolute; left:2%; right:2%; bottom:5%; width:96%; height:43%; }
.devui-card-20 .player-timeline { position:absolute; top:47%; left:8%; width:84%; z-index:2; }
.devui-card-20 input { display:block; appearance:none; width:100%; height:1px; padding:0; margin:0; background:#747577; accent-color:#eee; cursor:pointer; }
.devui-card-20 input::-webkit-slider-thumb { appearance:none; width:2.2cqw; height:2.2cqw; border-radius:50%; background:#eee; }
.devui-card-20 .player-times { display:flex; justify-content:space-between; margin-top:2cqw; color:#a9a6af; font-size:2.6cqw; }`}</style>
      <div className="devui-card-20">
        <section className="panel" aria-label="PHOTO music player">
          <div className="player-meta">
            <strong>PHOTO</strong>
            <span>Pavel Cars</span>
          </div>
          <button
            className="player-like"
            type="button"
            aria-label="Favoriet"
            aria-pressed={liked}
            onClick={() => setLiked(!liked)}
          >
            ♥
          </button>
          <button
            className="player-menu"
            type="button"
            aria-label="Meer opties"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ≡
          </button>
          {menuOpen && (
            <div className="player-options">
              <button
                type="button"
                onClick={() => {
                  setPosition(0);
                  setMenuOpen(false);
                }}
              >
                Restart
              </button>
            </div>
          )}
          <div className="transport">
            <button
              type="button"
              aria-label="Terugspoelen"
              onClick={() => setPosition(Math.max(0, position - 10))}
            >
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M18 2 2 10l16 8Z" />
              </svg>
            </button>
            <button
              className="main-play"
              type="button"
              aria-label={playing ? "Pauzeren" : "Afspelen"}
              aria-pressed={playing}
              onClick={() => setPlaying(!playing)}
            >
              {playing ? (
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M5 2h3v16H5zm7 0h3v16h-3Z" />
                </svg>
              ) : (
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="m3 2 15 8-15 8Z" />
                </svg>
              )}
            </button>
            <button
              type="button"
              aria-label="Vooruitspoelen"
              onClick={() => setPosition(Math.min(103, position + 10))}
            >
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="m2 2 16 8-16 8Z" />
              </svg>
            </button>
          </div>
          <svg
            className="player-wave"
            viewBox="0 0 300 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {wave.map((height, i) => (
              <line
                key={i}
                x1={i * 5 + 2}
                x2={i * 5 + 2}
                y1={74 - height}
                y2="78"
                stroke={i % 3 === 0 ? "#aaaaf1" : "#6b72c6"}
                strokeWidth="1.3"
                opacity={0.42 + (i % 4) * 0.12}
              />
            ))}
          </svg>
          <div className="player-timeline">
            <input
              type="range"
              min="0"
              max="103"
              value={position}
              aria-label="Afspeelpositie"
              onChange={(event) => setPosition(Number(event.target.value))}
            />
            <div className="player-times">
              <span>
                {Math.floor(position / 60)}:
                {String(position % 60).padStart(2, "0")}
              </span>
              <span>1:43</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
