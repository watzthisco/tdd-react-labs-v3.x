import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import TestWrapper from '../TestWrapper';

describe('Poll Submit Button', function () {
    const PollSubmitButton = require('../PollSubmitButton').default;
    it('renders without a problem', function () {
        const pollsubmitbutton = TestUtils.renderIntoDocument(<TestWrapper><PollSubmitButton /></TestWrapper>);
        const buttonText = ReactDOM.findDOMNode(pollsubmitbutton).textContent;
        expect(buttonText).toEqual('Go!');
    });
});
it('calls handler function on click', function () {
    const PollSubmitButton = require('../PollSubmitButton').default;
    const handleClick = jest.fn();
    const pollsubmitbutton = TestUtils.renderIntoDocument(
        <TestWrapper><PollSubmitButton
            question={0}
            handleClick={handleClick}
        /></TestWrapper>);
    const buttonInstance = ReactDOM.findDOMNode(pollsubmitbutton);
    TestUtils.Simulate.click(buttonInstance);
    expect(handleClick).toBeCalled();
    const numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;
    expect(numberOfCallsMadeIntoMockFunction).toBe(1);
});
