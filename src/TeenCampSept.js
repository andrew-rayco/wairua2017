import React from 'react'

const TeenCampSept = () => {
  return (
    <div className="camp">
        <h2>Teenage Adventure Camp</h2>
        <h3>September 9th to 10th, 2017</h3>
        <div className="camp-intro">
          <p>Are you an adventure seeking 13-18 year old? Come and join us on our next exciting Teenage Adventure Camp.
          Make lots of new friends, be inspired, gain self confidence, and take part in a variety of fun activities that will transform your wellbeing.</p>
        </div>
      <div className="row">
        <div className="six columns">
          <img src='images/adventure-camp.jpg' alt="adventure camp" />
        </div>
        <div className="six columns">
          <h4>What is included</h4>
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
      </div>

        <h4>Your wellbeing investment: <span>$140*</span></h4>
        <p>Price includes snacks, lunch & dinner on Saturday, breakfast on Sunday, all workshops & activities, plus one nights accommodation. (*family discount & payment options available on application)</p>
      <div className="row">
        <div className="four columns">
          <h4>Venue</h4>
          <p>
            Pukerua Bay Scout Hall<br />
            Kotipu Place,<br />
            Pukerua Bay
          </p>
        </div>
        <div className="four columns">
          <h4>Time</h4>
          <p>Arrive 10am Saturday<br />
            Pick up 11am Sunday
          </p>
        </div>
        <div className="four columns">
          <h4>Register</h4>
          <p><a href="/#/form">Register now</a></p>
          <p>Alternatively, please contact us on <a href="mailto:wairuaadventures@gmail.com">wairuaadventures@gmail.com</a></p>
        </div>
      </div>
    </div>
  )
}

export default TeenCampSept
