import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollQuestion from '../src/components/PollQuestion.js';

describe('Poll Question', function() {
    it('renders without problems', function() {
        var pollquestion = TestUtils.renderIntoDocument(<PollQuestion />);
        expect(pollquestion).toEqual(jasmine.anything());
    });
});