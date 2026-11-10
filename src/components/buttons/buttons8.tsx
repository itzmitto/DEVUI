// DevUI button 08 — Secondary
// Zelfstandig bestand: geen extra CSS of iconenbibliotheek nodig.

export const buttonMeta = {
  title: "Button 08 — Secondary",
  category: "Glass / Skeuomorphic",
  description: "Rood en roze glas met een warme oranje lichtrand.",
  tags: ["Glass", "Rood", "Oranje"],
};

export default function Buttons8() {
  return (
    <>
      <style>{`.devui-button-8 {
  --light: #ff6036;
  --edge: #d7474b;
  --wash: rgba(255,74,107,.48);
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
.devui-button-8 *, .devui-button-8 *::before, .devui-button-8 *::after { box-sizing: border-box; }
.devui-button-8::before {
  content: '';
  position: absolute;
  pointer-events: none;
  z-index: 3;
  inset: 3px 3px 6px;
  border-radius: inherit;
  border: 1px solid rgba(215,237,255,.15);
  box-shadow: inset 0 -2px 2px var(--wash), 0 2px 1px rgba(0,0,0,.8);
}
.devui-button-8::after {
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
.devui-button-8 .glass-face {
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
.devui-button-8 .glass-face::before {
  content: '';
  position: absolute;
  pointer-events: none;
  inset: 1px 10px auto;
  height: 9px;
  border-radius: 100%;
  background: linear-gradient(90deg, transparent, rgba(205,226,245,.08), transparent);
}
.devui-button-8 .glass-glint {
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
.devui-button-8 .glass-bottom {
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
.devui-button-8 .glass-label {
  position: relative;
  z-index: 2;
  text-shadow: 0 1px 2px #000, 0 0 3px rgba(255,255,255,.2);
}
.devui-button-8:focus-visible, .devui-button-8:focus-within {
  outline: 2px solid var(--light);
  outline-offset: 6px;
}
@media (hover: hover) {
  .devui-button-8:hover { filter: brightness(1.17); }
}
.devui-button-8:active { transform: translateY(3px); }
@media (prefers-reduced-motion: reduce) {
  .devui-button-8, .devui-button-8 * { transition: none !important; }
}

.devui-button-8 { border-color: #79454e; background: radial-gradient(ellipse at 78% 0, #e2c2d7, transparent 45%), linear-gradient(180deg,#8a606d,#4b1421 22%,#690e1e 59%,#f18a6b 86%,#60222c); box-shadow: inset 0 2px 2px #dab9c7, inset 0 -3px 3px #9f3f45, 0 8px 0 -2px #7b2830, 0 14px 9px -4px #5b141d, 0 17px 21px -6px #f33e45; }
.devui-button-8 .glass-face { border-color: rgba(255,199,207,.24); background: linear-gradient(180deg,#5b2639,#290710 45%,#4e0d13 77%,#8f2822); box-shadow: inset 0 2px 4px #260d16, inset 0 -2px 3px #f8a24f, 0 4px 4px #ff9548; }
.devui-button-8 .glass-glint { top: 3px; right: 10px; width: 182px; height: 23px; border-radius: 10px 30px 3px 100%; transform: rotate(0); background: linear-gradient(180deg,#ecd9e6,#a6768e 55%,transparent 62%); opacity: .88; }
.devui-button-8 .glass-bottom { left: 28px; right: 26px; border-color: #ff8b53; }`}</style>
      <button type="button" className="devui-button-8">
        <span className="glass-glint" aria-hidden="true" />
        <span className="glass-bottom" aria-hidden="true" />
        <span className="glass-face">
          <span className="glass-label">Secondary</span>
        </span>
      </button>
    </>
  );
}
