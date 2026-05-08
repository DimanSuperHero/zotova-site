import { studio } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-between items-center gap-6">
        <div>
          <div className="serif text-2xl">Зотова<span className="text-accent">.</span></div>
          <div className="text-xs text-white/40 mt-1">© Анна Зотова 2026 · авторская студия массажа · {studio.city}</div>
        </div>
        <div className="flex gap-6 text-sm text-white/50">
          <a href="#" className="hover:text-accent">Telegram</a>
          <a href="#" className="hover:text-accent">Instagram</a>
          <a href="#" className="hover:text-accent">2ГИС</a>
          <a href="#" className="hover:text-accent">WhatsApp</a>
        </div>
      </div>
    </footer>
  )
}
