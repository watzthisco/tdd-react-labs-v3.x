import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import HelloWorld from './HelloWorld';

it('matches the snapshot', () => {
    const component = shallow(<HelloWorld />);
    expect(toJson(component)).toMatchSnapshot();
});