// DevUI button 12 — Select
// Zelfstandig bestand: geen extra CSS of iconenbibliotheek nodig.

import { useState } from 'react'

export const buttonMeta = {
  title: 'Button 12 — Select',
  category: 'Glass / Skeuomorphic',
  description: 'Groene glazen selectiebutton met geelgroene rand en vinkje.',
  tags: ['Glass', 'Groen', 'Select'],
}

export default function Buttons12() {
  const [selected, setSelected] = useState(true)

  return (
    <>
      <style>{`.devui-button-12 {
  --light: #53f9b0;
  --edge: #206b4c;
  --wash: rgba(55,210,129,.32);
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
.devui-button-12 *, .devui-button-12 *::before, .devui-button-12 *::after { box-sizing: border-box; }
.devui-button-12::before {
  content: '';
  position: absolute;
  pointer-events: none;
  z-index: 3;
  inset: 3px 3px 6px;
  border-radius: inherit;
  border: 1px solid rgba(215,237,255,.15);
  box-shadow: inset 0 -2px 2px var(--wash), 0 2px 1px rgba(0,0,0,.8);
}
.devui-button-12::after {
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
.devui-button-12 .glass-face {
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
.devui-button-12 .glass-face::before {
  content: '';
  position: absolute;
  pointer-events: none;
  inset: 1px 10px auto;
  height: 9px;
  border-radius: 100%;
  background: linear-gradient(90deg, transparent, rgba(205,226,245,.08), transparent);
}
.devui-button-12 .glass-glint {
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
.devui-button-12 .glass-bottom {
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
.devui-button-12 .glass-label {
  position: relative;
  z-index: 2;
  text-shadow: 0 1px 2px #000, 0 0 3px rgba(255,255,255,.2);
}
.devui-button-12:focus-visible, .devui-button-12:focus-within {
  outline: 2px solid var(--light);
  outline-offset: 6px;
}
@media (hover: hover) {
  .devui-button-12:hover { filter: brightness(1.17); }
}
.devui-button-12:active { transform: translateY(3px); }
@media (prefers-reduced-motion: reduce) {
  .devui-button-12, .devui-button-12 * { transition: none !important; }
}

.devui-button-12 { background: radial-gradient(ellipse at 5% 80%,#e1c263,transparent 33%),radial-gradient(ellipse at 90% 8%,#b6e5d6,transparent 30%),linear-gradient(180deg,#10382c,#031b15 45%,#17563c 75%,#8cd99b 89%,#162f24); }
.devui-button-12 .glass-face { justify-content: space-between; padding: 0 17px 0 32px; background: linear-gradient(180deg,#102d25,#02100b 54%,#071b12 90%,#244d2d); }
.devui-button-12 .glass-check { display: grid; place-items: center; width: 45px; height: 43px; margin-right: 0; border: 1px solid rgba(208,244,223,.18); border-radius: 12px; background: linear-gradient(135deg,rgba(229,255,239,.25),rgba(128,188,158,.1)); box-shadow: inset 0 1px 1px rgba(255,255,255,.15),0 2px 4px rgba(0,0,0,.5); transition: opacity .18s; }
.devui-button-12[aria-pressed="false"] .glass-check svg { opacity: 0; }
.devui-button-12 .glass-bottom { background: linear-gradient(90deg,#f0cf78,transparent 40%,#54ffc1); border: 0; height: 3px; bottom: 7px; }`}</style>
      <button type="button" className="devui-button-12" aria-pressed={selected} onClick={() => setSelected(!selected)}><span className="glass-glint" aria-hidden="true" />
        <span className="glass-bottom" aria-hidden="true" />
        <span className="glass-face"><span className="glass-label">Select</span><span className="glass-check"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m4 12 5 5L21 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></span></span></button>
    </>
  )
}
