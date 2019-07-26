import {
  CHANGE_SELECTEDTOPPINGS,
  CHANGE_PIZZASIZE,
  CHANGE_DETAILS,
  CHANGE_SHOW_ERROR
} from './actionTypes';



export const setSelectedToppingAction = (newList) => ({
  type: CHANGE_SELECTEDTOPPINGS,
  newList
})

export const handleSelectedSizeAction = (toppingName, price) => ({
  type: CHANGE_PIZZASIZE,
  toppingName,
  price
})

export const handleInputChangeAction = (event, name) => ({
  type: CHANGE_DETAILS,
  event,
  name
})

export const handleShowErrorAction = (name) => ({
  type: CHANGE_SHOW_ERROR,
  name
})
