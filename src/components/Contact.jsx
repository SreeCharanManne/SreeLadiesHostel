import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Contact.css'

function Contact() {
  const sectionRef = useScrollAnimation()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    e.target.reset()
  }

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-description">Have questions or want to schedule a visit? We'd love to hear from you!</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info animate-on-scroll">
            <div className="contact-card">
              <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div>
                <h4>Our Location</h4>
                <p>54-16-3/10, Plot No 16, Central Excise Colony,<br />Near Loyola College, Vijayawada, 520008</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><i className="fas fa-phone"></i></div>
              <div>
                <h4>Call Us</h4>
                <p>+91-8374226896</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><i className="fas fa-clock"></i></div>
              <div>
                <h4>Visiting Hours</h4>
                <p>8:00 AM – 8:00 PM<br />All 7 Days a Week</p>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper animate-on-scroll">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Us a Message</h3>
              {submitted && (
                <div className="form-success">
                  <i className="fas fa-check-circle"></i> Thank you! We'll get back to you soon.
                </div>
              )}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="roomType">Room Preference</label>
                <select id="roomType" name="roomType">
                  <option value="">Select a room type</option>
                  <option value="ac">AC Room — ₹10,000/mo</option>
                  <option value="nonac">Non-AC Room — ₹8,000/mo</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Tell us what you're looking for..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                <i className="fas fa-paper-plane"></i> Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
