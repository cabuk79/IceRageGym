function Hero() {
  return (
    <section className="hero-container">
      <div className="confidence-icon">
        <span className="material-icons">bolt</span>
        CONFIDENCE STARTS HERE
      </div>
      <div className="hero-header">
        <span className="hero-header-one">FROM BEGINNER</span>
        <span className="hero-header-two">TO GYM PRO</span>
      </div>
      <div className="hero-detail">
        <p>
          Master the basics in a private enviornment. No crowds, no judgement. Build the skills
          to walk into any commerical gym with your head held high.
        </p>
      </div>
      <div className="btn-cost-container">
        <a className="get-started-btn" href="#enquire">START YOUR JOURNEY</a>
        <div className="cost-detail">
          <span className="cost-amount">&#163;10</span>
          <span className="cost-frequencey">PER SESSION NO OBLIGATION</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
