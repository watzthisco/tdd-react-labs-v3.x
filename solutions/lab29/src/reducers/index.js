import { combineReducers } from 'redux';

import questions from './questions';
import checkedValue from './checkedValue';

const rootReducer = combineReducers({questions,checkedValue});

export default rootReducer;
