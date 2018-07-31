import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollAnswer from '../src/components/PollAnswer.js';

describe('Poll Answer', function() {
    it('renders without problems', function() {
        var pollanswer = TestUtils.renderIntoDocument(<PollAnswer />);
        expect(pollanswer).toEqual(jasmine.anything());
    });
});