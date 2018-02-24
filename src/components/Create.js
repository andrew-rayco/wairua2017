import React from 'react'
import CreateForm from './CreateForm'

const Create = () => {
  return (
    <section className="create top-margin">
      <h3 className="title">Create Your Own Adventure</h3>
      <p>Wairua Adventures can create your own custom adventure package!</p>
      <p>Would you like to have an adventure with a group of friends or are you part of an organisation who wants to create a custom adventure for your team or clients? Would you like to host a Wairua Adventure at your property?</p>
      <div className="two-cols">
        <div className="two-cols__image">
          <img src="/images/create-girl-jumping.jpg" alt="Girl jumping for joy"/>
        </div>
        <div className="two-cols__list">
          <p>We can help you:</p>
          <ul>
            <li>in creating the perfect adventure</li>
            <li>lead mindfulness workshops and lead discussions on health and wellbeing</li>
            <li>teach martial arts/self defence</li>
            <li>teach yoga/myofascia release therapy</li>
            <li>lead group activities / team building projects</li>
            <li>organise delicious and nutritious catering</li>
            <li>bring in affiliated health and wellness experts to enhance the experience and teach workshops in their field</li>
            <li>organise drop off and pick up</li>
            <li>have lots of fun!</li>
          </ul>
        </div>
      </div>
      <p>We love being creative and planning fun adventures, and would love to help you create an amazing package for your private or corporate group.</p>
      <CreateForm />
    </section>
  )
}

export default Create
