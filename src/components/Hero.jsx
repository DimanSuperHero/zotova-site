import { Link } from 'react-router-dom'
import { studio } from '../data'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-40 -right-32 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl bg-accent" />
      <div className="absolute top-60 -left-40 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl bg-gold" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-24 pb-16 sm:pb-32 grid md:grid-cols-12 gap-10 relative">
        <div className="md:col-span-7">
          <span className="chip text-xs px-3 py-1 rounded-full uppercase tracking-[0.2em]">Авторская техника · {studio.city}</span>
          <h1 className="serif text-5xl sm:text-7xl md:text-8xl leading-[1.05] mt-6 break-words">
            Прикосновение,<br />
            в котором <em className="italic-serif text-accent">тело</em><br />
            <span className="text-white/40">наконец отпускает.</span>
          </h1>
          <p className="text-base sm:text-lg text-white/60 mt-6 sm:mt-8 max-w-xl font-light">
            Нежный расслабляющий чувственный массаж — авторская техника Анны Зотовой. Медленный темп, тёплое масло, тишина. Для тех, кто живёт головой и забыл, что у него есть тело.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">
            <Link to="/#booking" className="glow px-6 sm:px-7 py-4 rounded-full font-semibold bg-accent text-bg hover:bg-accent-deep transition-colors text-center">
              Записаться на сеанс →
            </Link>
            <Link to="/techniques" className="px-6 sm:px-7 py-4 rounded-full border border-white/20 hover:border-accent transition-colors text-center">
              О технике
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 sm:gap-8 mt-10 sm:mt-12 text-sm text-white/50">
            <div><div className="serif text-3xl sm:text-4xl text-white">9 лет</div>в практике</div>
            <div><div className="serif text-3xl sm:text-4xl text-white">1 200+</div>клиентов</div>
            <div><div className="serif text-3xl sm:text-4xl text-white">4.98</div>средняя оценка</div>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30" style={{ background: 'linear-gradient(135deg,#e8b4b8,#d4a574)' }} />
          <div className="relative rounded-3xl overflow-hidden card aspect-[4/5]">
            <video src="/assets/anna-hero.mp4" autoPlay muted loop playsInline poster="/assets/anna-portrait.jpg" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-black to-transparent pointer-events-none">
              <div className="text-xs uppercase tracking-widest text-accent">Студия в центре</div>
              <div className="serif text-2xl sm:text-3xl mt-1">{studio.address}</div>
              <div className="text-sm text-white/60">Кабинет на 1 клиента · парковка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
