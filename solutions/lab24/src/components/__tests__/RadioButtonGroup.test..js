import React from 'react';
import TestUtils from 'react-dom/test-utils';
import RadioButtonGroup from '../../components/RadioButtonGroup.js';
import {shallow} from 'enzyme';

describe('RadioButtonGroup', function() {


    it('renders without problems', function() {
        let wrapper =
            shallow(<RadioButtonGroup
                name = 'answer'
                checkedValue = 'Tacos'
                onChange = {jest.fn()}/>);
        expect(wrapper).toEqual(jasmine.anything());
    });

    it('contains RadioButtons', function(){
        let wrapper =
            shallow(<RadioButtonGroup
                name = 'answer'
                checkedValue = 'Tacos'
                onChange = {jest.fn()}/>);
        expect(wrapper.find('RadioButton').length).toBeGreaterThan(0);
    })
});
