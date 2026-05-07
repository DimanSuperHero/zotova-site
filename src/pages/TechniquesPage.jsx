import TechniquesGrid from '../components/TechniquesGrid'
import BookingForm from '../components/BookingForm'

export default function TechniquesPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-4">
        <span className="chip text-xs px-3 py-1 rounded-full uppercase tracking-[0.2em]">Услуги</span>
        <h1 className="serif text-7xl mt-4">Все техники.</h1>
        <p className="text-white/60 mt-4 max-w-xl">Каждая техника — отдельный язык работы с телом. Выберите по запросу или напишите мне — подберу подходящий формат.</p>
      </div>
      <TechniquesGrid />
      <BookingForm />
    </>
  )
}
