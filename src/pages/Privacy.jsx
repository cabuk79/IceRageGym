import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Privacy() {
  return (
    <div className="privacy-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <div className="privacy-container">
          <h1>Privacy Policy</h1>
          <p>Last Updated: January 2026</p>

          <p>At Ice Rage Gym, we respect your privacy. This policy explains how we handle your personal information when you use our website contact form.</p>

          <h2>1. What data we collect</h2>
          <p>When you use our enquiry form, we collect your:</p>
          <ul>
            <li>Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
          </ul>

          <h2>2. Why we collect it</h2>
          <p>We collect this data solely for the purpose of responding to your enquiry about our gym, facilities, or membership options. We rely on "Legitimate Interest" as the lawful basis for this processing.</p>

          <h2>3. How we store and process your data</h2>
          <p>We do not store your data in a website database. However, we use a third-party service, <strong>FormSubmit.co</strong>, to securely route your enquiry to our email inbox.</p>
          <p>By submitting the form, you acknowledge that your data will be processed by FormSubmit in accordance with their privacy policy and transmitted to us via email.</p>

          <h2>4. Marketing</h2>
          <p>We will <strong>not</strong> use your email address for marketing newsletters or sell your data to third parties. We will only contact you regarding your specific enquiry.</p>

          <h2>5. Your Rights</h2>
          <p>Under the UK GDPR, you have the right to request a copy of the information we hold about you or request its deletion. To exercise these rights, please contact us at: contact@iceragegym.co.uk.</p>

          <Link to="/" className="back-btn">&larr; Back to Home</Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Privacy
