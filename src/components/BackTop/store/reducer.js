import { constants } from './index';
import { fromJS } from 'immutable';


const defaultState = fromJS({
  showScrollTop: false
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScrollTop', action.showScrollTop)
    default:
      return state
  }
}