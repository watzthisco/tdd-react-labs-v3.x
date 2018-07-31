import React from 'react';

class PollAnswer extends React.Component{
    
    handleChange() {
        this.props.onChange(this.props.value);
    }
    render(){
        return (
            <div className="radio">
                <label>
                    <input type="radio" 
                        name = {this.props.name}
                        value = {this.props.value}
                        checked = {this.props.checked}
                        onChange = {this.handleChange.bind(this)}
                    /> 
                    <span>{this.props.label}</span>
                </label>
            </div>
        );
    }
}
export default PollAnswer;