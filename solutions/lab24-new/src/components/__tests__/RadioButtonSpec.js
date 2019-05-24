import React from 'react';
import TestUtils from 'react-dom/test-utils';
import RadioButton from '../RadioButton.js';
import {shallow} from 'enzyme';

describe('Radio Button', function() {
    let wrapper;
    beforeEach(function(){
        var handleClick = jest.fn();

        wrapper = shallow(
            <RadioButton label = "Answer 1" onChange={handleClick} />
        );
    });

    it('renders without problems', function() {
        expect(wrapper).toEqual(jasmine.anything());
    });

    it('prints a message', function() {
        let actual = wrapper.find('span').text();
        let expected = 'Answer 1';
        expect(actual).toEqual(expected);
    });


});
