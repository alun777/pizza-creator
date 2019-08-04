import { fromJS } from 'immutable';
import { constants } from './index';


const defaultState = fromJS({
  showScrollTop: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
  case constants.TOGGLE_SCROLL_TOP:
    return state.set('showScrollTop', action.showScrollTop);
  default:
    return state;
  }
};
