// DevUI Card 01 - voorbeeldkaart
export const cardMeta = {
  title: 'Aurora Product Card',
  category: 'Voorbeeld',
  description: 'Productkaart met een kleurrijke header en details.',
  tags: ['Gradient', 'Product', 'Hover'],
}

export default function Cards1() {
  return (
    <article className="group w-full max-w-[260px] overflow-hidden rounded-xl border border-white/15 bg-[#191522] text-white shadow-xl transition-transform duration-300 hover:-translate-y-1">
      <div
        className="relative flex h-[106px] items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(115deg, #422079 0%, #8B5CF6 55%, #F472B6 100%)' }}
      >
        <div aria-hidden="true" className="absolute -right-4 -top-10 h-36 w-36 rounded-full border-[18px] border-white/20" />
        <div aria-hidden="true" className="absolute bottom-2 left-7 h-14 w-14 rotate-45 rounded-xl bg-white/20 shadow-lg backdrop-blur-md" />
        <span className="relative z-10 text-[40px] text-white drop-shadow-lg">✦</span>
        <span className="absolute right-3 top-3 rounded-full border border-white/30 bg-black/20 px-2 py-1 text-[9px] font-semibold tracking-wide">NEW</span>
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#C5A4FA]">UI COLLECTION</span>
          <span className="text-[11px] text-yellow-300">★ 4.9</span>
        </div>
        <h3 className="mb-1 text-[18px] font-bold leading-tight">Aurora Card</h3>
        <p className="mb-4 text-[12px] leading-relaxed text-[#AAA3B6]">
          Een modern ontwerp met zachte gradients.
        </p>
        <div className="flex items-center justify-between border-t border-white/10 pt-3">
          <span className="text-[16px] font-bold">€ 29,00</span>
          <span className="rounded-md border border-[#A977F0] bg-[#6B3FA1] px-3 py-2 text-[11px] font-semibold transition-colors group-hover:bg-[#8753CA]">
            Bekijk →
          </span>
        </div>
      </div>
    </article>
  )
}
