import { reducer, constants } from './index';
import { fromJS } from 'immutable';

const defaultState = {
  showScrollTop: false
}

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(fromJS(defaultState))
})

it('should handle constants.TOGGLE_SCROLL_TOP', () => {
  expect(
    reducer(fromJS(defaultState), {
      type: constants.TOGGLE_SCROLL_TOP,
      showScrollTop: true
    })
  ).toEqual(fromJS({...defaultState, 'showScrollTop': true}))
})