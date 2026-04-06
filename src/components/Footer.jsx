import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="logo-container">
        <span className="material-icons logo-icon">fitness_center</span>
        <span className="logo-text-cotainer">
          <span className="logo-text-begin">ICE</span>
          <span className="logo-text-end">RAGE</span>
        </span>
      </div>

      <div className="copy-style">&copy; 2025 Ice Rage Gym. All rights reserved.</div>

      <div className="footer-nav">
        <ul>
          <li><a href="https://www.icebergsupplements.com" target="_blank" rel="noreferrer">STORE</a></li>
          <li><Link to="/privacy">PRIVACY</Link></li>
          <li><Link to="/terms">TERMS</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
