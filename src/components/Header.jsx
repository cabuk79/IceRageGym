import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMobileMenu() {
    setMenuOpen(prev => !prev)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <div className="nav-container">
      <header>
        <div className="logo-container">
          <span className="logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-barbell">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M2 12h1" /><path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" />
              <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1" />
              <path d="M9 12h6" />
              <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1" />
              <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" />
              <path d="M22 12h-1" />
            </svg>
          </span>
          <div className="logo-text-container">
            <Link to="/">
              <span className="logo-text-begin">ICE</span>
              <span className="logo-text-end">RAGE</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="nav-btn-container">
        <nav>
          <ul>
            <li><a href="/#about">ABOUT ABAID</a></li>
            <li><a href="/#thegym">THE GYM</a></li>
            <li><a href="/#gallery">GALLERY</a></li>
            <li><a href="https://www.icebergsupplements.com" target="_blank" rel="noreferrer">SHOP</a></li>
          </ul>
        </nav>
        <div className="enquire-btn-container">
          <a href="/#enquire" className="enquire-btn">ENQUIRE NOW</a>
        </div>
      </div>

      <div
        id="hamburger-icon"
        className={menuOpen ? 'open' : ''}
        onClick={toggleMobileMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <ul className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <li><a href="/#about" onClick={closeMenu}>ABOUT ABAID</a></li>
        <li><a href="/#thegym" onClick={closeMenu}>THE GYM</a></li>
        <li><a href="/#gallery" onClick={closeMenu}>GALLERY</a></li>
        <li><a href="https://www.icebergsupplements.com" target="_blank" rel="noreferrer">SHOP</a></li>
      </ul>
    </div>
  )
}

export default Header
