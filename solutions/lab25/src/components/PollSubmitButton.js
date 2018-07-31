import React from 'react';

class PollSubmitButton extends React.Component{
    render() {
        return (
            <button onClick={this.props.handleClick} className="btn btn-success">Go!</button>
        );
    }
}

export default PollSubmitButton;