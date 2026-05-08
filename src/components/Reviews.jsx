import { reviews } from '../data'

const tintMap = {
  accent: '#e8b4b8',
  gold: '#d4a574',
  'accent-deep': '#b97a7e',
}

export default function Reviews({ limit }) {
  const items = limit ? reviews.slice(0, limit) : reviews
  return (
    <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="text-center mb-12 sm:mb-14">
        <span className="chip text-xs px-3 py-1 rounded-full uppercase tracking-[0.2em]">Что говорят</span>
        <h2 className="serif text-5xl sm:text-6xl mt-4">Отзывы.</h2>
        <p className="text-white/50 mt-3">147 отзывов на 2ГИС · средняя оценка 4.98</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((r, i) => (
          <div key={i} className="card rounded-3xl p-6 sm:p-8 relative" style={i === 1 ? { background: 'linear-gradient(135deg,rgba(232,180,184,.08),transparent)' } : {}}>
            <div className="serif text-7xl absolute top-3 left-3 text-accent/30 leading-none">"</div>
            <p className="text-white/70 leading-relaxed pt-6 italic-serif text-lg">{r.text}</p>
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
              <div className="w-10 h-10 rounded-full" style={{ background: tintMap[r.tint] }} />
              <div>
                <div className="serif text-lg">{r.author}</div>
                <div className="text-xs text-white/50">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
