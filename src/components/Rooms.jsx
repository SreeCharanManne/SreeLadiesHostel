import useScrollAnimation from '../hooks/useScrollAnimation'
import './Rooms.css'

const rooms = [
  {
    title: 'AC Room',
    badge: 'Premium Comfort',
    badgeClass: 'popular',
    description: 'Beat the heat in style — fully air-conditioned rooms for maximum comfort throughout the year.',
    features: ['Air Conditioned', 'Attached Bathroom', 'Study Table & Chair', 'Wardrobe & Storage', 'Daily Housekeeping'],
    price: '₹10,000',
    icons: 1,
    featured: true,
    btnClass: 'btn-primary',
    iconName: 'fa-snowflake',
  },
  {
    title: 'Non-AC Room',
    badge: 'Best Value',
    badgeClass: '',
    description: 'Well-ventilated and comfortable rooms with all essential amenities — great value for a cozy stay.',
    features: ['Well-Ventilated Room', 'Common Bathroom', 'Study Table & Chair', 'Wardrobe & Storage', 'Daily Housekeeping'],
    price: '₹8,000',
    icons: 1,
    btnClass: 'btn-outline',
    iconName: 'fa-fan',
  },
]

function Rooms() {
  const sectionRef = useScrollAnimation()

  return (
    <section className="rooms section" id="rooms" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <p className="section-label">Accommodation</p>
          <h2 className="section-title">Choose Your Perfect Room</h2>
          <p className="section-description">
            We offer a variety of room options to suit every budget and preference.
            All rooms are well-ventilated, clean, and thoughtfully furnished.
          </p>
        </div>
        <div className="rooms-grid">
          {rooms.map((room, i) => (
            <div className={`room-card ${room.featured ? 'featured' : ''} animate-on-scroll`} key={i}>
              <div className="room-image">
                <div className="room-img-placeholder">
                  {Array.from({ length: room.icons }).map((_, j) => (
                    <i className="fas fa-bed" key={j}></i>
                  ))}
                </div>
                <span className={`room-badge ${room.badgeClass}`}>{room.badge}</span>
              </div>
              <div className="room-content">
                <h3>{room.title}</h3>
                <p className="room-description">{room.description}</p>
                <ul className="room-features">
                  {room.features.map((f, j) => (
                    <li key={j}><i className="fas fa-check"></i> {f}</li>
                  ))}
                </ul>
                <div className="room-footer">
                  <div className="room-price">
                    <span className="price-amount">{room.price}</span>
                    <span className="price-period">/month</span>
                  </div>
                  <a href="#contact" className={`btn ${room.btnClass}`}>Enquire</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rooms
