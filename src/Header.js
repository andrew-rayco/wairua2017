import React from 'react'

import Nav from './Nav'

const Header = (props) => {
  return (
    <header className={props.location.pathname !== '/' ? 'dark' : null }>
      <h2><a href="/#/">Wairua Adventures</a></h2>
      <Nav />
    </header>
  )
}

export default Header
