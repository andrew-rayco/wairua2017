import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="link">Home</Link>
      <Link to="/adventures" className="link">Adventures</Link>
      <Link to="/adventures/private-classes" className="link">Private Classes</Link>
      <Link to="/adventures/create-your-own" className="link">Create Your Own Adventure</Link>
      <Link to="/form" className="link">Form</Link>
      <Link to="/about" className="link">About</Link>
    </nav>
  )
}

export default Nav
