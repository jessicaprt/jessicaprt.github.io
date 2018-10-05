import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter baseName={process.env.PUBLIC_URL}><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
