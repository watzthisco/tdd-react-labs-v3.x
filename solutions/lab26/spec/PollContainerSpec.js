import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollContainer from '../src/containers/PollContainer.js';

describe('Poll Container', function() {
    it('renders without problems', function() {
        var pollcontainer = TestUtils.renderIntoDocument(<PollContainer />);
        expect(pollcontainer).toEqual(jasmine.anything());
    });
});