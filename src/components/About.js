import React from 'react'

const About = () => {
  return (
    <section className="about top-margin">

      <h3 className="title">About Us</h3>
        <p>Wairua Adventures was born out of a love and passion for helping others reconnect with their adventurous spirit. We have created unique and exciting adventure based retreats that combine our love of exploring  the outdoors with holistic practices to balance your mind, body and spirit.</p>
        <p>We have aligned with some incredibly talented and passionate people who will share their wisdom and knowledge in a variety of creative workshops. Covering valuable topics such as Mindfulness, Meditation &amp; Spirituality, Nutrition and Healthy Lifestyle Choices, Motivational Speaking and Life Coaching, Traditional Chinese Medicine, Yoga, Martial Arts, Qi Gong, Tai Chi and more!</p>
        <p>At Wairua Adventures all of our retreats have been lovingly crafted to offer you the perfect blend of adventure and to reawaken your spirit. So take some time out from the ‘machine world’ and have lots of fun being fully present and in the moment with a group of like minded, adventure seeking souls!</p>

        <div className="bios">
          <div className="about-image">
            <img src="../images/shane.jpg" alt="Shane"/>
          </div>
          <div className="about-text">
            <h4>Shane</h4>
            <p>Laboriosam animi, optio sit quidem. Laboriosam lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla saepe ratione itaque cum amet, recusandae non perspiciatis quasi, beatae soluta, perferendis tempora minima nesciunt quaerat! Laboriosam animi, optio sit quidem.</p>
          </div>


          <div className="about-image">
            <img src="../images/jen.jpg" alt="Jen"/>
          </div>
          <div className="about-text">
            <h4>Jen</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla saepe ratione itaque cum amet, recusandae non perspiciatis quasi, beatae soluta, perferendis tempora minima nesciunt quaerat! Laboriosam animi, optio sit quidem.</p>
          </div>
        </div>

    </section>
  )
}

export default About
