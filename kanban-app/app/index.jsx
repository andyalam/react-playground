import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Provider from './components/Provider';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider><App /></Provider>,
  app
);
