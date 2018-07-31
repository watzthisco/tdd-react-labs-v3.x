import React, { Component, PropTypes } from 'react'

class Thermometer extends Component {
  constructor(props) {
    super(props);
    this.increaseAsync = this.increaseAsync.bind(this);
    this.increaseIfOdd = this.increaseIfOdd.bind(this);
  }

  increaseIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncreaseTemp()
    }
  }

  increaseAsync() {
    setTimeout(this.props.onIncreaseTemp, 1000)
  }

  render() {
    const { value, onIncreaseTemp, onDecreaseTemp } = this.props;
    var mercury = {
      backgroundColor: "red",
      width: "50px",
      height: value + "px",
      borderRadius: "8px",
      position: "fixed",
      left: "80px",
      bottom: "80px"
    };

    return (
      <div>
        <div style={mercury}></div>
        <div>Current Temp: {value} degrees</div>
        {' '}
        <button onClick={onIncreaseTemp}>
          +
        </button>
        {' '}
        <button onClick={onDecreaseTemp}>
          -
        </button>
        {' '}
        <button onClick={this.increaseIfOdd}>
          Increase if odd
        </button>
        {' '}
        <button onClick={this.increaseAsync}>
          Increase async
        </button>
      </div>
    )
  }
}

Thermometer.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseTemp: PropTypes.func.isRequired,
  onDecreaseTemp: PropTypes.func.isRequired
};

export default Thermometer;
