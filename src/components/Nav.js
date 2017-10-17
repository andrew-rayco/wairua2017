import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="link">Home</Link>
      <Link to="/workshops" className="link">Workshops</Link>
      <Link to="/form" className="link">Form</Link>
      <Link to="/about" className="link">About</Link>
    </nav>
  )
}

export default Nav
