
 // DevUI Button 05 - GTA Vice City Gradient

export const buttonMeta = {
  title: 'GTA Vice City Gradient',
  category: 'Gradient',
  description: 'GTA-stijl gradient met roze, paars en oranje.',
  tags: ['GTA', 'Gradient', 'Vice City'],
}

export default function Buttons5() {
  return (
    <button
      type="button"
      className="
        group relative
        inline-flex min-h-[56px]
        w-xs max-w-[300px]
        items-center justify-center
        rounded-xl px-6 py-3
        text-[16px] font-extrabold
        uppercase tracking-[1.5px]
        text-white
        transition-all duration-300
        hover:-translate-y-1
        hover:brightness-110
        active:translate-y-0
        active:scale-95
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-pink-400
      "
      style={{
        background:
          'linear-gradient(110deg, #FF3D9A 0%, #B34DDF 48%, #FF914D 100%)',
        boxShadow:
          '0 6px 22px rgba(255, 61, 154, 0.3)',
      }}
    >
      START GAME
    </button>
  )
}
