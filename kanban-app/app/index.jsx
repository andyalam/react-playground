import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

const app = document.getElementById('app');

ReactDOM.render(
  <App/>,
  app
);
