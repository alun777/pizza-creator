import { fromJS } from 'immutable';
import { reducer, constants } from './index';

const defaultState = {
  detailsError: {
    name: false,
    email: false,
    confirmEmail: false,
    address: false,
    postcode: false,
    contactNumber: false,
  },
};

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(fromJS(defaultState));
});

it('should handle constants.CHANGE_SHOW_ERROR', () => {
  expect(
    reducer(fromJS(defaultState), {
      type: constants.CHANGE_SHOW_ERROR,
      name: fromJS('name'),
    }),
  ).toEqual(fromJS({
    detailsError: {
      name: true,
      email: false,
      confirmEmail: false,
      address: false,
      postcode: false,
      contactNumber: false,
    },
  }));
});
