function Facility() {
  return (
    <section className="facility-info" id="thegym">
      <div className="facility-header">
        <h1>OLD SCHOOL <span className="ice-rage">PRIVATE FACILITY</span></h1>
        <p>Ice Rage is built for purpose. We've curated the perfect enviornment with high-end equipment meant for learning, not just posing.</p>
      </div>
      <div className="facility-card-container">

        <div className="facility-card">
          <span className="material-icons facility-icon">gpp_good</span>
          <span className="facility-card-header">
            <h4>PRIVATE SPACE</h4>
          </span>
          <span className="facility-card-detail">
            Book your slot and have the focus of your coach without 50 people watching you.
          </span>
        </div>

        <div className="facility-card">
          <span className="material-icons facility-icon">fitness_center</span>
          <span className="facility-card-header">
            <h4>COMPLETE BASICS</h4>
          </span>
          <span className="facility-card-detail">
            Learn Squats, Deadlifts, and Presses correctly from day one to avoid injury.
          </span>
        </div>

        <div className="facility-card">
          <span className="material-icons facility-icon">dining</span>
          <span className="facility-card-header">
            <h4>NUTRITION PLANS</h4>
          </span>
          <span className="facility-card-detail">
            Get bespoke advice on what to fuel your body with for maximum results.
          </span>
        </div>

      </div>
    </section>
  )
}

export default Facility
