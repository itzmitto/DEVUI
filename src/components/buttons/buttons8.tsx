// DevUI button 08 - jouw eigen button
// Alleen dit bestand aanpassen. De Buttons-pagina ontdekt je code automatisch.

export const buttonMeta = {
  title: "Sunset Glow",
  category: "Gradient",
  description: "Roze-oranje gradient met een glanzende hover.",
  tags: ["Gradient", "Sunset", "Animated"],
};

export default function Buttons8() {
  return (
    <div
      className="
        group inline-flex w-full max-w-sm
        rounded-md p-px
        transition-all duration-300
        hover:shadow-[0_0_25px_rgba(255,63,133,0.3)]
      "
      style={{
        background: "linear-gradient(110deg, #FF3F85, #FF8A4C, #FFE08A)",
      }}
    >
      <button
        type="button"
        className="
          relative flex min-h-[52px] w-full
          items-center justify-center gap-3
          overflow-hidden rounded-[5px]
          px-5 py-3
          text-sm font-semibold text-[#FFF0E8]
          transition-all duration-300
          hover:brightness-110
          active:scale-[0.98]
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-orange-300
        "
        style={{
          background: "linear-gradient(110deg, #351228, #4E2330)",
        }}
      >
        {/* Glanzende hoveranimatie */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent via-white/15 to-transparent
            transition-transform duration-700
            group-hover:translate-x-full
          "
        />

        <span className="relative z-10 text-[#FFD19A]">✦</span>

        <span className="relative z-10">Get Started</span>

        <svg
          className="
            relative z-10 text-[#FFD19A]
            transition-transform duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </button>
    </div>
  );
}
