import React from 'react'
import CreateForm from './CreateForm'

const PrivateClasses = () => {
  return (
    <section className="private-classes top-margin">
      <h3 className="title">Private Classes</h3>
      <p>Wairua Adventures understands that people of varying levels might require special attention for training needs, health reasons, or just for convenience.</p>
      <p>We can design and tailor specific sessions to suit your needs.</p>
      <p>For more information or to schedule an appointment please email us at <a href="mailto:wairuaretreats@gmail.com">wairuaretreats@gmail.com</a> or complete the form below</p>
      <hr/>
      <CreateForm />
    </section>
  )
}

export default PrivateClasses
