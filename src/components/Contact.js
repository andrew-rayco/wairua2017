import React from 'react'

const Contact = () => {
  return (
    <section className="contact">
      <h3 className="title">Learn more</h3>
      <p>Want to know about our upcoming wellbeing-related events, or come to one of our mixers? Just sign up for our mailing list. No spam from us, we promise!</p>
      <hr/>
      <form>
        <input type="email" placeholder="Email" />
        <a href="" className="btn">Sign up now</a>
      </form>
    </section>
  )
}

export default Contact
