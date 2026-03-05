import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './header';
import Sidenav from './sidenav';

const layout = () => {
  return (
<div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidenav />
        <main>
          <Outlet /> {/* This is where the routed pages are rendered */}
        </main>
      </div>
      {/* Optional: Add a Footer component */}
    </div>
  )
}

export default layout