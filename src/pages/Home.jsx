import Hero from '../components/Hero'
import About from '../components/About'
import TechniquesGrid from '../components/TechniquesGrid'
import Reviews from '../components/Reviews'
import FAQ from '../components/FAQ'
import BookingForm from '../components/BookingForm'

export default function Home() {
  return (
    <>
      <Hero />
      <About compact />
      <TechniquesGrid />
      <Reviews limit={3} />
      <FAQ />
      <BookingForm />
    </>
  )
}
