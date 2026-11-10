// DevUI button 04 - jouw eigen button
// Alleen dit bestand aanpassen. De Buttons-pagina ontdekt je code automatisch.

import { useState } from "react";

// DevUI Button 04 - PS5 / Xbox status

export const buttonMeta = {
  title: "PS5 / Xbox Status",
  category: "Gradient",
  description: "Roze-oranje statusbutton met checkbox.",
  tags: ["Gradient", "Checkbox", "Gaming"],
};

export default function Buttons4() {
  const [checked, setChecked] = useState(true);

  return (
    <button
      type="button"
      onClick={() => setChecked(!checked)}
      aria-pressed={checked}
      className="
        inline-flex
        min-h-[60px]
        w-full
        max-w-[656px]
        items-center
        gap-4
        rounded-[16px]
        px-[23px]
        text-left
        text-[18px]
        font-medium
        text-black
        transition-opacity
        hover:opacity-90
      "
      style={{
        background: "linear-gradient(90deg, #FF2F84 0%, #FF891F 100%)",
      }}
    >
      <span
        className="
          flex
          h-[24px]
          w-[24px]
          shrink-0
          items-center
          justify-center
          rounded-[3px]
          bg-[#08070B]
        "
      >
        {checked && (
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 12.5L9.5 18L20 5"
              stroke="white"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>

      <span>PS5 of Xbox Series X|S staat klaar</span>
    </button>
  );
}
