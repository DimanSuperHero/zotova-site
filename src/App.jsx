import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import TechniquesPage from './pages/TechniquesPage'
import TechniqueDetail from './pages/TechniqueDetail'
import ReviewsPage from './pages/ReviewsPage'
import FAQPage from './pages/FAQPage'
import BookingPage from './pages/BookingPage'
import ContactsPage from './pages/ContactsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/techniques" element={<TechniquesPage />} />
          <Route path="/techniques/:slug" element={<TechniqueDetail />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
