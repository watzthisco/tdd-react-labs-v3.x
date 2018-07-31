import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollSubmitButton from '../src/components/PollSubmitButton.js';

describe('Poll Submit Button', function() {
    var component;
    beforeEach(function(){
        component = TestUtils.renderIntoDocument(
                <PollSubmitButton />
        );
    });
    it('renders without problems', function() {
        expect(component).toEqual(jasmine.anything());
    });
});