import React from 'react'

import Nav from './Nav'

const Header = () => {
  return (
    <div>
      <div className="header">
        <h1><a href="/#/">Wairua Adventures</a></h1>
        <Nav />
      </div>
      <div className="clearfix"></div>
    </div>
  )
}

export default Header
