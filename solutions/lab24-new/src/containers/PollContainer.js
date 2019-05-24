import React from 'react';
import PollHeader from '../components/PollHeader.js';
import PollQuestion from '../components/PollQuestion.js';
import PollSubmitButton from '../components/PollSubmitButton.js';
import RadioButtonGroup from '../components/RadioButtonGroup.js';
import $ from 'jquery';
import RandomWords from 'random-words';

class PollContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            header: RandomWords(3).join(' '),
            question: RandomWords(3).join(' ') + '?',
            correctAnswer: '',
            choices: [],
            checkedValue: ''
        };
        this.setCheckedValue = this.setCheckedValue.bind(this);
    }
    
    setCheckedValue(value){
        this.setState({
            checkedValue: value
        });
        //console.log('current choice: ' + value);
    }

    checkAnswer(value){
        if (value===this.state.correctAnswer){
            console.log('correct');
        }
    }

    submitButtonClick(event){
        event.preventDefault();
        alert("submit");
    }

    componentWillMount() {
        console.log('componentWillMount()');
    }
    componentDidMount(){
        console.log('componentDidMount');
        this.serverRequest = $.get('http://localhost:8080/data/data.json', function (result) {
            var data = result;
            this.setState({
                choices: data.poll.questions[0].choices,
                correctAnswer: data.poll.questions[0].correctAnswer
            });
        }.bind(this));
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps()');
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate()');
        return true;
    }
    componentWillUpdate() {
        console.log('componentWillUpdate()');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate()');
        this.checkAnswer(this.state.checkedValue);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount()');
    }

    render() {

        var rowStyle = {
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };
        
        return (
            <div className="container">
                <div className="jumbotron">
                    <PollHeader text={this.state.header} />
                </div>
                <div className="row" style={rowStyle}>
                    <div className="col-sm-4 col-sm-offset-4">
                    <form>
                        <PollQuestion text={this.state.question} />
                            <RadioButtonGroup
                                name = 'answer'
                                checkedValue = {this.state.checkedValue}
                                choices = {this.state.choices}
                                onChange = {this.setCheckedValue}
                            />
                        <PollSubmitButton handleClick = {this.submitButtonClick.bind(this)}/>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PollContainer;