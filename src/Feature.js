import React from 'react'

let imgUrl = '../images/main.jpg'

let style = {
  backgroundImage: 'url(' + imgUrl + ')',
  color: 'hotpink'
}

const Feature = () => {
  return (
    <section className="hero">
      <div class="background-image" style={style}></div>
      <div className="hero-content-area">
        <h1>mind, body, spirit.</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
        <a href="/workshops" class="btn">Learn more</a>
      </div>
    </section>
  )
}

export default Feature
