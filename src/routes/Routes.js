import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Pages
import Home from '../pages/Home'
import Favorite from '../pages/Favorite'
import Recent from '../pages/Recent'
import Playlist from '../pages/Playlist'

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/favorite">
      <Favorite />
    </Route>
    <Route path="/recent">
      <Recent />
    </Route>
    <Route path="/playlist">
      <Playlist />
    </Route>
    <Route path="/settings">
      <p>Settings</p>
    </Route>
  </Switch>
)

export default Routes;
