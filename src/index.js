import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
