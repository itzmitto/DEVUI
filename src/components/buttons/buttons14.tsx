// DevUI button 14 — Tabs
// Zelfstandig bestand: geen extra CSS of iconenbibliotheek nodig.

export const buttonMeta = {
  title: 'Button 14 — Tabs',
  category: 'Glass / Skeuomorphic',
  description: 'Donker glazen menukaart met blauwe reflectie, terugknop en twee acties.',
  tags: ['Glass', 'Menu', 'Blauw'],
}

export default function Buttons14() {
  return (
    <>
      <style>{`.devui-button-14 {
  --light: #4e7cff;
  --edge: #182c4c;
  --wash: rgba(48,96,177,.25);
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
.devui-button-14 *, .devui-button-14 *::before, .devui-button-14 *::after { box-sizing: border-box; }
.devui-button-14::before {
  content: '';
  position: absolute;
  pointer-events: none;
  z-index: 3;
  inset: 3px 3px 6px;
  border-radius: inherit;
  border: 1px solid rgba(215,237,255,.15);
  box-shadow: inset 0 -2px 2px var(--wash), 0 2px 1px rgba(0,0,0,.8);
}
.devui-button-14::after {
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
.devui-button-14 .glass-face {
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
.devui-button-14 .glass-face::before {
  content: '';
  position: absolute;
  pointer-events: none;
  inset: 1px 10px auto;
  height: 9px;
  border-radius: 100%;
  background: linear-gradient(90deg, transparent, rgba(205,226,245,.08), transparent);
}
.devui-button-14 .glass-glint {
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
.devui-button-14 .glass-bottom {
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
.devui-button-14 .glass-label {
  position: relative;
  z-index: 2;
  text-shadow: 0 1px 2px #000, 0 0 3px rgba(255,255,255,.2);
}
.devui-button-14:focus-visible, .devui-button-14:focus-within {
  outline: 2px solid var(--light);
  outline-offset: 6px;
}
@media (hover: hover) {
  .devui-button-14:hover { filter: brightness(1.17); }
}
.devui-button-14:active { transform: translateY(3px); }
@media (prefers-reduced-motion: reduce) {
  .devui-button-14, .devui-button-14 * { transition: none !important; }
}

.devui-button-14 { display: block; height: 146px; border-radius: 27px; cursor: default; background: radial-gradient(ellipse at 10% 100%,#314e8c,transparent 32%),radial-gradient(ellipse at 97% 0,rgba(210,228,255,.6),transparent 18%),linear-gradient(180deg,#111c23,#040a10 30%,#02070c 76%,#14213c); box-shadow: inset 0 1px 2px rgba(199,227,255,.24),inset -3px -3px 5px #000,0 8px 0 -2px #03070c,0 14px 12px -4px rgba(0,0,0,.8); }
.devui-button-14 .glass-face { display: flex; align-items: stretch; justify-content: flex-start; flex-direction: column; inset: 6px 6px 13px; padding: 8px 13px; border-color: rgba(159,204,237,.1); border-radius: 20px; background: linear-gradient(150deg,rgba(20,31,38,.8),#02070b 50%,#050b13); }
.devui-button-14 button { position: relative; z-index: 2; display: flex; align-items: center; flex: 0 0 auto; gap: 9px; width: 100%; border: 0; border-radius: 6px; margin: 0; padding: 4px 2px; color: inherit; font: inherit; letter-spacing: inherit; text-align: left; background: transparent; cursor: pointer; }
.devui-button-14 button:first-child { margin-bottom: 8px; }
.devui-button-14 button:hover { background: rgba(145,190,255,.1); }
.devui-button-14 button:focus-visible { outline: 1px solid #93b2ff; outline-offset: 1px; }
.devui-button-14 .glass-glint { width: 27px; height: 10px; top: 3px; right: 9px; opacity: .55; }
.devui-button-14 .glass-bottom { bottom: 8px; left: 24px; right: 19px; height: 4px; opacity: .3; }
.devui-button-14::after { opacity: .1; }
.devui-button-14:active { transform: none; }`}</style>
      <div className="devui-button-14" role="group" aria-label="Tabs menu"><span className="glass-glint" aria-hidden="true" />
        <span className="glass-bottom" aria-hidden="true" />
        <span className="glass-face"><button type="button"><svg width="18" height="22" viewBox="0 0 18 22" fill="none" aria-hidden="true"><path d="m11 4-7 7 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg><span>Tabs</span></button><button type="button">Find files...</button><button type="button">Add collaborator</button></span></div>
    </>
  )
}
