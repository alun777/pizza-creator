import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SizesSection from './SizesSection';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    selectedPizza: {
      sizeName: 'Medium',
      sizePrice: 10.99,
    },
    handleSelectedSize: jest.fn(),
    listPizzaSize: [{
      sizeName: 'Small',
    }, {
      sizeName: 'Medium',
    }, {
      sizeName: 'Large',
    }],
  };

  const enzymeWrapper = shallow(<SizesSection {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

it('should render self and subcomponents', () => {
  const { enzymeWrapper, props } = setup();

  expect(enzymeWrapper.find('section').hasClass('section sizes')).toBe(true);

  expect(enzymeWrapper.find('h2').text()).toBe('Select your size');

  const pizzaSizeProps = enzymeWrapper.find('PizzaSize');
  expect(pizzaSizeProps).toHaveLength(3);
  expect(pizzaSizeProps.first().props().selectedPizza).toBe(props.selectedPizza);
  expect(pizzaSizeProps.last().props().handleSelectedSize).toBe(props.handleSelectedSize);
});
