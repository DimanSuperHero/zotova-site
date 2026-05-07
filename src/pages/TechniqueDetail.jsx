import { useParams, Link } from 'react-router-dom'
import { techniques } from '../data'
import BookingForm from '../components/BookingForm'

export default function TechniqueDetail() {
  const { slug } = useParams()
  const t = techniques.find(x => x.slug === slug)

  if (!t) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="serif text-6xl">Не нашлось</h1>
        <p className="text-white/60 mt-4">Такой техники в каталоге нет.</p>
        <Link to="/techniques" className="inline-block mt-8 px-6 py-3 rounded-full bg-accent text-bg">← Все техники</Link>
      </div>
    )
  }

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-12 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <Link to="/techniques" className="text-sm text-white/50 hover:text-accent">← все техники</Link>
          {t.featured && <span className="chip text-xs px-3 py-1 rounded-full mt-6 inline-block">Авторская техника</span>}
          <h1 className="serif text-7xl mt-4">{t.name}</h1>
          <p className="italic-serif text-2xl mt-2 text-accent">{t.tagline}</p>
          <p className="text-lg text-white/70 mt-8 leading-relaxed">{t.long}</p>
          <h3 className="serif text-3xl mt-12 mb-4">Кому подойдёт</h3>
          <ul className="space-y-2 text-white/70">
            {t.forWhom.map((w, i) => (
              <li key={i} className="flex gap-3"><span className="text-accent">→</span> {w}</li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-5">
          <div className="card rounded-3xl p-8 sticky top-28">
            <div className="text-sm text-white/50 uppercase tracking-wider">Длительность</div>
            <div className="serif text-3xl mt-1">{t.duration}</div>
            <div className="text-sm text-white/50 uppercase tracking-wider mt-6">Стоимость</div>
            <div className="serif text-5xl mt-1 text-accent">{t.price.toLocaleString('ru')} ₽</div>
            <Link to="/booking" className="mt-8 block text-center w-full px-7 py-4 rounded-full font-semibold bg-accent text-bg hover:bg-accent-deep transition-colors">
              Записаться →
            </Link>
            <p className="text-xs text-white/40 text-center mt-4">Я перезвоню в течение часа</p>
          </div>
        </div>
      </section>
      <BookingForm defaultTechnique={t.slug} />
    </>
  )
}
