import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Thanks() {
  return (
    <div className="thanks-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <section className="thanks-section">
          <div className="thanks-section__inner" style={{ textAlign: 'center' }}>
            <h1>Thank You!</h1>
            <p>Your enquiry has been received. We will get back to you shortly.</p>
            <Link to="/" className="back-btn">Back to Home</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Thanks
