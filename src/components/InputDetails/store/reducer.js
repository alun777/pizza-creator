import { fromJS } from 'immutable';
import { constants } from './index';

const defaultState = fromJS({
  detailsError: {
    name: false,
    email: false,
    confirmEmail: false,
    address: false,
    postcode: false,
    contactNumber: false,
  },
});

export default (state = defaultState, action) => {
  switch (action.type) {
  case constants.CHANGE_SHOW_ERROR:
    return state.setIn(['detailsError', `${action.name}`], true);
  default:
    return state;
  }
};
