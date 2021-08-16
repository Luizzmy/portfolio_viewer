import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './components/404/NotFound.js';
import Login from './pages/Login';

const Router = () => (
  
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
