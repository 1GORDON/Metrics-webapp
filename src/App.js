import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Company from './pages/Company';

const App = function () {
  return (
    <Switch>
      <Route path="/company:name">
        <Company />
      </Route>
      <Route path="/company">
        <Company />
      </Route>
      <Route exact path="/">
        <Main />
      </Route>
    </Switch>
  );
};

export default App;
