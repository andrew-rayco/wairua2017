import React from 'react'

let style = {
  backgroundImage: 'url(../images/main.jpg)'
}

const Feature = () => {
  return (
    <section className="hero">
      <div class="background-image" style={style}></div>
      <div className="hero-content-area">
        <h1>Mind. Body. Spirit.</h1>
        <img src="../images/main.jpg" alt=""/>
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quos velit, facere, deserunt cum distinctio quae sit autem corporis nihil sunt suscipit nostrum repellat fugit minus esse molestiae fugiat ratione.</h3>
        <a href="/workshops" class="btn">Learn more</a>
      </div>
    </section>
  )
}

export default Feature
