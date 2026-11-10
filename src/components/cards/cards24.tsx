// DevUI Card 24 — Blue Assistant
// Zelfstandig bestand; geen extra stylesheets, fonts of iconenpakketten nodig.
import { useState } from "react";

export const cardMeta = {
  title: "Card 24 — Blue Assistant",
  category: "Dark / Light effects",
  description:
    "Blauwe assistentkaart met een lichtgevende orb en een invoerveld.",
  tags: ["Assistant", "Orb", "Blue"],
};

export default function Cards24({
  onSend,
}: { onSend?: (message: string) => void } = {}) {
  const [query, setQuery] = useState("");
  return (
    <>
      <style>{`.devui-card-24 { width:320px; max-width:100%; container-type:inline-size; }
.devui-card-24, .devui-card-24 * { box-sizing:border-box; }
.devui-card-24 .panel { position:relative; isolation:isolate; width:100%; overflow:hidden; color:#f6f5f9; font-family:Arial,Helvetica,sans-serif; background:#090a0e; }
.devui-card-24 h2, .devui-card-24 h3, .devui-card-24 p { margin:0; }
.devui-card-24 button, .devui-card-24 input { font:inherit; }
.devui-card-24 button { cursor:pointer; -webkit-tap-highlight-color:transparent; }
.devui-card-24 button:focus-visible, .devui-card-24 input:focus-visible { outline:2px solid #a6b4ff; outline-offset:3px; }
.devui-card-24 .grain { position:absolute; z-index:3; inset:0; pointer-events:none; opacity:.13; background-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22160%22%20height%3D%22160%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%22.8%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Cpath%20fill%3D%22white%22%20filter%3D%22url%28%23n%29%22%20opacity%3D%22.4%22%20d%3D%22M0%200h160v160H0z%22%2F%3E%3C%2Fsvg%3E"); mix-blend-mode:screen; }
.devui-card-24 svg { display:block; }
@media(prefers-reduced-motion:reduce) { .devui-card-24 *, .devui-card-24 *::before, .devui-card-24 *::after { animation:none !important; transition:none !important; } }

.devui-card-24 .panel { aspect-ratio:.76; border-radius:15cqw; background:radial-gradient(ellipse 100% 42% at 50% 109%,#61b8ff,#0e559c 48%,transparent 100%),radial-gradient(ellipse 70% 24% at 73% 15%,#042353,transparent 80%),linear-gradient(#000208,#010207 65%,#03142a); box-shadow:inset 0 -.7cqw 1.5cqw rgba(155,210,255,.3); }
.devui-card-24 .assistant-orb { position:absolute; left:30%; top:8%; width:43%; height:31%; overflow:visible; filter:drop-shadow(0 0 4cqw #0078e7); }
.devui-card-24 .assistant-orb .orb-haze { fill:none; filter:blur(4px); opacity:.75; }
.devui-card-24 .assistant-orb .orb-trail { fill:none; stroke-linecap:round; }
.devui-card-24 .assistant-copy { position:absolute; left:8%; right:8%; top:48%; text-align:center; }
.devui-card-24 .assistant-copy p { color:#8f92a0; font-size:4.4cqw; margin-bottom:4cqw; }
.devui-card-24 h2 { font-size:8.4cqw; line-height:1.14; font-weight:400; letter-spacing:-.35px; }
.devui-card-24 form { position:absolute; left:5%; right:5%; bottom:5%; height:19cqw; border:1px solid rgba(178,210,255,.2); border-radius:999px; background:linear-gradient(180deg,rgba(50,119,185,.4),rgba(129,191,250,.5)); box-shadow:inset 0 1px 2px rgba(255,255,255,.14),0 1px 3px rgba(1,21,47,.3); }
.devui-card-24 input { width:100%; height:100%; border:0; border-radius:inherit; padding:0 19cqw 0 8cqw; color:#f6fbff; background:none; font-size:4.3cqw; outline:none; }
.devui-card-24 input::placeholder { color:#d3e7fd; opacity:1; }
.devui-card-24 .assistant-send { position:absolute; right:5%; top:23%; height:54%; width:12%; border:0; padding:0; background:none; color:#dcefff; }
.devui-card-24 .assistant-send svg { width:100%; height:100%; }
.devui-card-24 form:focus-within { outline:1px solid #b5e1ff; outline-offset:3px; }`}</style>
      <div className="devui-card-24">
        <section className="panel" aria-label="Blue assistant">
          <svg
            className="assistant-orb"
            viewBox="0 0 150 150"
            aria-hidden="true"
          >
            <ellipse
              cx="72"
              cy="73"
              rx="49"
              ry="48"
              fill="#010d2e"
              opacity=".75"
            />
            <g className="orb-haze">
              <path
                d="M48 120C88 83 149 112 117 41"
                stroke="#39bbff"
                strokeWidth="10"
              />
              <path
                d="M24 91C25 140 61 105 101 107s34-56 15-73"
                stroke="#3289ff"
                strokeWidth="7"
              />
            </g>
            <g className="orb-trail">
              <path
                d="M47 120C-6 101 18 23 69 18s86 49 47 83c-15 13-47 5-69 19Z"
                stroke="#113e99"
                strokeWidth="3"
              />
              <path
                d="M48 120C88 83 149 112 117 41 96-6 35 15 22 57"
                stroke="#31bdff"
                strokeWidth="1.6"
              />
              <path
                d="M24 91C25 140 61 105 101 107s34-56 15-73"
                stroke="#8be8ff"
                strokeWidth="2.2"
              />
              <path
                d="M39 117C74 98 133 88 116 40 101 3 55 13 32 40"
                stroke="#4488ff"
                strokeWidth="1"
              />
              <path
                d="M48 120C74 102 105 113 121 92"
                stroke="#9ceeff"
                strokeWidth="2.8"
              />
              <path
                d="M28 55C43 16 87 5 110 31"
                stroke="#1f54bd"
                strokeWidth="1.2"
              />
            </g>
          </svg>
          <div className="assistant-copy">
            <p>Hello Robin</p>
            <h2>
              How can I help
              <br />
              you today?
            </h2>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (onSend && query.trim()) {
                onSend(query.trim());
                setQuery("");
              }
            }}
          >
            <input
              aria-label="Ask anything"
              placeholder="Ask anything"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button
              className="assistant-send"
              type="submit"
              aria-label="Versturen"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M3 10v4m3-7v10m3-13v16m3-11v6m3-12v18m3-14v10m3-7v4" />
              </svg>
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
