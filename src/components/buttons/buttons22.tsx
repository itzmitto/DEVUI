// DevUI button 22 — Midnight blue
// Zelfstandig bestand; geen extra CSS, fonts of iconenpakket nodig.
// Icoon: Remix Icon send-plane-fill, met aangepast vouwdetail.
// https://github.com/Remix-Design/RemixIcon/blob/master/icons/Business/send-plane-fill.svg

export const buttonMeta = {
  title: "Button 22 — Midnight blue",
  category: "Gradient / Glow",
  description:
    "Diepblauw glas met een subtiele blauwe rand en lichtblauw icoon.",
  tags: ["Glass", "Navy", "Blauw"],
};

export default function Buttons22() {
  return (
    <>
      <style>{`.devui-button-22 {
--rim: linear-gradient(120deg,#286bae 0%,#4cb5fc 8%,#253161 27%,#294a7c 51%,#282c54 78%,#232448);
  --surface: radial-gradient(ellipse at 57% 0%,rgba(16,68,116,.3),transparent 60%),linear-gradient(120deg,#0b1533,#080e23 60%,#090d22);
  --plane: linear-gradient(135deg,#b3dfff,#7fbbf9);
  --focus: #89c9ff;
  --shadow: -8px 5px 25px -15px #20a7ff, 0 14px 24px -20px #1c78dc;
  --inner-shadow: inset 0 2px 9px rgba(52,100,179,.08);
}

.devui-button-22 {
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
.devui-button-22 *, .devui-button-22 *::before, .devui-button-22 *::after { box-sizing: border-box; }
.devui-button-22 .launch-surface {
  position: absolute;
  z-index: 0;
  inset: var(--border-width, 2px);
  border-radius: inherit;
  pointer-events: none;
  background: var(--surface);
  box-shadow: var(--inner-shadow, none);
}
.devui-button-22 .launch-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 0;
  gap: 22px;
  padding: 0 30px 0 59px;
}
.devui-button-22 .launch-label { white-space: nowrap; }
.devui-button-22 .launch-plane {
  display: block;
  flex: 0 0 44px;
  width: 44px;
  height: 44px;
  background: var(--plane);
  -webkit-mask: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M1.94607%209.31543C1.42353%209.14125%201.4194%208.86022%201.95682%208.68108L21.043%202.31901C21.5715%202.14285%2021.8746%202.43866%2021.7265%202.95694L16.2733%2022.0432C16.1223%2022.5716%2015.8177%2022.59%2015.5944%2022.0876L11.9999%2014L17.9999%206.00005L9.99992%2012L1.94607%209.31543Z%22%2F%3E%3Cpath%20d%3D%22M7.05%2013.65L9.1%2014.72L7.65%2021.05Z%22%2F%3E%3C%2Fsvg%3E") center / contain no-repeat;
  mask: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M1.94607%209.31543C1.42353%209.14125%201.4194%208.86022%201.95682%208.68108L21.043%202.31901C21.5715%202.14285%2021.8746%202.43866%2021.7265%202.95694L16.2733%2022.0432C16.1223%2022.5716%2015.8177%2022.59%2015.5944%2022.0876L11.9999%2014L17.9999%206.00005L9.99992%2012L1.94607%209.31543Z%22%2F%3E%3Cpath%20d%3D%22M7.05%2013.65L9.1%2014.72L7.65%2021.05Z%22%2F%3E%3C%2Fsvg%3E") center / contain no-repeat;
}
.devui-button-22:focus-visible {
  outline: 2px solid var(--focus, #b6a0ff);
  outline-offset: 6px;
}
.devui-button-22:disabled { cursor: not-allowed; opacity: .5; }
@media (hover: hover) {
  .devui-button-22:hover:not(:disabled) { filter: brightness(1.09); }
}
.devui-button-22:active:not(:disabled) { transform: translateY(2px); }
@media (prefers-reduced-motion: reduce) {
  .devui-button-22 { transition: none; }
}`}</style>
      <button type="button" className="devui-button-22">
        <span className="launch-surface" aria-hidden="true" />
        <span className="launch-content">
          <span className="launch-label">Get Started</span>
          <span className="launch-plane" aria-hidden="true" />
        </span>
      </button>
    </>
  );
}
