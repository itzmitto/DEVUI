// DevUI button 16 — Aurora

export const buttonMeta = {
  title: "Button 16 — Aurora",
  category: "Gradient / Glow",
  description: "Cyaan, blauw en violet kleurverloop met een wit vliegtuigje.",
  tags: ["Gradient", "Cyaan", "Violet"],
};

export default function Buttons16() {
  return (
    <>
      <style>{`
        .devui-button-16 {
          box-sizing: border-box;
          position: relative;
          isolation: isolate;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          width: 298px;
          max-width: 100%;
          height: 94px;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 999px;
          appearance: none;
          cursor: pointer;
          vertical-align: middle;
          color: #fafaff;
          background: transparent;
          box-shadow:
            -9px 0 27px -8px rgba(0, 204, 255, .52),
            7px 4px 27px -8px rgba(109, 46, 255, .65),
            0 12px 24px -16px #2e26ff;
          font: 400 27px/1 Arial, Helvetica, sans-serif;
          letter-spacing: -.1px;
          text-align: left;
          text-decoration: none;
          -webkit-tap-highlight-color: transparent;
          transition: filter .18s ease, transform .18s ease;
        }

        .devui-button-16 * {
          box-sizing: border-box;
        }

        .devui-button-16 .launch-surface {
          position: absolute;
          z-index: 0;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse at 0% 0%,
              rgba(70, 234, 255, .9),
              transparent 53%
            ),
            radial-gradient(
              ellipse at 8% 100%,
              #164aff,
              transparent 61%
            ),
            linear-gradient(
              110deg,
              #38bbf5 0%,
              #5146ff 51%,
              #983bff 100%
            );
        }

        .devui-button-16 .launch-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          width: 100%;
          min-width: 0;
          gap: 22px;
          padding: 0 30px 0 59px;
        }

        .devui-button-16 .launch-label {
          white-space: nowrap;
        }

        .devui-button-16 .launch-plane {
          display: block;
          flex: 0 0 44px;
          width: 44px;
          height: 44px;
          fill: #fff;
        }

        .devui-button-16:focus-visible {
          outline: 2px solid #66dbff;
          outline-offset: 6px;
        }

        .devui-button-16:disabled {
          cursor: not-allowed;
          opacity: .5;
        }

        @media (hover: hover) {
          .devui-button-16:hover:not(:disabled) {
            filter: brightness(1.09);
          }
        }

        .devui-button-16:active:not(:disabled) {
          transform: translateY(2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .devui-button-16 {
            transition: none;
          }
        }
      `}</style>

      <button type="button" className="devui-button-16">
        <span className="launch-surface" aria-hidden="true" />

        <span className="launch-content">
          <span className="launch-label">Get Started</span>

          {/* Remix Icon: send-plane-fill, met aangepast vouwdetail */}
          <svg
            className="launch-plane"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z" />
            <path d="M7.05 13.65L9.1 14.72L7.65 21.05Z" />
          </svg>
        </span>
      </button>
    </>
  );
}
