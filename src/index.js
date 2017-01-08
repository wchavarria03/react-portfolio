// Set up your application entry point here...
import React from 'react';
import {render} from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('app')
);