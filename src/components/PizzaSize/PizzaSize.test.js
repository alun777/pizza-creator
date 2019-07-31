import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PizzaSize from './PizzaSize';

Enzyme.configure({ adapter: new Adapter() });

const props = {
  sizeName: 'Small',
  sizePrice: 9.99,
  handleSelectedSize: jest.fn(),
  selectedPizza: {
    sizeName: 'Small',
    sizePrice: 9.99
  }
}

it('component should render correct pizza sie', () => {
  const wrapper = shallow(<PizzaSize {...props} />)
  expect(wrapper.find('.size div').text()).toEqual(props.sizeName+'$'+props.sizePrice)
})
