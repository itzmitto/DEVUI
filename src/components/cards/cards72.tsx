// DevUI Card 72 — Cool Spectrum
// Standalone SVG artwork. No external images, fonts, or chart packages.
import { useId } from "react";

export const cardMeta = {
  title: "Card 72 — Cool Spectrum",
  category: "Charts / Spectrum",
  description:
    "A soft cool color spectrum with three luminous, blended color distributions on black.",
  tags: ["Spectrum", "Gradient", "Glow", "SVG"],
};

export default function Cards72() {
  const id = useId();
  return (
    <>
      <style>{`
        .devui-spectrum-72 { width:464px; max-width:100%; min-width:0; margin:0; background:#000; overflow:hidden; }
        .devui-spectrum-72, .devui-spectrum-72 * { box-sizing:border-box; }
        .devui-spectrum-72 svg { display:block; width:100%; height:auto; }
        .devui-spectrum-72 text { font-family:Arial,Helvetica,sans-serif; font-size:11px; font-weight:400; letter-spacing:.1px; }
      `}</style>
      <figure className="devui-spectrum-72" aria-label="Cool Spectrum">
        <svg
          viewBox="0 0 464 208"
          role="img"
          aria-labelledby={`${id}-title ${id}-description`}
        >
          <title id={`${id}-title`}>Cool Spectrum</title>
          <desc id={`${id}-description`}>
            A soft cool color spectrum with three luminous, blended color
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
              <stop offset="0" stopColor="#1260e4" stopOpacity=".07" />
              <stop offset=".28" stopColor="#1260e4" stopOpacity=".20" />
              <stop offset=".65" stopColor="#1260e4" stopOpacity=".5" />
              <stop offset="1" stopColor="#1260e4" stopOpacity=".96" />
            </linearGradient>
            <linearGradient
              id={`${id}-cloud-1`}
              x1="0"
              y1="65"
              x2="0"
              y2="204"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#16b7de" stopOpacity=".07" />
              <stop offset=".28" stopColor="#16b7de" stopOpacity=".20" />
              <stop offset=".65" stopColor="#16b7de" stopOpacity=".5" />
              <stop offset="1" stopColor="#16b7de" stopOpacity=".96" />
            </linearGradient>
            <linearGradient
              id={`${id}-cloud-2`}
              x1="0"
              y1="65"
              x2="0"
              y2="204"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#91d1ad" stopOpacity=".07" />
              <stop offset=".28" stopColor="#91d1ad" stopOpacity=".20" />
              <stop offset=".65" stopColor="#91d1ad" stopOpacity=".5" />
              <stop offset="1" stopColor="#91d1ad" stopOpacity=".96" />
            </linearGradient>
            <linearGradient
              id={`${id}-spectrum`}
              x1="0"
              y1="0"
              x2="464"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#1260e4" stopOpacity="0" />
              <stop offset=".12" stopColor="#1260e4" stopOpacity="0.85" />
              <stop offset=".48" stopColor="#16b7de" stopOpacity="1" />
              <stop offset=".86" stopColor="#91d1ad" stopOpacity="0.85" />
              <stop offset="1" stopColor="#91d1ad" stopOpacity="0" />
            </linearGradient>
          </defs>
          <text x="0" y="12" fill="#eee">
            Cool
          </text>
          <text x="0" y="41" fill="#6b9de3">
            Blue
          </text>
          <text x="0" y="58" fill="#6b9de3">
            60
          </text>
          <text x="163" y="41" fill="#57c0dc">
            Cyan
          </text>
          <text x="163" y="58" fill="#57c0dc">
            40
          </text>
          <text x="326" y="41" fill="#92c9a7">
            Green
          </text>
          <text x="326" y="58" fill="#92c9a7">
            20
          </text>
          <g clipPath={`url(#${id}-plot)`}>
            <g filter={`url(#${id}-soft)`}>
              <path
                d="M0 204 C10 195 15 170 35 151 C54 134 77 143 100 153 C121 160 148 155 165 168 C182 181 193 196 224 204 Z"
                fill={`url(#${id}-cloud-0)`}
                style={{ mixBlendMode: "screen" }}
              />
              <path
                d="M53 204 C80 197 103 183 129 175 C150 167 171 174 189 183 C216 196 229 192 248 183 C268 174 284 177 306 183 C330 191 359 198 377 204 Z"
                fill={`url(#${id}-cloud-1)`}
                style={{ mixBlendMode: "screen" }}
              />
              <path
                d="M205 204 C231 197 248 179 270 173 C294 165 306 170 327 157 C350 129 357 104 376 100 C393 96 398 75 409 83 C426 100 428 153 444 181 C455 194 460 198 464 204 Z"
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
