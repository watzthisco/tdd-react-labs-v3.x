import React from 'react';

function PollSubmitButton(props){
    return (
        <button className="btn btn-success" onClick = {(event)=>{props.handleClick(event)}}>Go!</button>
    );
}
export default PollSubmitButton;