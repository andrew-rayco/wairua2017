import React from 'react'

import WorkshopIntro from './WorkshopIntro'

const Workshops = () => {
  return (
    <div className="workshops">

      <WorkshopIntro />
      <div className="row">
        <div className="six columns">
          <a className="block-link" href="/#/teen-camp-sept">
            <div className="workshop">
              <h3>Teenage Adventure Camp</h3>
              <h4>September 9 - 10</h4>
              <p>Are you an adventure seeking 13-18 year old?<br/>Come and join us on our next exciting Teenage Adventure Camp.</p>
              <button href="/#/teen-camp-sept">Learn more</button>
            </div>
          </a>
        </div>
        <div className="six columns">
          <a className="block-link" href="/teen-camp-oct">
            <div className="workshop">
              <h3>Teenage Adventure Camp</h3>
              <h4>October 20 - 22</h4>
              <p>Do you want to spend the weekend having lots of fun with new friends?<br/>Come and join us on our next exciting Teenage Adventure Camp.</p>
              <button href="/teen-camp-oct">Learn more</button>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Workshops