import { fromJS } from 'immutable';
import { reducer, constants } from './index';

const defaultState = {
  listPizzaSize: [{
    sizeName: 'Small',
    sizePrice: 9.99,
  }, {
    sizeName: 'Medium',
    sizePrice: 10.99,
  }, {
    sizeName: 'Large',
    sizePrice: 11.99,
  }],
  selectedToppings: [],
  selectedPizza: {
    sizeName: '',
    sizePrice: null,
  },
  details: {
    name: '',
    email: '',
    confirmEmail: '',
    address: '',
    postcode: '',
    contactNumber: '',
  },
  placeOrderError: false,
};

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(fromJS(defaultState));
});

it('should handle constants.CHANGE_SELECTED_TOPPINGS', () => {
  expect(
    reducer(fromJS(defaultState), {
      type: constants.CHANGE_SELECTED_TOPPINGS,
      newList: fromJS(['new list for test']),
    }),
  ).toEqual(fromJS({ ...defaultState, selectedToppings: ['new list for test'] }));
});
