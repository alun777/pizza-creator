import { constants } from './index';

const defaultState = {
  listPizzaSize: [{
    name: 'Small',
    price: 9.99
  }, {
    name: 'Medium',
    price: 10.99
  }, {
    name: 'Large',
    price: 11.99
  }],
  selectedToppings: [],
  selectedPizzaSize: '',
  selectedPizzaPrice: '',
  details: {
    name: '',
    email: '',
    confirmEmail: '',
    address: '',
    postcode: '',
    contactNumber: ''
  },
  placeOrderError: false,
}

export default (state = defaultState, action) => {
  if (action.type === constants.CHANGE_SELECTEDTOPPINGS) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.selectedToppings = action.newList
    return newState;
  } else if (action.type === constants.CHANGE_PIZZASIZE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.selectedPizzaSize = action.toppingName
    newState.selectedPizzaPrice = action.price
    return newState;
  } else if (action.type === constants.CHANGE_DETAILS) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.details[action.name] = action.event.target.value
    return newState
  } else if (action.type === constants.CHANGE_PLACE_ORDER_ERROR) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.placeOrderError = action.placeOrderError
    return newState
  }
  return state
}
