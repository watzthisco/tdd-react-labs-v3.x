import {createStore} from 'redux';
import rootReducer from '../reducers/index';
import questions from '../data/questions.js';

const defaultState = {
    questions,
    checkedValue: new Array(questions.length)
};

const store = createStore(rootReducer, defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;
