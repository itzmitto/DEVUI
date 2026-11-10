// DevUI button 13 — Switch
// Zelfstandig bestand: geen extra CSS of iconenbibliotheek nodig.

import { useState } from 'react'

export const buttonMeta = {
  title: 'Button 13 — Switch',
  category: 'Glass / Skeuomorphic',
  description: 'Paarse glazen schakelaar met blauwe track en een witte glazen knop.',
  tags: ['Glass', 'Paars', 'Switch'],
}

export default function Buttons13() {
  const [enabled, setEnabled] = useState(true)

  return (
    <>
      <style>{`.devui-button-13 {
  --light: #dc62ff;
  --edge: #8444b0;
  --wash: rgba(188,70,233,.37);
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
.devui-button-13 *, .devui-button-13 *::before, .devui-button-13 *::after { box-sizing: border-box; }
.devui-button-13::before {
  content: '';
  position: absolute;
  pointer-events: none;
  z-index: 3;
  inset: 3px 3px 6px;
  border-radius: inherit;
  border: 1px solid rgba(215,237,255,.15);
  box-shadow: inset 0 -2px 2px var(--wash), 0 2px 1px rgba(0,0,0,.8);
}
.devui-button-13::after {
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
.devui-button-13 .glass-face {
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
.devui-button-13 .glass-face::before {
  content: '';
  position: absolute;
  pointer-events: none;
  inset: 1px 10px auto;
  height: 9px;
  border-radius: 100%;
  background: linear-gradient(90deg, transparent, rgba(205,226,245,.08), transparent);
}
.devui-button-13 .glass-glint {
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
.devui-button-13 .glass-bottom {
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
.devui-button-13 .glass-label {
  position: relative;
  z-index: 2;
  text-shadow: 0 1px 2px #000, 0 0 3px rgba(255,255,255,.2);
}
.devui-button-13:focus-visible, .devui-button-13:focus-within {
  outline: 2px solid var(--light);
  outline-offset: 6px;
}
@media (hover: hover) {
  .devui-button-13:hover { filter: brightness(1.17); }
}
.devui-button-13:active { transform: translateY(3px); }
@media (prefers-reduced-motion: reduce) {
  .devui-button-13, .devui-button-13 * { transition: none !important; }
}

.devui-button-13 { background: radial-gradient(ellipse at 85% 0,#eee5ff,transparent 40%),linear-gradient(180deg,#3d284a,#1c0d28 25%,#2b0b38 57%,#a55bba 84%,#49145e); box-shadow: inset 0 2px 2px rgba(255,255,255,.35),inset -3px -3px 5px #1a0924,0 8px 0 -2px #290e37,0 14px 8px -4px #180820,0 15px 20px -10px #dc62ff; }
.devui-button-13 .glass-face { justify-content: space-between; gap: 12px; padding: 0 8px 0 26px; background: linear-gradient(180deg,#211727,#08070d 50%,#100818); }
.devui-button-13 .glass-track { position: relative; display: block; flex: 0 0 103px; width: 103px; height: 53px; border: 1px solid rgba(205,202,255,.48); border-radius: 30px; background: radial-gradient(ellipse at 80% 100%,#8288ff,transparent 65%),linear-gradient(180deg,#121035,#14249b 65%,#3c5ae3); box-shadow: inset 0 3px 5px #09051e,0 0 3px rgba(177,144,255,.8); transition: background .2s; }
.devui-button-13 .glass-thumb { position: absolute; top: 3px; left: 3px; width: 45px; height: 45px; border-radius: 50%; border: 2px solid rgba(233,233,255,.8); background: linear-gradient(135deg,#f6f4ff,#d0d1e5); box-shadow: inset 0 1px 2px #fff,0 0 0 2px rgba(197,190,255,.3),0 0 10px #a799fd,0 3px 4px rgba(0,0,0,.5); transform: translateX(50px); transition: transform .22s ease; }
.devui-button-13[aria-checked="false"] .glass-track { background: linear-gradient(#191426,#30223c); }
.devui-button-13[aria-checked="false"] .glass-thumb { transform: translateX(0); }
.devui-button-13 .glass-glint { top: 2px; right: 26px; width: 177px; height: 5px; border-radius: 100%; transform: none; background: linear-gradient(90deg,#a295bc,#faf4ff 80%,transparent); }`}</style>
      <button type="button" className="devui-button-13" role="switch" aria-checked={enabled} onClick={() => setEnabled(!enabled)}><span className="glass-glint" aria-hidden="true" />
        <span className="glass-bottom" aria-hidden="true" />
        <span className="glass-face"><span className="glass-label">Switch</span><span className="glass-track" aria-hidden="true"><span className="glass-thumb" /></span></span></button>
    </>
  )
}
