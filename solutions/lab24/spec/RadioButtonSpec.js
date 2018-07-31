import React from 'react';
import TestUtils from 'react-dom/test-utils';
import RadioButton from '../src/components/RadioButton.js';

describe('Radio Button', function() {
    var component;
    beforeEach(function(){
        component = TestUtils.renderIntoDocument(
            <RadioButton label = "Answer 1" />
        );
    });

    it('renders without problems', function() {
        var radiobutton = TestUtils.renderIntoDocument(<RadioButton />);
        expect(radiobutton).toEqual(jasmine.anything());
    });

    it('prints a message', function() {
        var actual = TestUtils.findRenderedDOMComponentWithTag(component,'span')
            .textContent;
        var expected = 'Answer 1';
        expect(actual).toEqual(expected);
    });
});