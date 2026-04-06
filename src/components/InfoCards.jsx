function InfoCards() {
  return (
    <section className="information-container">

      <div className="info-card-container">
        <span className="info-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-clock-check">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M20.942 13.021a9 9 0 1 0 -9.407 7.967" />
            <path d="M12 7v5l3 3" />
            <path d="M15 19l2 2l4 -4" />
          </svg>
        </span>
        <span className="info-text">30+</span>
        <span className="info-subtext">YEARS EXPERIENCE</span>
      </div>

      <div className="info-card-container">
        <span className="info-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shield-lock">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
            <path d="M11 11a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 12l0 2.5" />
          </svg>
        </span>
        <span className="info-text">100%</span>
        <span className="info-subtext">PRIVATE FACILITY</span>
      </div>

      <div className="info-card-container">
        <span className="info-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bolt">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
          </svg>
        </span>
        <span className="info-text">&#163;10</span>
        <span className="info-subtext">SESSION PRICE</span>
      </div>

      <div className="info-card-container">
        <span className="info-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-users">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
          </svg>
        </span>
        <span className="info-text">0%</span>
        <span className="info-subtext">MEMBERSHIP COMMITMENT</span>
      </div>

    </section>
  )
}

export default InfoCards
