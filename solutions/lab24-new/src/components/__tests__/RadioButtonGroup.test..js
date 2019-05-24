import React from 'react';
import TestUtils from 'react-dom/test-utils';
import RadioButtonGroup from '../../components/RadioButtonGroup.js';
import {shallow} from 'enzyme';

describe('RadioButtonGroup', function() {
    let wrapper;

    beforeEach(function(){
        wrapper =
            shallow(<RadioButtonGroup
                        name = 'answer'
                        checkedValue = 'Tacos'
                        onChange = {jest.fn()}/>);

        console.log(wrapper.debug());

    });

    it('renders without problems', function() {
        expect(wrapper).toEqual(jasmine.anything());
    });

    it('contains RadioButtons', function(){
        expect(wrapper.find('RadioButton').length).toBeGreaterThan(0);
    })
});