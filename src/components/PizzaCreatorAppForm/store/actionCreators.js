import { constants } from './index';

export const setSelectedToppingAction = (newList) => ({
  type: constants.CHANGE_SELECTEDTOPPINGS,
  newList
});

export const handleSelectedSizeAction = (toppingName, price) => ({
  type: constants.CHANGE_PIZZASIZE,
  toppingName,
  price
});

export const handleInputChangeAction = (event, name) => ({
  type: constants.CHANGE_DETAILS,
  event,
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
  type: constants.CHANGE_PLACE_ORDER_ERROR,
  placeOrderError
})
