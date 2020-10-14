import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Pages
import Home from '../pages/Home'
import Favorite from '../pages/Favorite'

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/favorite">
      <Favorite />
    </Route>
    <Route path="/recent">
      <p>Recent</p>
    </Route>
    <Route path="/settings">
      <p>Settings</p>
    </Route>
  </Switch>
)

export default Routes;
