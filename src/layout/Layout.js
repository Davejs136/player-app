import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../routes'
import MenuLeft from '../components/MenuLeft'

function Layout() {
  return (
    <Router>
      <section className="menu-left">
        <MenuLeft />
      </section>
      <section className="main">
        <Routes />
      </section>
    </Router>
  );
}

export default Layout
