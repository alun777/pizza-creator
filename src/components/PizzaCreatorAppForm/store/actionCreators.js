import { fromJS } from 'immutable';
import { constants } from './index';

export const setSelectedToppingAction = newList => ({
  type: constants.CHANGE_SELECTED_TOPPINGS,
  newList: fromJS(newList),
});

export const handleSelectedSizeAction = (sizeName, sizePrice) => ({
  type: constants.CHANGE_PIZZA_SIZE,
  sizeName,
  sizePrice,
});

export const handleInputChangeAction = (event, name) => ({
  type: constants.CHANGE_DETAILS,
  event,
  name,
});

const onClickPlaceOrderToggleAction = placeOrderError => ({
  type: constants.CHANGE_PLACE_ORDER_ERROR,
  placeOrderError,
});


export const onClickPlaceOrderAction = () => (dispatch) => {
  let action = onClickPlaceOrderToggleAction(true);
  dispatch(action);
  setTimeout(() => {
    action = onClickPlaceOrderToggleAction(false);
    dispatch(action);
  }, 3000);
};
