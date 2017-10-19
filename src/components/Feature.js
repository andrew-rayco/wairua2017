import React from 'react'

let imgUrl = '../images/main.jpg'

let style = {
  backgroundImage: 'url(' + imgUrl + ')',
  color: 'hotpink'
}

const Feature = () => {
  return (
    <section className="hero">
      <div className="background-image" style={style}></div>
      <div className="hero-content-area">
        <h1>Mind, body, spirit.</h1>
        <h3>Balance your mind, connect with your body and reawaken your spirit</h3>
        <a href="/#/workshops" className="btn">Learn more</a>
      </div>
    </section>
  )
}

export default Feature
