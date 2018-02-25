import React from 'react'
import { Link } from 'react-router-dom'

const HomeGallery = () => {
  return (
    <section className="gallery">
      <ul className="grid">
        <Link to="/gallery" className="large" style={{ backgroundImage: 'url(../images/gallery-jen-mountain.jpg)'}} title="View our gallery" />
        <Link to="/gallery" className="small" style={{ backgroundImage: 'url(../images/gallery-youth-jumping.jpg)'}} title="View our gallery" />
        <Link to="/gallery" className="small" style={{ backgroundImage: 'url(../images/gallery-kayak.jpg)'}} title="View our gallery" />
        <Link to="/gallery" className="large" style={{ backgroundImage: 'url(../images/gallery-rainbow.jpg)'}} title="View our gallery" />
      </ul>
    </section>
  )
}

export default HomeGallery
