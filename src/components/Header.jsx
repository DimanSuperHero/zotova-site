import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const linkBase = 'text-sm text-ink/70 hover:text-accent transition-colors'
  const linkActive = ({ isActive }) => `${linkBase} ${isActive ? 'text-accent' : ''}`
  return (
    <header className="border-b border-white/10 sticky top-0 z-30 backdrop-blur bg-bg/80">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full" style={{ background: 'linear-gradient(135deg,#e8b4b8,#d4a574)' }} />
          <span className="serif text-3xl tracking-tight">Зотова<span className="text-accent">.</span></span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <NavLink to="/about" className={linkActive}>О мастере</NavLink>
          <NavLink to="/techniques" className={linkActive}>Техники</NavLink>
          <NavLink to="/reviews" className={linkActive}>Отзывы</NavLink>
          <NavLink to="/faq" className={linkActive}>Вопросы</NavLink>
          <NavLink to="/contacts" className={linkActive}>Контакты</NavLink>
        </nav>
        <Link to="/booking" className="px-5 py-2 rounded-full text-sm font-medium bg-accent text-bg hover:bg-accent-deep transition-colors">
          Записаться
        </Link>
      </div>
    </header>
  )
}
