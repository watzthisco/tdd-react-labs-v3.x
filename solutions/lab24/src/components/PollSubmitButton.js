import React from 'react';

function PollSubmitButton(props){
    return (
        <button className="btn btn-success" onClick = {(event)=>{props.handleClick(event)}}>{props.text}</button>
    );
}

PollSubmitButton.defaultProps = {
    text: "Go!"
};

export default PollSubmitButton;
