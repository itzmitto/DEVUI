// DevUI button 15 — Pro plan
// Zelfstandig bestand: geen extra CSS of iconenbibliotheek nodig.

export const buttonMeta = {
  title: 'Button 15 — Pro plan',
  category: 'Glass / Skeuomorphic',
  description: 'Warme bronzen glazen kaart met een gouden lichtrand.',
  tags: ['Glass', 'Brons', 'Card'],
}

export default function Buttons15() {
  return (
    <>
      <style>{`.devui-button-15 {
  --light: #ffc580;
  --edge: #8b5233;
  --wash: rgba(239,145,76,.3);
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
.devui-button-15 *, .devui-button-15 *::before, .devui-button-15 *::after { box-sizing: border-box; }
.devui-button-15::before {
  content: '';
  position: absolute;
  pointer-events: none;
  z-index: 3;
  inset: 3px 3px 6px;
  border-radius: inherit;
  border: 1px solid rgba(215,237,255,.15);
  box-shadow: inset 0 -2px 2px var(--wash), 0 2px 1px rgba(0,0,0,.8);
}
.devui-button-15::after {
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
.devui-button-15 .glass-face {
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
.devui-button-15 .glass-face::before {
  content: '';
  position: absolute;
  pointer-events: none;
  inset: 1px 10px auto;
  height: 9px;
  border-radius: 100%;
  background: linear-gradient(90deg, transparent, rgba(205,226,245,.08), transparent);
}
.devui-button-15 .glass-glint {
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
.devui-button-15 .glass-bottom {
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
.devui-button-15 .glass-label {
  position: relative;
  z-index: 2;
  text-shadow: 0 1px 2px #000, 0 0 3px rgba(255,255,255,.2);
}
.devui-button-15:focus-visible, .devui-button-15:focus-within {
  outline: 2px solid var(--light);
  outline-offset: 6px;
}
@media (hover: hover) {
  .devui-button-15:hover { filter: brightness(1.17); }
}
.devui-button-15:active { transform: translateY(3px); }
@media (prefers-reduced-motion: reduce) {
  .devui-button-15, .devui-button-15 * { transition: none !important; }
}

.devui-button-15 { display: block; height: 146px; border-radius: 27px; text-align: left; background: radial-gradient(ellipse at 93% 0,#ffe7df,transparent 30%),radial-gradient(ellipse at 4% 85%,#cd8c46,transparent 32%),linear-gradient(180deg,#673f30,#2d1710 18%,#24150f 65%,#b97b42 90%,#472a1c); box-shadow: inset 0 2px 2px rgba(255,232,212,.45),inset -3px -3px 4px #33170c,0 8px 0 -2px #55301b,0 13px 8px -4px #23130c,0 15px 20px -10px #eab576; }
.devui-button-15 .glass-face { display: flex; flex-direction: column; align-items: stretch; justify-content: flex-start; inset: 7px 7px 13px; padding: 10px 15px; border-radius: 20px; border-color: rgba(248,203,164,.13); background: radial-gradient(ellipse at 95% 85%,rgba(186,111,61,.19),transparent 60%),linear-gradient(155deg,#21120e,#0e0907 60%,#241b12); box-shadow: inset 0 2px 3px #170c08,0 3px 3px rgba(255,204,141,.7); }
.devui-button-15 .glass-label { margin-bottom: 20px; }
.devui-button-15 .glass-description, .devui-button-15 .glass-footer { display: flex; align-items: center; justify-content: space-between; color: #ded7d0; font-size: 14px; line-height: 1.2; letter-spacing: -.4px; }
.devui-button-15 .glass-description { margin-bottom: 14px; }
.devui-button-15 .glass-count { font-size: 16px; }
.devui-button-15 .glass-glint { top: 2px; right: 10px; width: 165px; height: 7px; border-radius: 100%; transform: rotate(1deg); background: linear-gradient(90deg,transparent,#ffe1d5 85%,transparent); }
.devui-button-15 .glass-bottom { left: 22px; right: 22px; bottom: 7px; border-color: #ffe0a8; }`}</style>
      <button type="button" className="devui-button-15" aria-label="Pro plan, Focus ring, hover states, Disabled states, 3"><span className="glass-glint" aria-hidden="true" />
        <span className="glass-bottom" aria-hidden="true" />
        <span className="glass-face"><span className="glass-label">Pro plan</span><span className="glass-description">Focus ring, hover states,</span><span className="glass-footer"><span>Disabled states</span><span className="glass-count">3</span></span></span></button>
    </>
  )
}
