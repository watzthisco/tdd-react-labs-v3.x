import React from 'react';
import PollHeader from '../components/PollHeader.js';
import PollQuestion from '../components/PollQuestion.js';
import PollAnswer from '../components/PollAnswer.js';
import PollSubmitButton from '../components/PollSubmitButton.js';

class PollContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            header: 'Welcome to the poll!',
            question: 'What is the best?',
            answer1: 'Tacos',
            answer2: 'Pizzas',
            answer3: 'Wine',
            correctAnswer: 'Pizzas'
        };
    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-4 col-sm-offset-4">
                    <PollHeader text={this.state.header} />
                    <form>
                        <PollQuestion text={this.state.question} />
                        <PollAnswer text={this.state.answer1}/>
                        <PollAnswer text={this.state.answer2}/>
                        <PollAnswer text={this.state.answer3}/>
                        <PollSubmitButton />
                    </form>
                </div>
            </div>
        );
    }
}

export default PollContainer;