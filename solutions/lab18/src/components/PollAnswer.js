import React from 'react';

class PollAnswer extends React.Component{
    
    render(){
        return (
            <div>
                <label><input type="radio" /> <span>{this.props.text}</span></label>
            </div>
        );
    }
}
export default PollAnswer;