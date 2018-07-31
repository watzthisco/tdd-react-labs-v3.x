import {bindActionCreators} from 'redux'; 
import {connect} from 'react-redux'; 
import * as actionCreators from '../actions/actionCreators'; 
import PollContainer from './PollContainer';

function mapStateToProps(state) {
    return {
        questions: state.questions,
        checkedValue: state.checkedValue
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}


const App = connect(mapStateToProps, mapDispatchToProps)(PollContainer);

export default App;
