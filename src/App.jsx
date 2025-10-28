import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollProgress from './components/ScrollProgress'
import Services from './components/Services'
import Features from './components/Features'
import About from './components/About'
import Timeline from './components/Timeline'
import Process from './components/Process'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <About />
      <Timeline />
      <Process />
      <Stats />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
