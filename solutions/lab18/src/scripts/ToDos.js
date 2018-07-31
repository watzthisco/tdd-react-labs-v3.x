import React from 'react';
import ToDoItem from './ToDoItem';

class ToDos extends React.Component {
    render() {
        return (<div><h2>Here's what you have to do today!</h2>
        <ol>
            <ToDoItem itemName="laundry"/>
            <ToDoItem itemName="go fishing"/>
            <ToDoItem itemName="eat" />
        </ol>
        </div>);
    }
}

export default ToDos;