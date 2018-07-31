import React from 'react';

function AnswerCheck(props){
    return(<div>{props.checkedValue === props.correctAnswer ? "correct":"wrong"}</div>);
}

export default AnswerCheck;