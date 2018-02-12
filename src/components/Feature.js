import React from 'react'

let imgUrl = '../images/hero-bg-cropped.jpg'

let style = {
  backgroundImage: 'url(' + imgUrl + ')',
  filter: 'blur(2px)'
}

const Feature = () => {
  return (
    <section className="hero">
      <div className="background-image" style={style}></div>
      <div className="hero-content-area">
        <img src="/images/goal.svg" alt="Wairua icon"/>
        <h1>Let the adventure begin...</h1>
        <h3>Join us for unique and exciting adventures that combine exploring the beautiful outdoors with fun fitness activities and holistic practices to nourish and balance you in mind, body and spirit.</h3>
        <a href="/#/workshops" className="btn">Learn more</a>
      </div>
    </section>
  )
}

export default Feature
