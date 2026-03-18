import { useEffect, useRef } from 'react'
import './Hero.css'

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    heroRef.current?.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-subtitle animate-on-scroll">Welcome to</p>
        <h1 className="hero-title animate-on-scroll">Sree PG Ladies Hostel</h1>
        <p className="hero-description animate-on-scroll">
          A safe, comfortable, and welcoming home away from home — designed exclusively for women.
          Experience modern living with the warmth of family.
        </p>
        <div className="hero-buttons animate-on-scroll">
          <a href="#rooms" className="btn btn-primary">Explore Rooms</a>
          <a href="#contact" className="btn btn-secondary">Book Now</a>
        </div>
        <div className="hero-badges animate-on-scroll">
          <div className="badge"><i className="fas fa-utensils"></i> Home Food</div>
          <div className="badge"><i className="fas fa-shirt"></i> Laundry</div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <a href="#about"><i className="fas fa-chevron-down"></i></a>
      </div>
    </section>
  )
}

export default Hero
