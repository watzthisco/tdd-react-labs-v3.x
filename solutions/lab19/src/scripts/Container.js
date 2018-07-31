import React from 'react';
import SayHello from './sayHello.js';
import ToDos from './ToDos.js';

class Container extends React.Component {
    render() {
        return (<div>
                    <SayHello name="Chris" />
                    <ToDos />
                </div>);
    }
}

export default Container;