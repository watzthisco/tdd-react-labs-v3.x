import React from 'react';

class PollSubmitButton extends React.Component{
    handleClick(event){
        event.preventDefault();
        console.log('checking');
        this.props.checkAnswer();
    }
    render(){
        return (
            <button onClick = {this.handleClick.bind(this)} className="btn btn-success">Go!</button>
        );
    }
}

export default PollSubmitButton;