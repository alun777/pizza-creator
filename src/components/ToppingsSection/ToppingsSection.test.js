import React from 'react';
import { shallow } from 'enzyme';
import { ToppingsSection } from './ToppingsSection';
import ToppingList from '../ToppingList/index';




function setup() {
  const props = {
    selectedToppings: [], 
    onAmountAdd: jest.fn(), 
    onAmountMinus: jest.fn(), 
    toppingsList: [{
      id: 0,
      name: 'Anchovy',
      srcImg: '/api/toppings/anchovy.svg',
      price: 0.99
    }]
  }

  const enzymeWrapper = shallow(<ToppingsSection {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

it('should render self and subcomponents', () => {
  const { enzymeWrapper } = setup();

  expect(enzymeWrapper.find('section').hasClass("section toppings")).toBe(true)

  expect(enzymeWrapper.find('h2').text()).toBe('Choose your toppings')
})

it('should return <ToppingList>', () => {
  const { enzymeWrapper } = setup();
  expect(enzymeWrapper.find(ToppingList).exists()).toEqual(true)
})
