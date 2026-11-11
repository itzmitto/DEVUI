// DevUI Card 74 — Frosted Aurora
// The finished glass tile from the reference, drawn entirely with SVG.
import { useId } from "react";

export const cardMeta = {
  title: "Card 74 — Frosted Aurora",
  category: "Glass / Glow",
  description:
    "A frosted blue-violet glass tile with a pearl rim, soft refraction and an electric glow beneath it.",
  tags: ["Glass", "Frosted", "Gradient", "Glow", "SVG"],
};

export default function Cards74() {
  const id = useId();

  return (
    <>
      <style>{`
        .devui-glass-74 { width:360px; max-width:100%; min-width:0; margin:0; isolation:isolate; }
        .devui-glass-74, .devui-glass-74 * { box-sizing:border-box; }
        .devui-glass-74 svg { display:block; width:100%; height:auto; overflow:visible; }
      `}</style>
      <figure className="devui-glass-74">
        <svg
          viewBox="0 0 400 440"
          role="img"
          aria-labelledby={`${id}-title ${id}-description`}
        >
          <title id={`${id}-title`}>Frosted Aurora glass card</title>
          <desc id={`${id}-description`}>
            A rounded square of smoky blue and purple glass. Pearly highlights
            trace the upper left and lower right edges, with a soft blue-violet
            glow underneath.
          </desc>
          <defs>
            <linearGradient
              id={`${id}-body`}
              x1="48"
              y1="37"
              x2="363"
              y2="375"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9598bb" />
              <stop offset=".19" stopColor="#565d82" />
              <stop offset=".46" stopColor="#30344f" />
              <stop offset=".72" stopColor="#3e2d6b" />
              <stop offset=".9" stopColor="#6830b6" />
              <stop offset="1" stopColor="#d7a1ff" />
            </linearGradient>
            <radialGradient id={`${id}-frost`} cx=".04" cy=".04" r="1.05">
              <stop stopColor="#f5f4ff" stopOpacity=".64" />
              <stop offset=".24" stopColor="#b6c4f1" stopOpacity=".16" />
              <stop offset=".56" stopColor="#8ba4d6" stopOpacity=".02" />
              <stop offset="1" stopColor="#a966f8" stopOpacity=".1" />
            </radialGradient>
            <linearGradient
              id={`${id}-rim`}
              x1="41"
              y1="40"
              x2="364"
              y2="367"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset=".14" stopColor="#cbd2f4" />
              <stop offset=".43" stopColor="#9d9fd8" stopOpacity=".7" />
              <stop offset=".68" stopColor="#c2b0fc" />
              <stop offset=".91" stopColor="#fce6ff" />
              <stop offset="1" stopColor="#f8eeff" />
            </linearGradient>
            <linearGradient
              id={`${id}-inner-rim`}
              x1="69"
              y1="55"
              x2="349"
              y2="359"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f7f8ff" stopOpacity=".9" />
              <stop offset=".27" stopColor="#c6d4ff" stopOpacity=".2" />
              <stop offset=".5" stopColor="#8493ec" stopOpacity=".05" />
              <stop offset=".77" stopColor="#b3a4ff" stopOpacity=".6" />
              <stop offset="1" stopColor="#fff0ff" />
            </linearGradient>
            <linearGradient
              id={`${id}-bottom-rim`}
              x1="42"
              y1="370"
              x2="365"
              y2="365"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#83aaff" stopOpacity=".35" />
              <stop offset=".4" stopColor="#abb8ff" />
              <stop offset=".78" stopColor="#e1a6ff" />
              <stop offset="1" stopColor="#fff2ff" />
            </linearGradient>
            <clipPath id={`${id}-clip`}>
              <rect x="28" y="24" width="344" height="354" rx="68" />
            </clipPath>
            <filter
              id={`${id}-diffuse`}
              x="-70%"
              y="-200%"
              width="240%"
              height="500%"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="19" />
            </filter>
            <filter
              id={`${id}-soft`}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="13" />
            </filter>
            <filter
              id={`${id}-edge`}
              x="-25%"
              y="-25%"
              width="150%"
              height="150%"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="3.3" />
            </filter>
            <filter id={`${id}-grain`} x="0" y="0" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency=".8"
                numOctaves="3"
                seed="7"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>

          {/* The glow is separate from the tile, so the face remains smoky. */}
          <g filter={`url(#${id}-diffuse)`}>
            <ellipse
              cx="185"
              cy="384"
              rx="130"
              ry="15"
              fill="#3e58ff"
              opacity=".56"
            />
            <ellipse
              cx="287"
              cy="383"
              rx="66"
              ry="15"
              fill="#982eff"
              opacity=".6"
            />
          </g>

          <rect
            x="28"
            y="24"
            width="344"
            height="354"
            rx="68"
            fill={`url(#${id}-body)`}
          />
          <g clipPath={`url(#${id}-clip)`}>
            <rect
              x="28"
              y="24"
              width="344"
              height="354"
              fill={`url(#${id}-frost)`}
            />
            <g filter={`url(#${id}-soft)`}>
              <ellipse
                cx="60"
                cy="43"
                rx="59"
                ry="27"
                fill="#f3f4ff"
                opacity=".65"
              />
              <path
                d="M42 80V309Q42 362 89 365H271"
                fill="none"
                stroke="#83aaff"
                strokeWidth="17"
                opacity=".33"
              />
              <path
                d="M359 125V309Q359 365 308 367H220"
                fill="none"
                stroke="#b176ff"
                strokeWidth="24"
                opacity=".8"
              />
              <ellipse
                cx="329"
                cy="357"
                rx="28"
                ry="18"
                fill="#ffe4ff"
                opacity=".9"
              />
            </g>
            <rect
              x="28"
              y="24"
              width="344"
              height="354"
              filter={`url(#${id}-grain)`}
              opacity=".035"
            />
            <rect
              x="31"
              y="27"
              width="338"
              height="348"
              rx="66"
              fill="none"
              stroke={`url(#${id}-rim)`}
              strokeWidth="8"
              opacity=".55"
              filter={`url(#${id}-edge)`}
            />
            <rect
              x="36"
              y="32"
              width="328"
              height="338"
              rx="61"
              fill="none"
              stroke="#171938"
              strokeWidth="3"
              opacity=".54"
            />
            <rect
              x="40"
              y="36"
              width="320"
              height="330"
              rx="57"
              fill="none"
              stroke={`url(#${id}-inner-rim)`}
              strokeWidth="2.2"
            />
            <path
              d="M42 292V310Q42 365 97 365H302Q359 365 359 309V285"
              fill="none"
              stroke={`url(#${id}-bottom-rim)`}
              strokeWidth="4"
              filter={`url(#${id}-edge)`}
            />
            <path
              d="M46 106V87Q46 41 94 41H263"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              opacity=".46"
              filter={`url(#${id}-edge)`}
            />
          </g>
          <rect
            x="28.8"
            y="24.8"
            width="342.4"
            height="352.4"
            rx="67.2"
            fill="none"
            stroke={`url(#${id}-rim)`}
            strokeWidth="1.6"
          />
        </svg>
      </figure>
    </>
  );
}
