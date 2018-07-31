import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollHeader from '../src/components/PollHeader';

describe('Poll Header', function() {
    var component;
    beforeEach(function(){
        component = TestUtils.renderIntoDocument(
            <PollHeader text="Welcome to the Poll!" />
        );
    });

    it('renders without problems', function() {
        var pollheader = TestUtils.renderIntoDocument(<PollHeader />);
        expect(pollheader).toEqual(jasmine.anything());
    });

    it('prints a message', function() {
        var actual = TestUtils.findRenderedDOMComponentWithTag(component,'h1')
            .textContent;
        var expected = 'Welcome to the Poll!';
        expect(actual).toEqual(expected);
    });
});