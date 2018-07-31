import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollSubmitButton from '../src/components/PollSubmitButton.js';

describe('Poll Submit Button', function() {
    it('renders without problems', function() {
        var submitbutton = TestUtils.renderIntoDocument(<PollSubmitButton />);
        expect(submitbutton).toEqual(jasmine.anything());
    });
});