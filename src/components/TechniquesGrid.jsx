import { Link } from 'react-router-dom'
import { techniques } from '../data'

export default function TechniquesGrid({ limit }) {
  const items = limit ? techniques.slice(0, limit) : techniques
  const featured = items.find(t => t.featured)
  const rest = items.filter(t => !t.featured)
  const tandem = rest[0]
  const others = rest.slice(1)

  return (
    <section id="techniques" className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex justify-between items-end mb-10">
        <div>
          <span className="chip text-xs px-3 py-1 rounded-full uppercase tracking-[0.2em]">Что я предлагаю</span>
          <h2 className="serif text-6xl mt-4">Техники.</h2>
        </div>
        <Link to="/techniques" className="text-sm text-accent hover:underline">Все техники →</Link>
      </div>
      <div className="grid md:grid-cols-12 gap-5">
        {featured && (
          <Link to={`/techniques/${featured.slug}`} className="md:col-span-7 card rounded-3xl p-8 h-96 relative overflow-hidden block">
            <span className="chip text-xs px-3 py-1 rounded-full">Авторская техника</span>
            <h3 className="serif text-5xl mt-4">{featured.name}</h3>
            <p className="italic-serif text-lg mt-2 text-white/60">{featured.tagline}</p>
            <p className="text-white/60 mt-5 text-sm max-w-md leading-relaxed">{featured.short}</p>
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div className="text-sm text-white/50">{featured.duration} · сеанс 1 на 1</div>
              <div className="serif text-3xl">{featured.price.toLocaleString('ru')} ₽</div>
            </div>
          </Link>
        )}
        {tandem && (
          <Link to={`/techniques/${tandem.slug}`} className="md:col-span-5 card rounded-3xl p-8 h-96 block" style={{ background: 'linear-gradient(135deg,rgba(232,180,184,.12),transparent)' }}>
            <span className="text-xs uppercase tracking-widest text-accent">Для пар</span>
            <h3 className="serif text-4xl mt-4">{tandem.name}</h3>
            <p className="italic-serif text-lg mt-2 text-white/60">{tandem.tagline}</p>
            <p className="text-white/60 mt-5 text-sm leading-relaxed">{tandem.short}</p>
            <div className="mt-12 flex justify-between items-end">
              <div className="text-sm text-white/50">{tandem.duration} · 2 человека</div>
              <div className="serif text-3xl">{tandem.price.toLocaleString('ru')} ₽</div>
            </div>
          </Link>
        )}
        {others.map(t => (
          <Link key={t.slug} to={`/techniques/${t.slug}`} className="md:col-span-4 card rounded-3xl p-8 h-72 block">
            <h3 className="serif text-3xl">{t.name}</h3>
            <p className="italic-serif text-sm mt-1 text-accent">{t.tagline}</p>
            <p className="text-white/50 text-sm mt-3">{t.duration} · {t.price.toLocaleString('ru')} ₽</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
