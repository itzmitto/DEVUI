// DevUI Card 23 — Industry Best Practices
// Zelfstandig bestand; geen extra stylesheets, fonts of iconenpakketten nodig.

export const cardMeta = {
  title: "Card 23 — Industry Best Practices",
  category: "Dark / Light effects",
  description:
    "Donkere informatiekaart met blauwe, groene en witte ondergloed.",
  tags: ["Industry", "Aurora", "Glow"],
};

export default function Cards23({
  onLearnMore,
}: { onLearnMore?: () => void } = {}) {
  return (
    <>
      <style>{`.devui-card-23 { width:320px; max-width:100%; container-type:inline-size; }
.devui-card-23, .devui-card-23 * { box-sizing:border-box; }
.devui-card-23 .panel { position:relative; isolation:isolate; width:100%; overflow:hidden; color:#f6f5f9; font-family:Arial,Helvetica,sans-serif; background:#090a0e; }
.devui-card-23 h2, .devui-card-23 h3, .devui-card-23 p { margin:0; }
.devui-card-23 button, .devui-card-23 input { font:inherit; }
.devui-card-23 button { cursor:pointer; -webkit-tap-highlight-color:transparent; }
.devui-card-23 button:focus-visible, .devui-card-23 input:focus-visible { outline:2px solid #a6b4ff; outline-offset:3px; }
.devui-card-23 .grain { position:absolute; z-index:3; inset:0; pointer-events:none; opacity:.13; background-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22160%22%20height%3D%22160%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%22.8%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Cpath%20fill%3D%22white%22%20filter%3D%22url%28%23n%29%22%20opacity%3D%22.4%22%20d%3D%22M0%200h160v160H0z%22%2F%3E%3C%2Fsvg%3E"); mix-blend-mode:screen; }
.devui-card-23 svg { display:block; }
@media(prefers-reduced-motion:reduce) { .devui-card-23 *, .devui-card-23 *::before, .devui-card-23 *::after { animation:none !important; transition:none !important; } }

.devui-card-23 .panel { aspect-ratio:.771; border-radius:10cqw; background:radial-gradient(ellipse 65% 33% at 97% 103%,#fff 30%,#fae6ff 53%,transparent 78%),radial-gradient(ellipse 73% 23% at 10% 108%,#faffff 37%,#bde8ec 62%,transparent 88%),radial-gradient(ellipse 56% 23% at 43% 95%,#c4aaff 5%,transparent 86%),radial-gradient(ellipse 91% 35% at 83% 88%,#0d7bff 5%,#083581 49%,transparent 78%),radial-gradient(ellipse 55% 43% at 107% 49%,#3325af 5%,transparent 90%),radial-gradient(ellipse 64% 35% at -9% 91%,#007c69,transparent 92%),#070709; box-shadow:inset 0 -.8cqw 1cqw rgba(255,255,255,.9),inset 0 0 1cqw rgba(139,136,192,.2); }
.devui-card-23 .industry-copy { padding:7cqw; }
.devui-card-23 .industry-mark { display:grid; place-items:center; width:16cqw; height:16cqw; margin-bottom:7cqw; border:1px solid #17171d; border-radius:50%; background:linear-gradient(145deg,#17171a,#0b0b0e); }
.devui-card-23 .industry-mark svg { width:8cqw; color:#e4e3ec; }
.devui-card-23 h2 { max-width:88%; margin-bottom:4cqw; font-size:8.4cqw; line-height:1.07; letter-spacing:-.3px; font-weight:600; }
.devui-card-23 p { max-width:94%; font-size:4.9cqw; line-height:1.35; color:#a6a4ac; }
.devui-card-23 .learn-more { display:inline-block; margin-top:7cqw; padding:0; border:0; background:none; color:#e4e2e7; text-decoration:underline; text-underline-offset:2px; font-size:4cqw; font-weight:600; }`}</style>
      <div className="devui-card-23">
        <article className="panel">
          <div className="industry-copy">
            <div className="industry-mark" aria-hidden="true">
              <svg viewBox="0 0 30 24" fill="none">
                <path
                  d="m3 12 5 5L19 6m-9 6 5 5L26 6m-13 6 5 5L29 6"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
            <h2>Industry best practices</h2>
            <p>Supporting the most popular digital currencies.</p>
            <button
              className="learn-more"
              type="button"
              onClick={() => onLearnMore?.()}
            >
              Learn more
            </button>
          </div>
        </article>
      </div>
    </>
  );
}
