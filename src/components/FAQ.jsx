import { faq } from '../data'

export default function FAQ() {
  return (
    <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="grid md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-4">
          <span className="chip text-xs px-3 py-1 rounded-full uppercase tracking-[0.2em]">Частые вопросы</span>
          <h2 className="serif text-5xl sm:text-6xl mt-4 leading-[1.0]">
            Что важно<br />знать <em className="italic-serif text-accent">до</em><br />сеанса.
          </h2>
          <p className="text-white/50 mt-6 text-sm leading-relaxed">Не нашли свой вопрос? Напишите мне в Telegram — отвечу в течение часа.</p>
          <a href="#" className="inline-block mt-6 px-5 py-3 rounded-full border border-white/20 text-sm hover:border-accent transition-colors">Написать в Telegram →</a>
        </div>
        <div className="md:col-span-8 space-y-3">
          {faq.map((item, i) => (
            <details key={i} className="card rounded-2xl p-5 sm:p-6 group" open={i === 0}>
              <summary className="flex justify-between items-center gap-4 cursor-pointer list-none">
                <span className="serif text-xl sm:text-2xl">{item.q}</span>
                <span className="text-2xl transition-transform group-open:rotate-45 text-accent shrink-0">+</span>
              </summary>
              <p className="text-white/65 mt-4 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
