import { useState } from 'react'
import { techniques, studio } from '../data'

export default function BookingForm({ defaultTechnique }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', technique: defaultTechnique || techniques[0].slug })

  const submit = (e) => {
    e.preventDefault()
    console.log('Booking submitted:', form)
    setSent(true)
  }

  return (
    <section id="booking" className="max-w-7xl mx-auto px-6 py-20">
      <div className="rounded-[2rem] p-16 relative overflow-hidden text-bg" style={{ background: 'linear-gradient(135deg,#e8b4b8,#d4a574)' }}>
        <div className="grid md:grid-cols-12 gap-10 relative">
          <div className="md:col-span-7">
            <h2 className="serif text-7xl leading-[0.95] text-bg">
              Запишитесь<br />на <em className="italic-serif">первый</em> сеанс.
            </h2>
            <p className="mt-6 text-black/70 max-w-md">
              Выберите технику и удобное время. В течение часа я перезвоню, чтобы уточнить детали и подобрать идеальный для вас формат.
            </p>
            <div className="mt-8 space-y-2 text-black/80">
              <div className="flex gap-3"><span className="serif font-bold">→</span> Студия: {studio.address}</div>
              <div className="flex gap-3"><span className="serif font-bold">→</span> {studio.hours}</div>
              <div className="flex gap-3"><span className="serif font-bold">→</span> Парковка во дворе</div>
            </div>
          </div>
          <div className="md:col-span-5">
            {sent ? (
              <div className="rounded-2xl p-8 bg-bg text-ink text-center">
                <div className="serif text-4xl text-accent">Спасибо!</div>
                <p className="mt-4 text-white/70">Я перезвоню в течение часа на номер<br /><span className="text-accent">{form.phone}</span></p>
                <button onClick={() => setSent(false)} className="mt-6 text-xs text-white/50 underline">отправить ещё одну заявку</button>
              </div>
            ) : (
              <form onSubmit={submit} className="rounded-2xl p-6 space-y-3 bg-bg text-ink">
                <input
                  required
                  type="text"
                  placeholder="Как к вам обращаться"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-accent text-sm"
                />
                <input
                  required
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-accent text-sm"
                />
                <select
                  value={form.technique}
                  onChange={e => setForm({ ...form, technique: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none text-sm"
                >
                  {techniques.map(t => (
                    <option key={t.slug} value={t.slug}>{t.name} · {t.duration}</option>
                  ))}
                </select>
                <button type="submit" className="w-full px-7 py-4 rounded-xl font-semibold bg-accent text-bg hover:bg-accent-deep transition-colors">
                  Забронировать →
                </button>
                <p className="text-xs text-white/40 text-center pt-2">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
