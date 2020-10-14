import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Pages
import Home from '../pages/Home'
import Favorite from '../pages/Favorite'
import Recent from '../pages/Recent'
import Playlist from '../pages/Playlist'
import Settings from '../pages/Settings'

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
      <Settings />
    </Route>
  </Switch>
)

export default Routes;
