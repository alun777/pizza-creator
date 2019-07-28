import { constants } from './index';

const defaultState = {
  detailsError: {
    name: false,
    email: false,
    confirmEmail: false,
    address: false,
    postcode: false,
    contactNumber: false,
  },
}


export default (state = defaultState, action) => {
  if (action.type === constants.CHANGE_SHOW_ERROR) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.detailsError[action.name] = true
    return newState
  }
  return state
}