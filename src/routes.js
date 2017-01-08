import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage.js';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.js';
import Dashboard from './components/DashboardPage/DashboardPage.js';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="Dashboard" component={Dashboard}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);