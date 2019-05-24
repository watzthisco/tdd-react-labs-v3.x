import React from 'react';

const RadioButton = props => {

        return (
            <div className="radio">
                <label>
                    <input type="radio" 
                        name = {this.props.name}
                        value = {this.props.value}
                        checked = {this.props.checked}
                        onChange = {()=>{props.onChange(props.value)}}
                    /> 
                    <span>{this.props.label}</span>
                </label>
            </div>
        );
};
export default RadioButton;