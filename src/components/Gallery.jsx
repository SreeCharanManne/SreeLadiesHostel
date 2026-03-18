import useScrollAnimation from '../hooks/useScrollAnimation'
import './Gallery.css'

import img1 from '../imgs/img1.jpeg'
import img2 from '../imgs/img2.jpeg'
import img3 from '../imgs/img3.jpeg'
import img4 from '../imgs/img4.jpeg'
import img5 from '../imgs/img5.jpeg'
import img6 from '../imgs/img6.jpeg'

const images = [
  { src: img1, label: 'Our Hostel' },
  { src: img2, label: 'Room View' },
  { src: img3, label: 'Living Space' },
  { src: img4, label: 'Facilities' },
  { src: img5, label: 'Interior' },
  { src: img6, label: 'Common Area' },
]

function Gallery() {
  const sectionRef = useScrollAnimation()

  // Duplicate images for seamless infinite scroll
  const allImages = [...images, ...images]

  return (
    <section className="gallery section" id="gallery" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <p className="section-label">Take a Peek</p>
          <h2 className="section-title">Our Hostel Gallery</h2>
          <p className="section-description">See what life looks like at Sree PG Ladies Hostel.</p>
        </div>
      </div>
      <div className="gallery-marquee animate-on-scroll">
        <div className="gallery-track">
          {allImages.map((item, i) => (
            <div className="gallery-slide" key={i}>
              <img src={item.src} alt={item.label} loading="lazy" />
              <div className="gallery-overlay">
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
