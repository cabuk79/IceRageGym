import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import InfoCards from '../components/InfoCards'
import About from '../components/About'
import Facility from '../components/Facility'
import Gallery from '../components/Gallery'
import SessionPricing from '../components/SessionPricing'
import Contact from '../components/Contact'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InfoCards />
        <About />
        <Facility />
        <Gallery />
        <SessionPricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home
