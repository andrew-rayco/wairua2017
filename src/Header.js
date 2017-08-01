import React from 'react'
import {Link} from 'react-router-dom'

import Feature from './Feature'
import Nav from './Nav'

const Header = () => {
  return (
    <div className="header">
      <h1><a href="#">Wairua Retreats</a></h1>
      <Nav />
      <p>Holy shiz</p>
      
    </div>
  )
}


export default Header
