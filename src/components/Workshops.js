import React from 'react'

const Workshops = (props) => {
  return (
    <section className={ window.location.hash !== '#/' ? 'workshops top-margin' : 'workshops' }>
      <h3 className="title">Are you ready for an adventure?</h3>
      <p>Wairua Adventures has combined their love and passion for health and
      wellbeing, fitness, outdoor adventures and holistic practices such as
      yoga, meditation and martial arts to create adventures that will rejuvinate, inspire and balance you in mind, body and spirit!</p>
      <p>Choose from 1 day workshops, 5 night retreats, private classes, camps, or create your own bespoke adventure!</p>
      <hr/>
      <div className="workshop-grid">
        <a href="/#/teen-camp-sept">
          <div className="adventure-box adventure-box--youth">
            <h3>Youth Adventure Camp</h3>
            <p>April 21 - 22, 2018</p>
          </div>
        </a>
        <a href="/#/teen-camp-sept">
          <div className="adventure-box adventure-box--teen">
            <h3>Teen Adventure Camp</h3>
            <p>May 19 - 20, 2018</p>
          </div>
        </a>
        <a href="/#/teen-camp-sept">
          <div className="adventure-box adventure-box--private">
            <h3>Private classes with <br/>Shane and Jen</h3>
          </div>
        </a>
        <a href="/#/teen-camp-sept">
          <div className="adventure-box adventure-box--create">
            <h3>Create your own adventure</h3>
          </div>
        </a>
        {/* <a href="/#/teen-camp-sept">
          <div className="adventure-box adventure-box--fiji">
            <h3>Amazing 5 night retreat in <span>Fiji</span></h3>
            <p>September 2018 <br/>Details coming soon!</p>
          </div>
        </a> */}
        <a href="/#/teen-camp-sept">
          <div className="adventure-box adventure-box--dates">
            <h3>Workshop dates for 2018</h3>
            <p>Coming soon!</p>
          </div>
        </a>
      </div>

    </section>
  )
}

export default Workshops
