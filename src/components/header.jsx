import React from 'react'
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default header