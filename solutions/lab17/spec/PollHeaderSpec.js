import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollHeader from '../src/components/PollHeader.js';

describe('Poll Header', function() {
    it('renders without problems', function() {
        var pollheader = TestUtils.renderIntoDocument(<PollHeader />);
        expect(pollheader).toEqual(jasmine.anything());
    });
});