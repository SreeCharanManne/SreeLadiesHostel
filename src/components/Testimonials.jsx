import useScrollAnimation from '../hooks/useScrollAnimation'
import './Testimonials.css'

const testimonials = [
  {
    stars: 5,
    text: '"Sree PG feels like a second home. The food is amazing and the staff treats us like family."',
    name: 'Priya Sharma',
    role: 'Student',
  },
  {
    stars: 5,
    text: '"As a student new to the city, safety was my top priority."',
    name: 'Ananya Reddy',
    role: 'Student',
  },
  {
    stars: 4.5,
    text: '"The rooms are spotless, the food is delicious, and the location is super convenient. The laundry service is a lifesaver for busy professionals like me!"',
    name: 'Kavitha Nair',
    role: 'Student',
  },
]

function Testimonials() {
  const sectionRef = useScrollAnimation()

  const renderStars = (count) => {
    const full = Math.floor(count)
    const half = count % 1 !== 0
    return (
      <>
        {Array.from({ length: full }).map((_, i) => (
          <i className="fas fa-star" key={i}></i>
        ))}
        {half && <i className="fas fa-star-half-stroke"></i>}
      </>
    )
  }

  return (
    <section className="testimonials section" id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <p className="section-label">What They Say</p>
          <h2 className="section-title">Hear From Our Residents</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card animate-on-scroll" key={i}>
              <div className="testimonial-stars">{renderStars(t.stars)}</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar"><i className="fas fa-user"></i></div>
                <div>
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
