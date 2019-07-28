import { fromJS } from 'immutable';

const defaultState = fromJS({
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
})

export default (state = defaultState) => {
  return state
}