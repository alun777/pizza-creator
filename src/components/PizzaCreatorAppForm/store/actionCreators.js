import { constants } from './index';
import { fromJS } from 'immutable';

export const setSelectedToppingAction = (newList) => ({
  type: constants.CHANGE_SELECTED_TOPPINGS,
  newList: fromJS(newList)
});

export const handleSelectedSizeAction = (sizeName, sizePrice) => ({
  type: constants.CHANGE_PIZZA_SIZE,
  sizeName,
  sizePrice
});

export const handleInputChangeAction = (event, name) => ({
  type: constants.CHANGE_DETAILS,
  event,
  name
});

export const onClickPlaceOrderAction = () => {
  return (dispatch) => {
    const action = onClickPlaceOrderToggleAction(true)
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
