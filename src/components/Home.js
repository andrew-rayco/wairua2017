import React from 'react'

import Feature from './Feature'
import Intro from './Intro'
import HomeGallery from './HomeGallery'
import Workshops from './Workshops'
import Testimonials from './Testimonials'
import Contact from './Contact'

const Home = () => {
  return (
    <div className="home">
      <Feature />
      <Intro />
      <HomeGallery />
      <Workshops />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home
