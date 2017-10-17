import React from 'react'

const Gallery = () => {
  return (
    <section className="gallery">
      <h3 className="title">Some of our Memories</h3>
      <p>Come along with us on one of our adventures. Here are some pictures from people who have had elevated experiences with us.</p>
      <hr />
      <ul className="grid">
        <li className="small" style={{ backgroundImage: 'url(../images/mountain1.jpg)'}}></li>
        <li className="large" style={{ backgroundImage: 'url(../images/mountain2.jpg)'}}></li>
        <li className="large" style={{ backgroundImage: 'url(../images/mountain3.jpg)'}}></li>
        <li className="small" style={{ backgroundImage: 'url(../images/mountain4.jpg)'}}></li>
      </ul>
    </section>
  )
}

export default Gallery
