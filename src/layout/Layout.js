import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../routes'

function Layout() {
  return (
    <Router>
      <section className="main">
        <Routes />
      </section>
    </Router>
  );
}

export default Layout
