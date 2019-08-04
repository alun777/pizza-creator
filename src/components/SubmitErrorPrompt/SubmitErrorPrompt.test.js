import React from 'react';
import { shallow } from 'enzyme';
import SubmitErrorPrompt from './SubmitErrorPrompt';


function setup() {
  const props = {
    children: 'jest mock data',
    placeOrderError: true,
  };

  const wrapper = shallow(<SubmitErrorPrompt {...props} />);

  return {
    props,
    wrapper,
  };
}

it('should render self and subcomponents', () => {
  const { wrapper } = setup();

  expect(wrapper.find('div').hasClass('message')).toBe(true);

  expect(wrapper.find('img')).toHaveLength(1);

  expect(wrapper.find('div').text()).toBe('jest mock data');
});
