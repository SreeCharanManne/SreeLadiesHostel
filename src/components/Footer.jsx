import './Footer.css'
import logo from '../imgs/sreehostellogo.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo">
              <img src={logo} alt="Sree Ladies PG Hostel" className="footer-logo-img" />
            </a>
            <p>A safe, comfortable, and welcoming home designed exclusively for women. Experience the joy of community living with modern amenities.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#rooms">Our Rooms</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#amenities">Homely Food</a></li>
              <li><a href="#amenities">Laundry Service</a></li>
              <li><a href="#amenities">Hot Water</a></li>
              <li><a href="#amenities">Power Backup</a></li>
              <li><a href="#amenities">Housekeeping</a></li>
              <li><a href="#amenities">RO Water</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p><i className="fas fa-map-marker-alt"></i> 54-16-3/10, Plot No 16, Central Excise Colony, Near Loyola College, Vijayawada, 520008</p>
            <p><i className="fas fa-phone"></i> +91-8374226896</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sree PG Ladies Hostel. All rights reserved.</p>
          <p>Crafted with <i className="fas fa-heart"></i> for our residents</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
