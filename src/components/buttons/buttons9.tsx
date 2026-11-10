// DevUI button 09 - jouw eigen button
// Alleen dit bestand aanpassen. De Buttons-pagina ontdekt je code automatisch.

// DevUI Button 09 - Pastel Gradient

export const buttonMeta = {
  title: "Pastel Gradient",
  category: "Gradient",
  description: "Pastel button met mintgroen, blauw, wit en roze.",
  tags: ["Pastel", "Gradient", "Remix Icon"],
};

export default function Buttons9() {
  return (
    <button
      type="button"
      className="
        inline-flex
        h-[64px]
        w-[258px]
        max-w-full
        items-center
        justify-center
        gap-[10px]
        rounded-full
        border border-white/60
        px-5
        text-[18px]
        font-semibold
        tracking-[-0.4px]
        text-[#101014]
        shadow-[inset_0_2px_4px_rgba(255,255,255,0.45)]
        transition-transform duration-200
        hover:scale-[1.03]
        active:scale-[0.97]
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-white
      "
      style={{
        background: `
          radial-gradient(
            ellipse 45% 85% at 56% 116%,
            #FFFFFF 0%,
            rgba(255,255,255,0.98) 20%,
            rgba(255,255,255,0.70) 38%,
            transparent 78%
          ),
          linear-gradient(
            102deg,
            #8FF5F7 0%,
            #9AF8E9 28%,
            #A9FFD8 48%,
            #D7D5E7 77%,
            #EAAAF1 100%
          )
        `,
      }}
    >
      <span>Get Started</span>

      <i
        className="ri-send-plane-fill text-[21px] leading-none"
        aria-hidden="true"
      />
    </button>
  );
}
