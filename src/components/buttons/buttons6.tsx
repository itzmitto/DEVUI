// DevUI button 06 - jouw eigen button
// Alleen dit bestand aanpassen. De Buttons-pagina ontdekt je code automatisch.

// DevUI Button 06 - Ocean Gradient

export const buttonMeta = {
  title: "Ocean Gradient",
  category: "Gradient",
  description: "Blauw-turquoise-groene gradientbutton met glow.",
  tags: ["Gradient", "Ocean", "Animated"],
};

export default function Buttons6() {
  return (
    <button
      type="button"
      className="
        group
        inline-flex min-h-[56px]
        w-small max-w-[300px]
        items-center justify-center gap-3
        rounded-xl px-6 py-3
        text-[16px] font-bold
        tracking-wide text-white
        shadow-[0_6px_24px_rgba(6,182,212,0.25)]
        transition-all duration-300
        hover:-translate-y-1
        hover:brightness-110
        hover:shadow-[0_10px_32px_rgba(6,182,212,0.45)]
        active:translate-y-0 active:scale-95
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-cyan-400
      "
      style={{
        background:
          "linear-gradient(110deg, #2563EB 0%, #06B6D4 50%, #10B981 100%)",
      }}
    >
      <span>GET STARTED</span>

      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="
          transition-transform duration-300
          group-hover:translate-x-1
          group-hover:-translate-y-1
        "
      >
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </svg>
    </button>
  );
}
