// DevUI button 07 — Start project
// Zelfstandig bestand: geen extra CSS of iconenbibliotheek nodig.

export const buttonMeta = {
  title: "Button 07 — Start project",
  category: "Glass / Skeuomorphic",
  description: "Zwarte glazen pill met een blauwe en violette lichtreflectie.",
  tags: ["Glass", "Zwart", "Blauw"],
};

export default function Buttons7() {
  return (
    <>
      <style>{`.devui-button-7 {
  --light: #4668ff;
  --edge: #12184e;
  --wash: rgba(62,85,198,.35);
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 238px;
  max-width: 100%;
  height: 88px;
  margin: 0;
  padding: 0;
  border: 1px solid rgba(190, 212, 230, .16);
  border-radius: 48px;
  color: #f4f4f5;
  font: 400 20px/1.2 Arial, Helvetica, sans-serif;
  letter-spacing: -.65px;
  text-decoration: none;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
  appearance: none;
  cursor: pointer;
  background:
    radial-gradient(ellipse at 83% 4%, rgba(255,255,255,.8), transparent 22%),
    radial-gradient(ellipse at 6% 60%, var(--wash), transparent 31%),
    linear-gradient(180deg, #090f14 0%, #202b32 5%, #02070b 15%, #03080c 52%, var(--edge) 82%, #080f15 98%);
  box-shadow:
    inset 0 2px 2px rgba(255,255,255,.35),
    inset 2px 0 3px rgba(255,255,255,.14),
    inset -3px -3px 5px rgba(0,0,0,.9),
    0 8px 0 -2px #03080d,
    0 12px 8px -4px rgba(0,0,0,.8),
    0 15px 20px -10px var(--light);
  transition: transform .18s ease, filter .18s ease;
}
.devui-button-7 *, .devui-button-7 *::before, .devui-button-7 *::after { box-sizing: border-box; }
.devui-button-7::before {
  content: '';
  position: absolute;
  pointer-events: none;
  z-index: 3;
  inset: 3px 3px 6px;
  border-radius: inherit;
  border: 1px solid rgba(215,237,255,.15);
  box-shadow: inset 0 -2px 2px var(--wash), 0 2px 1px rgba(0,0,0,.8);
}
.devui-button-7::after {
  content: '';
  position: absolute;
  pointer-events: none;
  z-index: -1;
  left: 20px;
  right: 20px;
  bottom: -17px;
  height: 25px;
  border-radius: 50%;
  background: var(--light);
  opacity: .48;
  filter: blur(13px);
}
.devui-button-7 .glass-face {
  position: absolute;
  inset: 6px 6px 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  border: 1px solid rgba(205,230,255,.16);
  background:
    radial-gradient(ellipse at 50% -50%, var(--wash), transparent 70%),
    linear-gradient(180deg, rgba(20,27,34,.94), rgba(0,3,6,.97) 47%, rgba(0,3,5,.95) 80%, var(--wash));
  box-shadow:
    inset 0 2px 3px rgba(0,0,0,.95),
    inset 0 -1px 1px rgba(255,255,255,.14),
    0 3px 2px rgba(0,0,0,.85),
    0 5px 3px -1px var(--light);
}
.devui-button-7 .glass-face::before {
  content: '';
  position: absolute;
  pointer-events: none;
  inset: 1px 10px auto;
  height: 9px;
  border-radius: 100%;
  background: linear-gradient(90deg, transparent, rgba(205,226,245,.08), transparent);
}
.devui-button-7 .glass-glint {
  position: absolute;
  pointer-events: none;
  z-index: 4;
  top: 9px;
  right: 13px;
  width: 54px;
  height: 22px;
  border-radius: 0 100% 8% 100%;
  transform: rotate(16deg);
  background: linear-gradient(175deg, #f8faff 2%, #d9e2f4 51%, #8393b0 70%, transparent 74%);
  opacity: .9;
  filter: blur(.2px);
}
.devui-button-7 .glass-bottom {
  position: absolute;
  pointer-events: none;
  z-index: 3;
  bottom: 6px;
  left: 23px;
  right: 23px;
  height: 8px;
  border-bottom: 2px solid var(--light);
  border-radius: 0 0 60% 60% / 0 0 100% 100%;
  opacity: .85;
  filter: drop-shadow(0 0 3px var(--light));
}
.devui-button-7 .glass-label {
  position: relative;
  z-index: 2;
  text-shadow: 0 1px 2px #000, 0 0 3px rgba(255,255,255,.2);
}
.devui-button-7:focus-visible, .devui-button-7:focus-within {
  outline: 2px solid var(--light);
  outline-offset: 6px;
}
@media (hover: hover) {
  .devui-button-7:hover { filter: brightness(1.17); }
}
.devui-button-7:active { transform: translateY(3px); }
@media (prefers-reduced-motion: reduce) {
  .devui-button-7, .devui-button-7 * { transition: none !important; }
}

.devui-button-7 { box-shadow: inset 0 2px 2px rgba(255,255,255,.24), inset -3px -3px 5px #000, 0 8px 0 -2px #02050a, 0 15px 12px -5px rgba(0,0,0,.8); }
.devui-button-7::after { opacity: .16; }
.devui-button-7 .glass-bottom { background: linear-gradient(90deg, #3161e9, transparent 26%, transparent 77%, #7040b5); border-bottom: 0; height: 4px; opacity: .7; }
.devui-button-7 .glass-face { background: linear-gradient(180deg, #10151a, #020406 50%, #000 85%, #060910); }`}</style>
      <button type="button" className="devui-button-7">
        <span className="glass-glint" aria-hidden="true" />
        <span className="glass-bottom" aria-hidden="true" />
        <span className="glass-face">
          <span className="glass-label">Start project</span>
        </span>
      </button>
    </>
  );
}
