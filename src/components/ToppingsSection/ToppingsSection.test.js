import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { ToppingsSection, mapStateToProps } from './ToppingsSection';


function setup() {
  const props = {
    selectedToppings: [],
    onAmountAdd: jest.fn(),
    onAmountMinus: jest.fn(),
    toppingsList: [{
      id: 0,
      name: 'Anchovy',
      srcImg: '/api/toppings/anchovy.svg',
      price: 0.99,
    }],
  };

  const wrapper = shallow(<ToppingsSection {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('testing component', () => {
  it('should render self and subcomponents', () => {
    const { wrapper } = setup();

    expect(wrapper.find('section').hasClass('section toppings')).toBe(true);

    expect(wrapper.find('h2').text()).toBe('Choose your toppings');
  });

  it('should return <ToppingList>', () => {
    const { wrapper } = setup();
    expect(wrapper.find('ToppingList').exists()).toEqual(true);
  });
});

describe('testing mapStateToProps', () => {
  it('should show the correct toppingsList', () => {
    const initialState = fromJS({
      ToppingsSection: {
        toppingsList: [{ jest: 'mock data' }],
      },
    });
    expect(mapStateToProps(initialState).toppingsList).toEqual([{ jest: 'mock data' }]);
  });
});
