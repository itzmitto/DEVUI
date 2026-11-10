// DevUI Card 15 — Engineering
// Zelfstandig bestand; geen extra stylesheets, fonts of iconenpakketten nodig.

export const cardMeta = {
  title: "Card 15 — Engineering",
  category: "Dark / Light effects",
  description: "Kobaltblauw glas met een zachte cyaankleurige lichtvlek.",
  tags: ["Blue", "Glass", "Engineering"],
};

export default function Cards15() {
  return (
    <>
      <style>{`.devui-card-15 { width:320px; max-width:100%; container-type:inline-size; }
.devui-card-15, .devui-card-15 * { box-sizing:border-box; }
.devui-card-15 .panel { position:relative; isolation:isolate; width:100%; overflow:hidden; color:#f6f5f9; font-family:Arial,Helvetica,sans-serif; background:#090a0e; }
.devui-card-15 h2, .devui-card-15 h3, .devui-card-15 p { margin:0; }
.devui-card-15 button, .devui-card-15 input { font:inherit; }
.devui-card-15 button { cursor:pointer; -webkit-tap-highlight-color:transparent; }
.devui-card-15 button:focus-visible, .devui-card-15 input:focus-visible { outline:2px solid #a6b4ff; outline-offset:3px; }
.devui-card-15 .grain { position:absolute; z-index:3; inset:0; pointer-events:none; opacity:.13; background-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22160%22%20height%3D%22160%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%22.8%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Cpath%20fill%3D%22white%22%20filter%3D%22url%28%23n%29%22%20opacity%3D%22.4%22%20d%3D%22M0%200h160v160H0z%22%2F%3E%3C%2Fsvg%3E"); mix-blend-mode:screen; }
.devui-card-15 svg { display:block; }
@media(prefers-reduced-motion:reduce) { .devui-card-15 *, .devui-card-15 *::before, .devui-card-15 *::after { animation:none !important; transition:none !important; } }

.devui-card-15 .panel { aspect-ratio:.883; border-radius:28cqw; background:radial-gradient(ellipse at 47% 54%,#04dbef 0%,#00aafc 15%,#075fff 33%,transparent 57%),radial-gradient(ellipse at 100% 36%,#348dff 0%,transparent 72%),linear-gradient(150deg,#1c3984,#10205d 55%,#2a65bf); box-shadow:inset 0 .8cqw 3cqw #c3e4ff,inset 1.1cqw 0 2.5cqw #9ebfee,inset -1cqw -1.4cqw 3cqw #afcffa; }
.devui-card-15 .panel::before { content:''; position:absolute; inset:1%; border-radius:inherit; box-shadow:inset 0 0 4cqw rgba(229,240,255,.4); pointer-events:none; }
.devui-card-15 h2 { position:absolute; width:100%; top:44%; text-align:center; font-size:12cqw; font-weight:400; letter-spacing:-.7px; color:#b1fffa; text-shadow:0 0 3cqw #71ffff; filter:blur(.18cqw); }`}</style>
      <div className="devui-card-15">
        <div
          className="panel"
          role="img"
          aria-label="Engineering, blauw glazen kaart met cyaankleurige gloed"
        >
          <h2>Engineering</h2>
        </div>
      </div>
    </>
  );
}
