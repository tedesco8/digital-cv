import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import i18next from './i18n/config';
// import './assets/css/main.css'

i18next()
ReactDOM.render(<App />, document.getElementById('app'));