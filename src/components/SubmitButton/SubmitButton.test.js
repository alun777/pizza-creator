import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubmitButton from './SubmitButton';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    onClickPlaceOrder: jest.fn(),
  };

  const enzymeWrapper = shallow(<SubmitButton {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

it('should render self and subcomponents', () => {
  const { enzymeWrapper } = setup();

  expect(enzymeWrapper.find('button').hasClass('submit')).toBe(true);

  expect(enzymeWrapper.find('button').text()).toBe('Place order');
});

it('should call onClickPlaceOrder when onClick', () => {
  const fakeEvent = { preventDefault: jest.fn() };
  const { enzymeWrapper, props } = setup();
  const button = enzymeWrapper.find('button');
  button.simulate('click', fakeEvent);
  expect(props.onClickPlaceOrder).toHaveBeenCalled();
});
