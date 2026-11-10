// DevUI button 03 - jouw eigen button
// Alleen dit bestand aanpassen. De Buttons-pagina ontdekt je code automatisch.


export const buttonMeta = {
  title: 'Pink Orange Gradient',
  category: 'Gradient',
  description: 'Roze-oranje gradient button met 10px border radius.',
  tags: ['Gradient', 'Pink', 'Orange'],
}

export default function Buttons3() {
  return (
    <button
      type="button"
      className="
        rounded-[10px]
        bg-[linear-gradient(135deg,#FF2D87,#FF891F)]
        px-8
        py-3
        font-semibold
        text-[#110B16]
        transition-transform
        duration-200
        hover:scale-105
        active:scale-95
        cursor-pointer
      "
    >
      Button 03
    </button>
  )
}
