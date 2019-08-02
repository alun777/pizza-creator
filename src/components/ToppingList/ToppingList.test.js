import React from 'react';
import { shallow } from 'enzyme';
import ToppingList from './ToppingList';


function setup() {
  const props = {
    srcImg: '/api/toppings/bacon.svg',
    toppingName: 'Bacon',
    onAmountAdd: jest.fn(),
    onAmountMinus: jest.fn(),
    toppingPrice: 0.99,
    selectedToppings: [{ name: 'Bacon', amount: 1, price: 0.99 }]
  }

  const wrapper = shallow(<ToppingList {...props} />)

  return {
    props,
    wrapper
  }
}

it('should render self and subcomponents', () => {
  const { wrapper } = setup()

  expect(wrapper.find('div').length).toBe(2);

  expect(wrapper.find('div').first().hasClass('topping'))
  // expect(wrapper.find('div').first().props().className)
 


  expect(wrapper.find('button').length).toBe(2);
  expect(wrapper.find('button').at(0).text()).toEqual('-');
  expect(wrapper.find('button').at(1).text()).toEqual('+');

  expect(wrapper.find('span').length).toBe(2);
})

it('should call change amount function when button got clicked', () => {
  const { wrapper, props } = setup()

  const addButton =  wrapper.find('button').at(1)
  addButton.simulate('click')
  expect(props.onAmountAdd).toHaveBeenCalled();

  const minusButton =  wrapper.find('button').at(0)
  minusButton.simulate('click')
  expect(props.onAmountMinus).toHaveBeenCalled();

  

})
