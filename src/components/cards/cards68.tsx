// DevUI Card 68 — Warm Spectrum
// Standalone SVG artwork. No external images, fonts, or chart packages.
import { useId } from "react";

export const cardMeta = {
  title: "Card 68 — Warm Spectrum",
  category: "Charts / Spectrum",
  description:
    "A soft warm color spectrum with three luminous, blended color distributions on black.",
  tags: ["Spectrum", "Gradient", "Glow", "SVG"],
};

export default function Cards68() {
  const id = useId();
  return (
    <>
      <style>{`
        .devui-spectrum-68 { width:464px; max-width:100%; min-width:0; margin:0; background:#000; overflow:hidden; }
        .devui-spectrum-68, .devui-spectrum-68 * { box-sizing:border-box; }
        .devui-spectrum-68 svg { display:block; width:100%; height:auto; }
        .devui-spectrum-68 text { font-family:Arial,Helvetica,sans-serif; font-size:11px; font-weight:400; letter-spacing:.1px; }
      `}</style>
      <figure className="devui-spectrum-68" aria-label="Warm Spectrum">
        <svg
          viewBox="0 0 464 208"
          role="img"
          aria-labelledby={`${id}-title ${id}-description`}
        >
          <title id={`${id}-title`}>Warm Spectrum</title>
          <desc id={`${id}-description`}>
            A soft warm color spectrum with three luminous, blended color
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
              <stop offset="0" stopColor="#da6691" stopOpacity=".07" />
              <stop offset=".28" stopColor="#da6691" stopOpacity=".20" />
              <stop offset=".65" stopColor="#da6691" stopOpacity=".5" />
              <stop offset="1" stopColor="#da6691" stopOpacity=".96" />
            </linearGradient>
            <linearGradient
              id={`${id}-cloud-1`}
              x1="0"
              y1="65"
              x2="0"
              y2="204"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#8235eb" stopOpacity=".07" />
              <stop offset=".28" stopColor="#8235eb" stopOpacity=".20" />
              <stop offset=".65" stopColor="#8235eb" stopOpacity=".5" />
              <stop offset="1" stopColor="#8235eb" stopOpacity=".96" />
            </linearGradient>
            <linearGradient
              id={`${id}-cloud-2`}
              x1="0"
              y1="65"
              x2="0"
              y2="204"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#34a8de" stopOpacity=".07" />
              <stop offset=".28" stopColor="#34a8de" stopOpacity=".20" />
              <stop offset=".65" stopColor="#34a8de" stopOpacity=".5" />
              <stop offset="1" stopColor="#34a8de" stopOpacity=".96" />
            </linearGradient>
            <linearGradient
              id={`${id}-spectrum`}
              x1="0"
              y1="0"
              x2="464"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#da6691" stopOpacity="0" />
              <stop offset=".12" stopColor="#da6691" stopOpacity="0.85" />
              <stop offset=".48" stopColor="#8235eb" stopOpacity="1" />
              <stop offset=".86" stopColor="#34a8de" stopOpacity="0.85" />
              <stop offset="1" stopColor="#34a8de" stopOpacity="0" />
            </linearGradient>
          </defs>
          <text x="0" y="12" fill="#eee">
            Warm
          </text>
          <text x="0" y="41" fill="#ce8198">
            Red
          </text>
          <text x="0" y="58" fill="#ce8198">
            40
          </text>
          <text x="163" y="41" fill="#a277da">
            Purple
          </text>
          <text x="163" y="58" fill="#a277da">
            60
          </text>
          <text x="326" y="41" fill="#55bbd8">
            Cyan
          </text>
          <text x="326" y="58" fill="#55bbd8">
            40
          </text>
          <g clipPath={`url(#${id}-plot)`}>
            <g filter={`url(#${id}-soft)`}>
              <path
                d="M0 204 C9 181 14 121 30 93 C42 67 55 68 66 79 C82 94 89 109 112 120 C137 133 143 164 172 178 C194 189 215 197 241 204 Z"
                fill={`url(#${id}-cloud-0)`}
                style={{ mixBlendMode: "screen" }}
              />
              <path
                d="M63 204 C91 191 108 190 130 178 C154 164 164 129 189 122 C210 114 221 143 234 158 C250 180 269 172 287 182 C307 195 327 200 354 204 Z"
                fill={`url(#${id}-cloud-1)`}
                style={{ mixBlendMode: "screen" }}
              />
              <path
                d="M237 204 C269 189 287 197 306 193 C330 190 344 172 367 163 C386 155 393 128 410 139 C425 149 430 182 441 190 C451 195 457 199 464 204 Z"
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
