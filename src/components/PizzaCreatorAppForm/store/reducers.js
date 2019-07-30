import { constants } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  listPizzaSize: [{
    sizeName: 'Small',
    sizePrice: 9.99
  }, {
    sizeName: 'Medium',
    sizePrice: 10.99
  }, {
    sizeName: 'Large',
    sizePrice: 11.99
  }],
  selectedToppings: [],
  selectedPizza: {
    sizeName: '',
    sizePrice: ''
  },
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
    case constants.CHANGE_PIZZA_SIZE:
      return state.mergeDeep({
        selectedPizza: {
          sizeName: action.sizeName,
          sizePrice: action.sizePrice
        }
      })
    case constants.CHANGE_DETAILS:
      return state.setIn(['details', `${action.name}`], action.event.target.value)
    case constants.CHANGE_PLACE_ORDER_ERROR:
      return state.set('placeOrderError', action.placeOrderError)
    default:
      return state
  }
}
