import { fromJS } from 'immutable';

const defaultState = fromJS({
  toppingsList: [{
    id: 0,
    name: 'Anchovy',
    srcImg: './api/toppings/anchovy.svg',
    price: 0.99,
  }, {
    id: 1,
    name: 'Bacon',
    srcImg: './api/toppings/bacon.svg',
    price: 0.99,
  }, {
    id: 2,
    name: 'Chili',
    srcImg: './api/toppings/chili.svg',
    price: 0.99,
  }, {
    id: 3,
    name: 'Basil',
    srcImg: './api/toppings/basil.svg',
    price: 0.99,
  }, {
    id: 4,
    name: 'Mozzarella',
    srcImg: './api/toppings/mozzarella.svg',
    price: 0.99,
  }, {
    id: 5,
    name: 'Mushroom',
    srcImg: './api/toppings/mushroom.svg',
    price: 0.99,
  }, {
    id: 6,
    name: 'Olive',
    srcImg: './api/toppings/olive.svg',
    price: 0.99,
  }, {
    id: 7,
    name: 'Onion',
    srcImg: './api/toppings/onion.svg',
    price: 0.99,
  }, {
    id: 8,
    name: 'Pepper',
    srcImg: './api/toppings/pepper.svg',
    price: 0.99,
  }, {
    id: 9,
    name: 'Pepperoni',
    srcImg: './api/toppings/pepperoni.svg',
    price: 0.99,
  }, {
    id: 10,
    name: 'Peppers',
    srcImg: './api/toppings/peppers.svg',
    price: 0.99,
  }, {
    id: 11,
    name: 'Sweetcorn',
    srcImg: './api/toppings/sweetcorn.svg',
    price: 0.99,
  }],
});

export default (state = defaultState) => state;
