import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Pages

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <p>Home</p>
    </Route>
    <Route path="/favorite">
      <p>Favorite</p>
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
