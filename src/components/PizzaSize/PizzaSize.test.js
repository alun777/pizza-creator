import React from 'react';
import { shallow } from 'enzyme';
import PizzaSize from './PizzaSize';


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
  expect(wrapper.find('.size div').text()).toEqual(props.sizeName + '$' + props.sizePrice)
})

it('should call the correct function when being clicked', () => {
  const wrapper = shallow(<PizzaSize {...props} />)
  expect(wrapper.find('div').length).toBe(2)

  wrapper.simulate('click');
  expect(props.handleSelectedSize).toHaveBeenCalled();
})
