import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollAnswer from '../src/components/PollAnswer.js';

describe('Poll Answer', function() {
    var component;
    beforeEach(function(){
        component = TestUtils.renderIntoDocument(
            <PollAnswer text="Answer 1" />
        );
    });

    it('renders without problems', function() {
        var pollanswer = TestUtils.renderIntoDocument(<PollAnswer />);
        expect(pollanswer).toEqual(jasmine.anything());
    });

    it('prints a message', function() {
        var actual = TestUtils.findRenderedDOMComponentWithTag(component,'span')
            .textContent;
        var expected = 'Answer 1';
        expect(actual).toEqual(expected);
    });
});