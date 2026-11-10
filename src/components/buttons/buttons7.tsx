// DevUI button 07 - jouw eigen button
// Alleen dit bestand aanpassen. De Buttons-pagina ontdekt je code automatisch.

export const buttonMeta = {
  title: "Cyber Aurora",
  category: "Gradient",
  description: "Paarse en cyaanblauwe gradient met een 1px border.",
  tags: ["Gradient", "Aurora", "Hover"],
};

export default function Buttons7() {
  return (
    <div
      className="
        group inline-flex w-full max-w-sm
        rounded-md p-px
        transition-all duration-300
        hover:shadow-[0_0_24px_rgba(34,211,238,0.25)]
      "
      style={{
        background: "linear-gradient(115deg, #7C3AED, #22D3EE, #818CF8)",
      }}
    >
      <button
        type="button"
        className="
          flex min-h-[52px] w-full
          items-center justify-center gap-3
          rounded-[5px] px-5 py-3
          text-sm font-semibold text-[#EDE9FE]
          transition-all duration-300
          hover:brightness-125
          active:scale-[0.98]
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-cyan-400
        "
        style={{
          background: "linear-gradient(110deg, #13112D, #13243B)",
        }}
      >
        <span className="text-[#67E8F9]">✦</span>

        <span>Explore Features</span>

        <span
          className="
            text-lg text-[#67E8F9]
            transition-transform duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </button>
    </div>
  );
}
