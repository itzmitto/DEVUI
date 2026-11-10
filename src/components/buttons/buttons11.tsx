// DevUI button 11 — Text field
// Zelfstandig bestand: geen extra CSS of iconenbibliotheek nodig.

export const buttonMeta = {
  title: 'Button 11 — Text field',
  category: 'Glass / Skeuomorphic',
  description: 'Een invoerveld met champagnekleurige glasrand en zoekknop.',
  tags: ['Glass', 'Input', 'Champagne'],
}

export default function Buttons11() {
  return (
    <>
      <style>{`.devui-button-11 {
  --light: #f7d19d;
  --edge: #cfbda6;
  --wash: rgba(255,223,183,.4);
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
.devui-button-11 *, .devui-button-11 *::before, .devui-button-11 *::after { box-sizing: border-box; }
.devui-button-11::before {
  content: '';
  position: absolute;
  pointer-events: none;
  z-index: 3;
  inset: 3px 3px 6px;
  border-radius: inherit;
  border: 1px solid rgba(215,237,255,.15);
  box-shadow: inset 0 -2px 2px var(--wash), 0 2px 1px rgba(0,0,0,.8);
}
.devui-button-11::after {
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
.devui-button-11 .glass-face {
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
.devui-button-11 .glass-face::before {
  content: '';
  position: absolute;
  pointer-events: none;
  inset: 1px 10px auto;
  height: 9px;
  border-radius: 100%;
  background: linear-gradient(90deg, transparent, rgba(205,226,245,.08), transparent);
}
.devui-button-11 .glass-glint {
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
.devui-button-11 .glass-bottom {
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
.devui-button-11 .glass-label {
  position: relative;
  z-index: 2;
  text-shadow: 0 1px 2px #000, 0 0 3px rgba(255,255,255,.2);
}
.devui-button-11:focus-visible, .devui-button-11:focus-within {
  outline: 2px solid var(--light);
  outline-offset: 6px;
}
@media (hover: hover) {
  .devui-button-11:hover { filter: brightness(1.17); }
}
.devui-button-11:active { transform: translateY(3px); }
@media (prefers-reduced-motion: reduce) {
  .devui-button-11, .devui-button-11 * { transition: none !important; }
}

.devui-button-11 { cursor: text; border-color: rgba(247,225,203,.5); background: radial-gradient(ellipse at 80% 0,#fff,transparent 40%),linear-gradient(180deg,#9c8b7c,#554d45 10%,#171b1d 45%,#6c6256 66%,#fff0dc 86%,#7d6b55); box-shadow: inset 0 2px 2px #d5c1ad, inset 0 -3px 3px #6e5943, 0 7px 0 -2px #64503b, 0 12px 9px -4px #292019, 0 15px 21px -10px #f7d19d; }
.devui-button-11 .glass-face { justify-content: space-between; overflow: hidden; border-color: rgba(255,237,220,.4); background: linear-gradient(180deg,#303134,#181b1d 65%,#303032); box-shadow: inset 0 2px 4px #171512,0 3px 3px #fff5e6; }
.devui-button-11 input { position: relative; width: calc(100% - 51px); height: 100%; min-width: 0; margin: 0; padding: 0 0 0 19px; border: 0; border-radius: 30px 10px 10px 30px; outline: none; color: #f4f4f4; font: inherit; letter-spacing: inherit; background: linear-gradient(100deg,transparent,rgba(255,255,255,.07)); }
.devui-button-11 input::placeholder { color: #f4f4f4; opacity: 1; }
.devui-button-11 .glass-search { display: grid; place-items: center; flex: 0 0 49px; align-self: stretch; border: 0; border-radius: 0 30px 30px 0; padding: 0; color: #f4f4f4; background: transparent; cursor: pointer; }
.devui-button-11 .glass-search:focus-visible { outline: 2px solid #f7d19d; outline-offset: -5px; }
.devui-button-11 .glass-search:hover { background: rgba(255,255,255,.08); }
.devui-button-11 .glass-glint { width: 175px; height: 9px; right: 24px; top: 2px; border-radius: 100%; transform: none; background: linear-gradient(90deg,transparent,#fff 70%,transparent); }
.devui-button-11 .glass-bottom { border-color: #fff7e9; }
.devui-button-11:active { transform: none; }`}</style>
      <form className="devui-button-11" role="search" onSubmit={(event) => { event.preventDefault() }}><span className="glass-glint" aria-hidden="true" />
        <span className="glass-bottom" aria-hidden="true" />
        <span className="glass-face"><input type="text" name="query" aria-label="Zoeken" placeholder="Text field" autoComplete="off" /><button className="glass-search" type="submit" aria-label="Zoeken"><svg width="27" height="27" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.5" cy="10.5" r="7.3" stroke="currentColor" strokeWidth="1.65" /><path d="m16 16 5 5" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" /></svg></button></span></form>
    </>
  )
}
