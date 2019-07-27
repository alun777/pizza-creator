import {
  CHANGE_SELECTEDTOPPINGS,
  CHANGE_PIZZASIZE,
  CHANGE_DETAILS,
  CHANGE_SHOW_ERROR,
  CHANGE_PLACE_ORDER_ERROR
} from './actionTypes';



export const setSelectedToppingAction = (newList) => ({
  type: CHANGE_SELECTEDTOPPINGS,
  newList
});

export const handleSelectedSizeAction = (toppingName, price) => ({
  type: CHANGE_PIZZASIZE,
  toppingName,
  price
});

export const handleInputChangeAction = (event, name) => ({
  type: CHANGE_DETAILS,
  event,
  name
});

export const handleShowErrorAction = (name) => ({
  type: CHANGE_SHOW_ERROR,
  name
});

export const onClickPlaceOrderAction = () => {
  return (dispatch) => {
    const action = onClickPlaceOrderToggleAction(true)
    console.log(action)
    dispatch(action);
    setTimeout(() => {
      const action = onClickPlaceOrderToggleAction(false)
      dispatch(action);
    }, 3000)
  }
}

const onClickPlaceOrderToggleAction = (placeOrderError) => ({
  type: CHANGE_PLACE_ORDER_ERROR,
  placeOrderError
})

