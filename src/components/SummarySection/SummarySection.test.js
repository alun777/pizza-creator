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
    onClickPlaceOrder: jest.fn(),
  };

  const wrapper = shallow(<SummarySection {...props} />);

  return {
    props,
    wrapper,
  };
}

it('should render self and subcomponents', () => {
  const { wrapper } = setup();

  expect(wrapper.find('section').hasClass('section summary')).toBe(true);
  expect(wrapper.find('h2').text()).toBe('Summary');
});

it('should return <ToppingList>', () => {
  const { wrapper } = setup();

  expect(wrapper.find('div.item__amount')).toHaveLength(1);
});

it('should call function when button being clicked', () => {
  const { props, wrapper } = setup();
  wrapper.find('button').at(1).simulate('click');
  expect(props.onAmountAdd).toHaveBeenCalledWith('Sweetcorn');

  wrapper.find('button').at(0).simulate('click');
  expect(props.onAmountMinus).toHaveBeenCalledWith('Sweetcorn');
});
