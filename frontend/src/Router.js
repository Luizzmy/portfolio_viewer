import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './components/404/NotFound.js';
import LayoutApp from './components/Layout'
import Login from './pages/Login';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <LayoutApp>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </LayoutApp>
    </Switch>
  </BrowserRouter>
);

export default Router;
