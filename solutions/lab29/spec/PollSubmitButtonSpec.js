import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollSubmitButton from '../src/components/PollSubmitButton.js';
import TestWrapper from '../src/components/TestWrapper.js';

describe('Poll Submit Button', function() {
    it('renders without problems', function() {
        var submitbutton = TestUtils.renderIntoDocument(<TestWrapper><PollSubmitButton /></TestWrapper>);
        expect(submitbutton).toEqual(jasmine.anything());
    });
});