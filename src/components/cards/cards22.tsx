// DevUI Card 22 — Time In Bed
// Zelfstandig bestand; geen extra stylesheets, fonts of iconenpakketten nodig.

export const cardMeta = {
  title: "Card 22 — Time In Bed",
  category: "Dark / Light effects",
  description: "Donkere slaapkaart met een zachte violette en roze lichtvlek.",
  tags: ["Sleep", "Violet", "Glow"],
};

export default function Cards22() {
  return (
    <>
      <style>{`.devui-card-22 { width:320px; max-width:100%; container-type:inline-size; }
.devui-card-22, .devui-card-22 * { box-sizing:border-box; }
.devui-card-22 .panel { position:relative; isolation:isolate; width:100%; overflow:hidden; color:#f6f5f9; font-family:Arial,Helvetica,sans-serif; background:#090a0e; }
.devui-card-22 h2, .devui-card-22 h3, .devui-card-22 p { margin:0; }
.devui-card-22 button, .devui-card-22 input { font:inherit; }
.devui-card-22 button { cursor:pointer; -webkit-tap-highlight-color:transparent; }
.devui-card-22 button:focus-visible, .devui-card-22 input:focus-visible { outline:2px solid #a6b4ff; outline-offset:3px; }
.devui-card-22 .grain { position:absolute; z-index:3; inset:0; pointer-events:none; opacity:.13; background-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22160%22%20height%3D%22160%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%22.8%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Cpath%20fill%3D%22white%22%20filter%3D%22url%28%23n%29%22%20opacity%3D%22.4%22%20d%3D%22M0%200h160v160H0z%22%2F%3E%3C%2Fsvg%3E"); mix-blend-mode:screen; }
.devui-card-22 svg { display:block; }
@media(prefers-reduced-motion:reduce) { .devui-card-22 *, .devui-card-22 *::before, .devui-card-22 *::after { animation:none !important; transition:none !important; } }

.devui-card-22 .panel { aspect-ratio:.994; border-radius:16cqw; background:radial-gradient(ellipse at 100% 0%,#291a37,transparent 80%),#160e1d; box-shadow:inset 0 0 2cqw rgba(255,255,255,.02); }
.devui-card-22 .panel::before { content:''; position:absolute; left:12%; top:17%; width:79%; height:69%; background:radial-gradient(ellipse 24% 65% at 30% 38%,#ffbcff 8%,#e66fff 38%,#9d23ef 68%,transparent 100%),radial-gradient(ellipse 70% 20% at 69% 78%,#ce3bff,#7315e0 48%,transparent 94%); filter:blur(5cqw); transform:rotate(-5deg); }
.devui-card-22 .sleep-copy { position:absolute; left:16%; bottom:18%; }
.devui-card-22 h2 { margin-bottom:2cqw; font-size:7.7cqw; font-weight:500; letter-spacing:-.4px; }
.devui-card-22 .sleep-time { display:flex; align-items:baseline; gap:2cqw; font-size:21cqw; line-height:1; letter-spacing:-1.2cqw; font-weight:400; }
.devui-card-22 .sleep-time span { font-size:6.5cqw; letter-spacing:0; color:#dcc3e7; margin-left:-1cqw; }`}</style>
      <div className="devui-card-22">
        <section
          className="panel"
          aria-label="Time In Bed, 7 hours and 32 minutes"
        >
          <div className="sleep-copy">
            <h2>Time In Bed</h2>
            <p className="sleep-time">
              7<span>hr</span>32<span>min</span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
