import React from 'react'
import {Link} from 'react-router-dom'

import Feature from './Feature'

const Header = () => {
  return (
    <div className="header">
      <Link to="/"><h1>Wairua Retreats</h1></Link>
      <nav>
        <Link to="/form">Form</Link>
      </nav>
      <p>Holy shiz</p>
      <Feature />
    </div>
  )
}


export default Header
