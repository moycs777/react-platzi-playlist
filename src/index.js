import React from 'react';
import ReactDOM from 'react-dom';
import { hydrate } from 'react-dom';
import data from '../src/api.json';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App data={data} />, document.getElementById('root'));
registerServiceWorker();

