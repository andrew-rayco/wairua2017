import React from 'react'

import Feature from './Feature'
import Intro from './Intro'
import Gallery from './Gallery'
import Workshops from './Workshops'
import Testimonials from './Testimonials'
import Contact from './Contact'

const Home = () => {
  return (
    <div className="home">
      <Feature />
      <Intro />
      <Gallery />
      <Workshops />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home
