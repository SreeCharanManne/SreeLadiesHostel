import useScrollAnimation from '../hooks/useScrollAnimation'
import './Amenities.css'

const amenities = [
  { icon: 'fa-utensils', title: 'Homely Food', desc: 'Nutritious and delicious vegetarian meals served three times a day — breakfast, lunch, and dinner. Just like home cooking.' },
  { icon: 'fa-shirt', title: 'Laundry Service', desc: 'Professional laundry and ironing service available so you can focus on what matters most — your studies and career.' },
  { icon: 'fa-broom', title: 'Daily Housekeeping', desc: 'Regular room cleaning, common area maintenance, and hygiene upkeep to keep everything fresh and tidy.' },
  { icon: 'fa-hot-tub-person', title: 'Hot Water Supply', desc: '24-hour hot water supply with geyser in every bathroom for a comfortable bath any time of the day.' },
]

function Amenities() {
  const sectionRef = useScrollAnimation()

  return (
    <section className="amenities section" id="amenities" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Amenities & Services</h2>
          <p className="section-description">Everything you need for a comfortable and worry-free stay — all under one roof.</p>
        </div>
        <div className="amenities-grid">
          {amenities.map((a, i) => (
            <div className="amenity-card animate-on-scroll" key={i}>
              <div className="amenity-icon"><i className={`fas ${a.icon}`}></i></div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Amenities
