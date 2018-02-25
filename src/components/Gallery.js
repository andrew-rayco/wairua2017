import React from 'react'

const Gallery = () => {
  return (
    <section className="gallery top-margin">
      <h3 className="title">Some of our Memories</h3>
      <p>Come along with us on one of our adventures. Here are some pictures from people who have had elevated experiences with us.</p>
      <hr />
      <ul className="grid">
        <li className="large" style={{ backgroundImage: 'url(../images/gallery-jen-mountain.jpg)'}}></li>
        <li className="small" style={{ backgroundImage: 'url(../images/gallery-youth-jumping.jpg)'}}></li>
        <li className="small" style={{ backgroundImage: 'url(../images/gallery-kayak.jpg)'}}></li>
        <li className="large" style={{ backgroundImage: 'url(../images/gallery-rainbow.jpg)'}}></li>
        <li className="large" style={{ backgroundImage: 'url(../images/gallery/gallery-swing-dab.jpg)'}}></li>
        <li className="small" style={{ backgroundImage: 'url(../images/gallery/gallery-rory.jpg)'}}></li>
        <li className="small" style={{ backgroundImage: 'url(../images/gallery/gallery-calming-jars.jpg)'}}></li>
        <li className="large" style={{ backgroundImage: 'url(../images/gallery/gallery-ben-lomond-2.jpg)'}}></li>
        <li className="large" style={{ backgroundImage: 'url(../images/gallery/gallery-jen-shane-cave.jpg)'}}></li>
        <li className="small" style={{ backgroundImage: 'url(../images/gallery/gallery-ben-lomond-1.jpg)'}}></li>
        <li className="small" style={{ backgroundImage: 'url(../images/gallery/gallery-monkey.jpg)'}}></li>
        <li className="large" style={{ backgroundImage: 'url(../images/gallery/gallery-kids.jpg)'}}></li>
        <li className="large" style={{ backgroundImage: 'url(../images/gallery/gallery-running.jpg)'}}></li>
        <li className="small" style={{ backgroundImage: 'url(../images/gallery/gallery-youth-goodies.jpg)'}}></li>
        <li className="small" style={{ backgroundImage: 'url(../images/gallery/gallery-goodie-bags.jpg)'}}></li>
        <li className="large" style={{ backgroundImage: 'url(../images/gallery/gallery-kayaking.jpg)'}}></li>
        <li className="large" style={{ backgroundImage: 'url(../images/gallery/gallery-karate.jpg)'}}></li>
        <li className="small" style={{ backgroundImage: 'url(../images/gallery/gallery-jen-nat-running.jpg)'}}></li>
        <li className="small" style={{ backgroundImage: 'url(../images/gallery/gallery-ironmaori-1.jpg)'}}></li>
        <li className="large" style={{ backgroundImage: 'url(../images/gallery/gallery-ironmaori-2.jpg)'}}></li>
      </ul>
    </section>
  )
}

export default Gallery
