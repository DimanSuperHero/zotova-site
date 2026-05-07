export default function About({ compact = false }) {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5">
        <div className="rounded-3xl overflow-hidden aspect-[4/5] card">
          <img src="/assets/anna-portrait.jpg" alt="Анна Зотова" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="md:col-span-7 flex flex-col justify-center">
        <span className="chip text-xs px-3 py-1 rounded-full uppercase tracking-[0.2em] self-start">Знакомство</span>
        <h2 className="serif text-6xl mt-6">Анна Зотова</h2>
        <p className="italic-serif text-2xl mt-3 text-accent">мастер прикосновения · автор техники «Тёплый шёлк»</p>
        <div className="mt-8 space-y-5 text-white/70 leading-relaxed">
          <p>Я пришла в массаж после восьми лет в IT-менеджменте. Однажды я просто перестала чувствовать своё тело — и поняла, что таких людей вокруг тысячи. Мы научились отлично работать руками за компьютером и совсем разучились слышать себя.</p>
          <p>За девять лет практики я училась у российских и тайских мастеров, прошла подготовку по слинг-терапии и работе с фасциями. Но главное, что я нашла — это <em className="italic-serif text-accent">свой темп</em>. Мой массаж — медленный. Я не разминаю мышцы, я разговариваю с ними прикосновением.</p>
          {!compact && <p>Ко мне приходят, когда устали быть сильными. Когда нужно час побыть никому ничего не должным. Я создаю пространство, где можно выдохнуть.</p>}
        </div>
        <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
          <div>
            <div className="serif text-3xl text-accent">2017</div>
            <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Сертификация Тайланд</div>
          </div>
          <div>
            <div className="serif text-3xl text-accent">2021</div>
            <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Авторский курс</div>
          </div>
          <div>
            <div className="serif text-3xl text-accent">2024</div>
            <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Книга «Тёплый шёлк»</div>
          </div>
        </div>
      </div>
    </section>
  )
}
