import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollSubmitButton from '../src/components/PollSubmitButton.js';
import TestWrapper from '../src/components/TestWrapper.js';

describe('Poll Submit Button', function() {
    var component;
    beforeEach(function(){
        component = TestUtils.renderIntoDocument(
            <TestWrapper>
                <PollSubmitButton />
            </TestWrapper>
        );
    });
    it('renders without problems', function() {
        expect(component).toEqual(jasmine.anything());
    });
});