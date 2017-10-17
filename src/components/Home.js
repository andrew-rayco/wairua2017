import React from 'react'

import Feature from './Feature'
import Workshops from './Workshops'
import Gallery from './Gallery'
import Testimonials from './Testimonials'
import Contact from './Contact'

const Home = () => {
  return (
    <div className="home">
      <Feature />
      <Workshops />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home
