import React from 'react';

class ToDoItem extends React.Component {
    render() {
        return (<li>{this.props.itemName}</li>);
    }
}

export default ToDoItem;