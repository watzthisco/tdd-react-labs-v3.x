import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import RadioButtonGroup from '../components/RadioButtonGroup';
import PollSubmitButton from '../components/PollSubmitButton.js';
import $ from 'jQuery';

class PollContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checkedValue: [],
            header: '',
            questions: []
        };

        this.setCheckedValue = this.setCheckedValue.bind(this);
        this.checkAnswers = this.checkAnswers.bind(this);

    }

    setCheckedValue(name,value){
        var newChecked = this.state.checkedValue;
        newChecked[name] = value;

        this.setState({
            checkedValue: newChecked
        });
    }

    checkAnswers(e){
        e.preventDefault();
        console.log('checking');

    }

    componentDidMount(){
        console.log('componentDidMount');
        this.serverRequest = $.get('http://localhost:8080/data/data.json', function (result) {
            this.setState({
                header: result.poll.header,
                questions: result.poll.questions
            });
        }.bind(this));
    }


    render(){

        var rowStyle = {
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };

        var {questions,checkedValue,header} = this.state;
        var questionsOutput = questions.map(function(question,questionNumber){
            return (
                <div key={`question-number-${questionNumber}`}>
                    <PollQuestion text={question.question} />
                    <RadioButtonGroup
                        name={questionNumber}
                        checkedValue={checkedValue[questionNumber]}
                        choices={question.choices}
                        onChange = {this.setCheckedValue} />
                </div>
            );

        }.bind(this));

        return (
            <div className="container">
                <div className="jumbotron">
                    <PollHeader text={header} />
                </div>
                <div className="row" style={rowStyle}>
                    <div className="col-sm-4 col-sm-offset-4">
                        <form onSubmit={this.checkAnswers}>
                            {questionsOutput}
                            <PollSubmitButton />
                        </form>
                    </div>
                </div>

            </div>
        );
    }

}


export default PollContainer;