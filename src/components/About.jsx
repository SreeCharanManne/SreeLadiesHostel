import useScrollAnimation from '../hooks/useScrollAnimation'
import './About.css'
import logo from '../imgs/sreehostellogo.png'

function About() {
  const sectionRef = useScrollAnimation()

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-image animate-on-scroll">
            <div className="about-img-placeholder">
              <img src={logo} alt="Sree Ladies PG Hostel" className="about-logo" />
            </div>
          </div>
          <div className="about-content animate-on-scroll">
            <p className="section-label">About Us</p>
            <h2 className="section-title">A Trusted Home for Women Since 2024</h2>
            <p className="about-text">
              At Sree PG Ladies Hostel, we understand that moving to a new city can be daunting.
              That's why we've created a space that feels just like home safe, nurturing, and
              full of warmth. Our hostel is designed specifically for working women and students
              who seek comfort, security, and a community.
            </p>
            <p className="about-text">
              Located in the heart of the city, we provide easy access to major offices, colleges,
              hospitals, and transportation hubs — making daily life convenient and stress-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
