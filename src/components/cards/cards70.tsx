// DevUI Card 70 — Primary Spectrum
// Standalone SVG artwork. No external images, fonts, or chart packages.
import { useId } from "react";

export const cardMeta = {
  title: "Card 70 — Primary Spectrum",
  category: "Charts / Spectrum",
  description:
    "A soft primary color spectrum with three luminous, blended color distributions on black.",
  tags: ["Spectrum", "Gradient", "Glow", "SVG"],
};

export default function Cards70() {
  const id = useId();
  return (
    <>
      <style>{`
        .devui-spectrum-70 { width:464px; max-width:100%; min-width:0; margin:0; background:#000; overflow:hidden; }
        .devui-spectrum-70, .devui-spectrum-70 * { box-sizing:border-box; }
        .devui-spectrum-70 svg { display:block; width:100%; height:auto; }
        .devui-spectrum-70 text { font-family:Arial,Helvetica,sans-serif; font-size:11px; font-weight:400; letter-spacing:.1px; }
      `}</style>
      <figure className="devui-spectrum-70" aria-label="Primary Spectrum">
        <svg
          viewBox="0 0 464 208"
          role="img"
          aria-labelledby={`${id}-title ${id}-description`}
        >
          <title id={`${id}-title`}>Primary Spectrum</title>
          <desc id={`${id}-description`}>
            A soft primary color spectrum with three luminous, blended color
            distributions on black.
          </desc>
          <rect width="464" height="208" fill="#000" />
          <defs>
            <filter
              id={`${id}-soft`}
              x="-25%"
              y="-50%"
              width="150%"
              height="200%"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="12" />
            </filter>
            <filter
              id={`${id}-base`}
              x="-10%"
              y="-400%"
              width="120%"
              height="900%"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="3" />
            </filter>
            <clipPath id={`${id}-plot`}>
              <rect x="0" y="65" width="464" height="139" />
            </clipPath>
            <linearGradient
              id={`${id}-cloud-0`}
              x1="0"
              y1="65"
              x2="0"
              y2="204"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#7030df" stopOpacity="0" />
              <stop offset=".28" stopColor="#7030df" stopOpacity=".12" />
              <stop offset=".65" stopColor="#7030df" stopOpacity=".5" />
              <stop offset="1" stopColor="#7030df" stopOpacity=".96" />
            </linearGradient>
            <linearGradient
              id={`${id}-cloud-1`}
              x1="0"
              y1="65"
              x2="0"
              y2="204"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#005df5" stopOpacity="0" />
              <stop offset=".28" stopColor="#005df5" stopOpacity=".12" />
              <stop offset=".65" stopColor="#005df5" stopOpacity=".5" />
              <stop offset="1" stopColor="#005df5" stopOpacity=".96" />
            </linearGradient>
            <linearGradient
              id={`${id}-cloud-2`}
              x1="0"
              y1="65"
              x2="0"
              y2="204"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#23a9de" stopOpacity="0" />
              <stop offset=".28" stopColor="#23a9de" stopOpacity=".12" />
              <stop offset=".65" stopColor="#23a9de" stopOpacity=".5" />
              <stop offset="1" stopColor="#23a9de" stopOpacity=".96" />
            </linearGradient>
            <linearGradient
              id={`${id}-spectrum`}
              x1="0"
              y1="0"
              x2="464"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#7030df" stopOpacity="0" />
              <stop offset=".12" stopColor="#7030df" stopOpacity="0.85" />
              <stop offset=".48" stopColor="#005df5" stopOpacity="1" />
              <stop offset=".86" stopColor="#23a9de" stopOpacity="0.85" />
              <stop offset="1" stopColor="#23a9de" stopOpacity="0" />
            </linearGradient>
          </defs>
          <text x="0" y="12" fill="#eee">
            Primary
          </text>
          <text x="0" y="41" fill="#ad7ce4">
            Purple
          </text>
          <text x="0" y="58" fill="#ad7ce4">
            60
          </text>
          <text x="163" y="41" fill="#6b9be4">
            Blue
          </text>
          <text x="163" y="58" fill="#6b9be4">
            60
          </text>
          <text x="326" y="41" fill="#5ebbe0">
            Cyan
          </text>
          <text x="326" y="58" fill="#5ebbe0">
            40
          </text>
          <g clipPath={`url(#${id}-plot)`}>
            <g filter={`url(#${id}-soft)`}>
              <path
                d="M0 204 C13 193 15 169 30 154 C45 140 66 143 83 156 C101 172 115 184 145 194 L186 204 Z"
                opacity=".45"
                fill={`url(#${id}-cloud-0)`}
                style={{ mixBlendMode: "screen" }}
              />
              <path
                d="M44 204 C75 194 100 185 124 161 C146 140 154 120 172 113 C190 105 199 92 216 94 C237 97 242 127 252 145 C263 164 278 176 305 188 L348 204 Z"
                opacity=".8"
                fill={`url(#${id}-cloud-1)`}
                style={{ mixBlendMode: "screen" }}
              />
              <path
                d="M192 204 C218 197 254 186 276 173 C297 159 309 143 325 149 C346 155 353 180 379 183 C399 189 420 198 438 178 C448 166 451 179 464 202 Z"
                opacity=".65"
                fill={`url(#${id}-cloud-2)`}
                style={{ mixBlendMode: "screen" }}
              />
            </g>
            <path
              d="M0 204 H464"
              stroke={`url(#${id}-spectrum)`}
              strokeWidth="7"
              filter={`url(#${id}-base)`}
            />
            <path
              d="M0 203.5 H464"
              stroke={`url(#${id}-spectrum)`}
              strokeWidth="1.5"
              opacity=".5"
            />
          </g>
        </svg>
      </figure>
    </>
  );
}
