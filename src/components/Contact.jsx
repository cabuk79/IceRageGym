function Contact() {
  return (
    <section className="contact-container">
      <div className="contact-information-container">
        <h2>GET IN <span className="ice-rage touch">TOUCH</span></h2>
        <p>
          Have a question about your fitness journey? Reach out today and let's discuss
          how we can get you started at Ice Rage.
        </p>
        <div className="contact-details">
          <div className="contact-type-container">
            <span className="material-icons">mail</span>
            <div className="icon-contact">
              <span>EMAIL US</span>
              <span>contact@iceragegym.co.uk</span>
            </div>
          </div>
        </div>

        <div className="contact-type-container">
          <span className="material-icons">call</span>
          <div className="icon-contact">
            <span>CALL ABAID</span>
            <span>+44 1234 567 890</span>
          </div>
        </div>

        <div className="contact-type-container">
          <span className="material-icons">location_on</span>
          <div className="icon-contact">
            <span>LOCATION</span>
            <span>IceRage Private Gym, Industrial Park, UK</span>
          </div>
        </div>
      </div>

      <div className="contact-form-container" id="enquire">
        <form
          className="contact-form"
          action="https://formsubmit.co/cabuk79@googlemail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New Personal Training Enquiry!" />
          <input type="hidden" name="_next" value="https://cabuk79.github.io/IceRageGym/thanks" />

          <label>FULL NAME</label>
          <input type="text" name="name" placeholder="John Doe" required />

          <label>PHONE NUMBER</label>
          <input type="tel" name="phone" placeholder="01282 709819" />

          <label>EMAIL ADDRESS</label>
          <input type="email" name="email" placeholder="john.doe@email.com" required />

          <label>MESSAGE</label>
          <textarea className="message" name="message" rows="5" placeholder="Tell us about your goals..." required></textarea>

          <button type="submit">SEND ENQUIRY</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
