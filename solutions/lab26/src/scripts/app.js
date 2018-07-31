import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory } from 'react-router';
import App from '../containers/App';
import PollContainer from '../containers/PollContainer';
import AboutUs from '../components/AboutUs';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/poll" component={PollContainer} />
            <Route path="/about" component={AboutUs} />
        </Route>
    </Router>),
    document.getElementById('app')
);