import {
  CHANGE_SELECTEDTOPPINGS,
  CHANGE_PIZZASIZE,
  CHANGE_DETAILS,
  CHANGE_SHOW_ERROR
} from './actionTypes';

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
  detailsError: {
    name: false,
    email: false,
    confirmEmail: false,
    address: false,
    postcode: false,
    contactNumber: false,
  },
  placeOrderError: false,
  showError: false,
  toppingsList: [{
    id: 0,
    name: 'Anchovy',
    srcImg: 'assets/toppings/anchovy.svg',
    price: 0.99
  }, {
    id: 1,
    name: 'Bacon',
    srcImg: 'assets/toppings/bacon.svg',
    price: 0.99
  }, {
    id: 2,
    name: 'Chili',
    srcImg: 'assets/toppings/chili.svg',
    price: 0.99
  }, {
    id: 3,
    name: 'Basil',
    srcImg: 'assets/toppings/basil.svg',
    price: 0.99
  }, {
    id: 4,
    name: 'Mozzarella',
    srcImg: 'assets/toppings/mozzarella.svg',
    price: 0.99
  }, {
    id: 5,
    name: 'Mushroom',
    srcImg: 'assets/toppings/mushroom.svg',
    price: 0.99
  }, {
    id: 6,
    name: 'Olive',
    srcImg: 'assets/toppings/olive.svg',
    price: 0.99
  }, {
    id: 7,
    name: 'Onion',
    srcImg: 'assets/toppings/onion.svg',
    price: 0.99
  }, {
    id: 8,
    name: 'Pepper',
    srcImg: 'assets/toppings/pepper.svg',
    price: 0.99
  }, {
    id: 9,
    name: 'Pepperoni',
    srcImg: 'assets/toppings/pepperoni.svg',
    price: 0.99
  }, {
    id: 10,
    name: 'Peppers',
    srcImg: 'assets/toppings/peppers.svg',
    price: 0.99
  }, {
    id: 11,
    name: 'Sweetcorn',
    srcImg: 'assets/toppings/sweetcorn.svg',
    price: 0.99
  }]
}

export default (state = defaultState, action) => {
  if (action.type === CHANGE_SELECTEDTOPPINGS) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.selectedToppings = action.newList
    return newState;
  } else if (action.type === CHANGE_PIZZASIZE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.selectedPizzaSize = action.toppingName
    newState.selectedPizzaPrice = action.price
    return newState
  } else if (action.type === CHANGE_DETAILS) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.details[action.name] = action.event.target.value
    return newState
  } else if (action.type === CHANGE_SHOW_ERROR) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.detailsError[action.name] = true
    return newState
  }
  return state
}








// export default (state = defaultState, action) => {
//   // switch(action.type) {
//   //   // case CHANGE_SELECTEDTOPPINGS:
//   //   //   const newState = JSON.parse(JSON.stringify(state))
//   //   //   newState.selectedToppings = action.newList
//   //   //   return newState
//   //   // case CHANGE_PIZZASIZE:
//   //   //   const newState = JSON.parse(JSON.stringify(state))
//   //   //   newState.selectedPizzaSize = action.toppingName
//   //   //   newState.selectedPizzaPrice = action.price
//   //   //   return newState
//   //   // case CHANGE_DETAILS:
//   //   //   const newState = JSON.parse(JSON.stringify(state))
//   //   //   newState = { ...newState, [action.name]: action.event.target.value }
//   //   //   return newState
//   //   // default:
//   //   //   return newState;
//   }
// }
