import React from 'react'

const Workshops = (props) => {
  return (
    <section className={ window.location.hash !== '#/' ? 'workshops top-margin' : 'workshops' }>
      <h3 className="title">Our upcoming workshops</h3>
      <p>As we guide you through a variety of fun activities and creative workshops we will encourage self awareness, self confidence, mindful communication and offer you inspirational techniques to help focus and calm your mind.</p>
      <p>The perfect blend to balance you in Mind, Body &amp; Spirit!</p>
      <hr/>
      <ul className="grid">
        <li>
          <i className="fa fa-compass fa-4x"></i>
          <h4>Teenage Adventure Camp</h4>
          <h5>September 9 - 10</h5>
          <p>Are you an adventure seeking 13-18 year old? Come and join us on our next exciting Teenage Adventure Camp.</p>
          <a href="/#/teen-camp-sept" className="btn">Learn more</a>
        </li>
        <li>
          <i className="fa fa-bicycle fa-4x"></i>
          <h4>Teenage Adventure Camp</h4>
          <h5>October 20 - 22</h5>
          <p>Do you want to spend the weekend having lots of fun with new friends? Come and join us on our next exciting Teenage Adventure Camp.</p>
          <a href="/#/teen-camp-sept" className="btn">Learn more</a>
        </li>
      </ul>
    </section>
  )
}

export default Workshops
