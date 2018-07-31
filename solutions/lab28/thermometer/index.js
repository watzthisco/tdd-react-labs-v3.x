import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Thermometer from './components/Thermometer'
import thermometer from './reducers'

const store = createStore(thermometer);
const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Thermometer
      value={store.getState()}
      onIncreaseTemp={() => store.dispatch({ type: 'INCREASE_TEMP' })}
      onDecreaseTemp={() => store.dispatch({ type: 'DECREASE_TEMP' })}
    />,
    rootEl
  )
}

render();
store.subscribe(render);
