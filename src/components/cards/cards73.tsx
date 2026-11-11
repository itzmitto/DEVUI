// DevUI Card 73 — Right Waveform
// Standalone SVG artwork. No external images, fonts, or chart packages.
import { useId } from "react";

export const cardMeta = {
  title: "Card 73 — Right Waveform",
  category: "Charts / Spectrum",
  description:
    "Two smooth white waveforms over a fine cyan-blue grid, matching the right reference panel.",
  tags: ["Waveform", "Line chart", "Grid", "SVG"],
};

export default function Cards73() {
  const id = useId();
  return (
    <>
      <style>{`
        .devui-spectrum-73 { width:464px; max-width:100%; min-width:0; margin:0; background:#000; overflow:hidden; }
        .devui-spectrum-73, .devui-spectrum-73 * { box-sizing:border-box; }
        .devui-spectrum-73 svg { display:block; width:100%; height:auto; }
        .devui-spectrum-73 text { font-family:Arial,Helvetica,sans-serif; font-size:11px; font-weight:400; letter-spacing:.1px; }
      `}</style>
      <figure className="devui-spectrum-73" aria-label="Right Waveform">
        <svg
          viewBox="0 0 464 208"
          role="img"
          aria-labelledby={`${id}-title ${id}-description`}
        >
          <title id={`${id}-title`}>Right Waveform</title>
          <desc id={`${id}-description`}>
            Two smooth white waveforms over a fine cyan-blue grid, matching the
            right reference panel.
          </desc>
          <rect width="464" height="208" fill="#000" />
          <defs>
            <clipPath id={`${id}-plot`}>
              <rect x="1" y="27" width="462" height="177" />
            </clipPath>
          </defs>
          <text x="0" y="12" fill="#eee">
            Right
          </text>
          <g clipPath={`url(#${id}-plot)`}>
            <g fill="none" stroke="#1685c3" strokeWidth=".8" opacity=".95">
              {Array.from({ length: 7 }, (_, index) => (
                <path
                  key={`vertical-${index}`}
                  d={`M${60 + index * 57.5} 30V204`}
                />
              ))}
              {Array.from({ length: 7 }, (_, index) => (
                <path
                  key={`horizontal-${index}`}
                  d={`M2 ${52 + index * 21.6}H462`}
                />
              ))}
            </g>
            <g
              fill="none"
              stroke="#f8f8f8"
              strokeWidth="1.05"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 95 C31 95 31 95 60 95 C88.75 95 88.75 74 117.5 74 C146.25 74 146.25 95 175 95 C203.75 95 203.75 95 232.5 95 C261.25 95 261.25 74 290 74 C318.75 74 318.75 52 347.5 52 C376.25 52 376.25 30 405 30 C433.5 30 433.5 139 462 139" />
              <path d="M2 182 C31 182 31 161 60 161 C88.75 161 88.75 161 117.5 161 C146.25 161 146.25 161 175 161 C203.75 161 203.75 182 232.5 182 C261.25 182 261.25 161 290 161 C318.75 161 318.75 161 347.5 161 C376.25 161 376.25 139 405 139 C433.5 139 433.5 161 462 161" />
            </g>
          </g>
        </svg>
      </figure>
    </>
  );
}
