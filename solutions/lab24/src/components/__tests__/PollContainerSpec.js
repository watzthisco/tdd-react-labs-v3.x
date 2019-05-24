import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollContainer from '../../containers/PollContainer.js';
import {shallow} from 'enzyme';

describe('Poll Container', function() {
    it('renders without problems', function() {
        var pollcontainer = TestUtils.renderIntoDocument(<PollContainer />);
        expect(pollcontainer).toEqual(jasmine.anything());
    });

    it('contains RadioButtons', function(){
        const wrapper = shallow(<PollContainer/>);
        expect(wrapper.find('RadioButtonGroup').length).toBeGreaterThan(0);
    })
});