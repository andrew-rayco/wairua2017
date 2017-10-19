import React from 'react'

const TeenCampSept = () => {
  return (
    <section className="camp top-margin">

      <h3 className="title">Teenage Adventure Camp</h3>
      <h4>September 9th to 10th, 2017</h4>
      <hr/>
      <p>Are you an adventure seeking 13-18 year old? Come and join us on our next exciting Teenage Adventure Camp. Make lots of new friends, be inspired, gain self confidence, and take part in a variety of fun activities that will transform your wellbeing.</p>
      <div className="adventure-image">
        <img src='images/mountain1.jpg' alt="adventure camp"/>
      </div>

      <div className="adventure-text">
        <h5>What is included</h5>
        <ul>
          <li>Develop self confidence, leadership and communication skills</li>
          <li>Learn valuable self defence</li>
          <li>Be guided through an introductory Yoga class for your Mind, Body & Spirit</li>
          <li>Participate in fun team building games and activities</li>
          <li>Take part in a creative workshop on Mindfulness, setting positive goals and making healthy lifestyle choices</li>
          <li>Share in group led discussions</li>
          <li>Enjoy a fun movie night</li>
          <li>Take home an exciting goodie bag</li>
        </ul>
      </div>

      <h5>Your wellbeing investment: <span>$140*</span>
      </h5>
      <p>Price includes snacks, lunch & dinner on Saturday, breakfast on Sunday, all workshops & activities, plus one nights accommodation.<br/>(* family discount & payment options available on application)</p>

      <div className="adventure-details">
        <div className="adventure-details--item">
          <h5>Venue</h5>
          <p>
            Pukerua Bay Scout Hall<br/>
            Kotipu Place,<br/>
            Pukerua Bay
          </p>
        </div>
        <div className="adventure-details--item">
          <h5>Time</h5>
          <p>Arrive 10am Saturday<br/>
            Pick up 11am Sunday
          </p>
        </div>
        <div className="adventure-details--item">
          <h5>Register</h5>
          <a href="/#/form" className="btn">Register Now</a>
          <p>Alternatively, please contact us on <a href="mailto:wairuaadventures@gmail.com">wairuaadventures@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default TeenCampSept
