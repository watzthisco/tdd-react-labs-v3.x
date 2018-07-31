import React from 'react';
import {Link, Route} from 'react-router-dom';
import PollContainer from './PollContainer';
import AboutUs from '../components/AboutUs';

class App extends React.Component {
    render(){
        return(
            <div>
                <ul className = "nav nav-pills">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/poll">Poll</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
                <div>
                    <Route path="/poll" component={PollContainer}/>
                    <Route path="/about" component={AboutUs}/>
                </div>
            </div>
        );
    }
}

export default App;