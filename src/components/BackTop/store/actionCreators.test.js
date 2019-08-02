import { actionCreators, constants } from './index';

it('should create an action to toggle the state of scroll top', () => {
  const showScrollTop = true;
  const expectedAction = {
    type: constants.TOGGLE_SCROLL_TOP,
    showScrollTop
  }
  expect(actionCreators.toggleScrollTop(showScrollTop)).toEqual(expectedAction)
})
