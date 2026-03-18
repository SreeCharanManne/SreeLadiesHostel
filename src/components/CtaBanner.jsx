import useScrollAnimation from '../hooks/useScrollAnimation'
import './CtaBanner.css'

function CtaBanner() {
  const sectionRef = useScrollAnimation()

  return (
    <section className="cta-banner" ref={sectionRef}>
      <div className="container">
        <div className="cta-content animate-on-scroll">
          <h2>Ready to Make This Your New Home?</h2>
          <p>Schedule a visit today and experience the warmth and comfort of Sree PG Ladies Hostel firsthand.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary btn-lg">Book a Visit</a>
            <a href="tel:+918374226896" className="btn btn-secondary btn-lg">
              <i className="fas fa-phone"></i> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
