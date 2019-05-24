import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollQuestion from '../PollQuestion.js';
import TestWrapper from '../TestWrapper.js';

describe('Poll Question', function() {
    var component;
    beforeEach(function(){
        component = TestUtils.renderIntoDocument(
            <TestWrapper>
                <PollQuestion text="What is the question?" />
            </TestWrapper>
        );
    });
    it('renders without problems', function() {
        expect(component).toEqual(jasmine.anything());
    });

    it('prints a message', function() {
        var actual = TestUtils.findRenderedDOMComponentWithTag(component,'h2')
            .textContent;
        var expected = 'What is the question?';
        expect(actual).toEqual(expected);
    });
});