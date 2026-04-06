import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Terms() {
  return (
    <div className="privacy-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <div className="privacy-container">
          <h1>Terms and Conditions</h1>
          <p><strong>Last Updated:</strong> January 2026</p>

          <p>Welcome to the Ice Rage Gym website. By continuing to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use.</p>

          <h2>1. General Use</h2>
          <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>
          <p>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.</p>

          <h2>2. Medical &amp; Health Disclaimer</h2>
          <p><strong>Important:</strong> The information provided on this website (including images in the gallery and descriptions of facilities) is for informational purposes only.</p>
          <ul>
            <li>You should consult your physician or other health care professional before starting this or any other fitness program to determine if it is right for your needs.</li>
            <li>Nothing on this website constitutes medical advice.</li>
            <li>Ice Rage Gym is not responsible for any injuries or health problems that may result from your use of the information contained on this website.</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>This website contains material which is owned by or licensed to us. This includes, but is not limited to, the "Ice Rage" logo, brand design, layout, look, appearance, and gallery images.</p>
          <p>Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p>

          <h2>4. External Links (Shop)</h2>
          <p>Our website may contain links to external websites, specifically <strong>icebergsupplements.com</strong>.</p>
          <p>These links are provided for your convenience to provide further information or shopping opportunities. They do not signify that we endorse the website(s). We have no responsibility for the content, privacy practices, or transactions that occur on the linked website(s).</p>

          <h2>5. Gym Membership</h2>
          <p>These terms apply specifically to the use of this website. Membership to Ice Rage Gym is subject to a separate contract and set of terms and conditions which must be signed in person at the facility.</p>

          <h2>6. Governing Law</h2>
          <p>Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland, and Wales.</p>

          <h2>7. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us via the enquiry form on our homepage.</p>

          <Link to="/" className="back-btn">&larr; Back to Home</Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Terms
