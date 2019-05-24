import React from 'react';
import ReactDOM from 'react-dom';

import {shallow} from 'enzyme';
import RandomWords from 'random-words';
import PollSubmitButton from '../PollSubmitButton';

describe('Poll Submit Button', function () {
    it('renders without a problem', function () {
        const randomText = RandomWords(1).toString();
        const wrapper = shallow(<PollSubmitButton text={randomText} />);
        const buttonText = wrapper.find('button').text();
        console.log(wrapper.debug());

        expect(buttonText).toEqual(randomText);
    });


    it('calls handler function on click', function () {
        const PollSubmitButton = require('../PollSubmitButton').default;
        const handleClick = jest.fn();
        const wrapper = shallow(
            <PollSubmitButton
                handleClick={handleClick}
            />);
        wrapper.simulate('click');
        expect(handleClick).toHaveBeenCalled();
        const numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;
        expect(numberOfCallsMadeIntoMockFunction).toBe(1);
    });
});

