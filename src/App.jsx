import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyChoose from './components/WhyChoose'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import About from './components/About'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChoose />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
