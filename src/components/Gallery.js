import React from 'react'

const Gallery = () => {
  return (
    <section className="gallery">
      {/* <h3 className="title">Some of our Memories</h3>
      <p>Come along with us on one of our adventures. Here are some pictures from people who have had elevated experiences with us.</p>
      <hr /> */}
      <ul className="grid">
        <li className="large" style={{ backgroundImage: 'url(../images/gallery-jen-mountain.jpg)'}}></li>
        <li className="small" style={{ backgroundImage: 'url(../images/gallery-youth-jumping.jpg)'}}></li>
        <li className="small" style={{ backgroundImage: 'url(../images/gallery-kayak.jpg)'}}></li>
        <li className="large" style={{ backgroundImage: 'url(../images/gallery-rainbow.jpg)'}}></li>
      </ul>
    </section>
  )
}

export default Gallery
