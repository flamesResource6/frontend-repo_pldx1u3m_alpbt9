import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import SocialProof from './components/SocialProof'
import Details from './components/Details'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <SocialProof />
        <Details />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
