import React from 'react';
import { shallow } from 'enzyme';
import SummarySection from './SummarySection';


function setup() {
  const props = {
    selectedToppings: [{ name: 'Sweetcorn', amount: 1, price: 0.99 }],
    selectedPizza: [],
    summaryTotalPrice: 0,
    onAmountAdd: jest.fn(),
    onAmountMinus: jest.fn(),
    onClickPlaceOrder: jest.fn()
  }

  const enzymeWrapper = shallow(<SummarySection {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

it('should render self and subcomponents', () => {
  const { enzymeWrapper } = setup();

  expect(enzymeWrapper.find('section').hasClass("section summary")).toBe(true)

  expect(enzymeWrapper.find('h2').text()).toBe('Summary')
})

it('should return <ToppingList>', () => {
  const { enzymeWrapper } = setup();
  expect(enzymeWrapper.find('div.item__amount').length).toEqual(1)
})

it('should call function when button being clicked', () => {
  const { enzymeWrapper, props } = setup();
  enzymeWrapper.find('button').at(1).simulate('click')
  expect(props.onAmountAdd).toHaveBeenCalledWith("Sweetcorn")
})
