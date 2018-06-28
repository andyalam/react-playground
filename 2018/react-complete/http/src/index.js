import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

axios.interceptors.request.use(
    request => {
        console.log(request);
        // Edit request config
        return request;
    },
    error => {
        // if the request settings fail, NOT when the request fails
        console.log(error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    request => {
        console.log(request);
        // Edit request config
        return request;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
