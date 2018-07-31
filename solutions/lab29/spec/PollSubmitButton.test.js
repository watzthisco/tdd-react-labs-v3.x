import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { shallow } from 'enzyme';

describe('Poll Submit Button', function() {

    const PollSubmitButton = require('../src/components/PollSubmitButton').default;

    it('renders without a problem', function () {

        var pollsubmitbutton = TestUtils
            .renderIntoDocument(<PollSubmitButton />);

        var buttonText = ReactDOM.findDOMNode(pollsubmitbutton).textContent;

        expect(buttonText).toEqual('Go!');
    });



    it('calls handler function on click', function () {

        var PollSubmitButton = 	require('../src/components/PollSubmitButton').default;

        var handleClick = jest.fn();

        var pollsubmitbutton = TestUtils
            .renderIntoDocument(
                <PollSubmitButton
                    question={0}
                    handleClick={handleClick}
                />);

        var buttonInstance = ReactDOM.findDOMNode(pollsubmitbutton);

        TestUtils.Simulate.click(buttonInstance);

        expect(handleClick).toBeCalled();

        var numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;

        expect(numberOfCallsMadeIntoMockFunction).toBe(1);
    });

});
