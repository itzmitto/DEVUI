// DevUI Card 69 — Left Waveform
// Standalone SVG artwork. No external images, fonts, or chart packages.
import { useId } from 'react'

export const cardMeta = {
  title: 'Card 69 — Left Waveform',
  category: 'Charts / Spectrum',
  description: 'Two smooth white waveforms over a fine cyan-blue grid, matching the left reference panel.',
  tags: ['Waveform', 'Line chart', 'Grid', 'SVG'],
}

export default function Cards69() {
  const id = useId()
  return (
    <>
      <style>{`
        .devui-spectrum-69 { width:464px; max-width:100%; min-width:0; margin:0; background:#000; overflow:hidden; }
        .devui-spectrum-69, .devui-spectrum-69 * { box-sizing:border-box; }
        .devui-spectrum-69 svg { display:block; width:100%; height:auto; }
        .devui-spectrum-69 text { font-family:Arial,Helvetica,sans-serif; font-size:11px; font-weight:400; letter-spacing:.1px; }
      `}</style>
      <figure className="devui-spectrum-69" aria-label="Left Waveform">
        <svg viewBox="0 0 464 208" role="img" aria-labelledby={`${id}-title ${id}-description`}>
          <title id={`${id}-title`}>Left Waveform</title>
          <desc id={`${id}-description`}>Two smooth white waveforms over a fine cyan-blue grid, matching the left reference panel.</desc>
          <rect width="464" height="208" fill="#000" />
          <defs>
            <clipPath id={`${id}-plot`}><rect x="1" y="27" width="462" height="177" /></clipPath>
          </defs>
          <text x="0" y="12" fill="#eee">Left</text>
          <g clipPath={`url(#${id}-plot)`}>
            <g fill="none" stroke="#1685c3" strokeWidth=".8" opacity=".95">
              {Array.from({ length: 7 }, (_, index) => (
                <path key={`vertical-${index}`} d={`M${60 + index * 57.5} 30V204`} />
              ))}
              {Array.from({ length: 7 }, (_, index) => (
                <path key={`horizontal-${index}`} d={`M2 ${52 + index * 21.6}H462`} />
              ))}
            </g>
            <g fill="none" stroke="#f8f8f8" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 74 C31 74 31 52 60 52 C88.75 52 88.75 74 117.5 74 C146.25 74 146.25 52 175 52 C203.75 52 203.75 52 232.5 52 C261.25 52 261.25 95 290 95 C318.75 95 318.75 117 347.5 117 C376.25 117 376.25 74 405 74 C433.5 74 433.5 139 462 139" />
              <path d="M2 161 C31 161 31 96 60 96 C88.75 96 88.75 117 117.5 117 C146.25 117 146.25 161 175 161 C203.75 161 203.75 139 232.5 139 C261.25 139 261.25 161 290 161 C318.75 161 318.75 182 347.5 182 C376.25 182 376.25 161 405 161 C433.5 161 433.5 182 462 182" />
            </g>
          </g>
        </svg>
      </figure>
    </>
  )
}
