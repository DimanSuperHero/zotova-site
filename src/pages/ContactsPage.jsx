import { studio } from '../data'

export default function ContactsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-12">
      <div className="md:col-span-6">
        <span className="chip text-xs px-3 py-1 rounded-full uppercase tracking-[0.2em]">Контакты</span>
        <h1 className="serif text-7xl mt-4">Как меня найти.</h1>
        <div className="mt-10 space-y-6">
          <div>
            <div className="text-xs text-white/50 uppercase tracking-wider">Студия</div>
            <div className="serif text-3xl mt-1">{studio.city}, {studio.address}</div>
            <p className="text-white/60 mt-2 text-sm">Кабинет на одного клиента, парковка во дворе. Душ, фен, чай — всё внутри.</p>
          </div>
          <div>
            <div className="text-xs text-white/50 uppercase tracking-wider">Часы работы</div>
            <div className="serif text-3xl mt-1">{studio.hours}</div>
            <p className="text-white/60 mt-2 text-sm">Воскресенье — выходной. По воскресеньям выезжаю на парные сеансы по запросу.</p>
          </div>
          <div>
            <div className="text-xs text-white/50 uppercase tracking-wider">Связь</div>
            <div className="serif text-3xl mt-1">{studio.phone}</div>
            <div className="serif text-2xl mt-1 text-accent">{studio.telegram}</div>
            <p className="text-white/60 mt-2 text-sm">Telegram — самый быстрый способ. Отвечаю в течение часа в рабочие часы.</p>
          </div>
        </div>
      </div>
      <div className="md:col-span-6">
        <div className="card rounded-3xl overflow-hidden aspect-square flex items-center justify-center text-white/40">
          <div className="text-center">
            <div className="serif text-3xl text-white/60">Карта</div>
            <p className="text-sm mt-2">сюда встанет встраиваемая карта 2ГИС или Яндекс</p>
          </div>
        </div>
      </div>
    </section>
  )
}
