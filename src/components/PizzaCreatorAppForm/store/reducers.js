import { constants } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
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
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_SELECTEDTOPPINGS:
      return state.set('selectedToppings', action.newList)
    case constants.CHANGE_PIZZASIZE:
      // return state.set('selectedPizzaSize', action.toppingName).set('selectedPizzaPrice', action.price)
      return state.merge({
        selectedPizzaSize: action.toppingName,
        selectedPizzaPrice: action.price
      })
    case constants.CHANGE_DETAILS:
      return state.setIn(['details', `${action.name}`], action.event.target.value)
    case constants.CHANGE_PLACE_ORDER_ERROR:
      return state.set('placeOrderError', action.placeOrderError)
    default:
      return state
  }
}



// export default (state = defaultState, action) => {
//   if (action.type === constants.CHANGE_SELECTEDTOPPINGS) {
//     // const newState = JSON.parse(JSON.stringify(state))
//     // newState.selectedToppings = action.newList
//     // return newState;
//     console.log(action.newList)
//     return state.set('selectedToppings', action.newList)
//   } else if (action.type === constants.CHANGE_PIZZASIZE) {
//     // const newState = JSON.parse(JSON.stringify(state))
//     // newState.selectedPizzaSize = action.toppingName
//     // newState.selectedPizzaPrice = action.price
//     // return newState;
//     return state.set('selectedPizzaSize', action.toppingName).set('selectedPizzaPrice', action.price)
//   } else if (action.type === constants.CHANGE_DETAILS) {
//     // const newState = JSON.parse(JSON.stringify(state))
//     // newState.details[action.name] = action.event.target.value
//     // return newState
//     // return state.set('details[action.name]', action.event.target.value)
//     return state.setIn(['details', `${action.name}`], action.event.target.value)
//   } else if (action.type === constants.CHANGE_PLACE_ORDER_ERROR) {
//     // const newState = JSON.parse(JSON.stringify(state))
//     // newState.placeOrderError = action.placeOrderError
//     // return newState
//     return state.set('placeOrderError', action.placeOrderError)
//   }
//   return state
// }
