import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/index';
import Elections from './components/Elections/index';
import Candidates from './components/Candidates/index';

export default (
  <Switch>
    <Route exact path={'/'} component={Home} />
    <Route path={'/elections'} component={Elections} />
    <Route path={'/candidates'} component={Candidates} />
  </Switch>
);
