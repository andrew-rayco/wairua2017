import React from 'react'

import Feature from './Feature'
import Workshops from './Workshops'
import Testimonials from './Testimonials'
import Contact from './Contact'

const Home = () => {
  return (
    <div className="home">
      <Feature />
      <Workshops />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home
