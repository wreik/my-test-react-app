import React from 'react';
import { Link } from 'react-router-dom';

const sidenav = () => {
  return (
    <aside>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/about">Profile</Link></li>
        <li><Link to="/contact">Settings</Link></li>
      </ul>
    </aside>
  )
}

export default sidenav