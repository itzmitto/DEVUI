// DevUI button 23 — Pearl glass
// Zelfstandig bestand; geen extra CSS, fonts of iconenpakket nodig.
// Icoon: Remix Icon send-plane-fill, met aangepast vouwdetail.
// https://github.com/Remix-Design/RemixIcon/blob/master/icons/Business/send-plane-fill.svg

export const buttonMeta = {
  title: "Button 23 — Pearl glass",
  category: "Gradient / Glow",
  description:
    "Zilverachtig glas met een warme reflectie links en lila aan de rechterkant.",
  tags: ["Glass", "Pearl", "Lila"],
};

export default function Buttons23() {
  return (
    <>
      <style>{`.devui-button-23 {
--rim: conic-gradient(from 0deg,#526c91,#dc9df8 25%,#e8d6fb 35%,#81b8eb 48%,#8299b9 62%,#fff2d6 83%,#9599ad 94%,#526c91);
  --surface: radial-gradient(ellipse at -4% 5%,rgba(245,239,221,.5),transparent 38%),radial-gradient(ellipse at 108% 85%,rgba(180,117,230,.48),transparent 31%),linear-gradient(110deg,#162130,#080e23 43%,#090e1e 74%,#3b2859);
  --plane: linear-gradient(135deg,#ffd9b3 9%,#efb5cd 39%,#c4c4ff 65%,#8abfff);
  --focus: #e7c6ff;
  --shadow: -7px -1px 20px -13px rgba(255,224,180,.65),8px 1px 25px -12px rgba(209,132,255,.6),0 11px 21px -17px #8ecbff;
  --inner-shadow: inset 0 1px 10px rgba(228,224,248,.15),inset 0 -2px 8px rgba(172,205,252,.1);
}

.devui-button-23 {
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 298px;
  max-width: 100%;
  height: var(--height, 98px);
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 999px;
  appearance: none;
  cursor: pointer;
  vertical-align: middle;
  color: var(--text, #fafaff);
  background: var(--rim);
  box-shadow: var(--shadow, none);
  font: 400 27px/1 Arial, Helvetica, sans-serif;
  letter-spacing: -.1px;
  text-align: left;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition: filter .18s ease, transform .18s ease;
}
.devui-button-23 *, .devui-button-23 *::before, .devui-button-23 *::after { box-sizing: border-box; }
.devui-button-23 .launch-surface {
  position: absolute;
  z-index: 0;
  inset: var(--border-width, 2px);
  border-radius: inherit;
  pointer-events: none;
  background: var(--surface);
  box-shadow: var(--inner-shadow, none);
}
.devui-button-23 .launch-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 0;
  gap: 22px;
  padding: 0 30px 0 59px;
}
.devui-button-23 .launch-label { white-space: nowrap; }
.devui-button-23 .launch-plane {
  display: block;
  flex: 0 0 44px;
  width: 44px;
  height: 44px;
  background: var(--plane);
  -webkit-mask: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M1.94607%209.31543C1.42353%209.14125%201.4194%208.86022%201.95682%208.68108L21.043%202.31901C21.5715%202.14285%2021.8746%202.43866%2021.7265%202.95694L16.2733%2022.0432C16.1223%2022.5716%2015.8177%2022.59%2015.5944%2022.0876L11.9999%2014L17.9999%206.00005L9.99992%2012L1.94607%209.31543Z%22%2F%3E%3Cpath%20d%3D%22M7.05%2013.65L9.1%2014.72L7.65%2021.05Z%22%2F%3E%3C%2Fsvg%3E") center / contain no-repeat;
  mask: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M1.94607%209.31543C1.42353%209.14125%201.4194%208.86022%201.95682%208.68108L21.043%202.31901C21.5715%202.14285%2021.8746%202.43866%2021.7265%202.95694L16.2733%2022.0432C16.1223%2022.5716%2015.8177%2022.59%2015.5944%2022.0876L11.9999%2014L17.9999%206.00005L9.99992%2012L1.94607%209.31543Z%22%2F%3E%3Cpath%20d%3D%22M7.05%2013.65L9.1%2014.72L7.65%2021.05Z%22%2F%3E%3C%2Fsvg%3E") center / contain no-repeat;
}
.devui-button-23:focus-visible {
  outline: 2px solid var(--focus, #b6a0ff);
  outline-offset: 6px;
}
.devui-button-23:disabled { cursor: not-allowed; opacity: .5; }
@media (hover: hover) {
  .devui-button-23:hover:not(:disabled) { filter: brightness(1.09); }
}
.devui-button-23:active:not(:disabled) { transform: translateY(2px); }
@media (prefers-reduced-motion: reduce) {
  .devui-button-23 { transition: none; }
}`}</style>
      <button type="button" className="devui-button-23">
        <span className="launch-surface" aria-hidden="true" />
        <span className="launch-content">
          <span className="launch-label">Get Started</span>
          <span className="launch-plane" aria-hidden="true" />
        </span>
      </button>
    </>
  );
}
