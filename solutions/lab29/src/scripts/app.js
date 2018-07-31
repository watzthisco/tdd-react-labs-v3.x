import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

import App from '../containers/App';


ReactDOM.render(<App store={store} />, document.getElementById('app')
);
